'use client'

import { Card } from 'primereact/card'
import { Button } from 'primereact/button'
import { Tag } from 'primereact/tag'
import { Calendar } from 'primereact/calendar'
import { Class } from '@/constants/classes'
import Link from 'next/link'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import '@/styles/animations.css'

interface ClassCardProps {
	classData: Class
	className?: string
}

export function ClassCard({ classData, className = '' }: ClassCardProps) {
	const { ref, isIntersecting } = useIntersectionObserver()

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
			ref={ref}
			className={`${className} ${
				isIntersecting ? 'animate-on-scroll animate' : 'animate-on-scroll'
			} aspect-[4/5] md:aspect-[3/4] sm:aspect-[1/1] w-full max-w-xs md:max-w-sm lg:max-w-md mx-auto flex`}
		>
			<Card
				className="yoga-card hover-lift w-full h-full flex flex-col"
				style={{ minHeight: '320px' }}
			>
				<div className="flex flex-column h-full">
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
						{classData.categories.map((category, index) => (
							<Tag
								key={index}
								value={category
									.replace('-', ' ')
									.replace(/\b\w/g, (l) => l.toUpperCase())}
								className={`text-xs ${getCategoryColor(category)} border-0`}
							/>
						))}
					</div>

					{/* Level */}
					<div className="mb-3 flex justify-content-center">
						<Tag
							value={
								classData.level.charAt(0).toUpperCase() +
								classData.level.slice(1)
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
								<span className="text-sm text-earth-brown">
									{classData.time}
								</span>
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
								{classData.equipment.map((item, index) => (
									<Tag
										key={index}
										value={item}
										className="text-xs bg-light-tan border-sage-green-200 text-earth-brown"
									/>
								))}
							</div>
						</div>
					)}

					{/* Book Now Button - Centered with pulsing effect */}
					<div className="flex justify-content-center mt-auto">
						<Link href={`/classes/${classData.id}`}>
							<Button
								label="Book Now"
								icon="pi pi-calendar-plus"
								iconPos="right"
								className="bg-pastel-pink border-pastel-pink text-secondary-brown button-pulse"
								style={{ minWidth: '120px' }}
							/>
						</Link>
					</div>
				</div>
			</Card>
		</div>
	)
}
