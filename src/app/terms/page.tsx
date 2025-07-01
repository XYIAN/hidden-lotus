import { Card } from 'primereact/card';
import { HeroSection } from '@/components/common/hero-section';
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
    <div className="flex flex-column gap-6 p-4 page-transition">
      <HeroSection
        title="Terms of Service"
        description="Read our terms of service to understand the rules and guidelines for using Hidden Lotus services."
      />

      <section className="max-w-4xl mx-auto w-full">
        <Card className="yoga-card p-6">
          <h2 className="text-2xl font-semibold text-primary-green mb-4">Terms of Service</h2>
          <p className="text-earth-brown mb-4">Last updated: December 15, 2024</p>

          <div className="flex flex-column gap-6">
            <div>
              <h3 className="text-xl font-semibold text-sage-green-600 mb-3">
                Acceptance of Terms
              </h3>
              <p className="text-earth-brown">
                By accessing and using Hidden Lotus services, you accept and agree to be bound by
                the terms and provision of this agreement.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-sage-green-600 mb-3">Use License</h3>
              <p className="text-earth-brown mb-2">
                Permission is granted to temporarily access Hidden Lotus services for personal,
                non-commercial transitory viewing only. This is the grant of a license, not a
                transfer of title, and under this license you may not:
              </p>
              <ul className="text-earth-brown ml-4 mb-4">
                <li>• Modify or copy the materials</li>
                <li>• Use the materials for any commercial purpose</li>
                <li>• Attempt to reverse engineer any software</li>
                <li>• Remove any copyright or other proprietary notations</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-sage-green-600 mb-3">Health and Safety</h3>
              <p className="text-earth-brown mb-2">
                By participating in our classes and services, you acknowledge that:
              </p>
              <ul className="text-earth-brown ml-4 mb-4">
                <li>• You are responsible for your own health and safety</li>
                <li>
                  • You should consult with a healthcare provider before starting any new exercise
                  program
                </li>
                <li>• You will inform instructors of any health conditions or injuries</li>
                <li>• You will listen to your body and modify activities as needed</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-sage-green-600 mb-3">
                Booking and Cancellation
              </h3>
              <p className="text-earth-brown mb-2">Our booking and cancellation policies:</p>
              <ul className="text-earth-brown ml-4 mb-4">
                <li>• Classes must be booked in advance</li>
                <li>• Cancellations must be made at least 24 hours before class</li>
                <li>• Late cancellations may result in charges</li>
                <li>• No-shows will be charged the full class fee</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-sage-green-600 mb-3">Code of Conduct</h3>
              <p className="text-earth-brown mb-2">We expect all members and visitors to:</p>
              <ul className="text-earth-brown ml-4 mb-4">
                <li>• Treat others with respect and kindness</li>
                <li>• Maintain a peaceful and supportive environment</li>
                <li>• Follow instructor guidance and safety instructions</li>
                <li>• Keep the facility clean and tidy</li>
                <li>• Respect quiet hours and meditation spaces</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-sage-green-600 mb-3">Liability</h3>
              <p className="text-earth-brown">
                Hidden Lotus is not liable for any injuries, damages, or losses that may occur
                during your participation in our services. You participate at your own risk and are
                responsible for your own safety.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-sage-green-600 mb-3">Changes to Terms</h3>
              <p className="text-earth-brown">
                We reserve the right to modify these terms at any time. Changes will be effective
                immediately upon posting. Your continued use of our services constitutes acceptance
                of the modified terms.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-sage-green-600 mb-3">
                Contact Information
              </h3>
              <p className="text-earth-brown">
                If you have any questions about these Terms of Service, please contact us at
                legal@hiddenlotus.com or through our contact form.
              </p>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}
