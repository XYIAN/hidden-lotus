import { Card } from 'primereact/card'
import { HeroSection } from '@/components/common/hero-section'
import type { Metadata } from 'next'

const termsSections = [
	{
		title: 'Acceptance of Terms',
		content:
			'By accessing and using the Hidden Lotus website and services, you accept and agree to be bound by the terms and provision of this agreement.',
		icon: 'pi pi-check-circle',
		color: 'bg-soft-sage',
		textColor: 'text-sage',
	},
	{
		title: 'Use License',
		content:
			'Permission is granted to temporarily download one copy of the materials on Hidden Lotus website for personal, non-commercial transitory viewing only.',
		icon: 'pi pi-file',
		color: 'bg-pastel-pink',
		textColor: 'text-secondary-brown',
	},
	{
		title: 'Disclaimer',
		content:
			'The materials on Hidden Lotus website are provided on an "as is" basis. Hidden Lotus makes no warranties, expressed or implied, and hereby disclaims all other warranties.',
		icon: 'pi pi-exclamation-triangle',
		color: 'bg-sage',
		textColor: 'text-white',
	},
	{
		title: 'Limitations',
		content:
			'In no event shall Hidden Lotus or its suppliers be liable for any damages arising out of the use or inability to use the materials on our website.',
		icon: 'pi pi-shield',
		color: 'bg-earth-brown',
		textColor: 'text-white',
	},
]

export const metadata: Metadata = {
	title: 'Terms of Service | Hidden Lotus',
	description:
		'Read the terms of service for Hidden Lotus. Understand your rights and responsibilities when using our website and services.',
	robots: 'noindex, nofollow',
	openGraph: {
		title: 'Terms of Service | Hidden Lotus',
		description:
			'Read the terms of service for Hidden Lotus. Understand your rights and responsibilities when using our website and services.',
		images: [
			{
				url: '/og-image.png',
				width: 1200,
				height: 630,
				alt: 'Hidden Lotus Logo',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Terms of Service | Hidden Lotus',
		description:
			'Read the terms of service for Hidden Lotus. Understand your rights and responsibilities when using our website and services.',
		images: ['/og-image.png'],
	},
}

export default function TermsPage() {
	return (
		<div className="flex flex-column gap-6 p-4 page-transition">
			<HeroSection
				title="Terms & Conditions"
				description="Review the terms and conditions for using Hidden Lotus online content and attending physical classes."
			/>
			<Card className="yoga-card p-6 max-w-3xl mx-auto">
				<h2 className="text-xl font-bold text-primary-green mb-4">
					Terms of Service
				</h2>
				<p className="text-earth-brown mb-4">
					By accessing or using Hidden Lotus online content or attending our
					physical classes, you agree to the following terms and conditions.
					Please read them carefully.
				</p>
				<h3 className="text-lg font-semibold text-primary-green mb-2">
					Online Content
				</h3>
				<ul className="list-disc pl-6 mb-4 text-earth-brown">
					<li>
						All online materials are for personal, non-commercial use only
					</li>
					<li>
						Do not share, reproduce, or distribute our content without
						permission
					</li>
					<li>Participation in online classes is at your own risk</li>
				</ul>
				<h3 className="text-lg font-semibold text-primary-green mb-2">
					Physical Classes
				</h3>
				<ul className="list-disc pl-6 mb-4 text-earth-brown">
					<li>Arrive on time and respect the studio environment</li>
					<li>Inform instructors of any health conditions before class</li>
					<li>Follow all safety guidelines and instructions</li>
					<li>Hidden Lotus is not responsible for personal belongings</li>
				</ul>
				<h3 className="text-lg font-semibold text-primary-green mb-2">
					General Terms
				</h3>
				<ul className="list-disc pl-6 mb-4 text-earth-brown">
					<li>We reserve the right to update these terms at any time</li>
					<li>Violation of these terms may result in suspension of access</li>
					<li>
						Contact us at{' '}
						<a
							href="mailto:info@hiddenlotus.com"
							className="text-primary-green underline"
						>
							info@hiddenlotus.com
						</a>{' '}
						with any questions
					</li>
				</ul>
			</Card>
		</div>
	)
}
