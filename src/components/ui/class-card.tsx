'use client';

import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Tag } from 'primereact/tag';
import { Class } from '@/lib/data';

interface ClassCardProps {
  classData: Class;
  onBook: (classId: string) => void;
}

export function ClassCard({ classData, onBook }: ClassCardProps) {
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
