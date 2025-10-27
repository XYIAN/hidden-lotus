import type { Metadata } from 'next'
import { Inter, Roboto_Mono } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import '../styles/main.scss'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import { Providers } from '@/lib/providers'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { BackToTop } from '@/components/layout/back-to-top'
import { GlobalLoadingOverlay } from '@/components/common/global-loading-overlay'
import { LoadingProvider } from '@/components/layout/loading-provider'

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
	display: 'swap',
})

const robotoMono = Roboto_Mono({
	subsets: ['latin'],
	variable: '--font-roboto-mono',
	display: 'swap',
})

export const metadata: Metadata = {
	title: {
		template: '%s | Hidden Lotus',
		default: 'Hidden Lotus - Wellness & Healing Center',
	},
	description:
		'Discover authentic wellness experiences at Hidden Lotus. From yoga and meditation to reiki healing, we provide holistic approaches to your well-being journey.',
	keywords:
		'wellness, yoga, meditation, reiki, healing, holistic health, mindfulness, wellness center, spiritual healing, energy healing, mindfulness practice',
	authors: [{ name: 'Hidden Lotus' }],
	creator: 'Hidden Lotus',
	publisher: 'Hidden Lotus',
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	metadataBase: new URL('https://hiddenlotusmor.com'),
	alternates: {
		canonical: '/',
	},
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: 'https://hiddenlotusmor.com',
		siteName: 'Hidden Lotus',
		title: 'Hidden Lotus - Wellness & Healing Center',
		description:
			'Discover authentic wellness experiences at Hidden Lotus. From yoga and meditation to reiki healing, we provide holistic approaches to your well-being journey.',
		images: [
			{
				url: '/og-image.svg',
				width: 1200,
				height: 630,
				alt: 'Hidden Lotus - Wellness & Healing Center',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Hidden Lotus - Wellness & Healing Center',
		description:
			'Discover authentic wellness experiences at Hidden Lotus. From yoga and meditation to reiki healing, we provide holistic approaches to your well-being journey.',
		images: ['/og-image.svg'],
		creator: '@hiddenlotus',
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
	category: 'wellness',
	classification: 'Health & Wellness',
	other: {
		'og:image:width': '1200',
		'og:image:height': '630',
		'og:image:type': 'image/svg+xml',
		'twitter:image:alt': 'Hidden Lotus - Wellness & Healing Center',
		'twitter:site': '@hiddenlotus',
		'twitter:domain': 'hiddenlotusmor.com',
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<head>
				{/* Additional Meta Tags for Social Media */}
				<meta property="og:image:width" content="1200" />
				<meta property="og:image:height" content="630" />
				<meta property="og:image:type" content="image/svg+xml" />
				<meta
					name="twitter:image:alt"
					content="Hidden Lotus - Wellness & Healing Center"
				/>
				<meta name="twitter:site" content="@hiddenlotus" />
				<meta name="twitter:domain" content="hiddenlotusmor.com" />

				{/* Calendly CSS */}
				<link
					href="https://assets.calendly.com/assets/external/widget.css"
					rel="stylesheet"
				/>

				{/* Google Analytics */}
				<Script
					src="https://www.googletagmanager.com/gtag/js?id=G-YH7KD83RSD"
					strategy="afterInteractive"
				/>
				<Script id="google-analytics" strategy="afterInteractive">
					{`
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', 'G-YH7KD83RSD');
					`}
				</Script>

				{/* Calendly Badge Widget */}
				<Script
					src="https://assets.calendly.com/assets/external/widget.js"
					type="text/javascript"
					strategy="afterInteractive"
				/>
				<Script id="calendly-badge" strategy="afterInteractive">
					{`
						window.onload = function() { 
							Calendly.initBadgeWidget({ 
								url: 'https://calendly.com/hiddenlotusjvn?background_color=ede8e0&text_color=5d4e37&primary_color=6b8e5a', 
								text: 'Book Your Class Now!', 
								color: '#6b8e5a', 
								textColor: '#ffffff', 
								branding: false 
							}); 
						}
					`}
				</Script>
			</head>
			<body
				className={`${inter.variable} ${robotoMono.variable} antialiased overflow-x-hidden`}
				style={{
					backgroundColor: '#dbcbb1',
					backgroundImage: 'url("/bg-main.png")',
					backgroundSize: 'cover',
					backgroundPosition: 'center center',
					backgroundRepeat: 'no-repeat',
					backgroundAttachment: 'fixed',
				}}
			>
				<Providers>
					<LoadingProvider>
						<div className="min-h-screen flex flex-column">
							<Header />
							<main className="flex-1">{children}</main>
							<Footer />
							<BackToTop />
							<GlobalLoadingOverlay />
						</div>
					</LoadingProvider>
				</Providers>
			</body>
		</html>
	)
}
