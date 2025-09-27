import { Tag } from 'primereact/tag'
import { teamData } from '@/constants/team'
import { TeamMember } from '@/types'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
	return teamData.map((member) => ({
		name: member.name.toLowerCase().replace(/\s+/g, '-'),
	}))
}

interface PageProps {
	params: Promise<{ name: string }>
}

export default async function TeamMemberPage({ params }: PageProps) {
	const { name } = await params
	const member = teamData.find((m: TeamMember) => {
		const decodedName = decodeURIComponent(name)
		return (
			m.name.toLowerCase().replace(/\s+/g, '-') === name.toLowerCase() ||
			m.name.toLowerCase() === decodedName.toLowerCase()
		)
	})

	if (!member) {
		notFound()
	}

	return (
		<div className="min-h-screen bg-light-tan p-4">
			<div className="max-w-4xl mx-auto">
				{/* Main Profile Card */}
				<div
					className="card p-8"
					style={{
						background: 'linear-gradient(135deg, #f0ede4 0%, #f5f1e8 100%)',
						border: '1px solid #8baa7a',
						borderRadius: '16px',
						boxShadow: '0 4px 12px rgba(139, 69, 19, 0.1)',
						textAlign: 'center',
					}}
				>
					{/* Role Category */}
					<div className="mb-4">
						<span className="text-sm text-earth-brown/70 uppercase tracking-wide">
							{member.type}
						</span>
					</div>

					{/* Main Role */}
					<div className="mb-6">
						<h2 className="text-lg text-earth-brown/80 font-medium">
							{member.profession}
						</h2>
					</div>

					{/* Name */}
					<h1 className="text-4xl font-bold text-primary-green mb-6">
						{member.name}
					</h1>

					{/* Credentials/Roles */}
					<div className="mb-6">
						<p className="text-lg text-primary-green font-medium">
							{member.credentials}
						</p>
					</div>

					{/* Bio */}
					<div
						className="mb-8 text-left"
						style={{ maxWidth: '600px', margin: '0 auto' }}
					>
						<p className="text-earth-brown leading-relaxed mb-4">
							{member.bio}
						</p>
						{member.longBio && (
							<p className="text-earth-brown leading-relaxed">
								{member.longBio}
							</p>
						)}
					</div>

					{/* Specialties */}
					{member.specialties && member.specialties.length > 0 && (
						<div className="mb-6">
							<h3 className="text-lg font-semibold text-primary-green mb-4">
								Specialties:
							</h3>
							<div className="flex flex-wrap gap-2 justify-content-center">
								{member.specialties.map((specialty, index) => (
									<Tag
										key={index}
										value={specialty}
										className="text-sm bg-light-tan border-sage-green-200 text-earth-brown"
										style={{
											background: '#f0ede4',
											border: '1px solid #8baa7a',
											borderRadius: '12px',
											padding: '4px 12px',
										}}
									/>
								))}
							</div>
						</div>
					)}

					{/* Contact Information */}
					<div className="text-center">
						<div className="flex flex-column gap-2">
							{member.contact.email && (
								<div className="flex align-items-center justify-content-center gap-2">
									<i className="pi pi-envelope text-sage-green-600"></i>
									<span className="text-earth-brown">
										{member.contact.email}
									</span>
								</div>
							)}
							{member.contact.phone && (
								<div className="flex align-items-center justify-content-center gap-2">
									<i className="pi pi-phone text-sage-green-600"></i>
									<span className="text-earth-brown">
										{member.contact.phone}
									</span>
								</div>
							)}
							{member.contact.website && (
								<div className="flex align-items-center justify-content-center gap-2">
									<i className="pi pi-globe text-sage-green-600"></i>
									<a
										href={member.contact.website}
										target="_blank"
										rel="noopener noreferrer"
										className="text-earth-brown hover:text-primary-green"
									>
										{member.contact.website}
									</a>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
