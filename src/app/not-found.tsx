import Link from 'next/link'
import { Button } from 'primereact/button'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Page Not Found | Hidden Lotus',
	description:
		"The page you're looking for doesn't exist. Return to Hidden Lotus for wellness and healing services.",
	robots: {
		index: false,
		follow: false,
	},
}

export default function NotFound() {
	return (
		<div className="flex flex-column align-items-center justify-content-center min-h-screen p-4 text-center">
			<div className="max-w-md mx-auto">
				{/* Logo */}
				<div className="mb-6">
					<Image
						src="/icon-hl-1.png"
						alt="Hidden Lotus"
						width={120}
						height={120}
						className="object-contain soft-rounded-lg"
					/>
				</div>

				{/* 404 Content */}
				<h1 className="text-6xl font-bold text-primary-green mb-4">404</h1>
				<h2 className="text-2xl font-semibold text-sage-green-800 mb-3">
					Page Not Found
				</h2>
				<p className="text-earth-brown text-lg mb-6">
					We couldn&apos;t find the page you&apos;re looking for. It might have
					been moved, deleted, or you entered the wrong URL.
				</p>

				{/* Action Buttons */}
				<div className="flex flex-column gap-3 sm:flex-row sm:justify-content-center">
					<Link href="/">
						<Button
							label="Go Home"
							icon="pi pi-home"
							className="p-button-lg bg-sage-green-600 border-sage-green-600"
						/>
					</Link>
					<Link href="/contact">
						<Button
							label="Contact Us"
							icon="pi pi-envelope"
							severity="secondary"
							className="p-button-lg"
						/>
					</Link>
				</div>

				{/* Helpful Links */}
				<div className="mt-8 p-4 bg-light-tan/50 rounded-lg">
					<h3 className="text-lg font-semibold text-primary-green mb-3">
						Popular Pages
					</h3>
					<div className="flex flex-wrap gap-2 justify-content-center">
						<Link href="/classes">
							<Button label="Classes" size="small" text />
						</Link>
						<Link href="/team">
							<Button label="Team" size="small" text />
						</Link>
						<Link href="/about">
							<Button label="About" size="small" text />
						</Link>
						<Link href="/story">
							<Button label="Story" size="small" text />
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}
