import { Card } from 'primereact/card';
import { Tag } from 'primereact/tag';
import { Story } from '@/constants/stories';
import { StoryFilters } from './StoryFilters';
import { StoryGrid } from './StoryGrid';

interface StorySectionProps {
  stories: Story[];
  searchTerm: string;
  selectedCategory: string;
  categories: { label: string; value: string }[];
  onSearchChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
  onClear: () => void;
}

export function StorySection({
  stories,
  searchTerm,
  selectedCategory,
  categories,
  onSearchChange,
  onCategoryChange,
  onClear,
}: StorySectionProps) {
  return (
    <section className="max-w-6xl mx-auto w-full">
      <Card className="yoga-card p-4 mb-6">
        <StoryFilters
          searchTerm={searchTerm}
          selectedCategory={selectedCategory}
          categories={categories}
          onSearchChange={onSearchChange}
          onCategoryChange={onCategoryChange}
          onClear={onClear}
          disableClear={!searchTerm && !selectedCategory}
        />
      </Card>

      {/* Results Count */}
      <div className="flex justify-content-between align-items-center mb-4">
        <h2 className="text-xl font-semibold text-primary-green">
          {stories.length} Story{stories.length !== 1 ? 'ies' : ''} Found
        </h2>
        {(searchTerm || selectedCategory) && (
          <div className="flex gap-2">
            {searchTerm && <Tag value={`Search: ${searchTerm}`} className="bg-pastel-pink" />}
            {selectedCategory && (
              <Tag
                value={`Category: ${categories.find(c => c.value === selectedCategory)?.label}`}
                className="bg-sage-green-600"
              />
            )}
          </div>
        )}
      </div>

      <StoryGrid stories={stories} clearFilters={onClear} />
    </section>
  );
}
