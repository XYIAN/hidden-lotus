'use client';

import { useState } from 'react';
import { Carousel } from 'primereact/carousel';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { ClassCard } from '@/components/ui/class-card';
import { classesData, Class } from '@/lib/data';

const categories = [
  { label: 'All Categories', value: '' },
  { label: 'Yoga', value: 'yoga' },
  { label: 'Reiki', value: 'reiki' },
  { label: 'Seminar', value: 'seminar' },
  { label: 'Cupping', value: 'cupping' },
];

const instructors = [
  { label: 'All Instructors', value: '' },
  ...Array.from(new Set(classesData.map(c => c.instructor))).map(name => ({
    label: name,
    value: name,
  })),
];

export default function ClassesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedInstructor, setSelectedInstructor] = useState('');

  const filteredClasses = classesData.filter(classItem => {
    const matchesSearch =
      classItem.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      classItem.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || classItem.category === selectedCategory;
    const matchesInstructor = !selectedInstructor || classItem.instructor === selectedInstructor;

    return matchesSearch && matchesCategory && matchesInstructor;
  });

  const topClasses = classesData.slice(0, 5);

  const handleBookClass = (classId: string) => {
    // Handle booking logic here
    console.log('Booking class:', classId);
  };

  const carouselTemplate = (classItem: Class) => (
    <div className="p-2">
      <ClassCard classData={classItem} onBook={handleBookClass} />
    </div>
  );

  return (
    <div className="flex flex-column gap-6 p-4">
      {/* Page Header */}
      <section className="text-center py-6">
        <h1 className="text-3xl font-bold text-primary-green mb-2">Our Classes</h1>
        <p className="text-earth-brown">
          Discover our diverse range of wellness classes and healing sessions.
        </p>
      </section>

      {/* Featured Classes Carousel */}
      <section className="max-w-6xl mx-auto w-full">
        <h2 className="text-2xl font-semibold text-primary-green mb-4 text-center">
          Featured Classes
        </h2>
        <Carousel
          value={topClasses}
          numVisible={1}
          numScroll={1}
          className="custom-carousel"
          itemTemplate={carouselTemplate}
          autoplayInterval={5000}
        />
      </section>

      {/* Filter Toolbar */}
      <section className="max-w-6xl mx-auto w-full">
        <div className="bg-light-tan p-4 border-round shadow-sm mb-6 sage-border">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-column gap-2">
              <label htmlFor="search" className="text-sm font-medium text-earth-brown">
                Search Classes
              </label>
              <InputText
                id="search"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                placeholder="Search by name or description..."
                className="w-full"
              />
            </div>
            <div className="flex flex-column gap-2">
              <label htmlFor="category" className="text-sm font-medium text-earth-brown">
                Category
              </label>
              <Dropdown
                id="category"
                value={selectedCategory}
                onChange={e => setSelectedCategory(e.value)}
                options={categories}
                placeholder="Select Category"
                className="w-full"
              />
            </div>
            <div className="flex flex-column gap-2">
              <label htmlFor="instructor" className="text-sm font-medium text-earth-brown">
                Instructor
              </label>
              <Dropdown
                id="instructor"
                value={selectedInstructor}
                onChange={e => setSelectedInstructor(e.value)}
                options={instructors}
                placeholder="Select Instructor"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Classes Grid */}
      <section className="max-w-6xl mx-auto w-full">
        <h2 className="text-2xl font-semibold text-primary-green mb-4 text-center">
          All Classes ({filteredClasses.length})
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-content-center">
          {filteredClasses.map(classItem => (
            <ClassCard key={classItem.id} classData={classItem} onBook={handleBookClass} />
          ))}
        </div>
        {filteredClasses.length === 0 && (
          <div className="text-center py-8">
            <p className="text-earth-brown">No classes found matching your criteria.</p>
          </div>
        )}
      </section>
    </div>
  );
}
