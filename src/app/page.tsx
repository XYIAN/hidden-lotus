import { Card } from 'primereact/card'
import { Button } from 'primereact/button'
import Link from 'next/link'
import Image from 'next/image'
import { ButtonGroup } from '@/components/home/button-group'
import { HeroSection } from '@/components/common/hero-section'
import { ContactSection } from '@/components/home/contact-section'
import '@/styles/home-buttons.css'

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
