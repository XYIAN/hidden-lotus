'use client'

import { useState, useEffect } from 'react'
import { Card } from 'primereact/card'
import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import { Dropdown } from 'primereact/dropdown'
import { Tag } from 'primereact/tag'
import { useForm, Controller } from 'react-hook-form'
import { HeroSection } from '@/components/common/hero-section'
import { ClassCard } from '@/components/common/class-card'
import { classesData, Class } from '@/constants/classes'
import '@/styles/animations.css'

interface FilterForm {
	searchTerm: string
	selectedCategory: string
	selectedLevel: string
}

export default function ClassesPage() {
	const [filteredClasses, setFilteredClasses] = useState<Class[]>(classesData)

	const { control, watch, reset } = useForm<FilterForm>({
		defaultValues: {
			searchTerm: '',
			selectedCategory: '',
			selectedLevel: '',
		},
	})

	const searchTerm = watch('searchTerm')
	const selectedCategory = watch('selectedCategory')
	const selectedLevel = watch('selectedLevel')

	const categories = [
		{ label: 'All Categories', value: '' },
		{ label: 'Yoga', value: 'yoga' },
		{ label: 'Reiki', value: 'reiki' },
		{ label: 'Seminar', value: 'seminar' },
		{ label: 'Cupping', value: 'cupping' },
		{ label: 'Podcast', value: 'podcast' },
		{ label: 'Meditation', value: 'meditation' },
		{ label: 'Fitness', value: 'fitness' },
		{ label: 'Healing', value: 'healing' },
		{ label: 'Weight Training', value: 'weight-training' },
		{ label: 'Pilates', value: 'pilates' },
		{ label: 'Breathwork', value: 'breathwork' },
		{ label: 'Sound Healing', value: 'sound-healing' },
	]

	const levels = [
		{ label: 'All Levels', value: '' },
		{ label: 'Beginner', value: 'beginner' },
		{ label: 'Intermediate', value: 'intermediate' },
		{ label: 'Advanced', value: 'advanced' },
	]

	useEffect(() => {
		let filtered = classesData

		// Filter by search term
		if (searchTerm) {
			filtered = filtered.filter(
				(cls) =>
					cls.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
					cls.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
					cls.instructor.toLowerCase().includes(searchTerm.toLowerCase())
			)
		}

		// Filter by category
		if (selectedCategory) {
			filtered = filtered.filter((cls) =>
				cls.categories.includes(selectedCategory as any)
			)
		}

		// Filter by level
		if (selectedLevel) {
			filtered = filtered.filter((cls) => cls.level === selectedLevel)
		}

		setFilteredClasses(filtered)
	}, [searchTerm, selectedCategory, selectedLevel])

	const clearFilters = () => {
		reset()
	}

	return (
		<div className="flex flex-column gap-6 p-4 page-transition">
			<HeroSection
				title="Our Classes"
				description="Discover our diverse range of wellness classes designed to support your mind, body, and spirit."
			/>

			{/* Filters Section */}
			<section className="max-w-6xl mx-auto w-full">
				<Card className="yoga-card p-4 mb-6">
					<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
						<div className="flex flex-column gap-2">
							<label
								htmlFor="search"
								className="text-sm font-semibold text-primary-green"
							>
								Search Classes
							</label>
							<Controller
								name="searchTerm"
								control={control}
								render={({ field }) => (
									<InputText
										{...field}
										id="search"
										placeholder="Search by name, description, or instructor..."
										className="w-full"
									/>
								)}
							/>
						</div>

						<div className="flex flex-column gap-2">
							<label
								htmlFor="category"
								className="text-sm font-semibold text-primary-green"
							>
								Category
							</label>
							<Controller
								name="selectedCategory"
								control={control}
								render={({ field }) => (
									<Dropdown
										{...field}
										id="category"
										options={categories}
										optionLabel="label"
										optionValue="value"
										placeholder="Select Category"
										className="w-full"
									/>
								)}
							/>
						</div>

						<div className="flex flex-column gap-2">
							<label
								htmlFor="level"
								className="text-sm font-semibold text-primary-green"
							>
								Level
							</label>
							<Controller
								name="selectedLevel"
								control={control}
								render={({ field }) => (
									<Dropdown
										{...field}
										id="level"
										options={levels}
										optionLabel="label"
										optionValue="value"
										placeholder="Select Level"
										className="w-full"
									/>
								)}
							/>
						</div>

						<div className="flex flex-column gap-2 justify-content-end">
							<Button
								label="Clear Filters"
								icon="pi pi-refresh"
								onClick={clearFilters}
								className="bg-sage-green-600 border-sage-green-600"
								disabled={!searchTerm && !selectedCategory && !selectedLevel}
							/>
						</div>
					</div>
				</Card>

				{/* Results Count */}
				<div className="flex justify-content-between align-items-center mb-4">
					<h2 className="text-xl font-semibold text-primary-green">
						{filteredClasses.length} Class
						{filteredClasses.length !== 1 ? 'es' : ''} Found
					</h2>
					{(searchTerm || selectedCategory || selectedLevel) && (
						<div className="flex gap-2 flex-wrap justify-content-center">
							{searchTerm && (
								<Tag
									value={`Search: ${searchTerm}`}
									className="bg-pastel-pink"
								/>
							)}
							{selectedCategory && (
								<Tag
									value={`Category: ${
										categories.find((c) => c.value === selectedCategory)?.label
									}`}
									className="bg-sage-green-600"
								/>
							)}
							{selectedLevel && (
								<Tag
									value={`Level: ${
										levels.find((l) => l.value === selectedLevel)?.label
									}`}
									className="bg-yellow-gold"
								/>
							)}
						</div>
					)}
				</div>

				{/* Classes Grid */}
				{filteredClasses.length > 0 ? (
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
						{filteredClasses.map((classData, index) => (
							<ClassCard
								key={classData.id}
								classData={classData}
								className={`stagger-${(index % 6) + 1}`}
							/>
						))}
					</div>
				) : (
					<Card className="yoga-card p-8 text-center">
						<div className="text-6xl mb-4">😔</div>
						<h3 className="text-xl font-semibold text-primary-green mb-2">
							No Classes Found
						</h3>
						<p className="text-earth-brown mb-4">
							Try adjusting your search criteria or filters to find the perfect
							class for you.
						</p>
						<Button
							label="Clear All Filters"
							icon="pi pi-refresh"
							onClick={clearFilters}
							className="bg-sage-green-600 border-sage-green-600"
						/>
					</Card>
				)}
			</section>
		</div>
	)
}
