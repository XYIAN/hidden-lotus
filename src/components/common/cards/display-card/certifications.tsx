'use client'

import { Tag } from 'primereact/tag'

interface CertificationsProps {
	certifications?: string[]
}

export function Certifications({ certifications }: CertificationsProps) {
	if (!certifications || certifications.length === 0) return null
	return (
		<div className="flex flex-wrap justify-center gap-1 mb-2">
			{certifications.map((cert, idx) => (
				<Tag key={idx} value={cert} className="bg-yellow-gold text-xs" />
			))}
		</div>
	)
}
