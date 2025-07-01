import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';

interface StoryFiltersProps {
  searchTerm: string;
  selectedCategory: string;
  categories: { label: string; value: string }[];
  onSearchChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
  onClear: () => void;
  disableClear: boolean;
}

export function StoryFilters({
  searchTerm,
  selectedCategory,
  categories,
  onSearchChange,
  onCategoryChange,
  onClear,
  disableClear,
}: StoryFiltersProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="flex flex-column gap-2">
        <label htmlFor="search" className="text-sm font-semibold text-primary-green">
          Search Stories
        </label>
        <InputText
          id="search"
          value={searchTerm}
          onChange={e => onSearchChange(e.target.value)}
          placeholder="Search by title, excerpt, or author..."
          className="w-full"
        />
      </div>

      <div className="flex flex-column gap-2">
        <label htmlFor="category" className="text-sm font-semibold text-primary-green">
          Category
        </label>
        <Dropdown
          id="category"
          value={selectedCategory}
          onChange={e => onCategoryChange(e.value)}
          options={categories}
          optionLabel="label"
          optionValue="value"
          placeholder="Select Category"
          className="w-full"
        />
      </div>

      <div className="flex flex-column gap-2 justify-content-end">
        <Button
          label="Clear Filters"
          icon="pi pi-refresh"
          onClick={onClear}
          className="bg-sage-green-600 border-sage-green-600"
          disabled={disableClear}
        />
      </div>
    </div>
  );
}
