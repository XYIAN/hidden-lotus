interface HeroSectionProps {
	title: string
	subtitle?: string
	description?: string
	showActionButton?: boolean
	actionButtonText?: string
	actionButtonHref?: string
}

export function HeroSection({
	title,
	subtitle,
	description,
	showActionButton = false,
	actionButtonText = 'Get Started',
	actionButtonHref = '/contact',
}: HeroSectionProps) {
	return (
		<section className="text-center pt-2 sm:pt-4 lg:pt-6">
			<div className="max-w-4xl mx-auto px-3 sm:px-4">
				{subtitle && (
					<p className="text-lg text-sage-green-600 mb-4 font-medium">
						{subtitle}
					</p>
				)}
				<h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-sage-green-800 mb-2 sm:mb-3 leading-tight">
					{title}
				</h1>
				{description && (
					<p className="text-base sm:text-lg text-sage-green-600 mb-3 sm:mb-4 leading-relaxed max-w-2xl mx-auto font-semibold">
						{description}
					</p>
				)}
				{showActionButton && (
					<div className="flex justify-center">
						<a
							href={actionButtonHref}
							className="inline-flex items-center px-8 py-3 bg-sage-green-600 hover:bg-sage-green-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
						>
							{actionButtonText}
							<i className="pi pi-arrow-right ml-2"></i>
						</a>
					</div>
				)}
			</div>
		</section>
	)
}
