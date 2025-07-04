'use client'

import { HeroSection } from '@/components/common/hero-section'
import { ButtonGroup } from '@/components/home/button-group'
import { ContactSection } from '@/components/home/contact-section'
import '@/styles/animations.css'

const actionButtons = [
	{
		title: 'Explore Classes',
		description: 'Discover our yoga, meditation, and wellness classes',
		icon: 'pi pi-heart',
		href: '/classes',
		buttonText: 'View Classes',
	},
	{
		title: 'Meet Our Team',
		description: 'Connect with our experienced wellness practitioners',
		icon: 'pi pi-users',
		href: '/team',
		buttonText: 'Meet Team',
	},
	{
		title: 'Book Consultation',
		description: 'Schedule a personalized wellness consultation',
		icon: 'pi pi-calendar',
		href: '/contact',
		buttonText: 'Book Now',
	},
]

export default function HomePage() {
	return (
		<div className="flex flex-column gap-6 p-4">
			<HeroSection
				title="Welcome to Hidden Lotus"
				description="Discover your path to wellness and inner peace through our holistic approach to healing and mindfulness."
			/>

			<ButtonGroup buttons={actionButtons} />

			<ContactSection />
		</div>
	)
}
