import { Card } from 'primereact/card';
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
    <div className="flex flex-column gap-6 p-4">
      {/* Page Header */}
      <section className="text-center py-6">
        <h1 className="text-3xl font-bold text-primary-green mb-2">Privacy Policy</h1>
        <p className="text-earth-brown max-w-2xl mx-auto">
          Your privacy is important to us. This policy describes how we collect, use, and protect
          your personal information.
        </p>
      </section>

      {/* Privacy Sections */}
      <section className="max-w-4xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-content-center">
          {privacySections.map((section, index) => (
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

      {/* Additional Information */}
      <section className="max-w-4xl mx-auto w-full">
        <div className="bg-light-tan p-6 border-round sage-border">
          <h2 className="text-2xl font-semibold text-primary-green mb-4 text-center">
            Additional Information
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-secondary-brown mb-2">
                Cookies and Tracking
              </h3>
              <p className="text-earth-brown">
                We use cookies and similar tracking technologies to enhance your experience on our
                website. You can control cookie settings through your browser preferences.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-secondary-brown mb-2">Your Rights</h3>
              <p className="text-earth-brown">
                You have the right to access, update, or delete your personal information. You may
                also opt out of certain communications from us.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-secondary-brown mb-2">Contact Us</h3>
              <p className="text-earth-brown">
                If you have any questions about this privacy policy or our practices, please contact
                us at privacy@hiddenlotus.com.
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
