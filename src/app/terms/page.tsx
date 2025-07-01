import { Card } from 'primereact/card';
import type { Metadata } from 'next';

const termsSections = [
  {
    title: 'Acceptance of Terms',
    content:
      'By accessing and using the Hidden Lotus website and services, you accept and agree to be bound by the terms and provision of this agreement.',
    icon: 'pi pi-check-circle',
    color: 'bg-soft-sage',
    textColor: 'text-sage',
  },
  {
    title: 'Use License',
    content:
      'Permission is granted to temporarily download one copy of the materials on Hidden Lotus website for personal, non-commercial transitory viewing only.',
    icon: 'pi pi-file',
    color: 'bg-pastel-pink',
    textColor: 'text-secondary-brown',
  },
  {
    title: 'Disclaimer',
    content:
      'The materials on Hidden Lotus website are provided on an "as is" basis. Hidden Lotus makes no warranties, expressed or implied, and hereby disclaims all other warranties.',
    icon: 'pi pi-exclamation-triangle',
    color: 'bg-sage',
    textColor: 'text-white',
  },
  {
    title: 'Limitations',
    content:
      'In no event shall Hidden Lotus or its suppliers be liable for any damages arising out of the use or inability to use the materials on our website.',
    icon: 'pi pi-shield',
    color: 'bg-earth-brown',
    textColor: 'text-white',
  },
];

export const metadata: Metadata = {
  title: 'Terms of Service | Hidden Lotus',
  description:
    'Read the terms of service for Hidden Lotus. Understand your rights and responsibilities when using our website and services.',
  robots: 'noindex, nofollow',
  openGraph: {
    title: 'Terms of Service | Hidden Lotus',
    description:
      'Read the terms of service for Hidden Lotus. Understand your rights and responsibilities when using our website and services.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Hidden Lotus Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service | Hidden Lotus',
    description:
      'Read the terms of service for Hidden Lotus. Understand your rights and responsibilities when using our website and services.',
    images: ['/og-image.png'],
  },
};

export default function TermsPage() {
  return (
    <div className="flex flex-column gap-6 p-4">
      {/* Page Header */}
      <section className="text-center py-6">
        <h1 className="text-3xl font-bold text-primary-green mb-2">Terms of Service</h1>
        <p className="text-earth-brown max-w-2xl mx-auto">
          Please read these terms carefully before using our services. By using our website and
          services, you agree to these terms.
        </p>
      </section>

      {/* Terms Sections */}
      <section className="max-w-4xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-content-center">
          {termsSections.map((section, index) => (
            <Card key={index} className="h-full yoga-card">
              <div className="text-center">
                <div
                  className={`${section.color} ${section.textColor} p-3 border-round-full w-4rem h-4rem mx-auto mb-3 flex align-items-center justify-content-center`}
                >
                  <i className={`${section.icon} text-2xl`}></i>
                </div>
                <h3 className="text-xl font-semibold text-primary-green mb-3">{section.title}</h3>
                <p className="text-earth-brown leading-relaxed">{section.content}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Additional Terms */}
      <section className="max-w-4xl mx-auto w-full">
        <div className="bg-light-tan/90 backdrop-blur-sm p-6 border-round sage-border">
          <h2 className="text-2xl font-semibold text-primary-green mb-4 text-center">
            Additional Terms
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-secondary-brown mb-2">
                Class Bookings and Cancellations
              </h3>
              <p className="text-earth-brown">
                Class bookings must be made at least 24 hours in advance. Cancellations require 12
                hours notice. No-shows may result in charges for the full class fee.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-secondary-brown mb-2">Health and Safety</h3>
              <p className="text-earth-brown">
                Participants are responsible for their own health and safety during classes. Please
                inform instructors of any medical conditions or injuries before participating.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-secondary-brown mb-2">Code of Conduct</h3>
              <p className="text-earth-brown">
                We maintain a respectful and inclusive environment. Harassment, discrimination, or
                disruptive behavior will not be tolerated and may result in removal from classes.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-secondary-brown mb-2">
                Contact Information
              </h3>
              <p className="text-earth-brown">
                For questions about these terms, please contact us at legal@hiddenlotus.com.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Last Updated */}
      <section className="max-w-4xl mx-auto w-full text-center">
        <p className="text-sm text-earth-brown">Last updated: {new Date().toLocaleDateString()}</p>
      </section>
    </div>
  );
}
