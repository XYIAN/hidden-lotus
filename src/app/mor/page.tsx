// MOR Page - Commented out for future use
// 'use client'

// import { Card } from 'primereact/card'
// import { Button } from 'primereact/button'
// import { Tag } from 'primereact/tag'
// import { Carousel } from 'primereact/carousel'
// import { HeroSection } from '@/components/common/hero-section'
// import { morSections } from '@/constants/mor'
// import { MORSection } from '@/types'
// import '@/styles/animations.css'

// export default function MORPage() {
// 	const carouselTemplate = (program: MORSection) => {
// 		return (
// 			<div className="text-center p-4">
// 				<div className="mb-4">
// 					<i className={`${program.icon} text-6xl text-sage-green-600`}></i>
// 				</div>
// 				<h3 className="text-2xl font-bold text-primary-green mb-2">
// 					{program.title}
// 				</h3>
// 				<p className="text-lg text-earth-brown mb-4">{program.subtitle}</p>
// 				<p className="text-earth-brown mb-4">{program.description}</p>
// 				<div className="flex flex-wrap gap-2 justify-content-center">
// 					{program.features.map((feature, featureIndex) => (
// 						<Tag
// 							key={featureIndex}
// 							value={feature}
// 							className="bg-light-tan border-sage-green-200 text-earth-brown"
// 						/>
// 					))}
// 				</div>
// 			</div>
// 		)
// 	}

// 	return (
// 		<div className="flex flex-column gap-6 p-4 page-transition">
// 			<HeroSection
// 				title="MOR - Mindfulness, Optimization, Recovery"
// 				description="Discover our comprehensive approach to wellness through mindfulness, optimization, and recovery."
// 			/>

// 			{/* MOR Overview */}
// 			<section className="max-w-6xl mx-auto w-full">
// 				<Card className="yoga-card p-6 mb-6">
// 					<h2 className="text-3xl font-bold text-primary-green mb-4 text-center">
// 						Our MOR Framework
// 					</h2>
// 					<p className="text-earth-brown text-lg leading-relaxed text-center mb-6">
// 						At Hidden Lotus, we believe in a holistic approach to wellness that
// 						addresses the three essential pillars: Mindfulness, Optimization,
// 						and Recovery. This framework guides all our programs and services.
// 					</p>

// 					{/* Carousel */}
// 					<Carousel
// 						value={morSections}
// 						numVisible={1}
// 						numScroll={1}
// 						className="custom-carousel"
// 						itemTemplate={carouselTemplate}
// 						autoplayInterval={5000}
// 						circular
// 					/>
// 				</Card>

// 				{/* MOR Programs */}
// 				<Card className="yoga-card p-6 text-center mt-6">
// 					<h2 className="text-2xl font-semibold text-primary-green mb-3">
// 						Ready to Experience MOR?
// 					</h2>
// 					<p className="text-earth-brown mb-4">
// 						Join us in exploring the transformative power of mindfulness,
// 						optimization, and recovery.
// 					</p>
// 					<Button
// 						label="Get Started"
// 						icon="pi pi-heart"
// 						className="bg-sage-green-600 border-sage-green-600"
// 					/>
// 				</Card>
// 			</section>
// 		</div>
// 	)
// }

// Temporary placeholder component to prevent 404
export default function MORPage() {
	return (
		<div className="flex flex-column gap-6 p-4 page-transition">
			<div className="text-center">
				<h1 className="text-3xl font-bold text-primary-green mb-4">
					MOR Page Temporarily Unavailable
				</h1>
				<p className="text-earth-brown text-lg">
					This page is currently under maintenance. Please check back later.
				</p>
			</div>
		</div>
	)
}
