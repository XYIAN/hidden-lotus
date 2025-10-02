'use client'

import Image from 'next/image'
import { HeroSection } from '@/components/common/hero-section'
import { CardGrid, DisplayCard } from '@/components/common'
import { teamData } from '@/constants/team'
import { TeamMember } from '@/types'
import '@/styles/animations.css'

// interface FilterForm {
// 	searchTerm: string
// 	selectedType: string
// 	selectedProfession: string
// }

export default function TeamPage() {
	// Filter logic is commented out but kept for future use
	// const { control, watch, reset } = useForm<FilterForm>({
	// 	defaultValues: {
	// 		searchTerm: '',
	// 		selectedType: '',
	// 		selectedProfession: '',
	// 	},
	// })

	// const filters = watch()

	// const filteredTeam = useMemo(() => {
	// 	return teamData.filter((member: TeamMember) => {
	// 		// Search filter
	// 		if (filters.searchTerm) {
	// 			const searchLower = filters.searchTerm.toLowerCase()
	// 			const matchesSearch =
	// 				member.name.toLowerCase().includes(searchLower) ||
	// 				member.profession.toLowerCase().includes(searchLower) ||
	// 				member.bio.toLowerCase().includes(searchLower)
	// 			if (!matchesSearch) return false
	// 		}

	// 		// Type filter
	// 		if (filters.selectedType) {
	// 			const memberTypes = Array.isArray(member.type)
	// 				? member.type
	// 				: [member.type]
	// 			if (!memberTypes.includes(filters.selectedType as any)) {
	// 				return false
	// 			}
	// 		}

	// 		// Profession filter
	// 		if (
	// 			filters.selectedProfession &&
	// 			!member.profession
	// 				.toLowerCase()
	// 				.includes(filters.selectedProfession.toLowerCase())
	// 		) {
	// 			return false
	// 		}

	// 		return true
	// 	})
	// }, [filters])

	// const types = [
	// 	{ label: 'All Types', value: '' },
	// 	...Array.from(
	// 		new Set(
	// 			teamData.flatMap((m) => (Array.isArray(m.type) ? m.type : [m.type]))
	// 		)
	// 	)
	// 		.sort()
	// 		.map((type) => ({
	// 			label: type.charAt(0).toUpperCase() + type.slice(1),
	// 			value: type,
	// 		})),
	// ]

	// const professions = [
	// 	{ label: 'All Professions', value: '' },
	// 	...Array.from(new Set(teamData.map((m) => m.profession)))
	// 		.sort()
	// 		.map((profession) => ({
	// 			label: profession,
	// 			value: profession,
	// 		})),
	// ]

	// const hasActiveFilters = Object.values(filters).some(Boolean)

	// const handleClearFilters = () => {
	// 	reset()
	// }

	// For now, show all team members
	const filteredTeam = teamData

	return (
		<div className="flex flex-column gap-6 p-4 page-transition">
			<HeroSection title="Our Team" />

			{/* Hero Image */}
			<div className="flex justify-content-center mb-4">
				<Image
					src="/team/Team Page Hero.jpg"
					alt="Hidden Lotus Team"
					width={600}
					height={400}
					className="max-w-2xl rounded-lg shadow-lg"
					style={{
						objectFit: 'contain',
						objectPosition: 'center',
					}}
					priority
				/>
			</div>

			<div className="max-w-7xl mx-auto w-full">
				{/* Filters - Commented out for now */}
				{/* <FilterPanel
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
				</FilterPanel> */}

				{/* Results Count - Commented out for now */}
				{/* <ResultsCount
					count={filteredTeam.length}
					total={teamData.length}
					className="mb-4"
				/> */}

				{/* Team Grid */}
				<CardGrid columns={{ sm: 1, md: 2, lg: 2, xl: 3 }} gap={6}>
					{filteredTeam.map((member: TeamMember) => (
						<DisplayCard
							key={member.id}
							data={{
								...member,
								href: `/team/${member.name.toLowerCase().replace(/\s+/g, '-')}`,
							}}
							showType={true}
							showProfession={true}
							showBio={true}
							showSpecialties={true}
							showCredentials={true}
							showLearnMore={true}
							learnMoreText="View Profile"
						/>
					))}
				</CardGrid>
			</div>
		</div>
	)
}
