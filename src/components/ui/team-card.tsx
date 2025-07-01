'use client';

import { Card } from 'primereact/card';
import { Tag } from 'primereact/tag';
import { TeamMember } from '@/lib/data';

interface TeamCardProps {
  member: TeamMember;
}

export function TeamCard({ member }: TeamCardProps) {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'instructor':
        return 'bg-soft-sage text-sage';
      case 'admin':
        return 'bg-pastel-pink text-secondary-brown';
      case 'board':
        return 'bg-sage text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <Card className="h-full yoga-card">
      <div className="text-center">
        <div className="bg-light-tan p-4 border-round-full w-5rem h-5rem mx-auto mb-3 flex align-items-center justify-content-center sage-border">
          <i className="pi pi-user text-3xl text-sage"></i>
        </div>

        <h3 className="text-xl font-semibold text-primary-green mb-2">{member.name}</h3>

        <Tag value={member.type} className={`capitalize mb-3 ${getTypeColor(member.type)}`} />

        <p className="text-sm font-medium text-secondary-brown mb-2">{member.profession}</p>

        <p className="text-xs text-earth-brown mb-3">{member.credentials}</p>

        <p className="text-sm text-earth-brown leading-relaxed">{member.bio}</p>
      </div>
    </Card>
  );
}
