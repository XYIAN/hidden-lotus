'use client';

import { useState } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Dropdown } from 'primereact/dropdown';
import { Steps } from 'primereact/steps';
import { Message } from 'primereact/message';
import { HeroSection } from '@/components/common/hero-section';
import '@/styles/stepper.css';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export default function ContactPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    { label: 'Select a Service', value: '' },
    { label: 'Yoga Classes', value: 'yoga' },
    { label: 'Reiki Healing', value: 'reiki' },
    { label: 'Meditation Sessions', value: 'meditation' },
    { label: 'Wellness Consultation', value: 'consultation' },
    { label: 'Group Workshops', value: 'workshops' },
    { label: 'Other', value: 'other' },
  ];

  const steps = [
    { label: 'Personal Info' },
    { label: 'Service Selection' },
    { label: 'Message' },
    { label: 'Review' },
  ];

  const validateStep = (step: number): boolean => {
    const newErrors: Partial<FormData> = {};

    switch (step) {
      case 0:
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
        if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
        break;
      case 1:
        if (!formData.service) newErrors.service = 'Please select a service';
        break;
      case 2:
        if (!formData.message.trim()) newErrors.message = 'Message is required';
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(activeStep)) {
      setActiveStep(activeStep + 1);
    }
  };

  const handlePrev = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSubmit = () => {
    if (validateStep(activeStep)) {
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitted(true);
      }, 1000);
    }
  };

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: undefined });
    }
  };

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
            Thank you for reaching out to Hidden Lotus. We've received your inquiry and will respond
            within 24-48 hours.
          </p>
          <Button
            label="Back to Home"
            icon="pi pi-home"
            className="bg-sage-green-600 border-sage-green-600"
            onClick={() => (window.location.href = '/')}
          />
        </Card>
      </div>
    );
  }

  return (
    <div className="flex flex-column gap-6 p-4 page-transition">
      <HeroSection
        title="Contact Us"
        description="Get in touch with us to learn more about our wellness services or to schedule a consultation."
      />

      <section className="max-w-4xl mx-auto w-full">
        <Card className="yoga-card p-6">
          <Steps model={steps} activeIndex={activeStep} className="mb-6" />

          {/* Step 1: Personal Information */}
          {activeStep === 0 && (
            <div className="flex flex-column gap-4">
              <h2 className="text-2xl font-semibold text-primary-green mb-3">
                Personal Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-column gap-2">
                  <label htmlFor="name" className="text-sm font-semibold text-primary-green">
                    Full Name *
                  </label>
                  <InputText
                    id="name"
                    value={formData.name}
                    onChange={e => updateFormData('name', e.target.value)}
                    className={errors.name ? 'p-invalid' : ''}
                  />
                  {errors.name && <small className="p-error">{errors.name}</small>}
                </div>
                <div className="flex flex-column gap-2">
                  <label htmlFor="email" className="text-sm font-semibold text-primary-green">
                    Email Address *
                  </label>
                  <InputText
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={e => updateFormData('email', e.target.value)}
                    className={errors.email ? 'p-invalid' : ''}
                  />
                  {errors.email && <small className="p-error">{errors.email}</small>}
                </div>
              </div>
              <div className="flex flex-column gap-2">
                <label htmlFor="phone" className="text-sm font-semibold text-primary-green">
                  Phone Number *
                </label>
                <InputText
                  id="phone"
                  value={formData.phone}
                  onChange={e => updateFormData('phone', e.target.value)}
                  className={errors.phone ? 'p-invalid' : ''}
                />
                {errors.phone && <small className="p-error">{errors.phone}</small>}
              </div>
            </div>
          )}

          {/* Step 2: Service Selection */}
          {activeStep === 1 && (
            <div className="flex flex-column gap-4">
              <h2 className="text-2xl font-semibold text-primary-green mb-3">Service Selection</h2>
              <div className="flex flex-column gap-2">
                <label htmlFor="service" className="text-sm font-semibold text-primary-green">
                  What service are you interested in? *
                </label>
                <Dropdown
                  id="service"
                  value={formData.service}
                  onChange={e => updateFormData('service', e.value)}
                  options={services}
                  optionLabel="label"
                  optionValue="value"
                  placeholder="Select a service"
                  className={errors.service ? 'p-invalid' : ''}
                />
                {errors.service && <small className="p-error">{errors.service}</small>}
              </div>
            </div>
          )}

          {/* Step 3: Message */}
          {activeStep === 2 && (
            <div className="flex flex-column gap-4">
              <h2 className="text-2xl font-semibold text-primary-green mb-3">Your Message</h2>
              <div className="flex flex-column gap-2">
                <label htmlFor="message" className="text-sm font-semibold text-primary-green">
                  Tell us more about your needs *
                </label>
                <InputTextarea
                  id="message"
                  value={formData.message}
                  onChange={e => updateFormData('message', e.target.value)}
                  rows={5}
                  placeholder="Please share details about your wellness goals, any specific concerns, or questions you have..."
                  className={errors.message ? 'p-invalid' : ''}
                />
                {errors.message && <small className="p-error">{errors.message}</small>}
              </div>
            </div>
          )}

          {/* Step 4: Review */}
          {activeStep === 3 && (
            <div className="flex flex-column gap-4">
              <h2 className="text-2xl font-semibold text-primary-green mb-3">
                Review Your Information
              </h2>
              <Card className="bg-light-tan/50 p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold text-primary-green mb-2">Personal Information</h3>
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
                    <h3 className="font-semibold text-primary-green mb-2">Service Details</h3>
                    <p className="text-earth-brown mb-1">
                      <strong>Service:</strong>{' '}
                      {services.find(s => s.value === formData.service)?.label}
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="font-semibold text-primary-green mb-2">Message</h3>
                  <p className="text-earth-brown">{formData.message}</p>
                </div>
              </Card>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-content-between mt-6">
            <Button
              label="Previous"
              icon="pi pi-chevron-left"
              onClick={handlePrev}
              disabled={activeStep === 0}
              className="p-button-outlined border-sage-green-600 text-sage-green-600"
            />
            {activeStep < steps.length - 1 ? (
              <Button
                label="Next"
                icon="pi pi-chevron-right"
                iconPos="right"
                onClick={handleNext}
                className="bg-sage-green-600 border-sage-green-600"
              />
            ) : (
              <Button
                label="Submit"
                icon="pi pi-send"
                onClick={handleSubmit}
                className="bg-sage-green-600 border-sage-green-600"
              />
            )}
          </div>
        </Card>
      </section>
    </div>
  );
}
