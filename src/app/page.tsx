import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import Link from 'next/link';
import Image from 'next/image';

const actionCards = [
  {
    title: 'Next Class',
    description: 'Join our upcoming wellness session',
    icon: 'pi pi-calendar',
    href: '/classes',
    color: 'bg-primary-green',
  },
  {
    title: 'Book',
    description: 'Reserve your spot in our classes',
    icon: 'pi pi-bookmark',
    href: '/classes',
    color: 'bg-secondary-brown',
  },
  {
    title: 'Teachers',
    description: 'Meet our experienced instructors',
    icon: 'pi pi-users',
    href: '/team',
    color: 'bg-sage',
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-column gap-6 p-4">
      {/* Hero Section */}
      <section className="text-center py-8">
        <div className="mb-6 flex flex-col items-center justify-center">
          <Image
            src="/icon-hl-1.png"
            alt="Hidden Lotus Logo"
            width={160}
            height={160}
            className="mx-auto rounded-full object-contain"
            priority
            style={{ maxWidth: '160px', height: 'auto' }}
          />
          <h1 className="text-4xl font-bold text-primary-green mb-4 mt-4">
            Welcome to Hidden Lotus
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover authentic wellness experiences in a peaceful environment. From yoga and
            meditation to reiki healing, we provide holistic approaches to your well-being journey.
          </p>
        </div>
      </section>

      {/* Action Cards */}
      <section className="max-w-4xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {actionCards.map((card, index) => (
            <Card key={index} className="h-full">
              <div className="text-center">
                <div
                  className={`${card.color} text-white p-3 border-round-full w-4rem h-4rem mx-auto mb-3 flex align-items-center justify-content-center`}
                >
                  <i className={`${card.icon} text-2xl`}></i>
                </div>
                <h3 className="text-xl font-semibold text-primary-green mb-2">{card.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{card.description}</p>
                <Link href={card.href}>
                  <Button
                    label="Learn More"
                    className="p-button-sm"
                    icon="pi pi-arrow-right"
                    iconPos="right"
                  />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="text-center py-8">
        <div className="bg-light-tan p-6 border-round">
          <h2 className="text-2xl font-semibold text-primary-green mb-3">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-gray-600 mb-4">
            Get in touch with us to learn more about our wellness programs.
          </p>
          <Link href="/contact">
            <Button label="Contact Us" icon="pi pi-envelope" className="p-button-lg" />
          </Link>
        </div>
      </section>
    </div>
  );
}
