'use client'

import { Card } from 'primereact/card'
import { Button } from 'primereact/button'
import { DisplayCard } from '@/components/common'
import { Class } from '@/constants/classes'
import { memo, useMemo } from 'react'
import { CardGrid } from '../common/card-grid'

interface ClassesGridProps {
	classes: Class[]
	onClearFilters: () => void
}

export const ClassesGrid = memo(function ClassesGrid({
	classes,
	onClearFilters,
}: ClassesGridProps) {
	const cardElements = useMemo(() => {
		return classes.map((cls, index) => (
			<div key={cls.id} className={`stagger-${(index % 6) + 1}`}>
				<DisplayCard
					data={{
						id: cls.id,
						name: cls.name,
						description: cls.description,
						image: cls.image,
						price: cls.price,
						duration: cls.duration,
						level: cls.level,
						category: cls.categories?.[0],
						bio: undefined,
						credentials: undefined,
						profession: cls.instructor,
						href: `/classes/${encodeURIComponent(cls.id)}`,
					}}
					showImage={!!cls.image}
					showType={false}
					showSpecialties={false}
					showCertifications={false}
					showCredentials={false}
					showProfession={true}
					showBio={false}
					showDescription={true}
					showPrice={true}
					showDuration={true}
					showLevel={true}
					showCategory={true}
					showLearnMore={true}
					learnMoreText="View Details"
				/>
			</div>
		))
	}, [classes])

	if (classes.length === 0) {
		return (
			<Card className="yoga-card p-8 text-center">
				<div className="text-6xl mb-4">😔</div>
				<h3 className="text-xl font-semibold text-primary-green mb-2">
					No Classes Found
				</h3>
				<p className="text-earth-brown mb-4">
					Try adjusting your search criteria or filters to find the perfect
					class for you.
				</p>
				<Button
					label="Clear All Filters"
					icon="pi pi-refresh"
					iconPos="right"
					onClick={onClearFilters}
					className="bg-sage-green-600 border-sage-green-600"
				/>
			</Card>
		)
	}

	return (
		<CardGrid columns={{ sm: 1, md: 2, lg: 3, xl: 3 }} gap={6} centerY>
			{cardElements}
		</CardGrid>
	)
})
