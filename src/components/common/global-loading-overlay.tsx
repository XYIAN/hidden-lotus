'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'

export function GlobalLoadingOverlay() {
	const [loading, setLoading] = useState(false)
	const timerRef = useRef<NodeJS.Timeout | null>(null)
	const prevPath = useRef<string | null>(null)
	const pathname = usePathname()

	useEffect(() => {
		if (prevPath.current && prevPath.current !== pathname) {
			setLoading(true)
			if (timerRef.current) clearTimeout(timerRef.current)
			timerRef.current = setTimeout(() => setLoading(false), 1000)
		}
		prevPath.current = pathname
		// Cleanup on unmount
		return () => {
			if (timerRef.current) clearTimeout(timerRef.current)
		}
	}, [pathname])

	if (!loading) return null

	return (
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
	)
}
