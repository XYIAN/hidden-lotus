'use client'

import { useState, useEffect } from 'react'
import { Card } from 'primereact/card'
import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import { Dropdown } from 'primereact/dropdown'
import { Tag } from 'primereact/tag'
import { HeroSection } from '@/components/common/hero-section'
import { CardGrid, DisplayCard } from '@/components/common'
import { teamData, TeamMember } from '@/constants/team'
import '@/styles/animations.css'

export default function TeamPage() {
	const [filteredTeam, setFilteredTeam] = useState<TeamMember[]>(teamData)
	const [searchTerm, setSearchTerm] = useState('')
	const [selectedSpecialty, setSelectedSpecialty] = useState<string>('')

	const specialties = [
		{ label: 'All Specialties', value: '' },
		{ label: 'Yoga', value: 'yoga' },
		{ label: 'Reiki', value: 'reiki' },
		{ label: 'Meditation', value: 'meditation' },
		{ label: 'Healing', value: 'healing' },
		{ label: 'Fitness', value: 'fitness' },
		{ label: 'Nutrition', value: 'nutrition' },
		{ label: 'Counseling', value: 'counseling' },
	]

	useEffect(() => {
		let filtered = teamData

		// Filter by search term
		if (searchTerm) {
			filtered = filtered.filter(
				(member) =>
					member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
					member.bio.toLowerCase().includes(searchTerm.toLowerCase()) ||
					member.specialties.some((spec) =>
						spec.toLowerCase().includes(searchTerm.toLowerCase())
					)
			)
		}

		// Filter by specialty
		if (selectedSpecialty) {
			filtered = filtered.filter((member) =>
				member.specialties.includes(selectedSpecialty as any)
			)
		}

		setFilteredTeam(filtered)
	}, [searchTerm, selectedSpecialty])

	const clearFilters = () => {
		setSearchTerm('')
		setSelectedSpecialty('')
	}

	return (
		<div className="flex flex-column gap-6 p-4 page-transition">
			<HeroSection
				title="Our Team"
				description="Meet our dedicated wellness practitioners who are committed to supporting your journey to health and inner peace."
			/>

			{/* Filters Section */}
			<section className="max-w-6xl mx-auto w-full">
				<Card className="yoga-card p-4 mb-6">
					<div className="flex flex-column gap-4">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<div className="flex flex-column gap-2">
								<label
									htmlFor="search"
									className="text-sm font-semibold text-primary-green"
								>
									Search Team
								</label>
								<InputText
									id="search"
									value={searchTerm}
									onChange={(e) => setSearchTerm(e.target.value)}
									placeholder="Search by name, bio, or specialty..."
									className="w-full"
								/>
							</div>

							<div className="flex flex-column gap-2">
								<label
									htmlFor="specialty"
									className="text-sm font-semibold text-primary-green"
								>
									Specialty
								</label>
								<Dropdown
									id="specialty"
									value={selectedSpecialty}
									onChange={(e) => setSelectedSpecialty(e.value)}
									options={specialties}
									optionLabel="label"
									optionValue="value"
									placeholder="Select Specialty"
									className="w-full"
								/>
							</div>
						</div>

						<div className="flex justify-content-center">
							<Button
								label="Clear Filters"
								icon="pi pi-refresh"
								onClick={clearFilters}
								className="bg-sage-green-600 border-sage-green-600"
								disabled={!searchTerm && !selectedSpecialty}
							/>
						</div>
					</div>
				</Card>

				{/* Results Count */}
				<div className="flex justify-content-between align-items-center mb-4">
					<h2 className="text-xl font-semibold text-primary-green">
						{filteredTeam.length} Team Member
						{filteredTeam.length !== 1 ? 's' : ''} Found
					</h2>
					{(searchTerm || selectedSpecialty) && (
						<div className="flex gap-2">
							{searchTerm && (
								<Tag
									value={`Search: ${searchTerm}`}
									className="bg-pastel-pink"
								/>
							)}
							{selectedSpecialty && (
								<Tag
									value={`Specialty: ${
										specialties.find((s) => s.value === selectedSpecialty)
											?.label
									}`}
									className="bg-sage-green-600"
								/>
							)}
						</div>
					)}
				</div>

				{/* Team Grid */}
				{filteredTeam.length > 0 ? (
					<CardGrid columns={{ sm: 1, md: 2, lg: 3, xl: 3 }} gap={6}>
						{filteredTeam.map((member, index) => (
							<div key={member.id} className={`stagger-${(index % 6) + 1}`}>
								<DisplayCard
									data={{
										id: member.id,
										name: member.name,
										profession: member.profession,
										credentials: member.credentials,
										bio: member.bio,
										type: member.type,
										specialties: member.specialties,
										certifications: member.certifications,
										image: member.image,
										fallbackIcon: 'pi pi-user',
										href: `/team/${encodeURIComponent(member.name)}`,
									}}
									showImage={true}
									showType={true}
									showSpecialties={true}
									showCertifications={true}
									showCredentials={true}
									showProfession={true}
									showBio={true}
									showLearnMore={true}
									learnMoreText="Learn More"
								/>
							</div>
						))}
					</CardGrid>
				) : (
					<Card className="yoga-card p-8 text-center">
						<div className="text-6xl mb-4">😔</div>
						<h3 className="text-xl font-semibold text-primary-green mb-2">
							No Team Members Found
						</h3>
						<p className="text-earth-brown mb-4">
							Try adjusting your search criteria or filters to find the perfect
							practitioner for you.
						</p>
						<Button
							label="Clear All Filters"
							icon="pi pi-refresh"
							onClick={clearFilters}
							className="bg-sage-green-600 border-sage-green-600"
						/>
					</Card>
				)}
			</section>
		</div>
	)
}
