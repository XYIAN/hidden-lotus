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
			}}
		/>
	)
}
