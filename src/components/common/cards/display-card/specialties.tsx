'use client'

import { Tag } from 'primereact/tag'

interface SpecialtiesProps {
	specialties?: string[]
}

export function Specialties({ specialties }: SpecialtiesProps) {
	if (!specialties || specialties.length === 0) return null
	return (
		<div className="flex flex-wrap justify-center gap-1 mb-2">
			{specialties.slice(0, 3).map((specialty, idx) => (
				<Tag
					key={idx}
					value={specialty}
					className="bg-sage-green-200 text-xs"
				/>
			))}
		</div>
	)
}
