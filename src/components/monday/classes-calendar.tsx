/**
 * Beautiful Classes Calendar Component for Main Site
 * Displays Monday.com classes using PrimeReact Calendar component
 */

'use client'

import React, { useState, useMemo } from 'react'
import { Calendar } from 'primereact/calendar'
import { Card } from 'primereact/card'
import { Tag } from 'primereact/tag'
import { Dialog } from 'primereact/dialog'
import { Button } from 'primereact/button'
import { DataScroller } from 'primereact/datascroller'
import { Skeleton } from 'primereact/skeleton'
import { useMondayClasses } from '@/hooks/useMondayClasses'
import { MondayClass } from '@/lib/monday-api'
import '@/styles/calendar.css'

interface ClassesCalendarProps {
	className?: string
	onClassClick?: (classItem: MondayClass) => void
}

export function ClassesCalendar({
	className = '',
	onClassClick,
}: ClassesCalendarProps) {
	const { classes, loading, error } = useMondayClasses()
	const [selectedDate, setSelectedDate] = useState<Date | null>(new Date())
	const [selectedClass, setSelectedClass] = useState<MondayClass | null>(null)
	const [showClassModal, setShowClassModal] = useState(false)

	// Group classes by date using actual class dates
	const classesByDate = useMemo(() => {
		const grouped: { [key: string]: MondayClass[] } = {}

		classes.forEach((classItem) => {
			// Use actual class date if available, otherwise skip
			if (classItem.classDate) {
				const dateKey = classItem.classDate
				if (!grouped[dateKey]) {
					grouped[dateKey] = []
				}
				grouped[dateKey].push(classItem)
			}
		})
		return grouped
	}, [classes])

	// Get classes for selected date
	const selectedDateClasses = useMemo(() => {
		if (!selectedDate) return []
		const dateKey = selectedDate.toISOString().split('T')[0]
		return classesByDate[dateKey] || []
	}, [selectedDate, classesByDate])

	// Custom date template to show class indicators
	const dateTemplate = (event: {
		day: number
		month: number
		year: number
		otherMonth: boolean
		today: boolean
	}) => {
		const date = new Date(event.year, event.month, event.day)
		const dateKey = date.toISOString().split('T')[0]
		const dayClasses = classesByDate[dateKey] || []
		const isToday = event.today
		const isSelected =
			selectedDate && date.toDateString() === selectedDate.toDateString()

		return (
			<div
				className={`relative w-full h-full flex flex-col items-center justify-center p-1 cursor-pointer transition-all duration-300 ease-in-out hover:bg-sage-green-50 hover:scale-105 ${
					isToday ? 'bg-sage-green-100 ring-2 ring-sage-green-300' : ''
				} ${isSelected ? 'bg-sage-green-200 ring-2 ring-sage-green-500' : ''} ${
					event.otherMonth ? 'opacity-40' : ''
				} ${
					dayClasses.length === 0 ? 'min-h-[70px]' : 'min-h-[90px]'
				} rounded-lg`}
			>
				<span
					className={`text-sm font-medium ${
						isToday ? 'text-sage-green-800 font-bold' : 'text-gray-800'
					} ${isSelected ? 'text-sage-green-900' : ''}`}
				>
					{event.day}
				</span>
				{dayClasses.length > 0 && (
					<div className="flex flex-wrap gap-1 mt-1 justify-center max-w-full">
						{dayClasses.slice(0, 2).map((classItem, index) => (
							<div
								key={index}
								className={`w-2 h-2 rounded-full ${getCategoryColor(
									classItem.category
								)} shadow-sm`}
								title={`${classItem.name} - ${classItem.time}`}
							/>
						))}
						{dayClasses.length > 2 && (
							<div
								className="w-2 h-2 rounded-full bg-sage-green-400 shadow-sm"
								title={`+${dayClasses.length - 2} more classes`}
							/>
						)}
					</div>
				)}
			</div>
		)
	}

	const getCategoryColor = (category: string) => {
		const colors: { [key: string]: string } = {
			Yoga: 'bg-blue-500',
			'Sound Healing': 'bg-purple-500',
			Meditation: 'bg-green-500',
			Healing: 'bg-pink-500',
			Seminar: 'bg-orange-500',
			Podcast: 'bg-indigo-500',
		}
		return colors[category] || 'bg-gray-400'
	}

	const handleClassClick = (classItem: MondayClass) => {
		setSelectedClass(classItem)
		setShowClassModal(true)
		onClassClick?.(classItem)
	}

	// Skeleton template for loading state
	const skeletonTemplate = () => {
		return (
			<div className="bg-white border border-sage-green-200 rounded-lg p-4 mb-3">
				<div className="text-center">
					<div className="flex items-center justify-center gap-3 mb-3">
						<Skeleton width="12px" height="12px" borderRadius="50%" />
						<Skeleton width="60%" height="20px" />
					</div>

					<div className="space-y-2 mb-3">
						<div className="flex items-center justify-center gap-2">
							<Skeleton width="16px" height="16px" />
							<Skeleton width="40%" height="16px" />
						</div>
						<div className="flex items-center justify-center gap-2">
							<Skeleton width="16px" height="16px" />
							<Skeleton width="50%" height="16px" />
						</div>
						<div className="flex items-center justify-center gap-2">
							<Skeleton width="16px" height="16px" />
							<Skeleton width="30%" height="16px" />
						</div>
					</div>

					<div className="flex flex-wrap gap-2 justify-center">
						<Skeleton width="60px" height="24px" borderRadius="12px" />
						<Skeleton width="50px" height="24px" borderRadius="12px" />
					</div>
				</div>
			</div>
		)
	}

	// Template for DataScroller items
	const classItemTemplate = (classItem: MondayClass) => {
		return (
			<div
				className="bg-white border border-sage-green-200 rounded-lg p-4 cursor-pointer hover:shadow-lg hover:border-sage-green-300 hover:-translate-y-1 transition-all duration-300 group mb-3 shadow-sm"
				onClick={() => handleClassClick(classItem)}
			>
				<div className="text-center">
					<div className="flex items-center justify-center gap-3 mb-3">
						<div
							className={`w-3 h-3 rounded-full ${getCategoryColor(
								classItem.category
							)}`}
						></div>
						<h4 className="font-semibold text-sage-green-800 text-base group-hover:text-sage-green-900">
							{classItem.name}
						</h4>
					</div>

					<div className="space-y-1 mb-3">
						<div className="flex items-center justify-center gap-2">
							<i className="pi pi-user text-sage-green-600 text-xs"></i>
							<span className="text-sage-green-700 text-sm">
								{classItem.instructor}
							</span>
						</div>
						<div className="flex items-center justify-center gap-2">
							<i className="pi pi-clock text-sage-green-600 text-xs"></i>
							<span className="text-sage-green-700 text-sm">
								{classItem.time} • {classItem.duration}
							</span>
						</div>
						<div className="flex items-center justify-center gap-2">
							<i className="pi pi-dollar text-sage-green-600 text-xs"></i>
							<span className="text-sage-green-700 text-sm font-medium">
								{classItem.price}
							</span>
						</div>
					</div>

					<div className="flex flex-wrap gap-1 justify-center">
						<span
							className={`px-2 py-1 text-xs font-medium text-white rounded-full ${getCategoryColor(
								classItem.category
							)}`}
						>
							{classItem.category}
						</span>
						<span className="px-2 py-1 text-xs font-medium text-white bg-gray-500 rounded-full">
							{classItem.level}
						</span>
					</div>
				</div>
			</div>
		)
	}

	if (loading) {
		return (
			<div
				className={`bg-gradient-to-br from-sage-green-50 to-sage-green-100 rounded-xl shadow-lg border border-sage-green-200 overflow-hidden ${className}`}
				style={{ padding: '0 !important', margin: '0 !important' }}
			>
				{/* Calendar Header - Minimal */}
				<div
					className="bg-gradient-to-r from-sage-green-600 to-sage-green-700 px-2 py-1"
					style={{ padding: '4px 8px !important' }}
				>
					<div className="flex items-center justify-center">
						<h2 className="text-sm font-bold text-white">Class Schedule</h2>
					</div>
				</div>

				<div className="p-4" style={{ padding: '16px !important' }}>
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
						{/* Calendar Skeleton */}
						<div className="lg:col-span-2">
							<div className="calendar-container mx-auto bg-white rounded-lg shadow-md p-2">
								<Skeleton width="100%" height="300px" borderRadius="8px" />
							</div>
						</div>

						{/* Classes Loading Skeleton */}
						<div className="lg:col-span-1">
							<Card className="h-full bg-white shadow-lg border-sage-green-200">
								<div className="p-4">
									<div className="text-center mb-4">
										<Skeleton width="80%" height="24px" className="mx-auto" />
									</div>
									<DataScroller
										value={Array(3).fill({})}
										itemTemplate={skeletonTemplate}
										rows={3}
										inline
										scrollHeight="400px"
										className="border-0 bg-sage-green-50/30 rounded-lg"
									/>
								</div>
							</Card>
						</div>
					</div>
				</div>
			</div>
		)
	}

	if (error) {
		return (
			<div className={`p-8 text-center ${className}`}>
				<div className="text-red-600 mb-4">
					<svg
						className="w-12 h-12 mx-auto mb-4 max-w-full"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
						/>
					</svg>
					<p className="text-lg font-medium">Unable to load class schedule</p>
					<p className="text-gray-600 mt-2 text-sm">Please try again later</p>
					<p className="text-gray-500 mt-1 text-xs">Error: {error}</p>
				</div>
			</div>
		)
	}

	return (
		<div
			className={`bg-gradient-to-br from-sage-green-50 to-sage-green-100 rounded-xl shadow-lg border border-sage-green-200 overflow-hidden ${className}`}
			style={{ padding: '0 !important', margin: '0 !important' }}
		>
			{/* Calendar Header - Minimal */}
			<div
				className="bg-gradient-to-r from-sage-green-600 to-sage-green-700 px-2 py-1"
				style={{ padding: '4px 8px !important' }}
			>
				<div className="flex items-center justify-center">
					<h2 className="text-sm font-bold text-white">Class Schedule</h2>
				</div>
			</div>

			<div className="p-4" style={{ padding: '16px !important' }}>
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
					{/* Calendar */}
					<div className="lg:col-span-2">
						<div className="calendar-container mx-auto bg-white rounded-lg shadow-md p-2">
							<Calendar
								value={selectedDate}
								onChange={(e) => setSelectedDate(e.value as Date)}
								dateTemplate={dateTemplate}
								showWeek
								inline
								className="w-full custom-calendar"
								style={{
									width: '100%',
									fontSize: '16px',
								}}
								showButtonBar
								showIcon={false}
								readOnlyInput
							/>
						</div>
					</div>

					{/* Selected Date Classes */}
					<div className="lg:col-span-1">
						<Card className="h-full bg-white shadow-lg border-sage-green-200">
							<div className="p-4">
								<h3 className="text-lg font-semibold text-sage-green-800 mb-4 text-center">
									{selectedDate
										? selectedDate.toLocaleDateString('en-US', {
												weekday: 'long',
												year: 'numeric',
												month: 'long',
												day: 'numeric',
										  })
										: 'Select a date'}
								</h3>

								{selectedDateClasses.length > 0 ? (
									<div className="text-center">
										<DataScroller
											value={selectedDateClasses}
											itemTemplate={classItemTemplate}
											rows={10}
											inline
											scrollHeight="400px"
											className="border-0 bg-sage-green-50/30 rounded-lg"
										/>
									</div>
								) : selectedDate ? (
									<div className="text-center py-12">
										<div className="text-6xl mb-4 opacity-50">📅</div>
										<p className="text-gray-500 text-sm font-medium mb-2">
											No classes scheduled for this date
										</p>
										<p className="text-gray-400 text-xs">
											Try selecting a different date
										</p>
									</div>
								) : null}
							</div>
						</Card>
					</div>
				</div>
			</div>

			{/* Class Details Modal */}
			<Dialog
				visible={showClassModal}
				onHide={() => setShowClassModal(false)}
				header={selectedClass?.name || 'Class Details'}
				style={{ width: '90vw', maxWidth: '500px' }}
				className="class-details-modal"
				modal
				draggable={false}
				resizable={false}
				closable={true}
				dismissableMask={true}
				blockScroll={true}
				pt={{
					header: {
						className:
							'bg-gradient-to-r from-sage-green-600 to-sage-green-700 text-white p-3 text-center',
					},
					content: { className: 'p-4 bg-white' },
					footer: { className: 'p-3 bg-white' },
					mask: { className: 'backdrop-blur-sm' },
				}}
			>
				{selectedClass && (
					<div className="space-y-4 text-center">
						{/* Class Description */}
						<div>
							<p className="text-sage-green-700 text-sm leading-relaxed">
								{selectedClass.description}
							</p>
						</div>

						{/* Class Information - Compact */}
						<div className="space-y-3">
							<div className="flex items-center justify-center gap-2">
								<i className="pi pi-user text-sage-green-600 text-sm"></i>
								<span className="text-sage-green-700 font-medium text-sm">
									{selectedClass.instructor}
								</span>
							</div>

							<div className="flex items-center justify-center gap-2">
								<i className="pi pi-clock text-sage-green-600 text-sm"></i>
								<span className="text-sage-green-700 text-sm">
									{selectedClass.time} • {selectedClass.duration}
								</span>
							</div>

							<div className="flex items-center justify-center gap-2">
								<i className="pi pi-dollar text-sage-green-600 text-sm"></i>
								<span className="text-sage-green-700 text-sm font-medium">
									{selectedClass.price}
								</span>
							</div>
						</div>

						{/* Categories and Level - Compact */}
						<div className="flex flex-wrap gap-2 justify-center">
							<Tag
								value={selectedClass.category}
								className={`px-2 py-1 text-xs font-medium ${getCategoryColor(
									selectedClass.category
								)} text-white border-0 rounded-full`}
							/>
							<Tag
								value={selectedClass.level}
								className="px-2 py-1 text-xs font-medium bg-gray-500 text-white border-0 rounded-full"
							/>
						</div>

						{/* Equipment - Only if exists */}
						{selectedClass.equipment && (
							<div className="bg-sage-green-50 p-3 rounded-lg">
								<div className="flex items-center justify-center gap-2 mb-1">
									<i className="pi pi-box text-sage-green-600 text-sm"></i>
									<span className="text-sage-green-800 font-medium text-sm">
										Equipment Needed
									</span>
								</div>
								<p className="text-sage-green-700 text-sm">
									{selectedClass.equipment}
								</p>
							</div>
						)}

						{/* Max Participants */}
						<div className="bg-sage-green-50 p-3 rounded-lg">
							<div className="flex items-center justify-center gap-2 mb-1">
								<i className="pi pi-users text-sage-green-600 text-sm"></i>
								<span className="text-sage-green-800 font-medium text-sm">
									Max Participants
								</span>
							</div>
							<p className="text-sage-green-700 font-semibold text-lg">
								{selectedClass.maxParticipants}
							</p>
						</div>

						{/* Action Buttons - Compact */}
						<div className="flex gap-2 justify-center pt-2">
							<Button
								label="Close"
								icon="pi pi-times"
								onClick={() => setShowClassModal(false)}
								className="p-button-outlined p-button-sm"
								size="small"
							/>
							<Button
								label="Learn More"
								icon="pi pi-info-circle"
								className="bg-sage-green-600 border-sage-green-600 hover:bg-sage-green-700 p-button-sm"
								size="small"
								onClick={() => {
									alert(
										`This is a Monday.com class: ${selectedClass.name}\n\nMonday classes are managed through our scheduling system. For more information about this class type, please visit our main classes page.`
									)
								}}
							/>
						</div>
					</div>
				)}
			</Dialog>
		</div>
	)
}
