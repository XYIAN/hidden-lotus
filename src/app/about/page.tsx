'use client'

import { Carousel } from 'primereact/carousel'
import { Card } from 'primereact/card'
import { Button } from 'primereact/button'
import { HeroSection } from '@/components/common/hero-section'
import Link from 'next/link'

const carouselItems = [
	{
		type: 'video',
		title: 'Welcome to Hidden Lotus',
		content:
			'Experience our peaceful sanctuary and discover the transformative power of holistic wellness.',
		videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder video
	},
	{
		type: 'text',
		title: 'Our Philosophy',
		content:
			'We believe in the power of authentic wellness experiences that honor the mind, body, and spirit. Our approach combines traditional wisdom with modern understanding to create lasting transformation.',
	},
	{
		type: 'text',
		title: 'Community & Connection',
		content:
			'Hidden Lotus is more than a wellness center—it&apos;s a community of individuals committed to growth, healing, and supporting each other on their wellness journeys.',
	},
	{
		type: 'text',
		title: 'Holistic Approach',
		content:
			'From yoga and meditation to reiki healing and therapeutic bodywork, we offer a comprehensive range of services designed to address your unique wellness needs.',
	},
]

interface CarouselItem {
	type: 'video' | 'text'
	title: string
	content: string
	videoUrl?: string
}

