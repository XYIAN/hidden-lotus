import { Card } from 'primereact/card'
import { HeroSection } from '@/components/common/hero-section'
import type { Metadata } from 'next'

const privacySections = [
	{
		title: 'Information We Collect',
		content:
			'We collect information you provide directly to us, such as when you create an account, make a booking, or contact us. This may include your name, email address, phone number, and any other information you choose to provide.',
		icon: 'pi pi-info-circle',
		color: 'bg-soft-sage',
		textColor: 'text-sage',
	},
	{
		title: 'How We Use Your Information',
		content:
			'We use the information we collect to provide, maintain, and improve our services, communicate with you, and personalize your experience. We may also use your information to send you updates about our services.',
		icon: 'pi pi-cog',
		color: 'bg-pastel-pink',
		textColor: 'text-secondary-brown',
	},
	{
		title: 'Information Sharing',
		content:
			'We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy or as required by law.',
		icon: 'pi pi-shield',
		color: 'bg-sage',
		textColor: 'text-white',
	},
	{
		title: 'Data Security',
		content:
			'We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.',
		icon: 'pi pi-lock',
		color: 'bg-earth-brown',
		textColor: 'text-white',
	},
]

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
		<div className="flex flex-column gap-6 p-4 page-transition">
			<HeroSection
				title="Privacy Policy"
				description="Learn how Hidden Lotus protects your privacy for both online content and physical classes."
			/>
			<Card className="yoga-card p-6 max-w-3xl mx-auto">
				<h2 className="text-xl font-bold text-primary-green mb-4">
					Our Commitment to Your Privacy
				</h2>
				<p className="text-earth-brown mb-4">
					At Hidden Lotus, we are committed to protecting your privacy and
					personal information, whether you engage with us online or attend our
					physical classes. This policy explains how we collect, use, and
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
					<li>To provide and manage your class bookings and online account</li>
					<li>To communicate important updates and offers</li>
					<li>To improve our website and services</li>
				</ul>
				<h3 className="text-lg font-semibold text-primary-green mb-2">
					Your Rights
				</h3>
				<ul className="list-disc pl-6 mb-4 text-earth-brown">
					<li>
						You can request access, correction, or deletion of your data at any
						time
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
	)
}
