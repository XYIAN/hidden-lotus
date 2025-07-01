import { Card } from 'primereact/card';
import type { Metadata } from 'next';
import { HeroSection } from '@/components/ui/hero-section';
import { morSections } from '@/constants/mor';

export const metadata: Metadata = {
  title: 'MOR Philosophy | Motion, Open Heart, Revival | Hidden Lotus',
  description:
    'Learn about the MOR philosophy at Hidden Lotus: Motion, Open Heart, and Revival. Discover our holistic approach to wellness and transformation.',
  openGraph: {
    title: 'MOR Philosophy | Motion, Open Heart, Revival | Hidden Lotus',
    description:
      'Learn about the MOR philosophy at Hidden Lotus: Motion, Open Heart, and Revival. Discover our holistic approach to wellness and transformation.',
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
    title: 'MOR Philosophy | Motion, Open Heart, Revival | Hidden Lotus',
    description:
      'Learn about the MOR philosophy at Hidden Lotus: Motion, Open Heart, and Revival. Discover our holistic approach to wellness and transformation.',
    images: ['/og-image.png'],
  },
};

export default function MorPage() {
  return (
    <div className="flex flex-column gap-6 p-4">
      {/* Page Header */}
      <HeroSection
        title="MOR Philosophy"
        description="Our mission is guided by three core principles: Motion, Open Heart, and Revival. These pillars form the foundation of our approach to wellness and healing."
      />

      {/* MOR Sections */}
      <section className="max-w-4xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-content-center">
          {morSections.map((section, index) => (
            <Card key={index} className="h-full yoga-card">
              <div className="text-center">
                <div
                  className={`${section.color} ${section.textColor} p-4 border-round-full w-5rem h-5rem mx-auto mb-4 flex align-items-center justify-content-center`}
                >
                  <i className={`${section.icon} text-3xl`}></i>
                </div>
                <h3 className="text-2xl font-semibold text-primary-green mb-3">{section.title}</h3>
                <p className="text-earth-brown leading-relaxed">{section.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Mission Statement */}
      <section className="max-w-4xl mx-auto w-full">
        <div className="bg-light-tan/90 backdrop-blur-sm p-6 border-round text-center sage-border">
          <h2 className="text-2xl font-semibold text-primary-green mb-4">Our Mission</h2>
          <p className="text-lg text-earth-brown leading-relaxed">
            At Hidden Lotus, we believe that true wellness comes from the harmonious integration of
            body, mind, and spirit. Through Motion, we honor the body&apos;s need for movement and
            expression. With an Open Heart, we create space for healing and connection. And through
            Revival, we support your journey of transformation and renewal. Together, these
            principles guide us in creating a sanctuary where every individual can discover their
            path to authentic well-being and lasting peace.
          </p>
        </div>
      </section>
    </div>
  );
}
