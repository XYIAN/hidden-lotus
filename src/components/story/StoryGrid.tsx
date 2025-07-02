'use client'

import { Card } from 'primereact/card'
import { CardGrid, DisplayCard } from '@/components/common'
import { Story } from '@/constants/stories'
import { memo, useMemo } from 'react'

interface StoryGridProps {
	stories: Story[]
	className?: string
}

export const StoryGrid = memo(function StoryGrid({ stories }: StoryGridProps) {
	const cardElements = useMemo(() => {
		return stories.map((story) => (
			<DisplayCard
				key={story.id}
				data={{
					id: story.id,
					name: story.title,
					description: story.excerpt,
					image: story.image,
					category: story.category,
					href: `/story/${story.id}`,
				}}
				showImage={true}
				showType={false}
				showSpecialties={false}
				showCertifications={false}
				showCredentials={false}
				showProfession={false}
				showBio={false}
				showDescription={true}
				showPrice={false}
				showDuration={false}
				showLevel={false}
				showCategory={true}
				showLearnMore={true}
				learnMoreText="Read More"
				className="text-center"
			/>
		))
	}, [stories])

	if (stories.length === 0) {
		return (
			<Card className="yoga-card p-8 text-center">
				<div className="text-6xl mb-4">📖</div>
				<h2 className="text-2xl font-bold text-primary-green mb-4">
					No Stories Found
				</h2>
				<p className="text-earth-brown text-lg">
					We couldn&apos;t find any stories matching your criteria. Try
					adjusting your filters or check back later for new content.
				</p>
			</Card>
		)
	}

	return (
		<CardGrid columns={{ sm: 1, md: 2, lg: 3, xl: 3 }} gap={6}>
			{cardElements}
		</CardGrid>
	)
})
