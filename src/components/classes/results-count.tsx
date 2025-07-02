'use client'

import { Tag } from 'primereact/tag'

interface ResultsCountProps {
	count: number
	searchTerm?: string
	selectedCategory?: string
	selectedLevel?: string
	categories: Array<{ label: string; value: string }>
	levels: Array<{ label: string; value: string }>
}

export function ResultsCount({
	count,
	searchTerm,
	selectedCategory,
	selectedLevel,
	categories,
	levels,
}: ResultsCountProps) {
	const hasActiveFilters = searchTerm || selectedCategory || selectedLevel

	return (
		<div className="flex justify-content-between align-items-center mb-4">
			<h2 className="text-xl font-semibold text-primary-green">
				{count} Class{count !== 1 ? 'es' : ''} Found
			</h2>
			{hasActiveFilters && (
				<div className="flex gap-2 flex-wrap justify-content-center">
					{searchTerm && (
						<Tag value={`Search: ${searchTerm}`} className="bg-pastel-pink" />
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
	)
}
