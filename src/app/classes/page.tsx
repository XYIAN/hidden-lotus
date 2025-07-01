'use client'

import { useState, useEffect } from 'react'
import { Card } from 'primereact/card'
import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import { Dropdown } from 'primereact/dropdown'
import { Tag } from 'primereact/tag'
import { Toast } from 'primereact/toast'
import { useForm, Controller } from 'react-hook-form'
import { HeroSection } from '@/components/common/hero-section'
import { ClassCard } from '@/components/common/class-card'
import { classesData, Class } from '@/constants/classes'
import { useRef } from 'react'
import '@/styles/animations.css'
import { CardGrid, DisplayCard } from '@/components/common'

interface FilterForm {
	searchTerm: string
	selectedCategory: string
	selectedLevel: string
}

export default function ClassesPage() {
	const [filteredClasses, setFilteredClasses] = useState<Class[]>(classesData)
	const toast = useRef<Toast>(null)

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

		// Show toast for search results
		if (searchTerm || selectedCategory || selectedLevel) {
			toast.current?.show({
				severity: 'info',
				summary: 'Search Results',
				detail: `Found ${filtered.length} class${
					filtered.length !== 1 ? 'es' : ''
				}`,
				life: 3000,
			})
		}
	}, [searchTerm, selectedCategory, selectedLevel])

	const clearFilters = () => {
		reset()
		toast.current?.show({
			severity: 'success',
			summary: 'Filters Cleared',
			detail: 'All filters have been reset',
			life: 2000,
		})
	}

	return (
		<div className="flex flex-column gap-6 p-4 page-transition">
			<Toast ref={toast} />

			<HeroSection
				title="Our Classes"
				description="Discover our diverse range of wellness classes designed to support your mind, body, and spirit."
			/>

			{/* Filters Section */}
			<section className="max-w-6xl mx-auto w-full">
				<Card className="yoga-card p-6 mb-6">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
					</div>

					{/* Clear Filters Button - Always at bottom */}
					<div className="flex justify-content-center mt-6">
						<Button
							label="Clear All Filters"
							icon="pi pi-refresh"
							onClick={clearFilters}
							className="bg-sage-green-600 border-sage-green-600"
							disabled={!searchTerm && !selectedCategory && !selectedLevel}
						/>
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
					<CardGrid columns={{ sm: 1, md: 2, lg: 3, xl: 3 }} gap={6}>
						{filteredClasses.map((cls, index) => (
							<div key={cls.id} className={`stagger-${(index % 6) + 1}`}>
								<DisplayCard
									data={{
										id: cls.id,
										name: cls.name,
										description: cls.description,
										image: cls.image,
										price: cls.price,
										duration: cls.duration,
										level: cls.level,
										category: cls.categories?.[0],
										bio: undefined,
										credentials: undefined,
										profession: cls.instructor,
										href: `/classes/${encodeURIComponent(cls.id)}`,
									}}
									showImage={!!cls.image}
									showType={false}
									showSpecialties={false}
									showCertifications={false}
									showCredentials={false}
									showProfession={true}
									showBio={false}
									showDescription={true}
									showPrice={true}
									showDuration={true}
									showLevel={true}
									showCategory={true}
									showLearnMore={true}
									learnMoreText="View Details"
								/>
							</div>
						))}
					</CardGrid>
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
