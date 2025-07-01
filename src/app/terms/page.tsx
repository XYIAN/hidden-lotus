import { Card } from 'primereact/card';

export default function TermsPage() {
	return (
		<div className="flex flex-column gap-6 p-4">
			{/* Page Header */}
			<section className="text-center py-6">
				<h1 className="text-3xl font-bold text-primary-green mb-2">
					Terms of Service
				</h1>
				<p className="text-gray-600">
					Please read these terms carefully before using our services.
				</p>
			</section>

			{/* Terms Content */}
			<section className="max-w-4xl mx-auto w-full">
				<Card>
					<div className="flex flex-column gap-6">
						<div>
							<h2 className="text-2xl font-semibold text-primary-green mb-3">
								Acceptance of Terms
							</h2>
							<p className="text-gray-600">
								By accessing and using Hidden Lotus services, you accept and agree to be bound by 
								the terms and provision of this agreement.
							</p>
						</div>

						<div>
							<h2 className="text-2xl font-semibold text-primary-green mb-3">
								Use of Services
							</h2>
							<p className="text-gray-600 mb-3">
								Our wellness services are provided for personal, non-commercial use. You agree to:
							</p>
							<ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
								<li>Use our services responsibly and safely</li>
								<li>Follow all safety guidelines and instructions</li>
								<li>Respect other participants and staff</li>
								<li>Notify us of any health concerns before participating</li>
							</ul>
						</div>

						<div>
							<h2 className="text-2xl font-semibold text-primary-green mb-3">
								Health and Safety
							</h2>
							<p className="text-gray-600 mb-3">
								While we strive to provide safe and beneficial wellness experiences:
							</p>
							<ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
								<li>Consult with your healthcare provider before starting new wellness practices</li>
								<li>Listen to your body and stop if you experience discomfort</li>
								<li>Inform instructors of any injuries or health conditions</li>
								<li>We are not liable for injuries resulting from participation in our services</li>
							</ul>
						</div>

						<div>
							<h2 className="text-2xl font-semibold text-primary-green mb-3">
								Booking and Cancellation
							</h2>
							<p className="text-gray-600 mb-3">
								Our booking and cancellation policies:
							</p>
							<ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
								<li>Bookings must be made at least 24 hours in advance</li>
								<li>Cancellations require 24-hour notice for full refund</li>
								<li>Late cancellations may incur a fee</li>
								<li>No-shows will be charged the full session fee</li>
							</ul>
						</div>

						<div>
							<h2 className="text-2xl font-semibold text-primary-green mb-3">
								Payment Terms
							</h2>
							<p className="text-gray-600">
								Payment is required at the time of booking. We accept major credit cards and 
								digital payment methods. All fees are non-refundable except as specified in our 
								cancellation policy.
							</p>
						</div>

						<div>
							<h2 className="text-2xl font-semibold text-primary-green mb-3">
								Intellectual Property
							</h2>
							<p className="text-gray-600">
								All content, including but not limited to class materials, videos, and written 
								content, is the property of Hidden Lotus and is protected by copyright laws.
							</p>
						</div>

						<div>
							<h2 className="text-2xl font-semibold text-primary-green mb-3">
								Limitation of Liability
							</h2>
							<p className="text-gray-600">
								Hidden Lotus shall not be liable for any indirect, incidental, special, 
								consequential, or punitive damages resulting from your use of our services.
							</p>
						</div>

						<div>
							<h2 className="text-2xl font-semibold text-primary-green mb-3">
								Changes to Terms
							</h2>
							<p className="text-gray-600">
								We reserve the right to modify these terms at any time. Changes will be 
								effective immediately upon posting. Your continued use of our services 
								constitutes acceptance of the modified terms.
							</p>
						</div>

						<div>
							<h2 className="text-2xl font-semibold text-primary-green mb-3">
								Contact Information
							</h2>
							<p className="text-gray-600">
								If you have any questions about these Terms of Service, please contact us at{' '}
								<a href="mailto:legal@hiddenlotus.com" className="text-primary-green hover:underline">
									legal@hiddenlotus.com
								</a>
							</p>
						</div>

						<div className="text-sm text-gray-500 border-t pt-4">
							<p>Last updated: January 2024</p>
						</div>
					</div>
				</Card>
			</section>
		</div>
	);
} 