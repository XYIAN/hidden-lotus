/**
 * Simple Calendar Component for Classes Page
 * Shows a compact calendar view of Monday.com classes
 */

'use client'

import React, { useState, useMemo } from 'react'
import { useMondayClasses } from '@/hooks/useMondayClasses'
import { MondayClass } from '@/lib/monday-api'

interface SimpleCalendarProps {
  className?: string
  onClassClick?: (classItem: MondayClass) => void
}

export function SimpleCalendar({ className = '', onClassClick }: SimpleCalendarProps) {
  const { classes, loading, error } = useMondayClasses()
  const [currentDate, setCurrentDate] = useState(new Date())

  // Group classes by date
  const classesByDate = useMemo(() => {
    const grouped: { [key: string]: MondayClass[] } = {}
    
    classes.forEach(classItem => {
      const date = new Date(classItem.classDate).toDateString()
      if (!grouped[date]) {
        grouped[date] = []
      }
      grouped[date].push(classItem)
    })
    
    return grouped
  }, [classes])

  // Get calendar days for current month
  const calendarDays = useMemo(() => {
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()
    const firstDay = new Date(year, month, 1)
    const startDate = new Date(firstDay)
    startDate.setDate(startDate.getDate() - firstDay.getDay())
    
    const days = []
    const current = new Date(startDate)
    
    for (let i = 0; i < 35; i++) {
      days.push(new Date(current))
      current.setDate(current.getDate() + 1)
    }
    
    return days
  }, [currentDate])

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(prev => {
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
    return date.getMonth() === currentDate.getMonth()
  }

  const getClassesForDate = (date: Date) => {
    const dateString = date.toDateString()
    return classesByDate[dateString] || []
  }

  if (loading) {
    return (
      <div className={`flex items-center justify-center p-8 ${className}`}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-sage-green-600 mx-auto mb-2"></div>
          <p className="text-sage-green-600 text-sm">Loading calendar...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className={`p-4 text-center ${className}`}>
        <div className="text-red-600">
          <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
          <p className="text-sm">Unable to load calendar</p>
        </div>
      </div>
    )
  }

  return (
    <div className={`bg-white rounded-lg shadow-sm border border-gray-200 ${className}`}>
      {/* Calendar Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">
          {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
        </h3>
        <div className="flex space-x-1">
          <button
            onClick={() => navigateMonth('prev')}
            className="p-1 rounded hover:bg-gray-100 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => setCurrentDate(new Date())}
            className="px-2 py-1 text-xs bg-sage-green-600 text-white rounded hover:bg-sage-green-700 transition-colors"
          >
            Today
          </button>
          <button
            onClick={() => navigateMonth('next')}
            className="p-1 rounded hover:bg-gray-100 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="p-4">
        {/* Day Headers */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(day => (
            <div key={day} className="text-center text-xs font-medium text-gray-500 py-2">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Days */}
        <div className="grid grid-cols-7 gap-1">
          {calendarDays.map((date, index) => {
            const dayClasses = getClassesForDate(date)
            const isCurrentMonthDay = isCurrentMonth(date)
            const isTodayDate = isToday(date)

            return (
              <div
                key={index}
                className={`min-h-[60px] p-1 border border-gray-100 rounded ${
                  isCurrentMonthDay ? 'bg-white' : 'bg-gray-50'
                } ${isTodayDate ? 'bg-sage-green-50 border-sage-green-200' : ''}`}
              >
                <div className={`text-xs font-medium mb-1 ${
                  isCurrentMonthDay ? 'text-gray-900' : 'text-gray-400'
                } ${isTodayDate ? 'text-sage-green-600' : ''}`}>
                  {date.getDate()}
                </div>
                
                <div className="space-y-1">
                  {dayClasses.slice(0, 2).map((classItem) => (
                    <div
                      key={classItem.id}
                      onClick={() => onClassClick?.(classItem)}
                      className="text-xs p-1 bg-sage-green-100 text-sage-green-800 rounded cursor-pointer hover:bg-sage-green-200 transition-colors truncate"
                      title={`${classItem.name} - ${classItem.time}`}
                    >
                      <div className="font-medium truncate">{classItem.name}</div>
                      <div className="text-sage-green-600 truncate">{classItem.time}</div>
                    </div>
                  ))}
                  {dayClasses.length > 2 && (
                    <div className="text-xs text-gray-500">
                      +{dayClasses.length - 2}
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
