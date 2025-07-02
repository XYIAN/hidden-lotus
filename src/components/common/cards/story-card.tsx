'use client'

import { useState } from 'react'
import { Card } from 'primereact/card'
import { Button } from 'primereact/button'
import Image from 'next/image'
import { LoadingSkeleton } from './loading-skeleton'
import { Story } from '@/constants/stories'
import { IMAGES } from '@/constants/images'

interface StoryCardProps {
	story: Story
	onClick: (story: Story) => void
}

export function StoryCard({ story, onClick }: StoryCardProps) {
	const [imageLoaded, setImageLoaded] = useState(false)
	const [imageError, setImageError] = useState(false)

	const getStoryIcon = (id: string) => {
		return IMAGES.getIconById(id)
	}

	return (
		<div className="aspect-[4/5] md:aspect-[3/4] sm:aspect-[1/1] w-full max-w-xs md:max-w-sm lg:max-w-md mx-auto flex">
			<Card
				className="story-card yoga-card cursor-pointer w-full h-full flex flex-col"
				onClick={() => onClick(story)}
			>
				<div className="text-center flex flex-column justify-content-center">
					<div className="relative mx-auto mb-4">
						{!imageLoaded && !imageError && (
							<LoadingSkeleton type="image" className="w-36 h-36 rounded-lg" />
						)}
						{imageError && (
							<div className="w-36 h-36 bg-light-tan rounded-lg flex align-items-center justify-content-center sage-border">
								<i className="pi pi-book text-4xl text-sage"></i>
							</div>
						)}
						{!imageError && (
							<Image
								src={getStoryIcon(story.id)}
								alt={`${story.title} icon`}
								width={150}
								height={150}
								className={`w-36 h-36 object-contain rounded-lg sage-border ${
									imageLoaded ? 'block' : 'hidden'
								}`}
								onLoad={() => setImageLoaded(true)}
								onError={() => setImageError(true)}
							/>
						)}
					</div>

					<h3 className="text-xl font-semibold text-primary-green mb-3">
						{story.title}
					</h3>

					<p className="text-earth-brown leading-relaxed mb-4">
						{story.excerpt}
					</p>

					<Button
						label="Read More"
						icon="pi pi-arrow-right"
						iconPos="right"
						className="p-button-outlined border-sage text-sage"
					/>
				</div>
			</Card>
		</div>
	)
}
