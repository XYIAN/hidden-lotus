'use client'

import { useState } from 'react'
import { Card, CardProps } from 'primereact/card'
import { Tag } from 'primereact/tag'
import { Button } from 'primereact/button'
import Image from 'next/image'
import { LoadingSkeleton } from './loading-skeleton'

interface CardData {
	id?: string
	name?: string
	title?: string
	description?: string
	bio?: string
	image?: string
	fallbackIcon?: string
	type?: string
	profession?: string
	credentials?: string
	specialties?: string[]
	certifications?: string[]
	price?: string
	duration?: string
	level?: string
	category?: string
	href?: string
	onClick?: () => void
}

interface DisplayCardProps
	extends Omit<CardProps, 'title' | 'subtitle' | 'content'> {
	data: CardData
	showImage?: boolean
	showType?: boolean
	showSpecialties?: boolean
	showCertifications?: boolean
	showPrice?: boolean
	showDuration?: boolean
	showLevel?: boolean
	showCategory?: boolean
	showCredentials?: boolean
	showProfession?: boolean
	showBio?: boolean
	showDescription?: boolean
	showLearnMore?: boolean
	learnMoreText?: string
	aspectRatio?: string
	className?: string
}

export function DisplayCard({
	data,
	showImage = true,
	showType = true,
	showSpecialties = true,
	showCertifications = false,
	showPrice = false,
	showDuration = false,
	showLevel = false,
	showCategory = false,
	showCredentials = true,
	showProfession = true,
	showBio = true,
	showDescription = true,
	showLearnMore = true,
	learnMoreText = 'Learn More',
	aspectRatio = 'aspect-[4/5] md:aspect-[3/4] sm:aspect-[1/1]',
	className = '',
	...cardProps
}: DisplayCardProps) {
	const [imageLoaded, setImageLoaded] = useState(false)
	const [imageError, setImageError] = useState(false)

	const getTypeColor = (type: string) => {
		switch (type?.toLowerCase()) {
			case 'instructor':
			case 'yoga':
				return 'success'
			case 'admin':
			case 'reiki':
				return 'info'
			case 'board':
			case 'meditation':
				return 'warning'
			case 'healing':
				return 'danger'
			default:
				return 'info'
		}
	}

	const getTypeIcon = (type: string) => {
		switch (type?.toLowerCase()) {
			case 'instructor':
				return 'pi pi-user'
			case 'yoga':
				return 'pi pi-heart'
			case 'reiki':
				return 'pi pi-star'
			case 'meditation':
				return 'pi pi-moon'
			case 'healing':
				return 'pi pi-plus-circle'
			default:
				return 'pi pi-user'
		}
	}

	const handleCardClick = () => {
		if (data.onClick) {
			data.onClick()
		} else if (data.href) {
			window.location.href = data.href
		}
	}

	const footer = showLearnMore ? (
		<Button
			label={learnMoreText}
			icon="pi pi-info-circle"
			onClick={handleCardClick}
			className="p-button-sm bg-soft-sage border-soft-sage"
		/>
	) : undefined

	const title = data.name || data.title
	const subtitle = data.profession || data.credentials

	return (
		<div
			className={`${aspectRatio} w-full max-w-xs md:max-w-sm lg:max-w-md mx-auto flex ${className}`}
		>
			<Card
				className="yoga-card w-full h-full flex flex-col"
				footer={footer}
				{...cardProps}
			>
				<div className="text-center">
					{/* Image Section */}
					{showImage && (data.image || data.fallbackIcon) && (
						<div className="flex justify-content-center mb-2">
							<div className="relative">
								{!imageLoaded && !imageError && (
									<LoadingSkeleton
										type="image"
										className="icon-xl soft-rounded"
									/>
								)}
								{imageError && (
									<div className="icon-xl bg-light-tan soft-rounded flex align-items-center justify-content-center sage-border">
										<i
											className={`${
												data.fallbackIcon || 'pi pi-user'
											} text-4xl text-sage`}
										></i>
									</div>
								)}
								{!imageError && data.image && (
									<Image
										src={data.image}
										alt={`${title} image`}
										width={88}
										height={88}
										className={`icon-xl object-contain soft-rounded sage-border ${
											imageLoaded ? 'block' : 'hidden'
										}`}
										onLoad={() => setImageLoaded(true)}
										onError={() => setImageError(true)}
									/>
								)}
							</div>
						</div>
					)}

					{/* Title */}
					{title && (
						<h3 className="text-xl font-semibold text-primary-green mb-1">
							{title}
						</h3>
					)}

					{/* Type Tag */}
					{showType && data.type && (
						<div className="flex justify-center mb-1">
							<Tag
								value={data.type}
								severity={getTypeColor(data.type)}
								className="capitalize"
							/>
						</div>
					)}

					{/* Profession */}
					{showProfession && data.profession && (
						<p className="text-sm font-medium text-secondary-brown mb-1">
							{data.profession}
						</p>
					)}

					{/* Credentials */}
					{showCredentials && data.credentials && (
						<p className="text-xs text-earth-brown mb-1">{data.credentials}</p>
					)}

					{/* Specialties */}
					{showSpecialties &&
						data.specialties &&
						data.specialties.length > 0 && (
							<div className="flex flex-wrap justify-center gap-1 mb-2">
								{data.specialties.slice(0, 3).map((specialty, index) => (
									<Tag
										key={index}
										value={specialty}
										severity="info"
										className="text-xs"
									/>
								))}
								{data.specialties.length > 3 && (
									<Tag
										value={`+${data.specialties.length - 3} more`}
										severity="secondary"
										className="text-xs"
									/>
								)}
							</div>
						)}

					{/* Certifications */}
					{showCertifications &&
						data.certifications &&
						data.certifications.length > 0 && (
							<div className="mb-2">
								<p className="text-xs font-semibold text-primary-green mb-1">
									Certifications:
								</p>
								<div className="flex flex-wrap justify-center gap-1">
									{data.certifications.map((cert, index) => (
										<Tag
											key={index}
											value={cert}
											severity="success"
											className="text-xs"
										/>
									))}
								</div>
							</div>
						)}

					{/* Price */}
					{showPrice && data.price && (
						<p className="text-sm font-semibold text-brown-gold mb-1">
							{data.price}
						</p>
					)}

					{/* Duration */}
					{showDuration && data.duration && (
						<p className="text-xs text-earth-brown mb-1">
							Duration: {data.duration}
						</p>
					)}

					{/* Level */}
					{showLevel && data.level && (
						<p className="text-xs text-earth-brown mb-1">Level: {data.level}</p>
					)}

					{/* Category */}
					{showCategory && data.category && (
						<p className="text-xs text-earth-brown mb-1">{data.category}</p>
					)}

					{/* Description/Bio */}
					{showDescription && data.description && (
						<p className="text-sm text-earth-brown leading-relaxed">
							{data.description}
						</p>
					)}

					{showBio && data.bio && (
						<p className="text-sm text-earth-brown leading-relaxed">
							{data.bio}
						</p>
					)}
				</div>
			</Card>
		</div>
	)
}
