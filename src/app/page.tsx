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
	// {
	// 	title: 'Get in Touch',
	// 	description: 'Contact us for personalized wellness guidance',
	// 	icon: 'pi pi-envelope',
	// 	href: '/contact',
	// 	buttonText: 'Contact Us',
	// },
	// commented out the contact section for now 
]

export default function HomePage() {
	return (
		<div className="flex flex-column gap-3 lg:gap-5 p-2 mb-6">
			<HeroSection
				title="Welcome to Hidden Lotus"
				description="Discover your path to wellness and inner peace through our holistic approach to healing and mindfulness."
			/>

			<ButtonGroup buttons={actionButtons} />

			{/* <ContactSection /> */} 
			{/* commented out the contact section  */}
		</div>
	)
}
