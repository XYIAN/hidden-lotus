import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Hidden Lotus Membership - Complete Wellness Program',
	description:
		'Join our exclusive wellness membership program with unlimited access to yoga, meditation, wellness coaching, and holistic healing. Transform your life with personalized guidance and community support.',
	keywords:
		'wellness membership, yoga membership, meditation membership, holistic health, wellness coaching, wellness community, wellness programs, mindfulness membership, healing membership, wellness center membership',
	openGraph: {
		title: 'Hidden Lotus Membership - Complete Wellness Program',
		description:
			'Join our exclusive wellness membership program with unlimited access to yoga, meditation, wellness coaching, and holistic healing.',
		url: 'https://hidden-lotus.netlify.app/membership',
		siteName: 'Hidden Lotus',
		images: [
			{
				url: 'https://hidden-lotus.netlify.app/og-image.png',
				width: 1200,
				height: 630,
				alt: 'Hidden Lotus Membership - Complete Wellness Program',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Hidden Lotus Membership - Complete Wellness Program',
		description:
			'Join our exclusive wellness membership program with unlimited access to yoga, meditation, wellness coaching, and holistic healing.',
		images: ['https://hidden-lotus.netlify.app/og-image.png'],
		creator: '@hiddenlotus',
	},
	alternates: {
		canonical: 'https://hidden-lotus.netlify.app/membership',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	verification: {
		google: 'your-google-verification-code',
	},
}

export default function MembershipLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return children
}


