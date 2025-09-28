import { Card } from 'primereact/card'
import { Tag } from 'primereact/tag'
import { classesData } from '@/constants/classes'
import Link from 'next/link'
import '@/styles/animations.css'

export async function generateStaticParams() {
	return classesData.map((classItem) => ({
		id: classItem.id,
	}))
}

interface PageProps {
	params: Promise<{ id: string }>
}

export default async function ClassDetailPage({ params }: PageProps) {
	const { id: classId } = await params
	const classData = classesData.find((c) => c.id === classId)

	if (!classData) {
		return (
			<div className="min-h-screen bg-gradient-to-br from-light-tan to-sage-green-50 p-4 page-transition">
				<div className="max-w-4xl mx-auto">
					<Card className="yoga-card p-8">
						<div className="text-center py-8">
							<div className="text-6xl mb-4">😔</div>
							<h1 className="text-3xl font-bold text-primary-green mb-4">
								Uh oh! Class Not Found
							</h1>
							<p className="text-earth-brown text-lg mb-6">
								We couldn&apos;t find the class you&apos;re looking for. Please
								try again later or pick a different class.
							</p>
							<div className="flex flex-column md:flex-row gap-4 justify-content-center">
								<Link
									href="/classes"
									className="inline-flex items-center justify-center px-6 py-3 bg-sage-green-600 text-white rounded-lg hover:bg-sage-green-700 transition-colors gap-2"
								>
									<i className="pi pi-arrow-left"></i>
									Back to Classes
								</Link>
								<Link
									href="/contact"
									className="inline-flex items-center justify-center px-6 py-3 bg-pastel-pink text-secondary-brown rounded-lg hover:bg-pastel-pink/80 transition-colors gap-2"
								>
									<i className="pi pi-envelope"></i>
									Contact Support
								</Link>
							</div>
						</div>
					</Card>
				</div>
			</div>
		)
	}

	const getCategoryColor = (category: string) => {
		const colors: Record<string, string> = {
			yoga: 'bg-sage-green-600',
			reiki: 'bg-pastel-pink',
			seminar: 'bg-yellow-gold',
			cupping: 'bg-brown',
			podcast: 'bg-sage-green-400',
			meditation: 'bg-olive-green',
			fitness: 'bg-sage-green-600',
			healing: 'bg-pastel-pink',
			'weight-training': 'bg-brown',
			pilates: 'bg-sage-green-400',
			breathwork: 'bg-olive-green',
			'sound-healing': 'bg-pastel-pink',
		}
		return colors[category] || 'bg-sage-green-600'
	}

	const getLevelColor = (level: string) => {
		const colors: Record<string, string> = {
			beginner: 'bg-green-500',
			intermediate: 'bg-yellow-500',
			advanced: 'bg-red-500',
		}
		return colors[level] || 'bg-green-500'
	}

	return (
		<div className="min-h-screen bg-gradient-to-br from-light-tan to-sage-green-50 p-4 page-transition">
			<div className="max-w-4xl mx-auto">
				{/* Back Button */}
				<div className="mb-4">
					<Link
						href="/classes"
						className="inline-flex items-center justify-center px-6 py-3 bg-sage-green-600 text-white rounded-lg hover:bg-sage-green-700 transition-colors gap-2"
					>
						<i className="pi pi-arrow-left"></i>
						Back to Classes
					</Link>
				</div>

				{/* Class Details */}
				<Card className="yoga-card p-6 mb-6">
					<div className="flex flex-column gap-6 text-center">
						<div>
							<h1 className="text-3xl font-bold text-primary-green mb-3">
								{classData.name}
							</h1>
							<p className="text-earth-brown text-lg mb-4">
								{classData.longDescription}
							</p>
						</div>

						{/* Categories */}
						<div>
							<h3 className="text-lg font-semibold text-primary-green mb-2">
								Categories
							</h3>
							<div className="flex flex-wrap gap-2 justify-center">
								{classData.categories.map((category, index) => (
									<Tag
										key={index}
										value={category
											.replace('-', ' ')
											.replace(/\b\w/g, (l) => l.toUpperCase())}
										className={`${getCategoryColor(category)} border-0`}
									/>
								))}
							</div>
						</div>

						{/* Level */}
						<div>
							<h3 className="text-lg font-semibold text-primary-green mb-2">
								Level
							</h3>
							<div className="flex justify-content-center">
								<Tag
									value={
										classData.level.charAt(0).toUpperCase() +
										classData.level.slice(1)
									}
									className={`${getLevelColor(classData.level)} border-0`}
								/>
							</div>
						</div>

						{/* Equipment */}
						{classData.equipment && classData.equipment.length > 0 && (
							<div>
								<h3 className="text-lg font-semibold text-primary-green mb-2">
									Equipment Needed
								</h3>
								<div className="flex flex-wrap gap-2 justify-center">
									{classData.equipment.map((item, index) => (
										<Tag
											key={index}
											value={item}
											className="bg-light-tan border-sage-green-200 text-earth-brown"
										/>
									))}
								</div>
							</div>
						)}
					</div>
				</Card>
			</div>
		</div>
	)
}
