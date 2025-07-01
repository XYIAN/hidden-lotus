'use client'

import { useState } from 'react'
import { Card } from 'primereact/card'
import { Button } from 'primereact/button'
import { Carousel } from 'primereact/carousel'
import { HeroSection } from '@/components/common/hero-section'
import { morSections, MORSection } from '@/constants/mor'
import { CardGrid, DisplayCard } from '@/components/common'

export default function MorPage() {
	const [activeIndex, setActiveIndex] = useState(0)

	const carouselItems = [
		{
			title: 'Mindfulness',
			description:
				'Cultivate present-moment awareness and inner peace through guided meditation and mindfulness practices.',
			icon: '🧘‍♀️',
			features: [
				'Daily meditation sessions',
				'Breathwork techniques',
				'Mindful movement',
				'Stress reduction tools',
			],
		},
		{
			title: 'Optimization',
			description:
				'Optimize your physical and mental performance through evidence-based wellness strategies.',
			icon: '⚡',
			features: [
				'Performance coaching',
				'Energy optimization',
				'Sleep improvement',
				'Nutrition guidance',
			],
		},
		{
			title: 'Recovery',
			description:
				"Support your body's natural healing processes and promote sustainable wellness practices.",
			icon: '🌿',
			features: [
				'Recovery protocols',
				'Healing modalities',
				'Restorative practices',
				'Wellness maintenance',
			],
		},
	]

	const itemTemplate = (item: any) => (
		<div className="text-center p-4">
			<div className="text-6xl mb-4">{item.icon}</div>
			<h3 className="text-2xl font-bold text-primary-green mb-3">
				{item.title}
			</h3>
			<p className="text-earth-brown text-lg mb-4">{item.description}</p>
			<ul className="text-left max-w-md mx-auto">
				{item.features.map((feature: string, index: number) => (
					<li
						key={index}
						className="text-earth-brown mb-2 flex align-items-center"
					>
						<i className="pi pi-check-circle text-sage-green-600 mr-2"></i>
						{feature}
					</li>
				))}
			</ul>
		</div>
	)

	return (
		<div className="flex flex-column gap-6 p-4 page-transition">
			<HeroSection
				title="MOR - Mindfulness, Optimization, Recovery"
				description="Discover our comprehensive approach to wellness through mindfulness, optimization, and recovery."
			/>

			{/* MOR Overview */}
			<section className="max-w-6xl mx-auto w-full">
				<Card className="yoga-card p-6 mb-6">
					<h2 className="text-3xl font-bold text-primary-green mb-4 text-center">
						Our MOR Framework
					</h2>
					<p className="text-earth-brown text-lg leading-relaxed text-center mb-6">
						At Hidden Lotus, we believe in a holistic approach to wellness that
						addresses the three essential pillars: Mindfulness, Optimization,
						and Recovery. This framework guides all our programs and services.
					</p>

					{/* Carousel */}
					<Carousel
						value={carouselItems}
						numVisible={1}
						numScroll={1}
						className="custom-carousel"
						itemTemplate={itemTemplate}
						autoplayInterval={5000}
						circular
					/>
				</Card>

				{/* MOR Programs */}
				<CardGrid columns={{ sm: 1, md: 3, lg: 3, xl: 3 }} gap={6}>
					{morSections.map((program: MORSection, index: number) => (
						<DisplayCard
							key={program.id}
							data={{
								id: program.id,
								name: program.title,
								description: program.description,
								image: undefined,
								category: program.subtitle,
								fallbackIcon: program.icon,
							}}
							showImage={false}
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
							learnMoreText="Learn More"
							className="text-center"
						/>
					))}
				</CardGrid>

				{/* Call to Action */}
				<Card className="yoga-card p-6 text-center mt-6">
					<h2 className="text-2xl font-semibold text-primary-green mb-3">
						Ready to Experience MOR?
					</h2>
					<p className="text-earth-brown mb-4">
						Join us in exploring the transformative power of mindfulness,
						optimization, and recovery.
					</p>
					<Button
						label="Get Started"
						icon="pi pi-heart"
						className="bg-sage-green-600 border-sage-green-600"
					/>
				</Card>
			</section>
		</div>
	)
}
