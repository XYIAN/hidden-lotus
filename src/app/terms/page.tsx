import { Card } from 'primereact/card'
import { HeroSection } from '@/components/common/hero-section'
import type { Metadata } from 'next'

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
		<div className="min-h-screen bg-gradient-to-br from-light-tan to-sage-green-50 p-4 page-transition">
			<div className="max-w-4xl mx-auto">
				<HeroSection
					title="Terms of Service"
					description="Read our terms of service and understand your rights and responsibilities."
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
		</div>
	)
}
