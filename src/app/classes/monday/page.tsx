/**
 * Monday.com Classes Integration Page
 * Shows classes from Monday.com with calendar and management features
 */

'use client'

import React, { useState } from 'react'
import { HeroSection } from '@/components/common/hero-section'
import { CalendarView } from '@/components/monday/calendar-view'
import { ClassManager } from '@/components/monday/class-manager'
import { MondayClass } from '@/lib/monday-api'

export default function MondayClassesPage() {
  const [activeTab, setActiveTab] = useState<'calendar' | 'manage'>('calendar')
  const [selectedClass, setSelectedClass] = useState<MondayClass | null>(null)

  const handleClassClick = (classItem: MondayClass) => {
    setSelectedClass(classItem)
    // You could open a modal or navigate to a detail page here
    console.log('Selected class:', classItem)
  }

  const handleClassSaved = (classItem: MondayClass) => {
    console.log('Class saved:', classItem)
    // You could show a success message or refresh data here
  }

  const handleClassDeleted = (classId: string) => {
    console.log('Class deleted:', classId)
    // You could show a success message or refresh data here
  }

  return (
    <div className="flex flex-column gap-6 p-4 page-transition">
      <HeroSection
        title="Monday.com Classes"
        description="Manage and view your classes integrated with Monday.com CRM. Schedule, track, and organize your wellness classes all in one place."
      />

      <div className="max-w-7xl mx-auto w-full">
        {/* Tab Navigation */}
        <div className="mb-6">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab('calendar')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'calendar'
                    ? 'border-sage-green-500 text-sage-green-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Calendar View
              </button>
              <button
                onClick={() => setActiveTab('manage')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'manage'
                    ? 'border-sage-green-500 text-sage-green-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Manage Classes
              </button>
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'calendar' && (
          <div>
            <CalendarView
              onClassClick={handleClassClick}
              showFilters={true}
              className="mb-6"
            />
            
            {/* Class Details Modal */}
            {selectedClass && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {selectedClass.name}
                    </h3>
                    <button
                      onClick={() => setSelectedClass(null)}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="font-medium text-gray-700">Instructor:</span>
                        <p className="text-gray-900">{selectedClass.instructor}</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Date:</span>
                        <p className="text-gray-900">
                          {new Date(selectedClass.classDate).toLocaleDateString('en-US', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Time:</span>
                        <p className="text-gray-900">{selectedClass.time}</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Duration:</span>
                        <p className="text-gray-900">{selectedClass.duration}</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Price:</span>
                        <p className="text-gray-900">{selectedClass.price}</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Category:</span>
                        <p className="text-gray-900">{selectedClass.category}</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Level:</span>
                        <p className="text-gray-900">{selectedClass.level}</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Max Participants:</span>
                        <p className="text-gray-900">{selectedClass.maxParticipants}</p>
                      </div>
                    </div>
                    
                    {selectedClass.equipment && (
                      <div>
                        <span className="font-medium text-gray-700">Equipment:</span>
                        <p className="text-gray-900">{selectedClass.equipment}</p>
                      </div>
                    )}
                    
                    <div>
                      <span className="font-medium text-gray-700">Description:</span>
                      <p className="text-gray-900 mt-1">{selectedClass.description}</p>
                    </div>
                    
                    <div>
                      <span className="font-medium text-gray-700">Status:</span>
                      <span className={`ml-2 px-3 py-1 rounded-full text-sm ${
                        selectedClass.status === 'Scheduled' ? 'bg-green-100 text-green-800' :
                        selectedClass.status === 'Completed' ? 'bg-blue-100 text-blue-800' :
                        selectedClass.status === 'Cancelled' ? 'bg-red-100 text-red-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {selectedClass.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex justify-end mt-6">
                    <button
                      onClick={() => setSelectedClass(null)}
                      className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'manage' && (
          <ClassManager
            onClassSaved={handleClassSaved}
            onClassDeleted={handleClassDeleted}
          />
        )}
      </div>
    </div>
  )
}
