'use client';

import { useState } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import Image from 'next/image';
import { LoadingSkeleton } from './loading-skeleton';
import { Story } from '@/constants/stories';

interface StoryCardProps {
  story: Story;
  onClick: (story: Story) => void;
}

export function StoryCard({ story, onClick }: StoryCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const getStoryIcon = (id: string) => {
    switch (id) {
      case '1':
        return '/icon-hl-1.png';
      case '2':
        return '/icon-hl-2.png';
      case '3':
        return '/icon-hl-3.png';
      case '4':
        return '/icon-mor-1.png';
      default:
        return '/icon-hl-1.png';
    }
  };

  return (
    <Card className="story-card yoga-card cursor-pointer" onClick={() => onClick(story)}>
      <div className="text-center flex flex-column justify-content-center">
        <div className="relative mx-auto mb-3">
          {!imageLoaded && !imageError && (
            <LoadingSkeleton type="image" className="icon-large soft-rounded" />
          )}
          {imageError && (
            <div className="icon-large bg-light-tan soft-rounded flex align-items-center justify-content-center sage-border">
              <i className="pi pi-book text-2xl text-sage"></i>
            </div>
          )}
          {!imageError && (
            <Image
              src={getStoryIcon(story.id)}
              alt={`${story.title} icon`}
              width={48}
              height={48}
              className={`icon-large object-contain soft-rounded sage-border ${
                imageLoaded ? 'block' : 'hidden'
              }`}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
            />
          )}
        </div>

        <h3 className="text-xl font-semibold text-primary-green mb-3">{story.title}</h3>

        <p className="text-earth-brown leading-relaxed mb-4">{story.excerpt}</p>

        <Button
          label="Read More"
          icon="pi pi-arrow-right"
          iconPos="right"
          className="p-button-outlined border-sage text-sage"
        />
      </div>
    </Card>
  );
}
