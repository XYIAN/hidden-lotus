'use client'

import { useState } from 'react'
import { Card } from 'primereact/card'
import { Button } from 'primereact/button'
import { HeroSection } from '@/components/common/hero-section'
import {
	InputTextHL,
	DropdownHL,
	InputTextareaHL,
} from '@/components/common/inputs'
import '@/styles/stepper.css'

interface FormData {
	name: string
	email: string
	phone: string
	service: string
	message: string
}

function MiniStepper({
	activeStep,
	totalSteps,
}: {
	activeStep: number
	totalSteps: number
}) {
	return (
		<div className="flex justify-center gap-2 mt-6 mb-2">
			{Array.from({ length: totalSteps }).map((_, idx) => (
				<div
					key={idx}
					className={`mini-stepper-circle ${
						activeStep === idx ? 'mini-stepper-active' : ''
					}`}
				>
					{idx + 1}
				</div>
			))}
		</div>
	)
}

export default function ContactPage() {
	const [activeStep, setActiveStep] = useState(0)
	const [formData, setFormData] = useState<FormData>({
		name: '',
		email: '',
		phone: '',
		service: '',
		message: '',
	})
	const [errors, setErrors] = useState<Partial<FormData>>({})
	const [isSubmitted, setIsSubmitted] = useState(false)

	const services = [
		{ label: 'Select a Service', value: '' },
		{ label: 'Yoga Classes', value: 'yoga' },
		{ label: 'Reiki Healing', value: 'reiki' },
		{ label: 'Meditation Sessions', value: 'meditation' },
		{ label: 'Wellness Consultation', value: 'consultation' },
		{ label: 'Group Workshops', value: 'workshops' },
		{ label: 'Other', value: 'other' },
	]

	const steps = [
		{ label: 'Personal Info' },
		{ label: 'Service Selection' },
		{ label: 'Message' },
		{ label: 'Review' },
	]

	const validateStep = (step: number): boolean => {
		const newErrors: Partial<FormData> = {}

		switch (step) {
			case 0:
				if (!formData.name.trim()) newErrors.name = 'Name is required'
				if (!formData.email.trim()) newErrors.email = 'Email is required'
				else if (!/\S+@\S+\.\S+/.test(formData.email))
					newErrors.email = 'Email is invalid'
				if (!formData.phone.trim()) newErrors.phone = 'Phone is required'
				break
			case 1:
				if (!formData.service) newErrors.service = 'Please select a service'
				break
			case 2:
				if (!formData.message.trim()) newErrors.message = 'Message is required'
				break
		}

		setErrors(newErrors)
		return Object.keys(newErrors).length === 0
	}

	const handleNext = () => {
		if (validateStep(activeStep)) {
			setActiveStep(activeStep + 1)
		}
	}

	const handlePrev = () => {
		setActiveStep(activeStep - 1)
	}

	const handleSubmit = () => {
		if (validateStep(activeStep)) {
			// Simulate form submission
			setTimeout(() => {
				setIsSubmitted(true)
			}, 1000)
		}
	}

	const updateFormData = (field: keyof FormData, value: string) => {
		setFormData({ ...formData, [field]: value })
		if (errors[field]) {
			setErrors({ ...errors, [field]: undefined })
		}
	}

	if (isSubmitted) {
		return (
			<div className="flex flex-column gap-6 p-4 page-transition">
				<HeroSection
					title="Thank You!"
					description="We've received your message and will get back to you soon."
				/>
				<Card className="yoga-card p-8 text-center max-w-2xl mx-auto">
					<div className="text-6xl mb-4">✨</div>
					<h2 className="text-2xl font-semibold text-primary-green mb-3">
						Message Sent Successfully
					</h2>
					<p className="text-earth-brown mb-4">
						Thank you for reaching out to Hidden Lotus. We&apos;ve received your
						inquiry and will respond within 24-48 hours.
					</p>
					<Button
						label="Back to Home"
						icon="pi pi-home"
						className="bg-sage-green-600 border-sage-green-600"
						onClick={() => (window.location.href = '/')}
					/>
				</Card>
			</div>
		)
	}

	return (
		<div className="flex flex-column gap-6 p-4 page-transition">
			<HeroSection
				title="Contact Us"
				description="Get in touch with us to learn more about our wellness services or to schedule a consultation."
			/>

			<section className="max-w-4xl mx-auto w-full">
				<Card className="yoga-card p-6">
					{/* Step 1: Personal Information */}
					{activeStep === 0 && (
						<div className="flex flex-col items-center gap-4 w-full">
							<h2 className="text-2xl font-semibold text-primary-green mb-3 text-center">
								Personal Information
							</h2>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
								<InputTextHL
									id="name"
									label="Full Name"
									value={formData.name}
									onChange={(e) => updateFormData('name', e.target.value)}
									error={errors.name}
									required={true}
									labelWidth="6"
								/>
								<InputTextHL
									id="email"
									label="Email Address"
									type="email"
									value={formData.email}
									onChange={(e) => updateFormData('email', e.target.value)}
									error={errors.email}
									required={true}
									labelWidth="6"
								/>
							</div>
							<InputTextHL
								id="phone"
								label="Phone Number"
								value={formData.phone}
								onChange={(e) => updateFormData('phone', e.target.value)}
								error={errors.phone}
								required={true}
								labelWidth="6"
							/>
						</div>
					)}

					{/* Step 2: Service Selection */}
					{activeStep === 1 && (
						<div className="flex flex-col items-center gap-4 w-full">
							<h2 className="text-2xl font-semibold text-primary-green mb-3 text-center">
								Service Selection
							</h2>
							<DropdownHL
								id="service"
								label="What service are you interested in?"
								value={formData.service}
								onChange={(e) => updateFormData('service', e.value)}
								options={services}
								optionLabel="label"
								optionValue="value"
								placeholder="Select a service"
								error={errors.service}
								required={true}
								labelWidth="6"
							/>
						</div>
					)}

					{/* Step 3: Message */}
					{activeStep === 2 && (
						<div className="flex flex-col items-center gap-4 w-full">
							<h2 className="text-2xl font-semibold text-primary-green mb-3 text-center">
								Message
							</h2>
							<InputTextareaHL
								id="message"
								label="Tell us more about your needs"
								value={formData.message}
								onChange={(e) => updateFormData('message', e.target.value)}
								rows={5}
								error={errors.message}
								required={true}
								labelWidth="6"
							/>
						</div>
					)}

					{/* Step 4: Review */}
					{activeStep === 3 && (
						<div className="flex flex-col items-center gap-4 w-full">
							<h2 className="text-2xl font-semibold text-primary-green mb-3 text-center">
								Review & Submit
							</h2>
							<Card className="bg-light-tan/50 p-4">
								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									<div>
										<h3 className="font-semibold text-primary-green mb-2">
											Personal Information
										</h3>
										<p className="text-earth-brown mb-1">
											<strong>Name:</strong> {formData.name}
										</p>
										<p className="text-earth-brown mb-1">
											<strong>Email:</strong> {formData.email}
										</p>
										<p className="text-earth-brown">
											<strong>Phone:</strong> {formData.phone}
										</p>
									</div>
									<div>
										<h3 className="font-semibold text-primary-green mb-2">
											Service Details
										</h3>
										<p className="text-earth-brown mb-1">
											<strong>Service:</strong>{' '}
											{
												services.find((s) => s.value === formData.service)
													?.label
											}
										</p>
									</div>
								</div>
								<div className="mt-4">
									<h3 className="font-semibold text-primary-green mb-2">
										Message
									</h3>
									<p className="text-earth-brown">{formData.message}</p>
								</div>
							</Card>
						</div>
					)}

					{/* Navigation Buttons */}
					<div className="flex justify-between mt-6">
						<Button
							label="Previous"
							icon="pi pi-arrow-left"
							onClick={handlePrev}
							outlined
							className="border-sage-green-600 text-sage-green-600"
							disabled={activeStep === 0}
						/>
						{activeStep < steps.length - 1 ? (
							<Button
								label="Next"
								icon="pi pi-arrow-right"
								iconPos="right"
								onClick={handleNext}
								className="bg-sage-green-600 border-sage-green-600"
							/>
						) : (
							<Button
								label="Submit"
								icon="pi pi-check"
								onClick={handleSubmit}
								className="bg-sage-green-600 border-sage-green-600"
							/>
						)}
					</div>
					<MiniStepper activeStep={activeStep} totalSteps={steps.length} />
				</Card>
			</section>
		</div>
	)
}
