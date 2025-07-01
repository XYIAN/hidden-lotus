'use client';

import { useState } from 'react';
import { Card } from 'primereact/card';
import { Tag } from 'primereact/tag';
import { Button } from 'primereact/button';
import Image from 'next/image';
import { LoadingSkeleton } from './loading-skeleton';
import { TeamMember } from '@/lib/data';

interface TeamCardProps {
  member: TeamMember;
}

export function TeamCard({ member }: TeamCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'instructor':
        return 'success';
      case 'admin':
        return 'warning';
      case 'board':
        return 'info';
      default:
        return 'info';
    }
  };

  const getMemberIcon = (type: string) => {
    switch (type) {
      case 'instructor':
        return '/icon-hl-1.png';
      case 'admin':
        return '/icon-hl-2.png';
      case 'board':
        return '/icon-hl-3.png';
      default:
        return '/icon-hl-1.png';
    }
  };

  return (
    <Card className="yoga-card team-card">
      <div className="text-center h-full flex flex-column">
        <div className="flex justify-content-center mb-3">
          <div className="relative">
            {!imageLoaded && !imageError && (
              <LoadingSkeleton type="image" className="icon-xl soft-rounded" />
            )}
            {imageError && (
              <div className="icon-xl bg-light-tan soft-rounded flex align-items-center justify-content-center sage-border">
                <i className="pi pi-user text-4xl text-sage"></i>
              </div>
            )}
            {!imageError && (
              <Image
                src={getMemberIcon(member.type)}
                alt={`${member.name} avatar`}
                width={88}
                height={88}
                className={`icon-xl object-contain soft-rounded sage-border ${
                  imageLoaded ? 'block' : 'hidden'
                }`}
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageError(true)}
              />
            )}
          </div>
        </div>

        <h3 className="text-xl font-semibold text-primary-green mb-2">{member.name}</h3>

        <Tag value={member.type} severity={getTypeColor(member.type)} className="capitalize mb-3" />

        <p className="text-sm font-medium text-secondary-brown mb-2">{member.profession}</p>

        <p className="text-xs text-earth-brown mb-3">{member.credentials}</p>

        <p className="text-sm text-earth-brown leading-relaxed mb-3 flex-grow-1">{member.bio}</p>

        <Button
          label="Learn More"
          icon="pi pi-info-circle"
          onClick={() => (window.location.href = `/team/${encodeURIComponent(member.name)}`)}
          className="p-button-sm bg-soft-sage border-soft-sage mt-auto"
        />
      </div>
    </Card>
  );
}
