'use client'

import { useState, useEffect } from 'react'
import { Toast } from 'primereact/toast'
import { useForm } from 'react-hook-form'
import { useRef } from 'react'
import { HeroSection } from '@/components/common/hero-section'
import { classesData, Class } from '@/constants/classes'
import { ClassesFilter, ClassesGrid, ResultsCount } from '@/components/classes'
import '@/styles/animations.css'

interface FilterForm {
	searchTerm: string
	selectedCategory: string
	selectedLevel: string
}

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

			<section className="max-w-6xl mx-auto w-full">
				<ClassesFilter
					control={control}
					onClear={clearFilters}
					clearDisabled={!searchTerm && !selectedCategory && !selectedLevel}
				/>

				<ResultsCount
					count={filteredClasses.length}
					searchTerm={searchTerm}
					selectedCategory={selectedCategory}
					selectedLevel={selectedLevel}
					categories={categories}
					levels={levels}
				/>

				<ClassesGrid classes={filteredClasses} onClearFilters={clearFilters} />
			</section>
		</div>
	)
}
