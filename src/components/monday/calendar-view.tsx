/**
 * Monday.com Calendar View Component
 * Displays classes from Monday.com in a calendar format
 */

'use client'

import React, { useState, useMemo } from 'react'
import { useMondayClasses, useMondayClassFilters } from '@/hooks/useMondayClasses'
import { MondayClass } from '@/lib/monday-api'

interface CalendarViewProps {
  className?: string
  onClassClick?: (classItem: MondayClass) => void
  showFilters?: boolean
}

export function CalendarView({ className = '', onClassClick, showFilters = true }: CalendarViewProps) {
  const { classes, loading, error } = useMondayClasses()
  const { filters, filteredClasses, clearFilters, updateFilter } = useMondayClassFilters(classes)
  const [selectedDate, setSelectedDate] = useState<Date>(new Date())

  // Group classes by date
  const classesByDate = useMemo(() => {
    const grouped: { [key: string]: MondayClass[] } = {}
    
    filteredClasses.forEach(classItem => {
      const date = new Date(classItem.classDate).toDateString()
      if (!grouped[date]) {
        grouped[date] = []
      }
      grouped[date].push(classItem)
    })
    
    return grouped
  }, [filteredClasses])

  // Get calendar days for current month
  const calendarDays = useMemo(() => {
    const year = selectedDate.getFullYear()
    const month = selectedDate.getMonth()
    const firstDay = new Date(year, month, 1)
    const startDate = new Date(firstDay)
    startDate.setDate(startDate.getDate() - firstDay.getDay())
    
    const days = []
    const current = new Date(startDate)
    
    for (let i = 0; i < 42; i++) {
      days.push(new Date(current))
      current.setDate(current.getDate() + 1)
    }
    
    return days
  }, [selectedDate])

  const navigateMonth = (direction: 'prev' | 'next') => {
    setSelectedDate(prev => {
      const newDate = new Date(prev)
      if (direction === 'prev') {
        newDate.setMonth(newDate.getMonth() - 1)
      } else {
        newDate.setMonth(newDate.getMonth() + 1)
      }
      return newDate
    })
  }

  const isToday = (date: Date) => {
    const today = new Date()
    return date.toDateString() === today.toDateString()
  }

  const isCurrentMonth = (date: Date) => {
    return date.getMonth() === selectedDate.getMonth()
  }

  const getClassesForDate = (date: Date) => {
    const dateString = date.toDateString()
    return classesByDate[dateString] || []
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

  if (error) {
    return (
      <div className={`p-8 text-center ${className}`}>
        <div className="text-red-600 mb-4">
          <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
          <p className="text-lg font-medium">Error loading classes</p>
          <p className="text-sm text-gray-600">{error}</p>
        </div>
      </div>
    )
  }

  return (
    <div className={`${className}`}>
      {/* Filters */}
      {showFilters && (
        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Search
              </label>
              <input
                type="text"
                value={filters.searchTerm}
                onChange={(e) => updateFilter('searchTerm', e.target.value)}
                placeholder="Search classes..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sage-green-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <select
                value={filters.category}
                onChange={(e) => updateFilter('category', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sage-green-500"
              >
                <option value="">All Categories</option>
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
                Instructor
              </label>
              <select
                value={filters.instructor}
                onChange={(e) => updateFilter('instructor', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sage-green-500"
              >
                <option value="">All Instructors</option>
                {Array.from(new Set(classes.map(c => c.instructor))).map(instructor => (
                  <option key={instructor} value={instructor}>{instructor}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Level
              </label>
              <select
                value={filters.level}
                onChange={(e) => updateFilter('level', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sage-green-500"
              >
                <option value="">All Levels</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>
            
            <div className="flex items-end">
              <button
                onClick={clearFilters}
                className="w-full px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Calendar Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          {selectedDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
        </h2>
        <div className="flex space-x-2">
          <button
            onClick={() => navigateMonth('prev')}
            className="p-2 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => setSelectedDate(new Date())}
            className="px-4 py-2 rounded-md bg-sage-green-600 text-white hover:bg-sage-green-700 transition-colors"
          >
            Today
          </button>
          <button
            onClick={() => navigateMonth('next')}
            className="p-2 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        {/* Day Headers */}
        <div className="grid grid-cols-7 bg-gray-50">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} className="p-3 text-center text-sm font-medium text-gray-700">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Days */}
        <div className="grid grid-cols-7">
          {calendarDays.map((date, index) => {
            const dayClasses = getClassesForDate(date)
            const isCurrentMonthDay = isCurrentMonth(date)
            const isTodayDate = isToday(date)

            return (
              <div
                key={index}
                className={`min-h-[120px] p-2 border-r border-b border-gray-200 ${
                  isCurrentMonthDay ? 'bg-white' : 'bg-gray-50'
                } ${isTodayDate ? 'bg-sage-green-50' : ''}`}
              >
                <div className={`text-sm font-medium mb-1 ${
                  isCurrentMonthDay ? 'text-gray-900' : 'text-gray-400'
                } ${isTodayDate ? 'text-sage-green-600' : ''}`}>
                  {date.getDate()}
                </div>
                
                <div className="space-y-1">
                  {dayClasses.slice(0, 3).map((classItem) => (
                    <div
                      key={classItem.id}
                      onClick={() => onClassClick?.(classItem)}
                      className="text-xs p-1 bg-sage-green-100 text-sage-green-800 rounded cursor-pointer hover:bg-sage-green-200 transition-colors"
                    >
                      <div className="font-medium truncate">{classItem.name}</div>
                      <div className="text-sage-green-600">{classItem.time}</div>
                    </div>
                  ))}
                  {dayClasses.length > 3 && (
                    <div className="text-xs text-gray-500">
                      +{dayClasses.length - 3} more
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
