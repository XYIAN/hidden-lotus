'use client'

import { Card } from 'primereact/card'
import { Button } from 'primereact/button'
import { Tag } from 'primereact/tag'
import { Class } from '@/constants/classes'
import Link from 'next/link'
import '@/styles/animations.css'

interface ClassCardProps {
	classData: Class
	className?: string
}

export function ClassCard({ classData }: ClassCardProps) {
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
			beginner: 'bg-pastel-pink',
			intermediate: 'bg-pastel-pink',
			advanced: 'bg-pastel-pink',
		}
		return colors[level] || 'bg-pastel-pink'
	}

	return (
		<Card
			className="yoga-card hover-lift w-full h-full flex flex-column"
			style={{ minHeight: '320px' }}
		>
			<div
				className="flex flex-column h-full div-check"
				style={{ display: 'flex', flexDirection: 'column' }}
			>
				{/* Header */}
				<div className="mb-3">
					<h3 className="text-xl font-semibold text-primary-green mb-2">
						{classData.name}
					</h3>
					<p className="text-earth-brown text-sm mb-3">
						{classData.description}
					</p>
				</div>

				{/* Categories */}
				<div className="flex flex-wrap gap-2 mb-3 justify-content-center">
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
				<div className="mb-3 flex justify-content-center">
					<Tag
						value={
							classData.level.charAt(0).toUpperCase() + classData.level.slice(1)
						}
						className={`text-xs ${getLevelColor(classData.level)} border-0`}
					/>
				</div>

				{/* Details */}
				<div className="flex justify-content-center mb-4 flex-grow-1">
					<div className="flex flex-column gap-2">
						<div className="flex align-items-center gap-2">
							<i className="pi pi-user text-sage-green-600"></i>
							<span className="text-sm text-earth-brown">
								{classData.instructor}
							</span>
						</div>
						<div className="flex align-items-center gap-2">
							<i className="pi pi-clock text-sage-green-600"></i>
							<span className="text-sm text-earth-brown">{classData.time}</span>
						</div>
						<div className="flex align-items-center gap-2">
							<i className="pi pi-calendar text-sage-green-600"></i>
							<span className="text-sm text-earth-brown">
								{classData.duration}
							</span>
						</div>
						<div className="flex align-items-center gap-2">
							<i className="pi pi-dollar text-sage-green-600"></i>
							<span className="text-sm text-earth-brown">
								{classData.price}
							</span>
						</div>
						<div className="flex align-items-center gap-2">
							<i className="pi pi-users text-sage-green-600"></i>
							<span className="text-sm text-earth-brown">
								Max {classData.maxParticipants} participants
							</span>
						</div>
					</div>
				</div>

				{/* Equipment */}
				{classData.equipment && classData.equipment.length > 0 && (
					<div className="mb-4">
						<h4 className="text-sm font-semibold text-primary-green mb-2">
							Equipment Needed:
						</h4>
						<div className="flex flex-wrap gap-1 justify-content-center">
							{classData.equipment.map((item: string, index: number) => (
								<Tag
									key={index}
									value={item}
									className="text-xs bg-light-tan border-sage-green-200 text-earth-brown"
								/>
							))}
						</div>
					</div>
				)}

				{/* Details Button - Centered */}
				<div className="flex justify-content-center mt-auto">
					<Link href={`/classes/${classData.id}`}>
						<Button
							label="Details"
							icon="pi pi-info-circle"
							iconPos="right"
							className="bg-sage-green-600 border-sage-green-600 text-white hover:bg-sage-green-700"
							style={{ minWidth: '120px' }}
						/>
					</Link>
				</div>
			</div>
		</Card>
	)
}
