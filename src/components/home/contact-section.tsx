import { Button } from 'primereact/button'
import Link from 'next/link'

export function ContactSection() {
	return (
		<section className="text-center py-8">
			<div className="bg-light-tan/90 backdrop-blur-sm p-6 soft-rounded sage-border">
				<h2 className="text-2xl font-semibold text-primary-green mb-3">
					Ready to Begin Your Journey?
				</h2>
				<p className="text-earth-brown mb-4">
					Get in touch with us to learn more about our wellness programs.
				</p>
				<Link href="/contact">
					<Button
						label="Contact Us"
						icon="pi pi-envelope"
						iconPos="right"
						className="p-button-lg bg-pastel-pink border-pastel-pink text-secondary-brown"
					/>
				</Link>
			</div>
		</section>
	)
}
