'use client'

import { useMemo } from 'react'
import { HeroSection } from '@/components/common/hero-section'
import { CardGrid, DisplayCard, ResultsCount } from '@/components/common'
import { teamData } from '@/constants/team'
import { TeamMember } from '@/types'
import { FilterPanel } from '@/components/common/filter-panel'
import { FormField } from '@/components/common/form-field'
import { useForm } from 'react-hook-form'
import '@/styles/animations.css'

interface FilterForm {
	searchTerm: string
	selectedType: string
	selectedProfession: string
}

export default function TeamPage() {
	const { control, watch, reset } = useForm<FilterForm>({
		defaultValues: {
			searchTerm: '',
			selectedType: '',
			selectedProfession: '',
		},
	})

	const filters = watch()

	const filteredTeam = useMemo(() => {
		return teamData.filter((member: TeamMember) => {
			// Search filter
			if (filters.searchTerm) {
				const searchLower = filters.searchTerm.toLowerCase()
				const matchesSearch =
					member.name.toLowerCase().includes(searchLower) ||
					member.profession.toLowerCase().includes(searchLower) ||
					member.bio.toLowerCase().includes(searchLower)
				if (!matchesSearch) return false
			}

			// Type filter
			if (filters.selectedType && member.type !== filters.selectedType) {
				return false
			}

			// Profession filter
			if (
				filters.selectedProfession &&
				!member.profession
					.toLowerCase()
					.includes(filters.selectedProfession.toLowerCase())
			) {
				return false
			}

			return true
		})
	}, [filters])

	const handleClearFilters = () => {
		reset()
	}

	const types = [
		{ label: 'All Types', value: '' },
		...Array.from(new Set(teamData.map((m) => m.type)))
			.sort()
			.map((type) => ({
				label: type.charAt(0).toUpperCase() + type.slice(1),
				value: type,
			})),
	]

	const professions = [
		{ label: 'All Professions', value: '' },
		...Array.from(new Set(teamData.map((m) => m.profession)))
			.sort()
			.map((profession) => ({
				label: profession,
				value: profession,
			})),
	]

	const hasActiveFilters = Object.values(filters).some(Boolean)

	return (
		<div className="flex flex-column gap-6 p-4 page-transition">
			{/* Hero Image */}
			<div className="flex justify-content-center mb-4">
				<img
					src="/team/Team Page Hero.jpg"
					alt="Hidden Lotus Team"
					className="w-full max-w-4xl rounded-lg shadow-lg"
					style={{
						maxHeight: '300px',
						objectFit: 'cover',
						objectPosition: 'center'
					}}
				/>
			</div>
			
			<HeroSection
				title="Our Team"
				description="Meet our dedicated team of wellness professionals committed to supporting your health and healing journey."
			/>

			<div className="max-w-7xl mx-auto w-full">
				{/* Filters */}
				<FilterPanel
					title="Filter Team"
					collapsed={true}
					onClear={handleClearFilters}
					clearDisabled={!hasActiveFilters}
					className="mb-6"
				>
					<div className="flex flex-column gap-4">
						<FormField
							type="input"
							label="Search Team"
							name="searchTerm"
							control={control}
							inputProps={{
								placeholder: 'Search by name, profession, or bio...',
							}}
						/>

						<FormField
							type="dropdown"
							label="Type"
							name="selectedType"
							control={control}
							dropdownProps={{
								options: types,
								optionLabel: 'label',
								optionValue: 'value',
								placeholder: 'Select Type',
							}}
						/>

						<FormField
							type="dropdown"
							label="Profession"
							name="selectedProfession"
							control={control}
							dropdownProps={{
								options: professions,
								optionLabel: 'label',
								optionValue: 'value',
								placeholder: 'Select Profession',
							}}
						/>
					</div>
				</FilterPanel>

				{/* Results Count */}
				<ResultsCount
					count={filteredTeam.length}
					total={teamData.length}
					className="mb-4"
				/>

				{/* Team Grid */}
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
	)
}
