import { InputText } from 'primereact/inputtext'
import { Dropdown } from 'primereact/dropdown'
import { FilterPanel } from '@/components/common'

interface StoryFiltersProps {
	searchTerm: string
	selectedCategory: string
	categories: { label: string; value: string }[]
	onSearchChange: (value: string) => void
	onCategoryChange: (value: string) => void
	onClear: () => void
	disableClear: boolean
}

export function StoryFilters({
	searchTerm,
	selectedCategory,
	categories,
	onSearchChange,
	onCategoryChange,
	onClear,
	disableClear,
}: StoryFiltersProps) {
	return (
		<FilterPanel
			title="Filter Stories"
			collapsed={true}
			onClear={onClear}
			clearDisabled={disableClear}
			clearText="Clear Filters"
		>
			<div className="flex flex-column gap-4">
				<div className="flex flex-column gap-2">
					<label
						htmlFor="story-search"
						className="text-sm font-semibold text-primary-green"
					>
						Search Stories
					</label>
					<InputText
						id="story-search"
						value={searchTerm}
						onChange={(e) => onSearchChange(e.target.value)}
						placeholder="Search by title, excerpt, or author..."
						className="w-full"
					/>
				</div>

				<div className="flex flex-column gap-2">
					<label
						htmlFor="story-category"
						className="text-sm font-semibold text-primary-green"
					>
						Category
					</label>
					<Dropdown
						id="story-category"
						value={selectedCategory}
						onChange={(e) => onCategoryChange(e.value)}
						options={categories}
						optionLabel="label"
						optionValue="value"
						placeholder="Select Category"
						className="w-full"
					/>
				</div>
			</div>
		</FilterPanel>
	)
}
