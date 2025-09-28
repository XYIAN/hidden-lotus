'use client'

import { HeroSection } from '@/components/common/hero-section'
import { ButtonGroup } from '@/components/home/button-group'
// import { ContactSection } from '@/components/home/contact-section' // Commented out for future use
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
	// }, // Commented out for future use
]

export default function HomePage() {
	return (
		<div className="flex flex-column gap-4 p-4">
			<HeroSection
				title="Welcome to Hidden Lotus"
				description="Discover your path to wellness and inner peace."
			/>
			<div className="text-center -mt-2">
				<p className="text-base text-sage-green-700 font-semibold italic">
					All classes donation-based through October. Come visit!
				</p>
			</div>
			<ButtonGroup buttons={actionButtons} />
			{/* <ContactSection /> */} {/* Commented out for future use */}
		</div>
	)
}
