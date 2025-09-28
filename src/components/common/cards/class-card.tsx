'use client'

import { Button } from 'primereact/button'
import { Tag } from 'primereact/tag'
import { Image } from 'primereact/image'
import { Class } from '@/constants/classes'
import '@/styles/animations.css'

interface ClassCardProps {
	classData: Class
	className?: string
}

export function ClassCard({ classData }: ClassCardProps) {
	// Debug: Log the image path
	console.log('ClassCard image path:', classData.image)

	const getCategoryColor = (category: string) => {
		const colors: Record<string, string> = {
			yoga: 'bg-sage-green-600',
			reiki: 'bg-pastel-pink',
			seminar: 'bg-yellow-gold',
			cupping: 'bg-brown',
			podcast: 'bg-sage-green-400',
			meditation: 'bg-olive-green',
			fitness: 'bg-sage-green-600',
			healing: 'bg-pastel-pink',
			'weight-training': 'bg-brown',
			pilates: 'bg-sage-green-400',
			breathwork: 'bg-olive-green',
			'sound-healing': 'bg-pastel-pink',
		}
		return colors[category] || 'bg-sage-green-600'
	}

	const getLevelColor = (level: string) => {
		const colors: Record<string, string> = {
			beginner: 'bg-green-500',
			intermediate: 'bg-yellow-500',
			advanced: 'bg-red-500',
		}
		return colors[level] || 'bg-green-500'
	}

	return (
		<div
			className="w-full h-full flex flex-column"
			style={{
				background: 'linear-gradient(135deg, #f0ede4 0%, #f5f1e8 100%)',
				border: '1px solid #8baa7a',
				borderRadius: '16px',
				boxShadow: '0 4px 12px rgba(139, 69, 19, 0.1)',
				transition: 'all 0.3s ease',
				height: '100%',
				width: '100%',
				display: 'flex',
				flexDirection: 'column',
				textAlign: 'center',
				minHeight: '0',
			}}
			onMouseEnter={(e) => {
				e.currentTarget.style.transform = 'translateY(-2px)'
				e.currentTarget.style.boxShadow = '0 8px 20px rgba(139, 69, 19, 0.15)'
			}}
			onMouseLeave={(e) => {
				e.currentTarget.style.transform = 'translateY(0)'
				e.currentTarget.style.boxShadow = '0 4px 12px rgba(139, 69, 19, 0.1)'
			}}
		>
			<div
				className="flex flex-column h-full p-6"
				style={{
					display: 'flex',
					flexDirection: 'column',
					height: '100%',
					justifyContent: 'space-between',
					textAlign: 'center',
				}}
			>
				{/* Header */}
				<div className="mb-4">
					<h3
						className="text-xl font-semibold text-primary-green mb-3"
						style={{ textAlign: 'center' }}
					>
						{classData.name}
					</h3>
				</div>

				{/* Image */}
				{classData.image && (
					<div className="mb-4 flex justify-content-center">
						<Image
							src={classData.image}
							alt={classData.name}
							width="200"
							height="128"
							className="w-48 h-32 object-cover rounded-lg"
							onLoad={() => {
								console.log(
									'✅ Class image loaded successfully:',
									classData.image
								)
							}}
							onError={(e) => {
								console.log('❌ Class image error:', classData.image, e)
							}}
						/>
					</div>
				)}

				{/* Categories */}
				<div className="flex flex-wrap gap-2 mb-4 justify-content-center">
					{classData.categories.map((category: string, index: number) => (
						<Tag
							key={index}
							value={category
								.split('-')
								.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
								.join(' ')}
							className={`text-xs ${getCategoryColor(category)} border-0`}
						/>
					))}
				</div>

				{/* Level */}
				<div className="mb-2 flex justify-content-center">
					<Tag
						value={
							classData.level.charAt(0).toUpperCase() + classData.level.slice(1)
						}
						className={`text-xs ${getLevelColor(classData.level)} border-0`}
						style={{
							padding: '4px 8px',
							margin: '0',
						}}
					/>
				</div>

				{/* Details */}
				<div className="mb-4 flex-grow-1 flex justify-content-center">
					<div
						className="flex flex-column gap-2 text-center"
						style={{ width: '100%', maxWidth: '300px' }}
					>
						<div className="flex align-items-center gap-2 justify-content-center">
							<i className="pi pi-clock text-sage-green-600"></i>
							<span className="text-sm text-earth-brown">{classData.time}</span>
						</div>
						<div className="flex align-items-center gap-2 justify-content-center">
							<i className="pi pi-calendar text-sage-green-600"></i>
							<span className="text-sm text-earth-brown">
								{classData.duration}
							</span>
						</div>
					</div>
				</div>

				{/* Equipment */}
				{classData.equipment && classData.equipment.length > 0 && (
					<div className="mb-4" style={{ textAlign: 'center' }}>
						<h4
							className="text-sm font-semibold text-primary-green mb-3"
							style={{ textAlign: 'center' }}
						>
							Equipment Needed:
						</h4>
						<div className="flex flex-wrap gap-2 justify-content-center">
							{classData.equipment.map((item: string, index: number) => (
								<Tag
									key={index}
									value={item}
									className="text-xs bg-light-tan border-sage-green-200 text-earth-brown"
									style={{
										background: '#f0ede4',
										border: '1px solid #8baa7a',
										borderRadius: '12px',
										padding: '4px 8px',
									}}
								/>
							))}
						</div>
					</div>
				)}

				{/* Details Button - Centered */}
				<div className="flex justify-content-center mt-auto">
					<Button
						label="Details"
						icon="pi pi-info-circle"
						iconPos="right"
						style={{
							minWidth: '120px',
							background: '#4a7c59',
							border: '1px solid #4a7c59',
							color: 'white',
							borderRadius: '8px',
							padding: '8px 16px',
							fontWeight: '500',
							textDecoration: 'none !important',
						}}
						onClick={() => (window.location.href = `/classes/${classData.id}`)}
						onMouseEnter={(e) => {
							e.currentTarget.style.background = '#3d6b4a'
							e.currentTarget.style.borderColor = '#3d6b4a'
						}}
						onMouseLeave={(e) => {
							e.currentTarget.style.background = '#4a7c59'
							e.currentTarget.style.borderColor = '#4a7c59'
						}}
					/>
				</div>
			</div>
		</div>
	)
}
