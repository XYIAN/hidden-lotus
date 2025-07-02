'use client'

import { useState, useMemo } from 'react'
import { Card } from 'primereact/card'
import { Button } from 'primereact/button'
import { HeroSection } from '@/components/common/hero-section'
import { CardGrid, DisplayCard, FilterPanel } from '@/components/common'
import { teamData } from '@/constants/team'
import { TeamMember, FilterState } from '@/types'
import '@/styles/animations.css'

export default function TeamPage() {
	const [filters, setFilters] = useState<FilterState>({
		type: '',
		profession: '',
	})

	const filteredTeam = useMemo(() => {
		return teamData.filter((member: TeamMember) => {
			if (filters.type && member.type !== filters.type) {
				return false
			}
			if (
				filters.profession &&
				!member.profession
					.toLowerCase()
					.includes(filters.profession.toLowerCase())
			) {
				return false
			}
			return true
		})
	}, [filters])

	const handleFilterChange = (newFilters: FilterState) => {
		setFilters(newFilters)
	}

	const handleClearFilters = () => {
		setFilters({
			type: '',
			profession: '',
		})
	}

	const types = Array.from(new Set(teamData.map((m) => m.type))).sort()
	const professions = Array.from(
		new Set(teamData.map((m) => m.profession))
	).sort()

	return (
		<div className="flex flex-column gap-6 p-4 page-transition">
			<HeroSection
				title="Our Team"
				description="Meet our dedicated team of wellness professionals committed to supporting your health and healing journey."
			/>

			<div className="max-w-7xl mx-auto w-full">
				<div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
					{/* Filters */}
					<div className="lg:col-span-1">
						<FilterPanel
							title="Filter Team"
							collapsed={false}
							onClear={handleClearFilters}
							clearDisabled={!Object.values(filters).some(Boolean)}
						>
							<div className="space-y-4">
								{/* Type Filter */}
								<div>
									<label className="block text-sm font-medium text-sage-green-700 mb-2">
										Type
									</label>
									<select
										value={filters.type}
										onChange={(e) =>
											handleFilterChange({
												...filters,
												type: e.target.value,
											})
										}
										className="w-full p-2 border border-sage-green-300 rounded-md focus:ring-2 focus:ring-sage-green-500 focus:border-transparent"
									>
										<option value="">All Types</option>
										{types.map((type) => (
											<option key={type} value={type}>
												{type.charAt(0).toUpperCase() + type.slice(1)}
											</option>
										))}
									</select>
								</div>

								{/* Profession Filter */}
								<div>
									<label className="block text-sm font-medium text-sage-green-700 mb-2">
										Profession
									</label>
									<select
										value={filters.profession}
										onChange={(e) =>
											handleFilterChange({
												...filters,
												profession: e.target.value,
											})
										}
										className="w-full p-2 border border-sage-green-300 rounded-md focus:ring-2 focus:ring-sage-green-500 focus:border-transparent"
									>
										<option value="">All Professions</option>
										{professions.map((profession) => (
											<option key={profession} value={profession}>
												{profession}
											</option>
										))}
									</select>
								</div>
							</div>
						</FilterPanel>
					</div>

					{/* Team Grid */}
					<div className="lg:col-span-3">
						<div className="mb-4">
							<p className="text-sage-green-600">
								Showing {filteredTeam.length} of {teamData.length} team members
							</p>
						</div>
						<CardGrid columns={{ sm: 1, md: 2, lg: 2, xl: 3 }} gap={6}>
							{filteredTeam.map((member: TeamMember) => (
								<DisplayCard
									key={member.id}
									data={{
										id: member.id,
										name: member.name,
										description: member.bio,
										image: member.image,
										type: member.type,
										profession: member.profession,
										credentials: member.credentials,
										specialties: member.specialties,
										href: `/team/${encodeURIComponent(member.name)}`,
									}}
									showImage={true}
									showType={true}
									showSpecialties={true}
									showCertifications={false}
									showCredentials={true}
									showProfession={true}
									showBio={true}
									showDescription={true}
									showPrice={false}
									showDuration={false}
									showLevel={false}
									showCategory={false}
									showLearnMore={true}
									learnMoreText="View Profile"
									className="text-center"
								/>
							))}
						</CardGrid>
					</div>
				</div>
			</div>
		</div>
	)
}
