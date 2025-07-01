'use client';

import { useState } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Tag } from 'primereact/tag';
import Image from 'next/image';
import { LoadingSkeleton } from './loading-skeleton';
import { Class } from '@/constants/classes';

interface ClassCardProps {
  classData: Class;
  onBook?: (classId: string) => void;
}

export function ClassCard({ classData, onBook }: ClassCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'yoga':
        return 'success';
      case 'reiki':
        return 'info';
      case 'seminar':
        return 'warning';
      case 'cupping':
        return 'danger';
      case 'podcast':
        return 'secondary';
      case 'meditation':
        return 'contrast';
      case 'fitness':
        return 'success';
      case 'healing':
        return 'info';
      default:
        return 'info';
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
            severity={getCategoryColor(classData.category)}
            className="capitalize"
          />
        </div>

        {/* Category Icon */}
        <div className="flex justify-content-center mb-3">
          <div className="relative">
            {!imageLoaded && !imageError && (
              <LoadingSkeleton type="image" className="icon-xl soft-rounded" />
            )}
            {imageError && (
              <div className="icon-xl bg-light-tan soft-rounded flex align-items-center justify-content-center">
                <i className="pi pi-image text-3xl text-sage"></i>
              </div>
            )}
            {!imageError && (
              <Image
                src={getCategoryIcon(classData.category)}
                alt={`${classData.category} icon`}
                width={88}
                height={88}
                className={`icon-xl object-contain soft-rounded ${
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
              {classData.dates.length > 0
                ? new Date(classData.dates[0]).toLocaleDateString()
                : 'TBD'}{' '}
              at {classData.time}
            </span>
          </div>
        </div>

        <div className="flex justify-content-end">
          <Button
            label="Book Now"
            icon="pi pi-calendar-plus"
            onClick={() => (window.location.href = `/classes/${classData.id}`)}
            className="p-button-sm bg-soft-sage border-soft-sage"
          />
        </div>
      </div>
    </Card>
  );
}
