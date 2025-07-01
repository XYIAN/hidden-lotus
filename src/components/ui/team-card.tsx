'use client';

import { useState } from 'react';
import { Card } from 'primereact/card';
import { Tag } from 'primereact/tag';
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
        return 'bg-soft-sage text-sage';
      case 'admin':
        return 'bg-pastel-pink text-secondary-brown';
      case 'board':
        return 'bg-sage text-white';
      default:
        return 'bg-gray-500 text-white';
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
    <Card className="h-full yoga-card">
      <div className="text-center">
        <div className="relative w-5rem h-5rem mx-auto mb-3">
          {!imageLoaded && !imageError && (
            <LoadingSkeleton type="image" className="w-5rem h-5rem border-round-full" />
          )}
          {imageError && (
            <div className="w-5rem h-5rem bg-light-tan border-round-full flex align-items-center justify-content-center sage-border">
              <i className="pi pi-user text-3xl text-sage"></i>
            </div>
          )}
          {!imageError && (
            <Image
              src={getMemberIcon(member.type)}
              alt={`${member.name} avatar`}
              width={80}
              height={80}
              className={`w-5rem h-5rem object-contain border-round-full sage-border ${
                imageLoaded ? 'block' : 'hidden'
              }`}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
            />
          )}
        </div>

        <h3 className="text-xl font-semibold text-primary-green mb-2">{member.name}</h3>

        <Tag value={member.type} className={`capitalize mb-3 ${getTypeColor(member.type)}`} />

        <p className="text-sm font-medium text-secondary-brown mb-2">{member.profession}</p>

        <p className="text-xs text-earth-brown mb-3">{member.credentials}</p>

        <p className="text-sm text-earth-brown leading-relaxed">{member.bio}</p>
      </div>
    </Card>
  );
}
