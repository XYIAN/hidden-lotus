'use client'

import { ScrollTop } from 'primereact/scrolltop'
import '@/styles/back-to-top.css'

export function BackToTop() {
	return (
		<ScrollTop
			target="window"
			threshold={100}
			icon="pi pi-arrow-up"
			className="custom-scroll-top"
			style={{
				zIndex: 9999,
				position: 'fixed',
				bottom: '2rem',
				right: '2rem',
				width: '3.5rem',
				height: '3.5rem',
				background: 'linear-gradient(135deg, #6b8e5a, #4a7c59)',
				border: '2px solid #8baa7a',
				borderRadius: '50%',
				boxShadow: '0 4px 12px rgba(139, 69, 19, 0.3)',
				transition: 'all 0.3s ease',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		/>
	)
}
