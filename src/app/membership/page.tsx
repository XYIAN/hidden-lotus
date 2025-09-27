// Optimized Membership Page - now using styled-components
import MembershipPage from '@/components/pages/MembershipPage'

export default function MembershipPage() {
	// Structured data for SEO
	const structuredData = {
		'@context': 'https://schema.org',
		'@type': 'Service',
		name: 'Hidden Lotus Complete Wellness Membership',
		description:
			'Join our exclusive wellness membership program with unlimited access to yoga, meditation, wellness coaching, and holistic healing.',
		provider: {
			'@type': 'Organization',
			name: 'Hidden Lotus',
			url: 'https://hidden-lotus.netlify.app',
			logo: 'https://hidden-lotus.netlify.app/hl-f-icon2.png',
		},
		areaServed: {
			'@type': 'Place',
			name: 'Wellness Community',
		},
		serviceType: 'Wellness Membership Program',
		offers: {
			'@type': 'Offer',
			price: '149',
			priceCurrency: 'USD',
			priceSpecification: {
				'@type': 'UnitPriceSpecification',
				price: '149',
				priceCurrency: 'USD',
				unitText: 'MONTH',
			},
			availability: 'https://schema.org/InStock',
		},
		hasOfferCatalog: {
			'@type': 'OfferCatalog',
			name: 'Wellness Programs',
			itemListElement: [
				{
					'@type': 'Offer',
					itemOffered: {
						'@type': 'Service',
						name: 'Yoga & Meditation Classes',
						description: 'Unlimited access to all yoga and meditation classes',
					},
				},
				{
					'@type': 'Offer',
					itemOffered: {
						'@type': 'Service',
						name: 'Wellness Coaching',
						description: 'Monthly wellness consultations with our experts',
					},
				},
				{
					'@type': 'Offer',
					itemOffered: {
						'@type': 'Service',
						name: 'Holistic Healing',
						description:
							'Access to energy healing, sound therapy, and other alternative wellness modalities',
					},
				},
				{
					'@type': 'Offer',
					itemOffered: {
						'@type': 'Service',
						name: 'Community Events',
						description:
							'Monthly workshops, wellness retreats, and community gatherings',
					},
				},
				{
					'@type': 'Offer',
					itemOffered: {
						'@type': 'Service',
						name: 'Wellness Library',
						description:
							'Extensive collection of wellness resources, guided practices, and educational content',
					},
				},
				{
					'@type': 'Offer',
					itemOffered: {
						'@type': 'Service',
						name: 'Goal Tracking',
						description:
							'Personalized wellness tracking and progress monitoring',
					},
				},
			],
		},
	}

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
			/>
			<div className="flex flex-column gap-6 p-4">
				<div className="membership-hero">
					<HeroSection
						title="Hidden Lotus Membership"
						description="Join our exclusive wellness community and unlock unlimited access to our holistic healing programs, personalized guidance, and transformative experiences."
					/>
				</div>

				<main className="max-w-6xl mx-auto w-full membership-content">
					<Card className="yoga-card">
						<TabView className="membership-tabs">
							<TabPanel
								header="Membership Details"
								leftIcon="pi pi-info-circle"
							>
								<section className="flex flex-column gap-6 membership-section">
									<header className="text-center mb-6">
										<h2 className="text-3xl font-bold text-primary-green mb-4">
											Complete Wellness Membership
										</h2>
										<p className="text-lg text-earth-brown mb-4">
											Our comprehensive membership program designed to support
											your journey to holistic wellness and inner peace.
										</p>
										<div className="flex justify-content-center gap-2 mb-4">
											<Tag value="Unlimited Access" severity="success" />
											<Tag value="Personalized Guidance" severity="info" />
											<Tag value="Community Support" severity="warning" />
										</div>
									</header>

									<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
										<div className="flex flex-column gap-4">
											<h3 className="text-xl font-semibold text-primary-green">
												What&apos;s Included
											</h3>
											<ul className="list-none p-0 m-0 space-y-3">
												<li className="flex align-items-center gap-3">
													<i className="pi pi-check-circle text-sage-green-600 text-xl"></i>
													<span className="text-earth-brown">
														Unlimited access to all yoga and meditation classes
													</span>
												</li>
												<li className="flex align-items-center gap-3">
													<i className="pi pi-check-circle text-sage-green-600 text-xl"></i>
													<span className="text-earth-brown">
														Monthly wellness consultations with our experts
													</span>
												</li>
												<li className="flex align-items-center gap-3">
													<i className="pi pi-check-circle text-sage-green-600 text-xl"></i>
													<span className="text-earth-brown">
														Exclusive workshops and special events
													</span>
												</li>
												<li className="flex align-items-center gap-3">
													<i className="pi pi-check-circle text-sage-green-600 text-xl"></i>
													<span className="text-earth-brown">
														Access to our wellness library and resources
													</span>
												</li>
												<li className="flex align-items-center gap-3">
													<i className="pi pi-check-circle text-sage-green-600 text-xl"></i>
													<span className="text-earth-brown">
														Community support and group sessions
													</span>
												</li>
											</ul>
										</div>

										<div className="flex flex-column gap-4">
											<h3 className="text-xl font-semibold text-primary-green">
												Membership Benefits
											</h3>
											<ul className="list-none p-0 m-0 space-y-3">
												<li className="flex align-items-center gap-3">
													<i className="pi pi-star text-pastel-pink text-xl"></i>
													<span className="text-earth-brown">
														Priority booking for all classes and events
													</span>
												</li>
												<li className="flex align-items-center gap-3">
													<i className="pi pi-star text-pastel-pink text-xl"></i>
													<span className="text-earth-brown">
														Personalized wellness plans and tracking
													</span>
												</li>
												<li className="flex align-items-center gap-3">
													<i className="pi pi-star text-pastel-pink text-xl"></i>
													<span className="text-earth-brown">
														Discounts on workshops and retreats
													</span>
												</li>
												<li className="flex align-items-center gap-3">
													<i className="pi pi-star text-pastel-pink text-xl"></i>
													<span className="text-earth-brown">
														Monthly wellness challenges and goals
													</span>
												</li>
												<li className="flex align-items-center gap-3">
													<i className="pi pi-star text-pastel-pink text-xl"></i>
													<span className="text-earth-brown">
														Access to exclusive member-only content
													</span>
												</li>
											</ul>
										</div>
									</div>
								</section>
							</TabPanel>

							<TabPanel header="Features & Programs" leftIcon="pi pi-list">
								<div className="flex flex-column gap-6 membership-section">
									<div className="text-center mb-6">
										<h2 className="text-3xl font-bold text-primary-green mb-4">
											Comprehensive Wellness Programs
										</h2>
										<p className="text-lg text-earth-brown">
											Access our full range of wellness programs designed to
											nurture your mind, body, and spirit.
										</p>
									</div>

									<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
										<Card className="program-card text-center">
											<div className="flex flex-column gap-3">
												<div className="text-4xl mb-3">🧘‍♀️</div>
												<h3 className="text-xl font-semibold text-primary-green">
													Yoga & Meditation
												</h3>
												<p className="text-earth-brown text-sm">
													Daily classes in various styles including Hatha,
													Vinyasa, Yin, and guided meditation sessions.
												</p>
											</div>
										</Card>

										<Card className="program-card text-center">
											<div className="flex flex-column gap-3">
												<div className="text-4xl mb-3">💆‍♀️</div>
												<h3 className="text-xl font-semibold text-primary-green">
													Wellness Coaching
												</h3>
												<p className="text-earth-brown text-sm">
													One-on-one sessions with certified wellness coaches
													for personalized guidance and support.
												</p>
											</div>
										</Card>

										<Card className="program-card text-center">
											<div className="flex flex-column gap-3">
												<div className="text-4xl mb-3">🌿</div>
												<h3 className="text-xl font-semibold text-primary-green">
													Holistic Healing
												</h3>
												<p className="text-earth-brown text-sm">
													Access to energy healing, sound therapy, and other
													alternative wellness modalities.
												</p>
											</div>
										</Card>

										<Card className="program-card text-center">
											<div className="flex flex-column gap-3">
												<div className="text-4xl mb-3">👥</div>
												<h3 className="text-xl font-semibold text-primary-green">
													Community Events
												</h3>
												<p className="text-earth-brown text-sm">
													Monthly workshops, wellness retreats, and community
													gatherings for connection and growth.
												</p>
											</div>
										</Card>

										<Card className="program-card text-center">
											<div className="flex flex-column gap-3">
												<div className="text-4xl mb-3">📚</div>
												<h3 className="text-xl font-semibold text-primary-green">
													Wellness Library
												</h3>
												<p className="text-earth-brown text-sm">
													Extensive collection of wellness resources, guided
													practices, and educational content.
												</p>
											</div>
										</Card>

										<Card className="program-card text-center">
											<div className="flex flex-column gap-3">
												<div className="text-4xl mb-3">🎯</div>
												<h3 className="text-xl font-semibold text-primary-green">
													Goal Tracking
												</h3>
												<p className="text-earth-brown text-sm">
													Personalized wellness tracking and progress monitoring
													to help you achieve your goals.
												</p>
											</div>
										</Card>
									</div>
								</div>
							</TabPanel>

							<TabPanel header="Pricing & Plans" leftIcon="pi pi-dollar">
								<div className="flex flex-column gap-6 membership-section">
									<div className="text-center mb-6">
										<h2 className="text-3xl font-bold text-primary-green mb-4">
											Simple, Transparent Pricing
										</h2>
										<p className="text-lg text-earth-brown">
											One comprehensive membership plan designed to support your
											complete wellness journey.
										</p>
									</div>

									<div className="flex justify-content-center">
										<Card
											className="pricing-card text-center"
											style={{ maxWidth: '500px' }}
										>
											<div className="flex flex-column gap-4">
												<div className="text-6xl mb-4">🌟</div>
												<h3 className="text-2xl font-bold text-primary-green">
													Complete Wellness Membership
												</h3>
												<div className="text-4xl font-bold text-sage-green-600 mb-2">
													$149
													<span className="text-lg font-normal text-earth-brown">
														/month
													</span>
												</div>
												<p className="text-earth-brown mb-4">
													Everything you need for your wellness journey in one
													comprehensive plan.
												</p>

												<div className="flex flex-column gap-3 mb-6">
													<div className="flex align-items-center gap-3">
														<i className="pi pi-check-circle text-sage-green-600"></i>
														<span className="text-earth-brown">
															Unlimited class access
														</span>
													</div>
													<div className="flex align-items-center gap-3">
														<i className="pi pi-check-circle text-sage-green-600"></i>
														<span className="text-earth-brown">
															Monthly wellness consultation
														</span>
													</div>
													<div className="flex align-items-center gap-3">
														<i className="pi pi-check-circle text-sage-green-600"></i>
														<span className="text-earth-brown">
															All workshops & events
														</span>
													</div>
													<div className="flex align-items-center gap-3">
														<i className="pi pi-check-circle text-sage-green-600"></i>
														<span className="text-earth-brown">
															Wellness library access
														</span>
													</div>
													<div className="flex align-items-center gap-3">
														<i className="pi pi-check-circle text-sage-green-600"></i>
														<span className="text-earth-brown">
															Community support
														</span>
													</div>
												</div>

												<Button
													label="Join Membership"
													icon="pi pi-heart"
													className="bg-pastel-pink border-pastel-pink text-secondary-brown p-button-lg"
													style={{ minWidth: '200px' }}
												/>

												<p className="text-sm text-earth-brown/70 mt-3">
													Cancel anytime • No long-term commitment
												</p>
											</div>
										</Card>
									</div>
								</div>
							</TabPanel>
						</TabView>
					</Card>
				</main>
			</div>
		</>
	)
}
