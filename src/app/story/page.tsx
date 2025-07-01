'use client';

import { useState } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { ScrollPanel } from 'primereact/scrollpanel';
import { Tag } from 'primereact/tag';
import { Dialog } from 'primereact/dialog';
import { HeroSection } from '@/components/ui/hero-section';
import { storiesData, Story } from '@/constants/stories';
import Link from 'next/link';

export default function StoryPage() {
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);

  return (
    <div className="flex flex-column gap-6 p-4">
      <HeroSection
        title="Our Stories"
        description="Read inspiring stories from our community members and their wellness journeys."
      />

      {/* Stories Grid */}
      <section className="max-w-4xl mx-auto w-full">
        <div className="flex flex-column gap-8">
          {storiesData.map(story => (
            <Card key={story.id} className="yoga-card p-4">
              <div className="flex flex-column gap-4">
                {/* Header */}
                <div className="flex justify-content-between align-items-start">
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-primary-green mb-2">{story.title}</h2>
                    <div className="flex align-items-center gap-3 mb-3">
                      <span className="text-earth-brown font-medium">{story.author}</span>
                      <span className="text-earth-brown/70 text-sm">{story.date}</span>
                      <Tag
                        value={story.category}
                        className="bg-sage-green-200 text-sage-green-800 border-sage-green-300"
                      />
                    </div>
                  </div>
                  <Link href={`/story/${story.id}`}>
                    <Button
                      icon="pi pi-info-circle"
                      className="p-button-rounded p-button-text p-button-sm bg-pastel-pink/20 border-pastel-pink/30 text-pastel-pink hover:bg-pastel-pink/30"
                      aria-label="Read full story"
                    />
                  </Link>
                </div>

                {/* Excerpt */}
                <p className="text-earth-brown text-lg leading-relaxed">{story.excerpt}</p>

                {/* Content Preview */}
                <div className="bg-light-tan/50 p-4 border-round">
                  <ScrollPanel
                    style={{ width: '100%', height: '200px' }}
                    className="custom-scrollbar"
                  >
                    <div className="text-earth-brown leading-relaxed">
                      {story.content.split('\n\n').slice(0, 3).join('\n\n')}
                      {story.content.split('\n\n').length > 3 && (
                        <div className="mt-3">
                          <Link href={`/story/${story.id}`}>
                            <Button
                              label="Read Full Story"
                              className="bg-sage-green-600 border-sage-green-600 text-white"
                              size="small"
                            />
                          </Link>
                        </div>
                      )}
                    </div>
                  </ScrollPanel>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
