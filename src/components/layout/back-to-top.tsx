'use client';

import { useEffect, useState } from 'react';
import { ScrollTop } from 'primereact/scrolltop';
import '@/styles/back-to-top.css';

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <ScrollTop
      target="window"
      threshold={300}
      icon="pi pi-chevron-up"
      className="custom-back-to-top"
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        width: '3.5rem',
        height: '3.5rem',
        background: 'linear-gradient(135deg, var(--sage-green-600), var(--primary-green))',
        border: '2px solid var(--sage-green-400)',
        borderRadius: '50%',
        boxShadow: '0 4px 12px rgba(139, 69, 19, 0.3)',
        transition: 'all 0.3s ease',
        zIndex: 9999,
      }}
    />
  );
}
