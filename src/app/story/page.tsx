'use client';

import { useState, useEffect } from 'react';
import { HeroSection } from '@/components/common/hero-section';
import { storiesData, Story } from '@/constants/stories';
import { StorySection } from '@/components/story';
import '@/styles/animations.css';

export default function StoryPage() {
  const [filteredStories, setFilteredStories] = useState<Story[]>(storiesData);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const categories = [
    { label: 'All Categories', value: '' },
    { label: 'Wellness', value: 'wellness' },
    { label: 'Yoga', value: 'yoga' },
    { label: 'Meditation', value: 'meditation' },
  ];

  useEffect(() => {
    let filtered = storiesData;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        story =>
          story.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          story.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
          story.author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter(
        story => story.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    setFilteredStories(filtered);
  }, [searchTerm, selectedCategory]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
  };

  return (
    <div className="flex flex-column gap-6 p-4 page-transition">
      <HeroSection
        title="Our Stories"
        description="Discover inspiring stories of transformation, healing, and personal growth from our community."
      />

      <StorySection
        stories={filteredStories}
        searchTerm={searchTerm}
        selectedCategory={selectedCategory}
        categories={categories}
        onSearchChange={setSearchTerm}
        onCategoryChange={setSelectedCategory}
        onClear={clearFilters}
      />
    </div>
  );
}
