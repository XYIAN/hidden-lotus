'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

interface LoadingProviderProps {
	children: React.ReactNode
}

export function LoadingProvider({ children }: LoadingProviderProps) {
	const [loading, setLoading] = useState(false)
	const pathname = usePathname()

	useEffect(() => {
		// Show loading on route change
		setLoading(true)
		const timer = setTimeout(() => setLoading(false), 1000)
		return () => clearTimeout(timer)
	}, [pathname])

	return (
		<>
			{children}
			{loading && (
				<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 transition-opacity duration-300">
					<div className="bg-white rounded-full p-6 shadow-lg flex flex-col items-center">
						<span className="loader mb-2"></span>
						<span className="text-primary-green font-semibold">Loading...</span>
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
		</>
	)
}
