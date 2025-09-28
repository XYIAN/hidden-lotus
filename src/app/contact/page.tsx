'use client'

import { Button } from 'primereact/button'
import { Card } from 'primereact/card'
import { HeroSection } from '@/components/common/hero-section'

export default function ContactPage() {
	return (
		<div className="flex flex-column gap-6 p-4 page-transition">
			<HeroSection
				title="Contact"
				description="Intrigued yogi? Curious about sound healing? Are you a business interested in partnership opportunities? Reach out ASAP! We want to talk to all of you."
			/>

			<div className="flex flex-column align-items-center gap-4 max-w-2xl mx-auto">
				<Card
					className="w-full"
					style={{
						background: 'rgba(255, 255, 255, 0.9)',
						backdropFilter: 'blur(10px)',
						border: '1px solid #8baa7a',
						borderRadius: '1rem',
						boxShadow: '0 4px 16px rgba(107, 142, 90, 0.1)',
					}}
				>
					<div className="p-6 text-center">
						<h2 className="text-2xl font-bold text-primary-green mb-4">
							Get in Touch
						</h2>
						<p className="text-lg text-earth-brown mb-6">
							Ready to start your wellness journey? We&apos;d love to hear from you!
						</p>

						<div className="flex flex-column align-items-center gap-3">
							<Button
								label="Email: hiddenlotusjvn@gmail.com"
								icon="pi pi-envelope"
								className="bg-sage-green-600 border-sage-green-600 hover:bg-sage-green-700"
								onClick={() =>
									window.open('mailto:hiddenlotusjvn@gmail.com', '_blank')
								}
								style={{
									minWidth: '300px',
									padding: '12px 24px',
									fontSize: '16px',
									fontWeight: '500',
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
									fontWeight: '500',
								}}
							/>
						</div>
					</div>
				</Card>
			</div>
		</div>
	)
}
