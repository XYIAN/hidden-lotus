import { Card } from 'primereact/card';

export default function PrivacyPage() {
	return (
		<div className="flex flex-column gap-6 p-4">
			{/* Page Header */}
			<section className="text-center py-6">
				<h1 className="text-3xl font-bold text-primary-green mb-2">
					Privacy Policy
				</h1>
				<p className="text-gray-600">
					How we protect and handle your personal information.
				</p>
			</section>

			{/* Privacy Content */}
			<section className="max-w-4xl mx-auto w-full">
				<Card>
					<div className="flex flex-column gap-6">
						<div>
							<h2 className="text-2xl font-semibold text-primary-green mb-3">
								Information We Collect
							</h2>
							<p className="text-gray-600 mb-3">
								At Hidden Lotus, we collect information you provide directly to us, such as when you:
							</p>
							<ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
								<li>Book classes or appointments</li>
								<li>Contact us through our website</li>
								<li>Sign up for our newsletter</li>
								<li>Participate in our wellness programs</li>
							</ul>
						</div>

						<div>
							<h2 className="text-2xl font-semibold text-primary-green mb-3">
								How We Use Your Information
							</h2>
							<p className="text-gray-600 mb-3">
								We use the information we collect to:
							</p>
							<ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
								<li>Provide and improve our wellness services</li>
								<li>Communicate with you about classes and appointments</li>
								<li>Send you wellness tips and updates</li>
								<li>Ensure the safety and security of our community</li>
							</ul>
						</div>

						<div>
							<h2 className="text-2xl font-semibold text-primary-green mb-3">
								Information Sharing
							</h2>
							<p className="text-gray-600">
								We do not sell, trade, or otherwise transfer your personal information to third parties 
								without your consent, except as described in this policy or as required by law.
							</p>
						</div>

						<div>
							<h2 className="text-2xl font-semibold text-primary-green mb-3">
								Data Security
							</h2>
							<p className="text-gray-600">
								We implement appropriate security measures to protect your personal information 
								against unauthorized access, alteration, disclosure, or destruction.
							</p>
						</div>

						<div>
							<h2 className="text-2xl font-semibold text-primary-green mb-3">
								Your Rights
							</h2>
							<p className="text-gray-600 mb-3">
								You have the right to:
							</p>
							<ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
								<li>Access your personal information</li>
								<li>Correct inaccurate information</li>
								<li>Request deletion of your information</li>
								<li>Opt out of marketing communications</li>
							</ul>
						</div>

						<div>
							<h2 className="text-2xl font-semibold text-primary-green mb-3">
								Contact Us
							</h2>
							<p className="text-gray-600">
								If you have any questions about this Privacy Policy, please contact us at{' '}
								<a href="mailto:privacy@hiddenlotus.com" className="text-primary-green hover:underline">
									privacy@hiddenlotus.com
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