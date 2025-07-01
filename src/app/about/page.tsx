'use client';

import { Carousel } from 'primereact/carousel';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

const carouselItems = [
	{
		type: 'video',
		title: 'Welcome to Hidden Lotus',
		content: 'Experience our peaceful sanctuary and discover the transformative power of holistic wellness.',
		videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder video
	},
	{
		type: 'text',
		title: 'Our Philosophy',
		content: 'We believe in the power of authentic wellness experiences that honor the mind, body, and spirit. Our approach combines traditional wisdom with modern understanding to create lasting transformation.',
	},
	{
		type: 'text',
		title: 'Community & Connection',
		content: 'Hidden Lotus is more than a wellness center—it&apos;s a community of individuals committed to growth, healing, and supporting each other on their wellness journeys.',
	},
	{
		type: 'text',
		title: 'Holistic Approach',
		content: 'From yoga and meditation to reiki healing and therapeutic bodywork, we offer a comprehensive range of services designed to address your unique wellness needs.',
	},
];

interface CarouselItem {
	type: 'video' | 'text';
	title: string;
	content: string;
	videoUrl?: string;
}

export default function AboutPage() {
	const carouselTemplate = (item: CarouselItem) => (
		<div className="p-4">
			<Card className="h-full">
				<div className="text-center">
					<h3 className="text-2xl font-semibold text-primary-green mb-4">
						{item.title}
					</h3>
					{item.type === 'video' ? (
						<div className="mb-4">
							<iframe
								width="100%"
								height="300"
								src={item.videoUrl}
								title={item.title}
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
								className="border-round"
							></iframe>
						</div>
					) : null}
					<p className="text-gray-600 leading-relaxed text-lg">
						{item.content}
					</p>
				</div>
			</Card>
		</div>
	);

	return (
		<div className="flex flex-column gap-6 p-4">
			{/* Page Header */}
			<section className="text-center py-6">
				<h1 className="text-3xl font-bold text-primary-green mb-2">
					About Hidden Lotus
				</h1>
				<p className="text-gray-600">
					Learn more about our mission, values, and the community we&apos;ve built.
				</p>
			</section>

			{/* Carousel Section */}
			<section className="max-w-4xl mx-auto w-full">
				<Carousel
					value={carouselItems}
					numVisible={1}
					numScroll={1}
					className="custom-carousel"
					itemTemplate={carouselTemplate}
					autoplayInterval={8000}
				/>
			</section>

			{/* Location Section */}
			<section className="max-w-4xl mx-auto w-full">
				<Card className="bg-light-tan">
					<div className="text-center">
						<h2 className="text-2xl font-semibold text-primary-green mb-4">
							Visit Our Sanctuary
						</h2>
						<div className="mb-4">
							<i className="pi pi-map-marker text-4xl text-secondary-brown"></i>
						</div>
						<h3 className="text-xl font-semibold text-secondary-brown mb-2">
							Hidden Lotus Wellness Center
						</h3>
						<p className="text-gray-600 mb-3">
							123 Wellness Way<br />
							Irvine, CA 92614
						</p>
						<p className="text-sm text-gray-500 mb-4">
							Nestled in the heart of Irvine, our center provides a peaceful retreat 
							from the busy world, surrounded by nature and designed for healing.
						</p>
						<div className="flex flex-column sm:flex-row gap-3 justify-content-center">
							<Button
								label="Get Directions"
								icon="pi pi-directions"
								className="p-button-outlined"
							/>
							<Button
								label="Schedule Visit"
								icon="pi pi-calendar"
								className="p-button-primary"
							/>
						</div>
					</div>
				</Card>
			</section>
		</div>
	);
} 