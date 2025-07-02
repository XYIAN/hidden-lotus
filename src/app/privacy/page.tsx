import { Card } from 'primereact/card'
import { HeroSection } from '@/components/common/hero-section'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Privacy Policy | Hidden Lotus',
	description:
		'Read the privacy policy for Hidden Lotus. Learn how we collect, use, and protect your personal information.',
	robots: 'noindex, nofollow',
	openGraph: {
		title: 'Privacy Policy | Hidden Lotus',
		description:
			'Read the privacy policy for Hidden Lotus. Learn how we collect, use, and protect your personal information.',
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
		title: 'Privacy Policy | Hidden Lotus',
		description:
			'Read the privacy policy for Hidden Lotus. Learn how we collect, use, and protect your personal information.',
		images: ['/og-image.png'],
	},
}

export default function PrivacyPage() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-light-tan to-sage-green-50 p-4 page-transition">
			<div className="max-w-4xl mx-auto">
				<HeroSection
					title="Privacy Policy"
					description="Learn how we protect and handle your personal information."
				/>
				<Card className="yoga-card p-6 max-w-3xl mx-auto">
					<h2 className="text-xl font-bold text-primary-green mb-4">
						Our Commitment to Your Privacy
					</h2>
					<p className="text-earth-brown mb-4">
						At Hidden Lotus, we are committed to protecting your privacy and
						personal information, whether you engage with us online or attend
						our physical classes. This policy explains how we collect, use, and
						safeguard your data.
					</p>
					<h3 className="text-lg font-semibold text-primary-green mb-2">
						Information We Collect
					</h3>
					<ul className="list-disc pl-6 mb-4 text-earth-brown">
						<li>
							Personal details (name, email, phone) for class registration and
							online forms
						</li>
						<li>Payment information for class bookings (processed securely)</li>
						<li>Usage data from our website (cookies, analytics)</li>
					</ul>
					<h3 className="text-lg font-semibold text-primary-green mb-2">
						How We Use Your Information
					</h3>
					<ul className="list-disc pl-6 mb-4 text-earth-brown">
						<li>
							To provide and manage your class bookings and online account
						</li>
						<li>To communicate important updates and offers</li>
						<li>To improve our website and services</li>
					</ul>
					<h3 className="text-lg font-semibold text-primary-green mb-2">
						Your Rights
					</h3>
					<ul className="list-disc pl-6 mb-4 text-earth-brown">
						<li>
							You can request access, correction, or deletion of your data at
							any time
						</li>
						<li>
							We do not sell or share your information with third parties except
							as required by law
						</li>
					</ul>
					<p className="text-earth-brown">
						For questions about our privacy practices, please contact us at{' '}
						<a
							href="mailto:privacy@hiddenlotus.com"
							className="text-primary-green underline"
						>
							privacy@hiddenlotus.com
						</a>
						.
					</p>
				</Card>
			</div>
		</div>
	)
}
