'use client'

import { useState } from 'react'
import { Card } from 'primereact/card'
import { Tag } from 'primereact/tag'
import { Button } from 'primereact/button'
import Image from 'next/image'
import { LoadingSkeleton } from './loading-skeleton'
import { TeamMember } from '@/constants/team'
import { IMAGES } from '@/constants/images'

interface TeamCardProps {
	member: TeamMember
}

export function TeamCard({ member }: TeamCardProps) {
	const [imageLoaded, setImageLoaded] = useState(false)
	const [imageError, setImageError] = useState(false)

	const getTypeColor = (type: string) => {
		switch (type) {
			case 'instructor':
				return 'success'
			case 'admin':
				return 'info'
			case 'board':
				return 'warning'
			default:
				return 'info'
		}
	}

	const getMemberIcon = (type: string) => {
		return IMAGES.getIconByType(type)
	}

	const footer = (
		<Button
			label="Learn More"
			icon="pi pi-info-circle"
			iconPos="right"
			onClick={() =>
				(window.location.href = `/team/${encodeURIComponent(member.name)}`)
			}
			className="p-button-sm bg-soft-sage border-soft-sage"
		/>
	)

	return (
		<div className="aspect-[4/5] md:aspect-[3/4] sm:aspect-[1/1] w-full max-w-xs md:max-w-sm lg:max-w-md mx-auto flex">
			<Card
				className="yoga-card team-card w-full h-full flex flex-col"
				footer={footer}
			>
				<div className="text-center">
					<div className="flex justify-content-center mb-4">
						<div className="relative">
							{!imageLoaded && !imageError && (
								<LoadingSkeleton
									type="image"
									className="w-48 h-48 rounded-lg"
								/>
							)}
							{imageError && (
								<div className="w-48 h-48 bg-light-tan rounded-lg flex align-items-center justify-content-center sage-border">
									<i className="pi pi-user text-6xl text-sage"></i>
								</div>
							)}
							{!imageError && (
								<Image
									src={
										member.image ||
										getMemberIcon(
											Array.isArray(member.type) ? member.type[0] : member.type
										)
									}
									alt={`${member.name} avatar`}
									width={200}
									height={200}
									className={`w-48 h-48 object-contain rounded-lg sage-border ${
										imageLoaded ? 'block' : 'hidden'
									}`}
									onLoad={() => setImageLoaded(true)}
									onError={() => setImageError(true)}
								/>
							)}
						</div>
					</div>

					<h3 className="text-xl font-semibold text-primary-green mb-1">
						{member.name}
					</h3>

					<div className="flex justify-center mb-1 gap-1 flex-wrap">
						{Array.isArray(member.type) ? (
							member.type.map((type, index) => (
								<Tag
									key={index}
									value={type}
									severity={getTypeColor(type)}
									className="capitalize"
								/>
							))
						) : (
							<Tag
								value={member.type}
								severity={getTypeColor(member.type)}
								className="capitalize"
							/>
						)}
					</div>

					<p className="text-sm font-medium text-secondary-brown mb-1">
						{member.profession}
					</p>

					<p className="text-xs text-earth-brown mb-1">{member.credentials}</p>

					<p className="text-sm text-earth-brown leading-relaxed">
						{member.bio}
					</p>
				</div>
			</Card>
		</div>
	)
}
