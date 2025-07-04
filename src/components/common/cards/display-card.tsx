'use client'

import { useState } from 'react'
import { Card } from 'primereact/card'
import { Button } from 'primereact/button'
import { Tag } from 'primereact/tag'
import Image from 'next/image'
import { LoadingSkeleton } from './loading-skeleton'
import { DisplayCardProps } from '@/types'

export function DisplayCard({
	data,
	showImage = true,
	showType = false,
	showSpecialties = false,
	showCertifications = false,
	showPrice = false,
	showDuration = false,
	showLevel = false,
	showCategory = false,
	showCredentials = false,
	showProfession = false,
	showBio = false,
	showDescription = true,
	showLearnMore = false,
	learnMoreText = 'Learn More',
	cardSize = 'medium',
}: DisplayCardProps) {
	const [imageLoaded, setImageLoaded] = useState(false)
	const [imageError, setImageError] = useState(false)

	const {
		name,
		title,
		description,
		bio,
		image,
		type,
		profession,
		credentials,
		specialties,
		certifications,
		price,
		duration,
		level,
		category,
		href,
		onClick,
	} = data

	const getCardSizeClasses = () => {
		switch (cardSize) {
			case 'small':
				return 'max-w-sm'
			case 'large':
				return 'max-w-lg'
			default:
				return 'max-w-md'
		}
	}

	const getTypeIcon = (type: string) => {
		const icons: Record<string, string> = {
			class: 'pi pi-calendar',
			team: 'pi pi-users',
			story: 'pi pi-book',
			default: 'pi pi-star',
		}
		return icons[type] || icons.default
	}

	const getTypeColor = (type: string) => {
		const colors: Record<string, string> = {
			class: 'bg-sage-green-600',
			team: 'bg-pastel-pink',
			story: 'bg-yellow-gold',
			default: 'bg-sage-green-600',
		}
		return colors[type] || colors.default
	}

	const handleClick = () => {
		if (onClick) {
			onClick()
		} else if (href) {
			window.location.href = href
		}
	}

	return (
		<Card
			className={`yoga-card hover-lift ${getCardSizeClasses()} h-full flex flex-column cursor-pointer`}
			onClick={handleClick}
		>
			<div className="flex flex-column h-full">
				{/* Header */}
				<div className="mb-3">
					<h3 className="text-xl font-semibold text-primary-green mb-2">
						{name || title}
					</h3>
					{showDescription && description && (
						<p className="text-earth-brown text-sm mb-3">{description}</p>
					)}
					{showBio && bio && (
						<p className="text-earth-brown text-sm mb-3">{bio}</p>
					)}
				</div>

				{/* Image */}
				{showImage && image && (
					<div className="mb-4 flex justify-content-center">
						<div className="relative">
							{!imageLoaded && !imageError && (
								<LoadingSkeleton
									type="image"
									className="w-48 h-48 rounded-lg"
								/>
							)}
							{imageError && (
								<div className="w-48 h-48 bg-light-tan rounded-lg flex align-items-center justify-content-center sage-border">
									<i className="pi pi-image text-4xl text-sage"></i>
								</div>
							)}
							{!imageError && (
								<Image
									src={image}
									alt={name || title || 'Card image'}
									width={200}
									height={200}
									className={`w-48 h-48 object-contain rounded-lg ${
										imageLoaded ? 'block' : 'hidden'
									}`}
									onLoad={() => setImageLoaded(true)}
									onError={() => setImageError(true)}
								/>
							)}
						</div>
					</div>
				)}

				{/* Type Badge */}
				{showType && type && (
					<div className="mb-3 flex justify-content-center">
						<Tag
							value={type.charAt(0).toUpperCase() + type.slice(1)}
							icon={getTypeIcon(type)}
							className={`text-xs ${getTypeColor(type)} border-0`}
						/>
					</div>
				)}

				{/* Details */}
				<div className="flex justify-content-center mb-4 flex-grow-1">
					<div className="flex flex-column gap-2">
						{showProfession && profession && (
							<div className="flex align-items-center gap-2">
								<i className="pi pi-briefcase text-sage-green-600"></i>
								<span className="text-sm text-earth-brown">{profession}</span>
							</div>
						)}
						{showCredentials && credentials && (
							<div className="flex align-items-center gap-2">
								<i className="pi pi-certificate text-sage-green-600"></i>
								<span className="text-sm text-earth-brown">{credentials}</span>
							</div>
						)}
						{showPrice && price && (
							<div className="flex align-items-center gap-2">
								<i className="pi pi-dollar text-sage-green-600"></i>
								<span className="text-sm text-earth-brown">{price}</span>
							</div>
						)}
						{showDuration && duration && (
							<div className="flex align-items-center gap-2">
								<i className="pi pi-clock text-sage-green-600"></i>
								<span className="text-sm text-earth-brown">{duration}</span>
							</div>
						)}
						{showLevel && level && (
							<div className="flex align-items-center gap-2">
								<i className="pi pi-star text-sage-green-600"></i>
								<span className="text-sm text-earth-brown">{level}</span>
							</div>
						)}
						{showCategory && category && (
							<div className="flex align-items-center gap-2">
								<i className="pi pi-tag text-sage-green-600"></i>
								<span className="text-sm text-earth-brown">{category}</span>
							</div>
						)}
					</div>
				</div>

				{/* Specialties */}
				{showSpecialties && specialties && specialties.length > 0 && (
					<div className="mb-4">
						<h4 className="text-sm font-semibold text-primary-green mb-2">
							Specialties:
						</h4>
						<div className="flex flex-wrap gap-1 justify-content-center">
							{specialties.map((specialty, index) => (
								<Tag
									key={index}
									value={specialty}
									className="text-xs bg-light-tan border-sage-green-200 text-earth-brown"
								/>
							))}
						</div>
					</div>
				)}

				{/* Certifications */}
				{showCertifications && certifications && certifications.length > 0 && (
					<div className="mb-4">
						<h4 className="text-sm font-semibold text-primary-green mb-2">
							Certifications:
						</h4>
						<div className="flex flex-wrap gap-1 justify-content-center">
							{certifications.map((cert, index) => (
								<Tag
									key={index}
									value={cert}
									className="text-xs bg-light-tan border-sage-green-200 text-earth-brown"
								/>
							))}
						</div>
					</div>
				)}

				{/* Learn More Button */}
				{showLearnMore && (href || onClick) && (
					<div className="flex justify-content-center mt-auto">
						<Button
							label={learnMoreText}
							icon="pi pi-arrow-right"
							iconPos="right"
							className="bg-pastel-pink border-pastel-pink text-secondary-brown"
							style={{ minWidth: '120px' }}
						/>
					</div>
				)}
			</div>
		</Card>
	)
}