export default function AboutPage() {
	const carouselTemplate = (item: CarouselItem) => (
		<div className="p-4 h-full">
			<Card
				className="h-full yoga-card"
				style={{
					height: '100%',
					minHeight: '400px',
					maxHeight: '600px',
					display: 'flex',
					flexDirection: 'column',
				}}
			>
				<div
					className="text-center h-full flex flex-column justify-content-between"
					style={{
						height: '100%',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'space-between',
					}}
				>
					<div>
						<h3 className="text-2xl font-semibold text-primary-green mb-4">
							{item.title}
						</h3>
						{item.type === 'video' ? (
							<div className="mb-4">
								<iframe
									width="100%"
									height="200"
									src={item.videoUrl}
									title={item.title}
									frameBorder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
									className="border-round"
									style={{ maxHeight: '200px' }}
								></iframe>
							</div>
						) : (
							<div
								style={{
									height: '200px',
									display: 'flex',
									alignItems: 'center',
								}}
							>
								<p className="text-earth-brown leading-relaxed text-lg">
									{item.content}
								</p>
							</div>
						)}
					</div>
					{item.type === 'video' && (
						<div className="mt-4">
							<p className="text-earth-brown leading-relaxed text-lg">
								{item.content}
							</p>
						</div>
					)}
				</div>
			</Card>
		</div>
	)

	return (
		<div className="flex flex-column gap-6 p-4 page-transition">
			<HeroSection
				title="About Hidden Lotus"
				description="Discover our mission to promote wellness, mindfulness, and holistic healing in our community."
			/>

			{/* Mission Section */}
			<section className="max-w-4xl mx-auto w-full">
				<Card
					className="p-8 mb-6"
					style={{
						background: 'linear-gradient(135deg, #f0ede4 0%, #f5f1e8 100%)',
						border: '1px solid #8baa7a',
						borderRadius: '16px',
						boxShadow: '0 4px 12px rgba(139, 69, 19, 0.1)',
					}}
				>
					<h2 className="text-3xl font-bold text-primary-green mb-6 text-center">
						Our Mission
					</h2>

					<div className="text-center mb-6">
						<p className="text-earth-brown text-lg leading-relaxed mb-4">
							At Hidden Lotus, we have created a movement towards prosperity by
							providing a welcoming space for our community.
						</p>
					</div>

					<div className="text-center mb-6">
						<p className="text-primary-green text-xl font-semibold leading-relaxed mb-4">
							As a collective and support-system we give ourselves a chance to
							practice <strong>SELF-LOVE</strong>, allowing{' '}
							<strong>LOVE</strong>, <strong>PEACE</strong>,{' '}
							<strong>ABUNDANCE</strong> and <strong>JOY</strong> into our
							lives.
						</p>
					</div>

					<div className="text-center mb-6">
						<p className="text-sage-green-600 text-xl font-medium leading-relaxed mb-4">
							We want to ignite (y)our individuality through community and
							healing!
						</p>
					</div>

					<div className="text-center mb-6">
						<p className="text-earth-brown text-lg leading-relaxed mb-4">
							We co-create healing by holding space for authentic expression.
							Through interdisciplinary practices of yoga, movement, sound, and
							art, we invite wellness practitioners, facilitators, and students
							to explore what wellness means beyond form.
						</p>
					</div>

					<div className="text-center">
						<p className="text-earth-brown text-lg leading-relaxed">
							Our mission is to empower individuality through restoration and
							self-discovery, while nurturing a collective rooted in love,
							peace, and joy. Hidden Lotus is not just a sanctuary, but a
							prosperous movement — a place where we gather as a community to
							reconnect, grow, and open our hearts to the practice of self-love
							and healing together.
						</p>
					</div>
				</Card>

				{/* Values Section */}
				<Card className="yoga-card p-6 mb-6">
					<h2 className="text-3xl font-bold text-primary-green mb-4 text-center">
						Our Values
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div className="text-center">
							<div className="text-4xl mb-3">🌱</div>
							<h3 className="text-xl font-semibold text-sage-green-600 mb-2">
								Holistic Approach
							</h3>
							<p className="text-earth-brown">
								We address the interconnectedness of mind, body, and spirit in
								all our programs and services.
							</p>
						</div>
						<div className="text-center">
							<div className="text-4xl mb-3">🤝</div>
							<h3 className="text-xl font-semibold text-sage-green-600 mb-2">
								Community
							</h3>
							<p className="text-earth-brown">
								We foster a supportive, inclusive community where everyone feels
								welcome and valued.
							</p>
						</div>
						<div className="text-center">
							<div className="text-4xl mb-3">🌟</div>
							<h3 className="text-xl font-semibold text-sage-green-600 mb-2">
								Authenticity
							</h3>
							<p className="text-earth-brown">
								We practice what we teach, maintaining integrity and
								authenticity in all our interactions.
							</p>
						</div>
						<div className="text-center">
							<div className="text-4xl mb-3">💚</div>
							<h3 className="text-xl font-semibold text-sage-green-600 mb-2">
								Compassion
							</h3>
							<p className="text-earth-brown">
								We approach each individual with kindness, understanding, and
								unconditional positive regard.
							</p>
						</div>
					</div>
				</Card>

				{/* Call to Action */}
				<Card className="yoga-card p-6 text-center">
					<h2 className="text-2xl font-semibold text-primary-green mb-3">
						Ready to Begin Your Journey?
					</h2>
					<p className="text-earth-brown mb-4">
						Join our community and discover the transformative power of holistic
						wellness.
					</p>
					<div className="flex gap-3 justify-content-center">
						<Button
							label="Explore Classes"
							icon="pi pi-heart"
							iconPos="left"
							className="bg-sage-green-600 border-sage-green-600 text-white"
							style={{ 
								padding: '0.75rem 1.5rem',
								color: 'white !important',
								textDecoration: 'none !important'
							}}
							onClick={() => window.location.href = '/classes'}
						/>
						<Button
							label="Contact Us"
							icon="pi pi-envelope"
							iconPos="left"
							className="p-button-outlined border-sage-green-600 text-sage-green-600"
							style={{ 
								padding: '0.75rem 1.5rem',
								textDecoration: 'none !important'
							}}
							onClick={() => window.location.href = '/contact'}
						/>
					</div>
				</Card>
			</section>

			{/* Carousel Section */}
			<section className="max-w-4xl mx-auto w-full">
				<Carousel
					value={carouselItems}
					numVisible={1}
					numScroll={1}
					className="custom-carousel"
					itemTemplate={carouselTemplate}
					autoplayInterval={8000}
					circular={true}
					showNavigators={true}
					showIndicators={true}
					style={{
						height: '500px',
						minHeight: '400px',
						maxHeight: '600px',
					}}
				/>
			</section>

			{/* Location Section */}
			<section className="max-w-4xl mx-auto w-full">
				<Card className="bg-light-tan sage-border">
					<div className="text-center">
						<h2 className="text-2xl font-semibold text-primary-green mb-4">
							Visit Our Sanctuary
						</h2>
						<div className="mb-4">
							<i className="pi pi-map-marker text-4xl text-secondary-brown"></i>
						</div>
						<h3 className="text-xl font-semibold text-secondary-brown mb-2">
							Hidden Lotus Wellness Center
						</h3>
						<p className="text-earth-brown mb-3">
							123 Wellness Way
							<br />
							Irvine, CA 92614
						</p>
						<p className="text-sm text-earth-brown mb-4">
							Nestled in the heart of Irvine, our center provides a peaceful
							retreat from the busy world, surrounded by nature and designed for
							healing.
						</p>
						<div className="flex flex-column sm:flex-row gap-3 justify-content-center">
							<Button
								label="Get Directions"
								icon="pi pi-directions"
								iconPos="left"
								className="p-button-outlined border-sage text-sage"
								style={{ padding: '0.75rem 1.5rem' }}
							/>
							<Button
								label="Schedule Visit"
								icon="pi pi-calendar"
								iconPos="left"
								className="p-button-primary bg-pastel-pink border-pastel-pink text-secondary-brown"
								style={{ padding: '0.75rem 1.5rem' }}
							/>
						</div>
					</div>
				</Card>
			</section>
		</div>
	)
}
