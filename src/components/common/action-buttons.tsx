'use client'

import { Button } from 'primereact/button'

interface ActionButtonsProps {
	onBackToClasses: () => void
	onContactSupport: () => void
}

export function ActionButtons({ onBackToClasses, onContactSupport }: ActionButtonsProps) {
	return (
		<div className="flex flex-column md:flex-row gap-4 justify-content-center">
			<Button
				label="Back to Classes"
				icon="pi pi-arrow-left"
				className="bg-sage-green-600 border-sage-green-600 text-white"
				style={{
					color: 'white !important',
					textDecoration: 'none !important',
				}}
				onClick={onBackToClasses}
			/>
			<Button
				label="Contact Support"
				icon="pi pi-envelope"
				className="bg-pastel-pink border-pastel-pink text-secondary-brown"
				style={{
					textDecoration: 'none !important',
				}}
				onClick={onContactSupport}
			/>
		</div>
	)
}

interface BackButtonProps {
	onBackToClasses: () => void
}

export function BackButton({ onBackToClasses }: BackButtonProps) {
	return (
		<Button
			label="Back to Classes"
			icon="pi pi-arrow-left"
			className="bg-sage-green-600 border-sage-green-600 text-white"
			style={{
				color: 'white !important',
				textDecoration: 'none !important',
			}}
			onClick={onBackToClasses}
		/>
	)
}
