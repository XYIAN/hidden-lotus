import { Card } from 'primereact/card'
import { Button } from 'primereact/button'
import { StoryCard } from '@/components/common/story-card'
import { Story } from '@/constants/stories'

interface StoryGridProps {
	stories: Story[]
	onStoryClick?: (story: Story) => void
	clearFilters?: () => void
}

export function StoryGrid({
	stories,
	onStoryClick,
	clearFilters,
}: StoryGridProps) {
	if (stories.length === 0) {
		return (
			<Card className="yoga-card p-8 text-center">
				<div className="text-6xl mb-4">😔</div>
				<h3 className="text-xl font-semibold text-primary-green mb-2">
					No Stories Found
				</h3>
				<p className="text-earth-brown mb-4">
					Try adjusting your search criteria or filters to find inspiring
					stories.
				</p>
				{clearFilters && (
					<Button
						label="Clear All Filters"
						icon="pi pi-refresh"
						onClick={clearFilters}
						className="bg-sage-green-600 border-sage-green-600"
					/>
				)}
			</Card>
		)
	}
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center max-w-7xl mx-auto">
			{stories.map((story, index) => (
				<div key={story.id} className={`stagger-${(index % 6) + 1}`}>
					<StoryCard story={story} onClick={onStoryClick || (() => {})} />
				</div>
			))}
		</div>
	)
}
