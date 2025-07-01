import { Card } from 'primereact/card';
import type { Metadata } from 'next';

const morSections = [
  {
    title: 'Motion',
    icon: 'pi pi-heart',
    description:
      'Movement is life. Through mindful motion, we connect with our bodies, release tension, and create space for healing. Our yoga and movement practices help you find your natural rhythm and flow.',
    color: 'bg-soft-sage',
    textColor: 'text-sage',
  },
  {
    title: 'Open Heart',
    icon: 'pi pi-heart-fill',
    description:
      'An open heart is the foundation of true wellness. We cultivate compassion, empathy, and love through meditation, reiki healing, and community practices that nurture the soul.',
    color: 'bg-pastel-pink',
    textColor: 'text-secondary-brown',
  },
  {
    title: 'Revival',
    icon: 'pi pi-refresh',
    description:
      'Revival is the process of renewal and transformation. Through our holistic approach, we help you rediscover your authentic self and create lasting positive change in your life.',
    color: 'bg-sage',
    textColor: 'text-white',
  },
];

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
      <section className="text-center py-6">
        <h1 className="text-3xl font-bold text-primary-green mb-2">MOR Philosophy</h1>
        <p className="text-earth-brown max-w-2xl mx-auto">
          Our mission is guided by three core principles: Motion, Open Heart, and Revival. These
          pillars form the foundation of our approach to wellness and healing.
        </p>
      </section>

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
