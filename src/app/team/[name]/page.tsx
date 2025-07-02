'use client'

import { useParams } from 'next/navigation'
import { Card } from 'primereact/card'
import { Button } from 'primereact/button'
import { Tag } from 'primereact/tag'
import { Divider } from 'primereact/divider'
import { Carousel, CarouselResponsiveOption } from 'primereact/carousel'
import { teamData } from '@/constants/team'
import { classesData } from '@/constants/classes'
import { useState } from 'react'
import { Class } from '@/types'

export default function TeamMemberPage() {
	const params = useParams()
	const memberName = decodeURIComponent(params.name as string)
	const memberData = teamData.find((m) => m.name === memberName)
	const [activeIndex, setActiveIndex] = useState(0)

	if (!memberData) {
		return (
			<div className="min-h-screen bg-gradient-to-br from-sage-green-50 to-tan-100 p-4">
				<div className="max-w-4xl mx-auto">
					<Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
						<div className="text-center py-8">
							<h1 className="text-2xl font-bold text-sage-green-800 mb-4">
								Team Member Not Found
							</h1>
							<p className="text-sage-green-600">
								The team member you're looking for doesn't exist.
							</p>
						</div>
					</Card>
				</div>
			</div>
		)
	}

	// Get member's classes
	const memberClasses = classesData.filter(
		(c) => c.instructor === memberData.name
	)

	const getTypeColor = (type: string) => {
		switch (type) {
			case 'instructor':
				return 'success'
			case 'admin':
				return 'warning'
			case 'board':
				return 'info'
			default:
				return 'info'
		}
	}

	const carouselResponsiveOptions: CarouselResponsiveOption[] = [
		{
			breakpoint: '1199px',
			numVisible: 1,
			numScroll: 1,
		},
		{
			breakpoint: '767px',
			numVisible: 1,
			numScroll: 1,
		},
		{
			breakpoint: '575px',
			numVisible: 1,
			numScroll: 1,
		},
	]

	const classTemplate = (classItem: Class) => {
		return (
			<div className="p-4">
				<Card className="bg-white/90 backdrop-blur-sm border-0 shadow-md h-full">
					<div className="p-4">
						<div className="flex flex-wrap gap-2 mb-3">
							<Tag
								value={classItem.categories[0]}
								severity="info"
								className="text-xs"
							/>
							<Tag
								value={classItem.level}
								severity="warning"
								className="text-xs"
							/>
						</div>
						<h3 className="text-lg font-bold text-sage-green-800 mb-2">
							{classItem.name}
						</h3>
						<p className="text-sm text-sage-green-600 mb-3 line-clamp-3">
							{classItem.description}
						</p>
						<div className="flex justify-between items-center text-sm text-sage-green-700">
							<span>{classItem.duration}</span>
							<span className="font-bold">{classItem.price}</span>
						</div>
						<Button
							label="Book Now"
							icon="pi pi-calendar-plus"
							className="w-full mt-3 bg-sage-green-600 hover:bg-sage-green-700 border-sage-green-600"
							onClick={() =>
								(window.location.href = `/classes/${classItem.id}`)
							}
						/>
					</div>
				</Card>
			</div>
		)
	}

	return (
		<div className="min-h-screen bg-gradient-to-br from-sage-green-50 to-tan-100 p-4">
			<div className="max-w-6xl mx-auto">
				{/* Header */}
				<Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg mb-6">
					<div className="p-6">
						<div className="flex flex-col lg:flex-row gap-6">
							<div className="flex-1">
								<div className="flex flex-wrap gap-2 mb-4">
									<Tag
										value={memberData.type}
										severity={getTypeColor(memberData.type)}
										className="text-sm"
									/>
									<Tag
										value={memberData.profession}
										severity="info"
										className="text-sm"
									/>
								</div>
								<h1 className="text-3xl lg:text-4xl font-bold text-sage-green-800 mb-4">
									{memberData.name}
								</h1>
								<p className="text-lg text-sage-green-600 mb-4">
									{memberData.credentials}
								</p>
								<p className="text-sage-green-700 leading-relaxed mb-4">
									{memberData.bio}
								</p>
								<p className="text-sage-green-700 leading-relaxed">
									{memberData.longBio}
								</p>
							</div>
						</div>
					</div>
				</Card>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
					{/* Experience & Education */}
					<Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
						<div className="p-6">
							<h2 className="text-2xl font-bold text-sage-green-800 mb-4">
								Experience & Education
							</h2>

							<div className="space-y-4">
								<div>
									<h3 className="font-semibold text-sage-green-700 mb-2">
										Experience
									</h3>
									<p className="text-sage-green-600">{memberData.experience}</p>
								</div>
								<Divider />
								<div>
									<h3 className="font-semibold text-sage-green-700 mb-2">
										Education
									</h3>
									<p className="text-sage-green-600">{memberData.education}</p>
								</div>
							</div>
						</div>
					</Card>

					{/* Specialties */}
					<Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
						<div className="p-6">
							<h2 className="text-2xl font-bold text-sage-green-800 mb-4">
								Specialties
							</h2>

							<div className="flex flex-wrap gap-2">
								{memberData.specialties.map((specialty, index) => (
									<Tag
										key={index}
										value={specialty}
										severity="info"
										className="text-sm"
									/>
								))}
							</div>
						</div>
					</Card>

					{/* Contact Information */}
					<Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
						<div className="p-6">
							<h2 className="text-2xl font-bold text-sage-green-800 mb-4">
								Contact Information
							</h2>

							<div className="space-y-3">
								<div>
									<h3 className="font-semibold text-sage-green-700 mb-1">
										Email
									</h3>
									<p className="text-sage-green-600">
										{memberData.contact.email}
									</p>
								</div>
								<div>
									<h3 className="font-semibold text-sage-green-700 mb-1">
										Phone
									</h3>
									<p className="text-sage-green-600">
										{memberData.contact.phone}
									</p>
								</div>
								{memberData.contact.website && (
									<div>
										<h3 className="font-semibold text-sage-green-700 mb-1">
											Website
										</h3>
										<p className="text-sage-green-600">
											{memberData.contact.website}
										</p>
									</div>
								)}
							</div>
						</div>
					</Card>
				</div>

				{/* Classes */}
				{memberClasses.length > 0 && (
					<Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg mt-6">
						<div className="p-6">
							<h2 className="text-2xl font-bold text-sage-green-800 mb-4">
								Classes by {memberData.name}
							</h2>
							<Carousel
								value={memberClasses}
								numVisible={3}
								numScroll={1}
								className="custom-carousel"
								responsiveOptions={carouselResponsiveOptions}
								itemTemplate={classTemplate}
								circular
							/>
						</div>
					</Card>
				)}
			</div>
		</div>
	)
}
