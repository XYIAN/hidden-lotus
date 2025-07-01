'use client';

import { useState } from 'react';
import { ButtonGroup } from 'primereact/buttongroup';
import { Button } from 'primereact/button';
import { TeamCard } from '@/components/ui/team-card';
import { teamData } from '@/lib/data';
import type { Metadata } from 'next';

const filterOptions = [
  { label: 'All', value: '' },
  { label: 'Instructors', value: 'instructor' },
  { label: 'Admin', value: 'admin' },
  { label: 'Board', value: 'board' },
];

export const metadata: Metadata = {
  title: 'Our Team | Instructors & Wellness Experts | Hidden Lotus',
  description:
    'Meet the dedicated team of instructors and wellness professionals at Hidden Lotus. Learn about their backgrounds and expertise.',
  openGraph: {
    title: 'Our Team | Instructors & Wellness Experts | Hidden Lotus',
    description:
      'Meet the dedicated team of instructors and wellness professionals at Hidden Lotus. Learn about their backgrounds and expertise.',
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
    title: 'Our Team | Instructors & Wellness Experts | Hidden Lotus',
    description:
      'Meet the dedicated team of instructors and wellness professionals at Hidden Lotus. Learn about their backgrounds and expertise.',
    images: ['/og-image.png'],
  },
};

export default function TeamPage() {
  const [selectedFilter, setSelectedFilter] = useState('');

  const filteredTeam = teamData.filter(member => {
    if (!selectedFilter) return true;
    return member.type === selectedFilter;
  });

  return (
    <div className="flex flex-column gap-6 p-4">
      {/* Page Header */}
      <section className="text-center py-6">
        <h1 className="text-3xl font-bold text-primary-green mb-2">Our Team</h1>
        <p className="text-earth-brown">
          Meet our dedicated team of wellness professionals and experts.
        </p>
      </section>

      {/* Filter Buttons */}
      <section className="max-w-6xl mx-auto w-full">
        <div className="flex justify-content-center mb-6">
          <ButtonGroup>
            {filterOptions.map(option => (
              <Button
                key={option.value}
                label={option.label}
                className={`${
                  selectedFilter === option.value
                    ? 'p-button-primary bg-soft-sage border-soft-sage'
                    : 'p-button-outlined border-sage text-sage'
                }`}
                onClick={() => setSelectedFilter(option.value)}
              />
            ))}
          </ButtonGroup>
        </div>
      </section>

      {/* Team Grid */}
      <section className="max-w-6xl mx-auto w-full">
        <h2 className="text-2xl font-semibold text-primary-green mb-4 text-center">
          {selectedFilter
            ? `${filterOptions.find(f => f.value === selectedFilter)?.label} Team`
            : 'All Team Members'}{' '}
          ({filteredTeam.length})
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-content-center">
          {filteredTeam.map(member => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
        {filteredTeam.length === 0 && (
          <div className="text-center py-8">
            <p className="text-earth-brown">No team members found in this category.</p>
          </div>
        )}
      </section>
    </div>
  );
}
