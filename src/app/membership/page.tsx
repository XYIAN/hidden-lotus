'use client'

import { HeroSection } from '@/components/common/hero-section'
import { TabView, TabPanel } from 'primereact/tabview'
import { Tag } from 'primereact/tag'
import { Button } from 'primereact/button'

export default function MembershipPage() {
	return (
		<div className="flex flex-column gap-6 p-4 page-transition">
			<HeroSection
				title="Hidden Lotus Membership"
				description="All of our classes are open and donation based for the moment. However, if you would like to know more about advance membership, please reach out to us at hi@hiddenlotus.com"
			/>

			<div className="max-w-7xl mx-auto w-full">
				<div
					className="card"
					style={{
						background: 'rgba(255, 255, 255, 0.9)',
						backdropFilter: 'blur(10px)',
						border: '1px solid #8baa7a',
						borderRadius: '1rem',
						boxShadow: '0 4px 16px rgba(107, 142, 90, 0.1)',
					}}
				>
					<TabView className="membership-tabs">
						<TabPanel header="Current Status" leftIcon="pi pi-info-circle">
							<div className="p-6">
								<div className="text-center mb-6">
									<h2 className="text-3xl font-bold text-primary-green mb-4">
										Donation-Based Classes
									</h2>
									<p className="text-lg text-earth-brown mb-4">
										All of our classes are currently open and donation-based. We
										believe wellness should be accessible to everyone in our
										community.
									</p>
									<div className="flex flex-wrap gap-2 justify-content-center mb-4">
										<Tag value="Donation-Based" severity="success" />
										<Tag value="Open to All" severity="info" />
										<Tag value="Community Focused" severity="warning" />
									</div>
								</div>

								<div className="grid">
									<div className="col-12 md:col-6">
										<h3 className="text-xl font-semibold text-primary-green mb-4">
											What&apos;s Included
										</h3>
										<ul className="list-none p-0 m-0">
											<li className="flex align-items-center gap-3 mb-3">
												<i className="pi pi-check-circle text-sage-green-600 text-xl"></i>
												<span className="text-earth-brown">
													Unlimited access to all yoga and meditation classes
												</span>
											</li>
											<li className="flex align-items-center gap-3 mb-3">
												<i className="pi pi-check-circle text-sage-green-600 text-xl"></i>
												<span className="text-earth-brown">
													Monthly wellness consultations with our experts
												</span>
											</li>
											<li className="flex align-items-center gap-3 mb-3">
												<i className="pi pi-check-circle text-sage-green-600 text-xl"></i>
												<span className="text-earth-brown">
													Exclusive workshops and special events
												</span>
											</li>
											<li className="flex align-items-center gap-3 mb-3">
												<i className="pi pi-check-circle text-sage-green-600 text-xl"></i>
												<span className="text-earth-brown">
													Access to our wellness library and resources
												</span>
											</li>
											<li className="flex align-items-center gap-3 mb-3">
												<i className="pi pi-check-circle text-sage-green-600 text-xl"></i>
												<span className="text-earth-brown">
													Community support and group sessions
												</span>
											</li>
										</ul>
									</div>
									<div className="col-12 md:col-6">
										<h3 className="text-xl font-semibold text-primary-green mb-4">
											Membership Benefits
										</h3>
										<ul className="list-none p-0 m-0">
											<li className="flex align-items-center gap-3 mb-3">
												<i className="pi pi-star text-sage-green-600 text-xl"></i>
												<span className="text-earth-brown">
													Priority booking for all classes and events
												</span>
											</li>
											<li className="flex align-items-center gap-3 mb-3">
												<i className="pi pi-star text-sage-green-600 text-xl"></i>
												<span className="text-earth-brown">
													Personalized wellness plans and tracking
												</span>
											</li>
											<li className="flex align-items-center gap-3 mb-3">
												<i className="pi pi-star text-sage-green-600 text-xl"></i>
												<span className="text-earth-brown">
													Discounts on workshops and retreats
												</span>
											</li>
											<li className="flex align-items-center gap-3 mb-3">
												<i className="pi pi-star text-sage-green-600 text-xl"></i>
												<span className="text-earth-brown">
													Monthly wellness challenges and goals
												</span>
											</li>
											<li className="flex align-items-center gap-3 mb-3">
												<i className="pi pi-star text-sage-green-600 text-xl"></i>
												<span className="text-earth-brown">
													Access to exclusive member-only content
												</span>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</TabPanel>

						<TabPanel header="Future Membership" leftIcon="pi pi-dollar">
							<div className="p-6 text-center">
								<h2 className="text-3xl font-bold text-primary-green mb-4">
									Advanced Membership Coming Soon
								</h2>
								<p className="text-lg text-earth-brown mb-6">
									We're developing an advanced membership program for those who
									want deeper access and exclusive benefits.
								</p>

								<div
									className="card"
									style={{
										maxWidth: '500px',
										margin: '0 auto',
										background:
											'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(237, 232, 224, 0.9))',
										border: '2px solid #8baa7a',
										borderRadius: '1.25rem',
										boxShadow: '0 8px 32px rgba(107, 142, 90, 0.15)',
									}}
								>
									<div className="p-6">
										<div className="text-6xl mb-4">🚀</div>
										<h3 className="text-2xl font-bold text-primary-green mb-4">
											Stay Tuned
										</h3>
										<p className="text-earth-brown mb-6">
											We're working on creating an exclusive membership
											experience with additional benefits and personalized
											wellness programs.
										</p>

										<div className="text-center mb-6">
											<p className="text-lg text-sage-green-600 font-semibold mb-4">
												Interested in learning more?
											</p>
											<p className="text-earth-brown">
												Reach out to us at <strong>hi@hiddenlotus.com</strong>{' '}
												to be notified when our advanced membership becomes
												available.
											</p>
										</div>

										<Button
											label="Contact Us"
											icon="pi pi-envelope"
											iconPos="left"
											className="bg-sage-green-600 border-sage-green-600 text-white hover:bg-sage-green-700"
											style={{ minWidth: '200px', padding: '12px 24px' }}
										/>

										<p
											className="text-sm text-earth-brown mt-4"
											style={{ opacity: 0.7 }}
										>
											All classes remain donation-based for now
										</p>
									</div>
								</div>
							</div>
						</TabPanel>
					</TabView>
				</div>
			</div>
		</div>
	)
}
