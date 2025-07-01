'use client';

import { useState } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Tag } from 'primereact/tag';
import Image from 'next/image';
import { LoadingSkeleton } from './loading-skeleton';
import { Class } from '@/lib/data';

interface ClassCardProps {
  classData: Class;
  onBook: (classId: string) => void;
}

export function ClassCard({ classData, onBook }: ClassCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'yoga':
        return 'bg-soft-sage text-sage';
      case 'reiki':
        return 'bg-pastel-pink text-secondary-brown';
      case 'seminar':
        return 'bg-sage text-white';
      case 'cupping':
        return 'bg-earth-brown text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'yoga':
        return '/icon-hl-1.png';
      case 'reiki':
        return '/icon-hl-2.png';
      case 'seminar':
        return '/icon-hl-3.png';
      case 'cupping':
        return '/icon-mor-1.png';
      default:
        return '/icon-hl-1.png';
    }
  };

  return (
    <Card className="h-full yoga-card">
      <div className="flex flex-column h-full">
        <div className="flex justify-content-between align-items-start mb-3">
          <h3 className="text-xl font-semibold text-primary-green m-0">{classData.name}</h3>
          <Tag
            value={classData.category}
            className={`capitalize ${getCategoryColor(classData.category)}`}
          />
        </div>

        {/* Category Icon */}
        <div className="flex justify-content-center mb-3">
          <div className="relative w-4rem h-4rem">
            {!imageLoaded && !imageError && (
              <LoadingSkeleton type="image" className="w-4rem h-4rem border-round" />
            )}
            {imageError && (
              <div className="w-4rem h-4rem bg-light-tan border-round flex align-items-center justify-content-center">
                <i className="pi pi-image text-2xl text-sage"></i>
              </div>
            )}
            {!imageError && (
              <Image
                src={getCategoryIcon(classData.category)}
                alt={`${classData.category} icon`}
                width={64}
                height={64}
                className={`w-4rem h-4rem object-contain border-round ${
                  imageLoaded ? 'block' : 'hidden'
                }`}
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageError(true)}
              />
            )}
          </div>
        </div>

        <p className="text-earth-brown mb-3 flex-grow-1">{classData.description}</p>

        <div className="flex flex-column gap-2 mb-3">
          <div className="flex align-items-center gap-2">
            <i className="pi pi-user text-sage"></i>
            <span className="text-sm text-earth-brown">{classData.instructor}</span>
          </div>
          <div className="flex align-items-center gap-2">
            <i className="pi pi-calendar text-sage"></i>
            <span className="text-sm text-earth-brown">
              {new Date(classData.date).toLocaleDateString()} at {classData.time}
            </span>
          </div>
        </div>

        <div className="flex justify-content-end">
          <Button
            label="Book Now"
            icon="pi pi-calendar-plus"
            onClick={() => onBook(classData.id)}
            className="p-button-sm bg-soft-sage border-soft-sage"
          />
        </div>
      </div>
    </Card>
  );
}
