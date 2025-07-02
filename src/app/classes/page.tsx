'use client'

import { useState, useMemo } from 'react'
import { HeroSection } from '@/components/common/hero-section'
import {
	CardGrid,
	DisplayCard,
	FilterPanel,
	ResultsCount,
} from '@/components/common'
import { classesData } from '@/constants/classes'
import { Class, ClassFilterState, ClassCategory } from '@/types'

export default function ClassesPage() {
	const [filters, setFilters] = useState<ClassFilterState>({
		category: '',
		level: '',
		instructor: '',
	})

	const filteredClasses = useMemo(() => {
		return classesData.filter((classItem: Class) => {
			if (
				filters.category &&
				!classItem.categories.includes(filters.category as ClassCategory)
			) {
				return false
			}
			if (filters.level && classItem.level !== filters.level) {
				return false
			}
			if (filters.instructor && classItem.instructor !== filters.instructor) {
				return false
			}
			return true
		})
	}, [filters])

	const handleFilterChange = (newFilters: ClassFilterState) => {
		setFilters(newFilters)
	}

	const handleClearFilters = () => {
		setFilters({
			category: '',
			level: '',
			instructor: '',
		})
	}

	const categories = Array.from(
		new Set(classesData.flatMap((c) => c.categories))
	).sort()
	const levels = Array.from(new Set(classesData.map((c) => c.level))).sort()
	const instructors = Array.from(
		new Set(classesData.map((c) => c.instructor))
	).sort()

	return (
		<div className="flex flex-column gap-6 p-4 page-transition">
			<HeroSection
				title="Our Classes"
				description="Discover our diverse range of wellness classes designed to support your journey to health and well-being."
			/>

			<div className="max-w-7xl mx-auto w-full">
				<div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
					{/* Filters */}
					<div className="lg:col-span-1">
						<FilterPanel
							title="Filter Classes"
							collapsed={false}
							onClear={handleClearFilters}
							clearDisabled={!Object.values(filters).some(Boolean)}
						>
							<div className="space-y-4">
								{/* Category Filter */}
								<div>
									<label className="block text-sm font-medium text-sage-green-700 mb-2">
										Category
									</label>
									<select
										value={filters.category}
										onChange={(e) =>
											handleFilterChange({
												...filters,
												category: e.target.value,
											})
										}
										className="w-full p-2 border border-sage-green-300 rounded-md focus:ring-2 focus:ring-sage-green-500 focus:border-transparent"
									>
										<option value="">All Categories</option>
										{categories.map((category) => (
											<option key={category} value={category}>
												{category.charAt(0).toUpperCase() + category.slice(1)}
											</option>
										))}
									</select>
								</div>

								{/* Level Filter */}
								<div>
									<label className="block text-sm font-medium text-sage-green-700 mb-2">
										Level
									</label>
									<select
										value={filters.level}
										onChange={(e) =>
											handleFilterChange({
												...filters,
												level: e.target.value,
											})
										}
										className="w-full p-2 border border-sage-green-300 rounded-md focus:ring-2 focus:ring-sage-green-500 focus:border-transparent"
									>
										<option value="">All Levels</option>
										{levels.map((level) => (
											<option key={level} value={level}>
												{level.charAt(0).toUpperCase() + level.slice(1)}
											</option>
										))}
									</select>
								</div>

								{/* Instructor Filter */}
								<div>
									<label className="block text-sm font-medium text-sage-green-700 mb-2">
										Instructor
									</label>
									<select
										value={filters.instructor}
										onChange={(e) =>
											handleFilterChange({
												...filters,
												instructor: e.target.value,
											})
										}
										className="w-full p-2 border border-sage-green-300 rounded-md focus:ring-2 focus:ring-sage-green-500 focus:border-transparent"
									>
										<option value="">All Instructors</option>
										{instructors.map((instructor) => (
											<option key={instructor} value={instructor}>
												{instructor}
											</option>
										))}
									</select>
								</div>
							</div>
						</FilterPanel>
					</div>

					{/* Classes Grid */}
					<div className="lg:col-span-3">
						<ResultsCount
							count={filteredClasses.length}
							total={classesData.length}
						/>
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
									learnMoreText="Book Now"
									className="text-center"
								/>
							))}
						</CardGrid>
					</div>
				</div>
			</div>
		</div>
	)
}
