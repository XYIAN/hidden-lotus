'use client'

import { ClassCard } from '@/components/common/cards/class-card'
import { classesData } from '@/constants/classes'
import { Class } from '@/types'
import { CardGrid } from '@/components/common/card-grid'

export default function ClassesPage() {
	return (
		<div className="flex flex-column gap-6 p-4 page-transition">
			{/* Classes Title */}
			<div className="text-center">
				<h1 className="text-4xl font-bold text-primary-green mb-4">Classes</h1>
				<p className="text-lg text-earth-brown">
					Discover our range of wellness classes designed to nurture your mind,
					body, and spirit.
				</p>
			</div>

			{/* Classes Grid */}
			<div className="max-w-7xl mx-auto w-full">
				<CardGrid columns={{ sm: 1, md: 2, lg: 2, xl: 2 }} gap={6}>
					{classesData.map((classItem: Class) => (
						<ClassCard key={classItem.id} classData={classItem} />
					))}
				</CardGrid>
			</div>
		</div>
	)
}
