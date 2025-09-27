import { notFound } from 'next/navigation'
import { Card } from 'primereact/card'
import { Tag } from 'primereact/tag'
import { Button } from 'primereact/button'
import { HeroSection } from '@/components/common/hero-section'
import { storiesData } from '@/constants/stories'
import Link from 'next/link'

export async function generateStaticParams() {
	return storiesData.map((story) => ({
		id: story.id,
	}))
}

interface PageProps {
	params: Promise<{ id: string }>
}

export default async function StoryDetailPage({ params }: PageProps) {
	const { id } = await params
	const story = storiesData.find((s) => s.id === id)

	if (!story) {
		notFound()
	}

	return (
		<div className="flex flex-column gap-6 p-4 page-transition">
			<HeroSection
				title={story.title}
				description={`By ${story.author} • ${story.date}`}
			/>

			<section className="max-w-4xl mx-auto w-full">
				<Card className="yoga-card p-6">
					<div className="flex flex-column gap-6">
						{/* Header */}
						<div className="flex justify-content-between align-items-start">
							<div className="flex-1">
								<h1 className="text-3xl font-bold text-primary-green mb-3">
									{story.title}
								</h1>
								<div className="flex align-items-center gap-4 mb-4">
									<span className="text-earth-brown font-medium text-lg">
										{story.author}
									</span>
									<span className="text-earth-brown/70">{story.date}</span>
									<Tag
										value={story.category}
										className="bg-sage-green-200 text-sage-green-800 border-sage-green-300"
									/>
								</div>
							</div>
							<Button
								label="Back to Stories"
								icon="pi pi-arrow-left"
								className="bg-sage-green-600 border-sage-green-600 text-white"
								style={{ 
									color: 'white !important',
									textDecoration: 'none !important'
								}}
								onClick={() => window.location.href = '/story'}
							/>
						</div>

						{/* Excerpt */}
						<div className="bg-light-tan/50 p-4 border-round">
							<p className="text-earth-brown text-lg leading-relaxed font-medium">
								{story.excerpt}
							</p>
						</div>

						{/* Full Content */}
						<div className="text-earth-brown leading-relaxed text-lg">
							{story.content.split('\n\n').map((paragraph, index) => (
								<p key={index} className="mb-4">
									{paragraph}
								</p>
							))}
						</div>

						{/* Footer */}
						<div className="flex justify-content-between align-items-center pt-4 border-t border-sage-green-200">
							<div className="text-earth-brown/70 text-sm">
								Thank you for reading {story.author}&apos;s story
							</div>
							<Button
								label="More Stories"
								icon="pi pi-book"
								className="bg-pastel-pink border-pastel-pink text-secondary-brown"
								style={{ 
									textDecoration: 'none !important'
								}}
								onClick={() => window.location.href = '/story'}
							/>
						</div>
					</div>
				</Card>
			</section>
		</div>
	)
}
