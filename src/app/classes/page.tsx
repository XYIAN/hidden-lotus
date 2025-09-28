'use client'

import { useMemo } from 'react'
import { ResultsCount } from '@/components/common'
import { ClassCard } from '@/components/common/cards/class-card'
import { classesData } from '@/constants/classes'
import { Class, ClassCategory } from '@/types'
import { FilterPanel } from '@/components/common/filter-panel'
import { FormField } from '@/components/common/form-field'
import { useForm } from 'react-hook-form'

interface FilterForm {
	searchTerm: string
	selectedCategory: string
	selectedLevel: string
	selectedInstructor: string
}

export default function ClassesPage() {
	const { control, watch, reset } = useForm<FilterForm>({
		defaultValues: {
			searchTerm: '',
			selectedCategory: '',
			selectedLevel: '',
			selectedInstructor: '',
		},
	})

	const filters = watch()

	const filteredClasses = useMemo(() => {
		return classesData.filter((classItem: Class) => {
			// Search filter
			if (filters.searchTerm) {
				const searchLower = filters.searchTerm.toLowerCase()
				const matchesSearch =
					classItem.name.toLowerCase().includes(searchLower) ||
					(classItem.description?.toLowerCase() || '').includes(searchLower) ||
					classItem.instructor.toLowerCase().includes(searchLower)
				if (!matchesSearch) return false
			}

			// Category filter
			if (
				filters.selectedCategory &&
				!classItem.categories.includes(
					filters.selectedCategory as ClassCategory
				)
			) {
				return false
			}

			// Level filter
			if (filters.selectedLevel && classItem.level !== filters.selectedLevel) {
				return false
			}

			// Instructor filter
			if (
				filters.selectedInstructor &&
				classItem.instructor !== filters.selectedInstructor
			) {
				return false
			}

			return true
		})
	}, [filters])

	const handleClearFilters = () => {
		reset()
		// Toast notification will be handled by FilterPanel component
	}

	const categories = [
		{ label: 'All Categories', value: '' },
		...Array.from(new Set(classesData.flatMap((c) => c.categories)))
			.sort()
			.map((category) => ({
				label: category.charAt(0).toUpperCase() + category.slice(1),
				value: category,
			})),
	]

	const levels = [
		{ label: 'All Levels', value: '' },
		...Array.from(new Set(classesData.map((c) => c.level)))
			.sort()
			.map((level) => ({
				label: level.charAt(0).toUpperCase() + level.slice(1),
				value: level,
			})),
	]

	const instructors = [
		{ label: 'All Instructors', value: '' },
		...Array.from(new Set(classesData.map((c) => c.instructor)))
			.sort()
			.map((instructor) => ({
				label: instructor,
				value: instructor,
			})),
	]

	const hasActiveFilters = Object.values(filters).some(Boolean)

	return (
		<div className="flex flex-column gap-2 p-2 page-transition">
			<div className="max-w-7xl mx-auto w-full">
				{/* Calendar View - Temporarily disabled */}
				{/* <div className="mb-4">
					<ClassesCalendar
						className="mb-6"
						onClassClick={(classItem) => {
							setSelectedClass(classItem)
						}}
					/>
				</div> */}
				{/* Filters */}
				<FilterPanel
					title="Filter Classes"
					collapsed={true}
					onClear={handleClearFilters}
					clearDisabled={!hasActiveFilters}
					className="mb-6"
				>
					<div className="flex flex-column gap-4">
						<FormField
							type="input"
							label="Search Classes"
							name="searchTerm"
							control={control}
							inputProps={{
								placeholder: 'Search by name, description, or instructor...',
							}}
						/>

						<FormField
							type="dropdown"
							label="Category"
							name="selectedCategory"
							control={control}
							dropdownProps={{
								options: categories,
								optionLabel: 'label',
								optionValue: 'value',
								placeholder: 'Select Category',
							}}
						/>

						<FormField
							type="dropdown"
							label="Level"
							name="selectedLevel"
							control={control}
							dropdownProps={{
								options: levels,
								optionLabel: 'label',
								optionValue: 'value',
								placeholder: 'Select Level',
							}}
						/>

						<FormField
							type="dropdown"
							label="Instructor"
							name="selectedInstructor"
							control={control}
							dropdownProps={{
								options: instructors,
								optionLabel: 'label',
								optionValue: 'value',
								placeholder: 'Select Instructor',
							}}
						/>
					</div>
				</FilterPanel>

				{/* Results Count */}
				<ResultsCount
					count={filteredClasses.length}
					total={classesData.length}
					className="mb-4"
				/>

				{/* Classes Grid */}
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						width: '100%',
						minHeight: '400px',
					}}
				>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							gap: '2rem',
							width: '100%',
							maxWidth: '400px',
						}}
					>
						{filteredClasses.map((classItem: Class) => (
							<ClassCard
								key={classItem.id}
								classData={classItem}
								className="text-center"
							/>
						))}
					</div>
				</div>

				{/* Bottom Line */}
				<div className="text-center mt-6">
					<p className="text-lg text-sage-green-600 font-medium">
						All of our classes are unheated.
					</p>
				</div>
			</div>

			{/* Class Detail Modal - Temporarily disabled */}
			{/* {selectedClass && (
				<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
					<div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
						<div className="bg-gradient-to-r from-sage-green-600 to-sage-green-700 px-6 py-6 rounded-t-2xl">
							<div className="flex justify-between items-start">
								<div>
									<h3 className="text-2xl font-bold text-white mb-2">
										{selectedClass.name}
									</h3>
									<p className="text-sage-green-100 text-lg">
										with {selectedClass.instructor}
									</p>
								</div>
								<button
									onClick={() => setSelectedClass(null)}
									className="p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
								>
									<svg
										className="w-6 h-6"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								</button>
							</div>
						</div>

						<div className="p-6">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
								<div className="space-y-4">
									<div>
										<span className="font-semibold text-gray-700">
											Date & Time:
										</span>
										<p className="text-gray-900">
											{new Date(selectedClass.classDate).toLocaleDateString(
												'en-US',
												{
													weekday: 'long',
													year: 'numeric',
													month: 'long',
													day: 'numeric',
												}
											)}{' '}
											at {selectedClass.time}
										</p>
									</div>
									<div>
										<span className="font-semibold text-gray-700">
											Duration:
										</span>
										<p className="text-gray-900">{selectedClass.duration}</p>
									</div>
									<div>
										<span className="font-semibold text-gray-700">Price:</span>
										<p className="text-gray-900">{selectedClass.price}</p>
									</div>
									<div>
										<span className="font-semibold text-gray-700">Level:</span>
										<p className="text-gray-900">{selectedClass.level}</p>
									</div>
								</div>

								<div className="space-y-4">
									<div>
										<span className="font-semibold text-gray-700">
											Category:
										</span>
										<p className="text-gray-900">{selectedClass.category}</p>
									</div>
									<div>
										<span className="font-semibold text-gray-700">
											Max Participants:
										</span>
										<p className="text-gray-900">
											{selectedClass.maxParticipants}
										</p>
									</div>
									{selectedClass.equipment && (
										<div>
											<span className="font-semibold text-gray-700">
												Equipment:
											</span>
											<p className="text-gray-900">{selectedClass.equipment}</p>
										</div>
									)}
									<div>
										<span className="font-semibold text-gray-700">Status:</span>
										<span
											className={`ml-2 px-3 py-1 rounded-full text-sm ${
												selectedClass.status === 'Scheduled'
													? 'bg-green-100 text-green-800'
													: selectedClass.status === 'Completed'
													? 'bg-blue-100 text-blue-800'
													: selectedClass.status === 'Cancelled'
													? 'bg-red-100 text-red-800'
													: 'bg-yellow-100 text-yellow-800'
											}`}
										>
											{selectedClass.status}
										</span>
									</div>
								</div>
							</div>

							<div className="mb-6">
								<span className="font-semibold text-gray-700">
									Description:
								</span>
								<p className="text-gray-900 mt-2 leading-relaxed">
									{selectedClass.description}
								</p>
							</div>

							<div className="flex justify-end space-x-3">
								<button
									onClick={() => setSelectedClass(null)}
									className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium"
								>
									Close
								</button>
								<button
									onClick={() => {
										// Here you could add booking functionality
										console.log('Book class:', selectedClass.name)
									}}
									className="px-6 py-3 bg-sage-green-600 text-white rounded-lg hover:bg-sage-green-700 transition-colors font-medium"
								>
									Book This Class
								</button>
							</div>
						</div>
					</div>
				</div>
			)} */}
		</div>
	)
}
