import { notFound } from 'next/navigation'
import { Card } from 'primereact/card'
import { Tag } from 'primereact/tag'
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
					<div className="flex flex-column gap-6 text-center">
						{/* Header */}
						<div className="flex flex-column align-items-center gap-4">
							<h1 className="text-3xl font-bold text-primary-green mb-3">
								{story.title}
							</h1>
							<div className="flex align-items-center gap-4 mb-4 justify-content-center">
								<span className="text-earth-brown font-medium text-lg">
									{story.author}
								</span>
								<span className="text-earth-brown/70">{story.date}</span>
								<Tag
									value={story.category}
									className="bg-sage-green-200 text-sage-green-800 border-sage-green-300"
								/>
							</div>
							<Link
								href="/story"
								className="px-6 py-3 bg-sage-green-600 text-white hover:bg-sage-green-700 transition-colors"
								style={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									gap: '8px',
									borderRadius: '20px',
								}}
							>
								<i className="pi pi-arrow-left"></i>
								<span>Back to Stories</span>
							</Link>
						</div>

						{/* Story Image */}
						{story.image && (
							<div className="flex justify-content-center align-items-center mb-6 w-full">
								<img
									src={story.image}
									alt={story.title}
									style={{
										width: '100%',
										maxWidth: '600px',
										height: 'auto',
										objectFit: 'cover',
										borderRadius: '12px',
										display: 'block',
										margin: '0 auto',
									}}
								/>
							</div>
						)}

						{/* Full Content */}
						<div className="text-earth-brown leading-relaxed text-lg text-center mb-2">
							<p className="mb-0">{story.content}</p>
						</div>

						{/* Instagram Button */}
						<div className="flex justify-content-center mb-2">
							<a
								href="https://instagram.com/hiddenlotus.mor"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 transition-all duration-200 gap-2 shadow-lg hover:shadow-xl"
								style={{
									background:
										'linear-gradient(45deg, #833ab4, #fd1d1d, #fcb045)',
									backgroundSize: '200% 200%',
									animation: 'gradient 3s ease infinite',
									borderRadius: '20px',
								}}
							>
								<i
									className="pi pi-instagram text-xl"
									style={{ color: 'white' }}
								></i>
								<span>Follow @hiddenlotus.mor</span>
							</a>
						</div>

						{/* Footer */}
						<div className="flex flex-column align-items-center gap-2 pt-2 border-t border-sage-green-200">
							<div className="text-earth-brown/70 text-sm">
								Thank you for reading {story.author}&apos;s story
							</div>
							<Link
								href="/story"
								className="inline-flex items-center px-6 py-3 bg-pastel-pink text-secondary-brown hover:bg-pastel-pink/80 transition-colors gap-2"
								style={{ borderRadius: '20px' }}
							>
								<i className="pi pi-book"></i>
								More Stories
							</Link>
						</div>
					</div>
				</Card>
			</section>
		</div>
	)
}
