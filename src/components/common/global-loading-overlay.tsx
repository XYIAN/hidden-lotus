'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { ProgressSpinner } from 'primereact/progressspinner'

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
		<div
			style={{
				position: 'fixed',
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
				width: '100vw',
				height: '100vh',
				zIndex: 9999,
				backgroundColor: 'rgba(139, 115, 85, 0.6)',
				backdropFilter: 'blur(4px)',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<div
				className="flex flex-column gap-3 p-6"
				style={{
					background: 'linear-gradient(135deg, #f0ede4 0%, #f5f1e8 100%)',
					borderRadius: '16px',
					boxShadow: '0 8px 32px rgba(139, 69, 19, 0.3)',
					border: '2px solid #8baa7a',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<ProgressSpinner
					style={{ 
						width: '40px', 
						height: '40px',
						color: '#4a7c59'
					}}
					strokeWidth="4"
					fill="transparent"
					animationDuration="1s"
				/>
				<span
					style={{ 
						fontSize: '14px',
						fontWeight: '600',
						color: '#4a7c59'
					}}
				>
					Loading...
				</span>
			</div>
		</div>
	)
}
