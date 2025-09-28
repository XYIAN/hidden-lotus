'use client'

import { HeroSection } from '@/components/common/hero-section'
import { Button } from 'primereact/button'

export default function MembershipPage() {
	return (
		<div className="flex flex-column gap-6 p-4 page-transition">
			<HeroSection
				title="🪪 Membership"
				description="Acquiring Hidden Lotus membership is a commitment to yourself and to the community we are forming together. Our current members find that the membership option makes their practice an investment and grounds it in consistency."
			/>
			
			<div className="flex flex-column align-items-center gap-4 max-w-2xl mx-auto">
				<div className="text-center mb-4">
					<p className="text-lg text-earth-brown mb-6">
						If you are interested in membership, please reach out to us:
					</p>
				</div>
				
				<div className="flex flex-column align-items-center gap-3">
					<Button
						label="Email: hiddenlotusjvn@gmail.com"
						icon="pi pi-envelope"
						className="bg-sage-green-600 border-sage-green-600 hover:bg-sage-green-700"
						onClick={() => window.open('mailto:hiddenlotusjvn@gmail.com', '_blank')}
						style={{
							minWidth: '300px',
							padding: '12px 24px',
							fontSize: '16px',
							fontWeight: '500'
						}}
					/>
					
					<Button
						label="Phone: 714-794-9405"
						icon="pi pi-phone"
						className="bg-sage-green-600 border-sage-green-600 hover:bg-sage-green-700"
						onClick={() => window.open('tel:714-794-9405', '_blank')}
						style={{
							minWidth: '300px',
							padding: '12px 24px',
							fontSize: '16px',
							fontWeight: '500'
						}}
					/>
				</div>
			</div>
		</div>
	)
}
