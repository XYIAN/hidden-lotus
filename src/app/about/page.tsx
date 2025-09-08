'use client';

import { Carousel } from 'primereact/carousel';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { HeroSection } from '@/components/common/hero-section';
import Link from 'next/link';

const carouselItems = [
  {
    type: 'video',
    title: 'Welcome to Hidden Lotus',
    content:
      'Experience our peaceful sanctuary and discover the transformative power of holistic wellness.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder video
  },
  {
    type: 'text',
    title: 'Our Philosophy',
    content:
      'We believe in the power of authentic wellness experiences that honor the mind, body, and spirit. Our approach combines traditional wisdom with modern understanding to create lasting transformation.',
  },
  {
    type: 'text',
    title: 'Community & Connection',
    content:
      'Hidden Lotus is more than a wellness center—it&apos;s a community of individuals committed to growth, healing, and supporting each other on their wellness journeys.',
  },
  {
    type: 'text',
    title: 'Holistic Approach',
    content:
      'From yoga and meditation to reiki healing and therapeutic bodywork, we offer a comprehensive range of services designed to address your unique wellness needs.',
  },
];

interface CarouselItem {
  type: 'video' | 'text';
  title: string;
  content: string;
  videoUrl?: string;
}

export default function AboutPage() {
  const carouselTemplate = (item: CarouselItem) => (
    <div className="p-4">
      <Card className="h-full yoga-card">
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-primary-green mb-4">{item.title}</h3>
          {item.type === 'video' ? (
            <div className="mb-4">
              <iframe
                width="100%"
                height="300"
                src={item.videoUrl}
                title={item.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="border-round"
              ></iframe>
            </div>
          ) : null}
          <p className="text-earth-brown leading-relaxed text-lg">{item.content}</p>
        </div>
      </Card>
    </div>
  );

  return (
    <div className="flex flex-column gap-6 p-4 page-transition">
      <HeroSection
        title="About Hidden Lotus"
        description="Discover our mission to promote wellness, mindfulness, and holistic healing in our community."
      />

      {/* Mission Section */}
      <section className="max-w-4xl mx-auto w-full">
        <Card className="yoga-card p-6 mb-6">
          <h2 className="text-3xl font-bold text-primary-green mb-4 text-center">Our Mission</h2>
          <p className="text-earth-brown text-lg leading-relaxed mb-4">
            At Hidden Lotus, we believe that true wellness encompasses the mind, body, and spirit.
            Our mission is to create a sanctuary where individuals can discover their path to inner
            peace, physical vitality, and spiritual growth.
          </p>
          <p className="text-earth-brown text-lg leading-relaxed">
            We are committed to providing accessible, high-quality wellness services that honor the
            whole person and support sustainable lifestyle changes. Through our diverse range of
            classes, therapies, and community programs, we empower individuals to take charge of
            their health and well-being.
          </p>
        </Card>

        {/* Values Section */}
        <Card className="yoga-card p-6 mb-6">
          <h2 className="text-3xl font-bold text-primary-green mb-4 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">🌱</div>
              <h3 className="text-xl font-semibold text-sage-green-600 mb-2">Holistic Approach</h3>
              <p className="text-earth-brown">
                We address the interconnectedness of mind, body, and spirit in all our programs and
                services.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🤝</div>
              <h3 className="text-xl font-semibold text-sage-green-600 mb-2">Community</h3>
              <p className="text-earth-brown">
                We foster a supportive, inclusive community where everyone feels welcome and valued.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🌟</div>
              <h3 className="text-xl font-semibold text-sage-green-600 mb-2">Authenticity</h3>
              <p className="text-earth-brown">
                We practice what we teach, maintaining integrity and authenticity in all our
                interactions.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">💚</div>
              <h3 className="text-xl font-semibold text-sage-green-600 mb-2">Compassion</h3>
              <p className="text-earth-brown">
                We approach each individual with kindness, understanding, and unconditional positive
                regard.
              </p>
            </div>
          </div>
        </Card>

        {/* Call to Action */}
        <Card className="yoga-card p-6 text-center">
          <h2 className="text-2xl font-semibold text-primary-green mb-3">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-earth-brown mb-4">
            Join our community and discover the transformative power of holistic wellness.
          </p>
          <div className="flex gap-3 justify-content-center">
            <Link href="/classes">
              <Button
                label="Explore Classes"
                icon="pi pi-heart"
                className="bg-sage-green-600 border-sage-green-600"
              />
            </Link>
            {/**
            <Link href="/contact">
              <Button
                label="Contact Us"
                icon="pi pi-envelope"
                className="p-button-outlined border-sage-green-600 text-sage-green-600"
              />
            </Link>
            **/}
          </div>
        </Card>
      </section>

      {/* Carousel Section */}
      <section className="max-w-4xl mx-auto w-full">
        <Carousel
          value={carouselItems}
          numVisible={1}
          numScroll={1}
          className="custom-carousel"
          itemTemplate={carouselTemplate}
          autoplayInterval={8000}
          circular={true}
          showNavigators={true}
          showIndicators={true}
        />
      </section>

      {/* Location Section */}
      <section className="max-w-4xl mx-auto w-full">
        <Card className="bg-light-tan sage-border">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-primary-green mb-4">Visit Our Sanctuary</h2>
            <div className="mb-4">
              <i className="pi pi-map-marker text-4xl text-secondary-brown"></i>
            </div>
            <h3 className="text-xl font-semibold text-secondary-brown mb-2">
              Hidden Lotus Wellness Center
            </h3>
            <p className="text-earth-brown mb-3">
              123 Wellness Way
              <br />
              Irvine, CA 92614
            </p>
            <p className="text-sm text-earth-brown mb-4">
              Nestled in the heart of Irvine, our center provides a peaceful retreat from the busy
              world, surrounded by nature and designed for healing.
            </p>
            <div className="flex flex-column sm:flex-row gap-3 justify-content-center">
              <Button
                label="Get Directions"
                icon="pi pi-directions"
                className="p-button-outlined border-sage text-sage"
              />
              <Button
                label="Schedule Visit"
                icon="pi pi-calendar"
                className="p-button-primary bg-pastel-pink border-pastel-pink text-secondary-brown"
              />
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}
