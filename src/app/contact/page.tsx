'use client'

import { Button } from 'primereact/button'
import { Card } from 'primereact/card'
import { HeroSection } from '@/components/common/hero-section'

export default function ContactPage() {
	return (
		<div className="flex flex-column gap-4 sm:gap-6 p-3 sm:p-4 page-transition min-h-screen overflow-x-hidden">
			<HeroSection
				title="Contact"
				description="Intrigued yogi? Curious about sound healing? Are you a business interested in partnership opportunities? Reach out ASAP! We want to talk to all of you."
			/>

			<div className="flex flex-column align-items-center gap-3 sm:gap-4 max-w-2xl mx-auto px-2 sm:px-4 w-full">
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
					<div className="p-4 sm:p-6 text-center">
						<h2 className="text-xl sm:text-2xl font-bold text-primary-green mb-3 sm:mb-4">
							Get in Touch
						</h2>
						<p className="text-base sm:text-lg text-earth-brown mb-4 sm:mb-6">
							Ready to start your wellness journey? We&apos;d love to hear from
							you!
						</p>

						<div className="flex flex-column align-items-center gap-2 sm:gap-3 w-full">
							<Button
								label="hiddenlotusjvn@gmail.com"
								icon="pi pi-envelope"
								className="bg-sage-green-600 border-sage-green-600 hover:bg-sage-green-700 text-white w-full sm:w-auto sm:min-w-[300px]"
								onClick={() =>
									window.open('mailto:hiddenlotusjvn@gmail.com', '_blank')
								}
								style={{
									padding: '10px 20px',
									fontSize: '14px',
									fontWeight: '500',
									color: 'white',
								}}
							/>

							<Button
								label="714-794-9405"
								icon="pi pi-phone"
								className="bg-sage-green-600 border-sage-green-600 hover:bg-sage-green-700 text-white w-full sm:w-auto sm:min-w-[300px]"
								onClick={() => window.open('tel:714-794-9405', '_blank')}
								style={{
									padding: '10px 20px',
									fontSize: '14px',
									fontWeight: '500',
									color: 'white',
								}}
							/>
						</div>
					</div>
				</Card>
			</div>
		</div>
	)
}
