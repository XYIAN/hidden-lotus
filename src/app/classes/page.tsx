'use client'

import { useMemo } from 'react'
import { HeroSection } from '@/components/common/hero-section'
import { CardGrid, DisplayCard, ResultsCount } from '@/components/common'
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
		<div className="flex flex-column gap-6 p-4 page-transition">
			<HeroSection
				title="Our Classes"
				description="Discover our diverse range of wellness classes designed to support your journey to health and well-being."
			/>

			<div className="max-w-7xl mx-auto w-full">
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
				<CardGrid columns={{ sm: 1, md: 2, lg: 2, xl: 3 }} gap={6}>
					{filteredClasses.map((classItem: Class) => (
						<DisplayCard
							key={classItem.id}
							data={{
								id: classItem.id,
								name: classItem.name,
								description: classItem.description,
								image: classItem.image,
								category: classItem.categories[0],
								level: classItem.level,
								price: classItem.price,
								duration: classItem.duration,
								href: `/classes/${classItem.id}`,
							}}
							showImage={true}
							showType={true}
							showSpecialties={false}
							showCertifications={false}
							showCredentials={false}
							showProfession={false}
							showBio={false}
							showDescription={true}
							showPrice={true}
							showDuration={true}
							showLevel={true}
							showCategory={true}
							showLearnMore={true}
							learnMoreText="Details"
							className="text-center"
						/>
					))}
				</CardGrid>
			</div>
		</div>
	)
}
