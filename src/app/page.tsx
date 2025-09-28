'use client'

import { HeroSection } from '@/components/common/hero-section'
import { ButtonGroup } from '@/components/home/button-group'
import { Button } from 'primereact/button'
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
			{/* Contact Information */}
			<div className="text-center mb-4">
				<div className="mb-3">
					<p className="text-lg text-sage-green-700 font-semibold mb-3">
						11770 Warner Avenue, Ste 126 Fountain Valley, CA 92708
					</p>
				</div>
				<div className="flex justify-content-center gap-4">
					<Button
						label="Email"
						icon="pi pi-envelope"
						className="bg-sage-green-600 border-sage-green-600 hover:bg-sage-green-700 text-white"
						onClick={() =>
							window.open('mailto:hiddenlotusjvn@gmail.com', '_blank')
						}
						style={{
							padding: '8px 16px',
							fontSize: '14px',
							fontWeight: '500',
							color: 'white',
							gap: '8px',
						}}
					/>
					<Button
						label="Phone"
						icon="pi pi-phone"
						className="bg-sage-green-600 border-sage-green-600 hover:bg-sage-green-700 text-white"
						onClick={() => window.open('tel:714-794-9405', '_blank')}
						style={{
							padding: '8px 16px',
							fontSize: '14px',
							fontWeight: '500',
							color: 'white',
							gap: '8px',
						}}
					/>
				</div>
			</div>
			<div className="text-center -mt-4">
				<p className="text-lg text-sage-green-700 font-bold italic">
					All classes donation-based through October. Come visit!
				</p>
			</div>
			<ButtonGroup buttons={actionButtons} />
			{/* <ContactSection /> */} {/* Commented out for future use */}
		</div>
	)
}
