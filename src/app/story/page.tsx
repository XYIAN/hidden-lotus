'use client';

import { useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { StoryCard } from '@/components/ui/story-card';
import { HeroSection } from '@/components/ui/hero-section';
import { storiesData, Story } from '@/constants/stories';

export default function StoryPage() {
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  const [dialogVisible, setDialogVisible] = useState(false);

  const handleStoryClick = (story: Story) => {
    setSelectedStory(story);
    setDialogVisible(true);
  };

  const handleDialogClose = () => {
    setDialogVisible(false);
    setSelectedStory(null);
  };

  return (
    <div className="flex flex-column gap-6 p-4">
      {/* Page Header */}
      <HeroSection
        title="Our Story"
        description="Discover the journey and transformation stories of Hidden Lotus."
      />

      {/* Stories Grid */}
      <section className="max-w-2xl mx-auto w-full">
        <div className="flex flex-column gap-6">
          {storiesData.map(story => (
            <StoryCard key={story.id} story={story} onClick={handleStoryClick} />
          ))}
        </div>
      </section>

      {/* Story Dialog */}
      <Dialog
        visible={dialogVisible}
        onHide={handleDialogClose}
        header={selectedStory?.title}
        className="w-90vw md:w-50rem"
        footer={
          <div className="flex justify-content-end gap-2">
            <Button
              label="No"
              icon="pi pi-times"
              onClick={handleDialogClose}
              className="p-button-text"
            />
            <Button
              label="Yes"
              icon="pi pi-check"
              onClick={handleDialogClose}
              className="bg-soft-sage border-soft-sage"
              autoFocus
            />
          </div>
        }
      >
        <div className="p-4">
          <p className="text-lg">
            You clicked on <strong>{selectedStory?.title}</strong>
          </p>
          <p className="text-earth-brown mt-3">{selectedStory?.description}</p>
        </div>
      </Dialog>
    </div>
  );
}
