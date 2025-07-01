'use client'

import { Button } from 'primereact/button'
import { Carousel, CarouselResponsiveOption } from 'primereact/carousel'
import Link from 'next/link'

interface ActionButton {
	title: string
	description: string
	icon: string
	href: string
	buttonText: string
}

interface ButtonGroupProps {
	buttons: ActionButton[]
	className?: string
}

export function ButtonGroup({ buttons, className = '' }: ButtonGroupProps) {
	const responsiveOptions: CarouselResponsiveOption[] = [
		{
			breakpoint: '1400px',
			numVisible: 3,
			numScroll: 1,
		},
		{
			breakpoint: '1199px',
			numVisible: 2,
			numScroll: 1,
		},
		{
			breakpoint: '767px',
			numVisible: 1,
			numScroll: 1,
		},
		{
			breakpoint: '575px',
			numVisible: 1,
			numScroll: 1,
		},
	]

	const cardTemplate = (button: ActionButton) => {
		return (
			<div className="yoga-card bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-sage-green-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 m-2">
				<div className="text-center flex flex-column align-items-center justify-content-center h-full">
					<div className="bg-sage-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
						<i className={`${button.icon} text-2xl text-sage-green-600`}></i>
					</div>
					<h3 className="text-xl font-semibold text-sage-green-800 mb-2">
						{button.title}
					</h3>
					<p className="text-sage-green-600 mb-6">{button.description}</p>
					<Link href={button.href}>
						<Button
							label={button.buttonText}
							icon="pi pi-arrow-right"
							iconPos="right"
							className="bg-sage-green-600 hover:bg-sage-green-700 border-sage-green-600 home-card-button"
						/>
					</Link>
				</div>
			</div>
		)
	}

	return (
		<div className={`max-w-6xl mx-auto ${className}`}>
			<Carousel
				value={buttons}
				numVisible={3}
				numScroll={1}
				responsiveOptions={responsiveOptions}
				itemTemplate={cardTemplate}
				circular
				autoplayInterval={4000}
				className="custom-carousel"
				pt={{
					root: { className: 'custom-carousel-root' },
					content: { className: 'custom-carousel-content' },
					container: { className: 'custom-carousel-container' },
					itemsContent: { className: 'custom-carousel-items-content' },
					itemsContainer: { className: 'custom-carousel-items-container' },
					item: { className: 'custom-carousel-item' },
					previousButton: { className: 'custom-carousel-nav-btn' },
					nextButton: { className: 'custom-carousel-nav-btn' },
					previousButtonIcon: { className: 'custom-carousel-nav-icon' },
					nextButtonIcon: { className: 'custom-carousel-nav-icon' },
					indicators: { className: 'custom-carousel-indicators' },
					indicator: { className: 'custom-carousel-indicator' },
					indicatorButton: { className: 'custom-carousel-indicator-btn' },
				}}
			/>
		</div>
	)
}
