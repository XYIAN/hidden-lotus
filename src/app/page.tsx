import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import Link from 'next/link';
import Image from 'next/image';
import { ButtonGroup } from '@/components/ui/button-group';
import { HeroSection } from '@/components/ui/hero-section';
import '@/styles/home-buttons.css';

const actionButtons = [
  {
    title: 'Explore Classes',
    description: 'Discover our yoga, meditation, and wellness classes',
    icon: 'pi pi-heart',
    href: '/classes',
    buttonText: 'View Classes',
  },
  {
    title: 'Meet Our Team',
    description: 'Connect with our experienced wellness practitioners',
    icon: 'pi pi-users',
    href: '/team',
    buttonText: 'Meet Team',
  },
  {
    title: 'Book Consultation',
    description: 'Schedule a personalized wellness consultation',
    icon: 'pi pi-calendar',
    href: '/contact',
    buttonText: 'Book Now',
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-column gap-6 p-4">
      <HeroSection
        title="Welcome to Hidden Lotus"
        description="Discover your path to wellness and inner peace through our holistic approach to healing and mindfulness."
      />

      <ButtonGroup buttons={actionButtons} />

      {/* Contact Section */}
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
              className="p-button-lg bg-pastel-pink border-pastel-pink text-secondary-brown"
            />
          </Link>
        </div>
      </section>
    </div>
  );
}
