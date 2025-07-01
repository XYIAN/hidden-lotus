'use client';

import { ScrollTop } from 'primereact/scrolltop';
import { Flower2 } from 'lucide-react';
import '@/styles/back-to-top.css';

export function BackToTop() {
  return (
    <ScrollTop
      target="parent"
      threshold={100}
      icon={<Flower2 size={20} className="text-white" />}
      className="custom-back-to-top"
    />
  );
}
