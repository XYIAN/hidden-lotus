import { Card } from 'primereact/card'
import { Button } from 'primereact/button'
import { CardGrid, DisplayCard } from '@/components/common'
import { Story } from '@/constants/stories'
import { memo, useMemo } from 'react'

interface StoryGridProps {
	stories: Story[]
	onStoryClick?: (story: Story) => void
	clearFilters?: () => void
}

export const StoryGrid = memo(function StoryGrid({
	stories,
	onStoryClick,
	clearFilters,
}: StoryGridProps) {
	const cardElements = useMemo(() => {
		return stories.map((story, index) => (
			<div key={story.id} className={`stagger-${(index % 6) + 1}`}>
				<DisplayCard
					data={{
						id: story.id,
						title: story.title,
						name: story.title,
						description: story.excerpt,
						image: story.image,
						category: story.category,
						profession: story.author,
						href: `/story/${encodeURIComponent(story.id)}`,
					}}
					showImage={!!story.image}
					showType={false}
					showSpecialties={false}
					showCertifications={false}
					showCredentials={false}
					showProfession={true}
					showBio={false}
					showDescription={true}
					showPrice={false}
					showDuration={false}
					showLevel={false}
					showCategory={true}
					showLearnMore={true}
					learnMoreText="Read Story"
				/>
			</div>
		))
	}, [stories])

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
		<CardGrid columns={{ sm: 1, md: 2, lg: 3, xl: 3 }} gap={6}>
			{cardElements}
		</CardGrid>
	)
})
