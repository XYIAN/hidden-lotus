'use client';

import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Story } from '@/lib/data';

interface StoryCardProps {
  story: Story;
  onClick: (story: Story) => void;
}

export function StoryCard({ story, onClick }: StoryCardProps) {
  return (
    <Card className="h-full yoga-card cursor-pointer" onClick={() => onClick(story)}>
      <div className="text-center">
        <div className="bg-light-tan p-4 border-round-full w-4rem h-4rem mx-auto mb-3 flex align-items-center justify-content-center sage-border">
          <i className="pi pi-book text-2xl text-sage"></i>
        </div>

        <h3 className="text-xl font-semibold text-primary-green mb-3">{story.title}</h3>

        <p className="text-earth-brown leading-relaxed mb-4">{story.description}</p>

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
