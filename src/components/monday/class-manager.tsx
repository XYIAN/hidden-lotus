/**
 * Monday.com Class Manager Component
 * Handles creating, editing, and deleting classes
 */

'use client'

import React, { useState } from 'react'
import { useMondayClasses } from '@/hooks/useMondayClasses'
import { MondayClass } from '@/lib/monday-api'

interface ClassManagerProps {
  className?: string
  onClassSaved?: (classItem: MondayClass) => void
  onClassDeleted?: (classId: string) => void
}

interface ClassFormData {
  name: string
  instructor: string
  classDate: string
  time: string
  duration: string
  price: string
  category: string
  level: string
  maxParticipants: number
  equipment: string
  description: string
  status: string
}

export function ClassManager({ className = '', onClassSaved, onClassDeleted }: ClassManagerProps) {
  const { classes, loading, error, createClass, updateClass, deleteClass } = useMondayClasses()
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [editingClass, setEditingClass] = useState<MondayClass | null>(null)
  const [formData, setFormData] = useState<ClassFormData>({
    name: '',
    instructor: '',
    classDate: '',
    time: '',
    duration: '',
    price: '',
    category: '',
    level: '',
    maxParticipants: 20,
    equipment: '',
    description: '',
    status: 'Scheduled',
  })

  const resetForm = () => {
    setFormData({
      name: '',
      instructor: '',
      classDate: '',
      time: '',
      duration: '',
      price: '',
      category: '',
      level: '',
      maxParticipants: 20,
      equipment: '',
      description: '',
      status: 'Scheduled',
    })
    setEditingClass(null)
    setIsFormOpen(false)
  }

  const handleEdit = (classItem: MondayClass) => {
    setFormData({
      name: classItem.name,
      instructor: classItem.instructor,
      classDate: classItem.classDate,
      time: classItem.time,
      duration: classItem.duration,
      price: classItem.price,
      category: classItem.category,
      level: classItem.level,
      maxParticipants: classItem.maxParticipants,
      equipment: classItem.equipment,
      description: classItem.description,
      status: classItem.status,
    })
    setEditingClass(classItem)
    setIsFormOpen(true)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      let savedClass: MondayClass | null = null
      
      if (editingClass) {
        savedClass = await updateClass(editingClass.id, formData)
      } else {
        savedClass = await createClass(formData)
      }
      
      if (savedClass) {
        onClassSaved?.(savedClass)
        resetForm()
      }
    } catch (error) {
      console.error('Error saving class:', error)
    }
  }

  const handleDelete = async (classId: string) => {
    if (window.confirm('Are you sure you want to delete this class?')) {
      const success = await deleteClass(classId)
      if (success) {
        onClassDeleted?.(classId)
      }
    }
  }

  const handleInputChange = (field: keyof ClassFormData, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  if (loading) {
    return (
      <div className={`flex items-center justify-center p-8 ${className}`}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-sage-green-600 mx-auto mb-4"></div>
          <p className="text-sage-green-600">Loading classes...</p>
        </div>
      </div>
    )
  }

  return (
    <div className={`${className}`}>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Class Management</h2>
        <button
          onClick={() => setIsFormOpen(true)}
          className="px-4 py-2 bg-sage-green-600 text-white rounded-md hover:bg-sage-green-700 transition-colors"
        >
          Add New Class
        </button>
      </div>

      {/* Error Display */}
      {error && (
        <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-md">
          <p className="text-red-600">{error}</p>
        </div>
      )}

      {/* Class Form Modal */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg font-semibold mb-4">
              {editingClass ? 'Edit Class' : 'Add New Class'}
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Class Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sage-green-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Instructor *
                  </label>
                  <input
                    type="text"
                    value={formData.instructor}
                    onChange={(e) => handleInputChange('instructor', e.target.value)}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sage-green-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Class Date *
                  </label>
                  <input
                    type="date"
                    value={formData.classDate}
                    onChange={(e) => handleInputChange('classDate', e.target.value)}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sage-green-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Time *
                  </label>
                  <input
                    type="text"
                    value={formData.time}
                    onChange={(e) => handleInputChange('time', e.target.value)}
                    placeholder="e.g., 07:00 AM"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sage-green-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Duration *
                  </label>
                  <input
                    type="text"
                    value={formData.duration}
                    onChange={(e) => handleInputChange('duration', e.target.value)}
                    placeholder="e.g., 75 minutes"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sage-green-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Price *
                  </label>
                  <input
                    type="text"
                    value={formData.price}
                    onChange={(e) => handleInputChange('price', e.target.value)}
                    placeholder="e.g., Donation Based"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sage-green-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Category *
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => handleInputChange('category', e.target.value)}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sage-green-500"
                  >
                    <option value="">Select Category</option>
                    <option value="Yoga">Yoga</option>
                    <option value="Sound Healing">Sound Healing</option>
                    <option value="Meditation">Meditation</option>
                    <option value="Healing">Healing</option>
                    <option value="Seminar">Seminar</option>
                    <option value="Podcast">Podcast</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Level *
                  </label>
                  <select
                    value={formData.level}
                    onChange={(e) => handleInputChange('level', e.target.value)}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sage-green-500"
                  >
                    <option value="">Select Level</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Max Participants *
                  </label>
                  <input
                    type="number"
                    value={formData.maxParticipants}
                    onChange={(e) => handleInputChange('maxParticipants', parseInt(e.target.value))}
                    min="1"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sage-green-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Equipment
                  </label>
                  <input
                    type="text"
                    value={formData.equipment}
                    onChange={(e) => handleInputChange('equipment', e.target.value)}
                    placeholder="e.g., Yoga mat, Blocks, Strap"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sage-green-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Status *
                  </label>
                  <select
                    value={formData.status}
                    onChange={(e) => handleInputChange('status', e.target.value)}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sage-green-500"
                  >
                    <option value="Scheduled">Scheduled</option>
                    <option value="Completed">Completed</option>
                    <option value="Cancelled">Cancelled</option>
                    <option value="Full">Full</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description *
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  required
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sage-green-500"
                />
              </div>

              <div className="flex justify-end space-x-3 pt-4">
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-sage-green-600 text-white rounded-md hover:bg-sage-green-700 transition-colors"
                >
                  {editingClass ? 'Update Class' : 'Create Class'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Classes List */}
      <div className="space-y-4">
        {classes.map((classItem) => (
          <div key={classItem.id} className="bg-white border border-gray-200 rounded-lg p-4">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900">{classItem.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{classItem.instructor}</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm text-gray-600">
                  <div>
                    <span className="font-medium">Date:</span> {new Date(classItem.classDate).toLocaleDateString()}
                  </div>
                  <div>
                    <span className="font-medium">Time:</span> {classItem.time}
                  </div>
                  <div>
                    <span className="font-medium">Duration:</span> {classItem.duration}
                  </div>
                  <div>
                    <span className="font-medium">Price:</span> {classItem.price}
                  </div>
                  <div>
                    <span className="font-medium">Category:</span> {classItem.category}
                  </div>
                  <div>
                    <span className="font-medium">Level:</span> {classItem.level}
                  </div>
                  <div>
                    <span className="font-medium">Max Participants:</span> {classItem.maxParticipants}
                  </div>
                  <div>
                    <span className="font-medium">Status:</span> 
                    <span className={`ml-1 px-2 py-1 rounded-full text-xs ${
                      classItem.status === 'Scheduled' ? 'bg-green-100 text-green-800' :
                      classItem.status === 'Completed' ? 'bg-blue-100 text-blue-800' :
                      classItem.status === 'Cancelled' ? 'bg-red-100 text-red-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {classItem.status}
                    </span>
                  </div>
                </div>
                {classItem.equipment && (
                  <div className="mt-2 text-sm text-gray-600">
                    <span className="font-medium">Equipment:</span> {classItem.equipment}
                  </div>
                )}
                <div className="mt-2 text-sm text-gray-600">
                  <span className="font-medium">Description:</span> {classItem.description}
                </div>
              </div>
              <div className="flex space-x-2 ml-4">
                <button
                  onClick={() => handleEdit(classItem)}
                  className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition-colors"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(classItem.id)}
                  className="px-3 py-1 text-sm bg-red-100 text-red-700 rounded hover:bg-red-200 transition-colors"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {classes.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500">No classes found. Create your first class to get started!</p>
        </div>
      )}
    </div>
  )
}
