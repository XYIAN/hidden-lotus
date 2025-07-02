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
		<div className="flex flex-column align-items-center justify-content-center min-h-screen p-4 text-center bg-gradient-to-br from-light-tan to-white">
			<div className="max-w-lg mx-auto">
				{/* Logo with animation */}
				<div className="mb-8 animate-bounce">
					<Image
						src="/icon-hl-1.png"
						alt="Hidden Lotus"
						width={140}
						height={140}
						className="object-contain soft-rounded-lg shadow-lg"
					/>
				</div>

				{/* 404 Content with enhanced styling */}
				<div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-sage-green-200">
					<h1 className="text-8xl font-bold text-primary-green mb-4 animate-pulse">
						404
					</h1>
					<h2 className="text-3xl font-semibold text-sage-green-800 mb-4">
						Oops! Page Not Found
					</h2>
					<p className="text-earth-brown text-lg mb-8 leading-relaxed">
						We couldn&apos;t find the page you&apos;re looking for. It might
						have been moved, deleted, or you entered the wrong URL. Don&apos;t
						worry, you can always find your way back to wellness.
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
		</div>
	)
}
