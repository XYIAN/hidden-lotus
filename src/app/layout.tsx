import type { Metadata } from 'next'
import { Inter, Roboto_Mono } from 'next/font/google'
import './globals.css'
import { Providers } from '@/lib/providers'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { BackToTop } from '@/components/layout/back-to-top'
import { GlobalLoadingOverlay } from '@/components/common/global-loading-overlay'
import { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'

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
	metadataBase: new URL(
		process.env.NEXT_PUBLIC_SITE_URL || 'https://hidden-lotus.netlify.app'
	),
	alternates: {
		canonical: '/',
	},
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: process.env.NEXT_PUBLIC_SITE_URL || 'https://hidden-lotus.netlify.app',
		siteName: 'Hidden Lotus',
		title: 'Hidden Lotus - Wellness & Healing Center',
		description:
			'Discover authentic wellness experiences at Hidden Lotus. From yoga and meditation to reiki healing, we provide holistic approaches to your well-being journey.',
		images: [
			{
				url: '/og-image.png',
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
		images: ['/og-image.png'],
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
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const [loading, setLoading] = useState(false)
	const router = useRouter()
	const pathname = usePathname()

	useEffect(() => {
		let timeout: NodeJS.Timeout | null = null
		const handleStart = () => {
			setLoading(true)
		}
		const handleComplete = () => {
			// Always show for at least 1s
			timeout = setTimeout(() => setLoading(false), 1000)
		}
		router.events?.on('routeChangeStart', handleStart)
		router.events?.on('routeChangeComplete', handleComplete)
		router.events?.on('routeChangeError', handleComplete)
		return () => {
			router.events?.off('routeChangeStart', handleStart)
			router.events?.off('routeChangeComplete', handleComplete)
			router.events?.off('routeChangeError', handleComplete)
			if (timeout) clearTimeout(timeout)
		}
	}, [router])

	return (
		<html lang="en">
			<body className={`${inter.variable} ${robotoMono.variable} antialiased`}>
				<Providers>
					<div className="min-h-screen flex flex-column">
						<Header />
						<main className="flex-1">{children}</main>
						<Footer />
						<BackToTop />
						<GlobalLoadingOverlay />
						{loading && (
							<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 transition-opacity duration-300">
								<div className="bg-white rounded-full p-6 shadow-lg flex flex-col items-center">
									<span className="loader mb-2"></span>
									<span className="text-primary-green font-semibold">
										Loading...
									</span>
								</div>
								<style jsx>{`
									.loader {
										border: 4px solid #e0e0e0;
										border-top: 4px solid #7e9c6f;
										border-radius: 50%;
										width: 36px;
										height: 36px;
										animation: spin 1s linear infinite;
									}
									@keyframes spin {
										0% {
											transform: rotate(0deg);
										}
										100% {
											transform: rotate(360deg);
										}
									}
								`}</style>
							</div>
						)}
					</div>
				</Providers>
			</body>
		</html>
	)
}
