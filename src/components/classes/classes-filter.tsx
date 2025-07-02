'use client'

import { Control } from 'react-hook-form'
import { FilterPanel } from '@/components/common'
import { FormField } from '@/components/common/form-field'
import { memo } from 'react'

interface FilterForm {
	searchTerm: string
	selectedCategory: string
	selectedLevel: string
}

interface ClassesFilterProps {
	control: Control<FilterForm>
	onClear: () => void
	clearDisabled: boolean
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

export const ClassesFilter = memo(function ClassesFilter({
	control,
	onClear,
	clearDisabled,
}: ClassesFilterProps) {
	return (
		<FilterPanel
			title="Filter Classes"
			collapsed={true}
			onClear={onClear}
			clearDisabled={clearDisabled}
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
			</div>
		</FilterPanel>
	)
})
