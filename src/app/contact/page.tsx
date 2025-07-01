'use client';

import { useState, useRef } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Stepper } from 'primereact/stepper';
import { StepperPanel } from 'primereact/stepperpanel';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Toast } from 'primereact/toast';
import { HeroSection } from '@/components/ui/hero-section';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().optional(),
  subject: z.string().min(1, 'Please select a subject'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  preferredContact: z.string().min(1, 'Please select preferred contact method'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const subjects = [
  { label: 'General Inquiry', value: 'general' },
  { label: 'Class Booking', value: 'booking' },
  { label: 'Wellness Consultation', value: 'consultation' },
  { label: 'Partnership', value: 'partnership' },
  { label: 'Other', value: 'other' },
];

const contactMethods = [
  { label: 'Email', value: 'email' },
  { label: 'Phone', value: 'phone' },
  { label: 'Text', value: 'text' },
];

export default function ContactPage() {
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [formData, setFormData] = useState<ContactFormData | null>(null);
  const toast = useRef<Toast>(null);
  const stepperRef = useRef<any>(null);
  const isMobile = useMediaQuery('(max-width: 768px)');

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: 'onChange',
  });

  const watchedValues = watch();

  const onSubmit = (data: ContactFormData) => {
    setFormData(data);
    setShowSuccessDialog(true);

    // Simulate confetti effect
    if (toast.current) {
      toast.current.show({
        severity: 'success',
        summary: 'Success!',
        detail: 'Your message has been sent successfully!',
        life: 3000,
      });
    }
  };

  const renderPersonalInfo = () => (
    <div className="flex flex-column gap-4">
      <div className="flex flex-column gap-2">
        <label htmlFor="name" className="text-sm font-medium text-earth-brown">
          Full Name *
        </label>
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <InputText
              id="name"
              {...field}
              className={errors.name ? 'p-invalid' : ''}
              placeholder="Enter your full name"
            />
          )}
        />
        {errors.name && <small className="p-error">{errors.name.message}</small>}
      </div>

      <div className="flex flex-column gap-2">
        <label htmlFor="email" className="text-sm font-medium text-earth-brown">
          Email Address *
        </label>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <InputText
              id="email"
              {...field}
              type="email"
              className={errors.email ? 'p-invalid' : ''}
              placeholder="Enter your email address"
            />
          )}
        />
        {errors.email && <small className="p-error">{errors.email.message}</small>}
      </div>

      <div className="flex flex-column gap-2">
        <label htmlFor="phone" className="text-sm font-medium text-earth-brown">
          Phone Number
        </label>
        <Controller
          name="phone"
          control={control}
          render={({ field }) => (
            <InputText id="phone" {...field} placeholder="Enter your phone number (optional)" />
          )}
        />
      </div>
    </div>
  );

  const renderMessageDetails = () => (
    <div className="flex flex-column gap-4">
      <div className="flex flex-column gap-2">
        <label htmlFor="subject" className="text-sm font-medium text-earth-brown">
          Subject *
        </label>
        <Controller
          name="subject"
          control={control}
          render={({ field }) => (
            <Dropdown
              id="subject"
              {...field}
              options={subjects}
              placeholder="Select a subject"
              className={errors.subject ? 'p-invalid' : ''}
            />
          )}
        />
        {errors.subject && <small className="p-error">{errors.subject.message}</small>}
      </div>

      <div className="flex flex-column gap-2">
        <label htmlFor="message" className="text-sm font-medium text-earth-brown">
          Message *
        </label>
        <Controller
          name="message"
          control={control}
          render={({ field }) => (
            <InputTextarea
              id="message"
              {...field}
              rows={5}
              className={errors.message ? 'p-invalid' : ''}
              placeholder="Tell us how we can help you..."
            />
          )}
        />
        {errors.message && <small className="p-error">{errors.message.message}</small>}
      </div>

      <div className="flex flex-column gap-2">
        <label htmlFor="preferredContact" className="text-sm font-medium text-earth-brown">
          Preferred Contact Method *
        </label>
        <Controller
          name="preferredContact"
          control={control}
          render={({ field }) => (
            <Dropdown
              id="preferredContact"
              {...field}
              options={contactMethods}
              placeholder="Select preferred contact method"
              className={errors.preferredContact ? 'p-invalid' : ''}
            />
          )}
        />
        {errors.preferredContact && (
          <small className="p-error">{errors.preferredContact.message}</small>
        )}
      </div>
    </div>
  );

  const renderReview = () => (
    <div className="flex flex-column gap-4">
      <div className="bg-light-tan/50 p-4 border-round">
        <h3 className="text-lg font-semibold text-primary-green mb-3">Review Your Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm font-medium text-earth-brown">Name:</p>
            <p className="text-primary-green">{watchedValues.name || 'Not provided'}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-earth-brown">Email:</p>
            <p className="text-primary-green">{watchedValues.email || 'Not provided'}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-earth-brown">Phone:</p>
            <p className="text-primary-green">{watchedValues.phone || 'Not provided'}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-earth-brown">Subject:</p>
            <p className="text-primary-green">{watchedValues.subject || 'Not provided'}</p>
          </div>
          <div className="md:col-span-2">
            <p className="text-sm font-medium text-earth-brown">Message:</p>
            <p className="text-primary-green">{watchedValues.message || 'Not provided'}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-earth-brown">Preferred Contact:</p>
            <p className="text-primary-green">{watchedValues.preferredContact || 'Not provided'}</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-column gap-6 p-4">
      <HeroSection
        title="Contact Us"
        description="Get in touch with us to learn more about our wellness programs and services."
      />

      {/* Contact Form */}
      <>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stepper ref={stepperRef} orientation="vertical" className="custom-stepper">
            <StepperPanel header="Personal Information">
              <div className="flex flex-column gap-4">{renderPersonalInfo()}</div>
              <div className="flex py-4">
                <Button
                  label="Next"
                  icon="pi pi-arrow-right"
                  iconPos="right"
                  onClick={() => stepperRef.current?.nextCallback()}
                  className="bg-sage-green-600 border-sage-green-600"
                />
              </div>
            </StepperPanel>

            <StepperPanel header="Message Details">
              <div className="flex flex-column gap-4">{renderMessageDetails()}</div>
              <div className="flex py-4 gap-2">
                <Button
                  label="Back"
                  severity="secondary"
                  icon="pi pi-arrow-left"
                  onClick={() => stepperRef.current?.prevCallback()}
                  className="border-sage text-sage"
                />
                <Button
                  label="Next"
                  icon="pi pi-arrow-right"
                  iconPos="right"
                  onClick={() => stepperRef.current?.nextCallback()}
                  className="bg-sage-green-600 border-sage-green-600"
                />
              </div>
            </StepperPanel>

            <StepperPanel header="Review & Submit">
              <div className="flex flex-column gap-4">{renderReview()}</div>
              <div className="flex py-4 gap-2">
                <Button
                  label="Back"
                  severity="secondary"
                  icon="pi pi-arrow-left"
                  onClick={() => stepperRef.current?.prevCallback()}
                  className="border-sage text-sage"
                />
                <Button
                  type="submit"
                  label="Submit"
                  icon="pi pi-check"
                  className="bg-pastel-pink border-pastel-pink text-secondary-brown"
                  disabled={!isValid}
                />
              </div>
            </StepperPanel>
          </Stepper>
        </form>
      </>

      {/* Success Dialog */}
      <Dialog
        visible={showSuccessDialog}
        onHide={() => setShowSuccessDialog(false)}
        header="Message Sent Successfully!"
        className="w-90vw md:w-30rem"
        footer={
          <div className="flex justify-content-end">
            <Button
              label="Close"
              onClick={() => setShowSuccessDialog(false)}
              className="bg-sage-green-600 border-sage-green-600"
            />
          </div>
        }
      >
        <div className="p-4">
          <p className="text-lg mb-3">Thank you for reaching out to Hidden Lotus!</p>
          <p className="text-earth-brown">
            We've received your message and will get back to you within 24-48 hours.
          </p>
          {formData && (
            <div className="mt-4 p-3 bg-light-tan/50 border-round">
              <h4 className="text-primary-green mb-2">Message Summary:</h4>
              <p className="text-sm text-earth-brown">
                <strong>Subject:</strong> {formData.subject}
              </p>
              <p className="text-sm text-earth-brown">
                <strong>Contact:</strong> {formData.preferredContact}
              </p>
            </div>
          )}
        </div>
      </Dialog>

      <Toast ref={toast} />
    </div>
  );
}
