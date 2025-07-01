import { Card } from 'primereact/card';
import { HeroSection } from '@/components/common/hero-section';
import type { Metadata } from 'next';

const privacySections = [
  {
    title: 'Information We Collect',
    content:
      'We collect information you provide directly to us, such as when you create an account, make a booking, or contact us. This may include your name, email address, phone number, and any other information you choose to provide.',
    icon: 'pi pi-info-circle',
    color: 'bg-soft-sage',
    textColor: 'text-sage',
  },
  {
    title: 'How We Use Your Information',
    content:
      'We use the information we collect to provide, maintain, and improve our services, communicate with you, and personalize your experience. We may also use your information to send you updates about our services.',
    icon: 'pi pi-cog',
    color: 'bg-pastel-pink',
    textColor: 'text-secondary-brown',
  },
  {
    title: 'Information Sharing',
    content:
      'We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy or as required by law.',
    icon: 'pi pi-shield',
    color: 'bg-sage',
    textColor: 'text-white',
  },
  {
    title: 'Data Security',
    content:
      'We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.',
    icon: 'pi pi-lock',
    color: 'bg-earth-brown',
    textColor: 'text-white',
  },
];

export const metadata: Metadata = {
  title: 'Privacy Policy | Hidden Lotus',
  description:
    'Read the privacy policy for Hidden Lotus. Learn how we collect, use, and protect your personal information.',
  robots: 'noindex, nofollow',
  openGraph: {
    title: 'Privacy Policy | Hidden Lotus',
    description:
      'Read the privacy policy for Hidden Lotus. Learn how we collect, use, and protect your personal information.',
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
    title: 'Privacy Policy | Hidden Lotus',
    description:
      'Read the privacy policy for Hidden Lotus. Learn how we collect, use, and protect your personal information.',
    images: ['/og-image.png'],
  },
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-column gap-6 p-4 page-transition">
      <HeroSection
        title="Privacy Policy"
        description="Learn how we protect and handle your personal information at Hidden Lotus."
      />

      <section className="max-w-4xl mx-auto w-full">
        <Card className="yoga-card p-6">
          <h2 className="text-2xl font-semibold text-primary-green mb-4">Privacy Policy</h2>
          <p className="text-earth-brown mb-4">Last updated: December 15, 2024</p>

          <div className="flex flex-column gap-6">
            <div>
              <h3 className="text-xl font-semibold text-sage-green-600 mb-3">
                Information We Collect
              </h3>
              <p className="text-earth-brown mb-2">
                We collect information you provide directly to us, such as when you:
              </p>
              <ul className="text-earth-brown ml-4 mb-4">
                <li>• Register for classes or services</li>
                <li>• Contact us through our website or phone</li>
                <li>• Sign up for our newsletter</li>
                <li>• Participate in our programs</li>
              </ul>
              <p className="text-earth-brown">
                This information may include your name, email address, phone number, and any other
                information you choose to provide.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-sage-green-600 mb-3">
                How We Use Your Information
              </h3>
              <p className="text-earth-brown mb-2">We use the information we collect to:</p>
              <ul className="text-earth-brown ml-4 mb-4">
                <li>• Provide and improve our services</li>
                <li>• Communicate with you about classes and events</li>
                <li>• Send you newsletters and updates (with your consent)</li>
                <li>• Respond to your inquiries and requests</li>
                <li>• Ensure the safety and security of our community</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-sage-green-600 mb-3">
                Information Sharing
              </h3>
              <p className="text-earth-brown">
                We do not sell, trade, or otherwise transfer your personal information to third
                parties without your consent, except as described in this policy or as required by
                law.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-sage-green-600 mb-3">Data Security</h3>
              <p className="text-earth-brown">
                We implement appropriate security measures to protect your personal information
                against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-sage-green-600 mb-3">Your Rights</h3>
              <p className="text-earth-brown mb-2">You have the right to:</p>
              <ul className="text-earth-brown ml-4 mb-4">
                <li>• Access your personal information</li>
                <li>• Correct inaccurate information</li>
                <li>• Request deletion of your information</li>
                <li>• Opt out of marketing communications</li>
                <li>• Lodge a complaint with relevant authorities</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-sage-green-600 mb-3">Contact Us</h3>
              <p className="text-earth-brown">
                If you have any questions about this Privacy Policy or our data practices, please
                contact us at privacy@hiddenlotus.com or through our contact form.
              </p>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}
