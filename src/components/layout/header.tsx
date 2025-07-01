'use client';

import { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import Link from 'next/link';
import Image from 'next/image';
import { Flower2 } from 'lucide-react';
import { usePathname } from 'next/navigation';

const navigationItems = [
  { label: 'Home', href: '/' },
  { label: 'Classes', href: '/classes' },
  { label: 'Team', href: '/team' },
  { label: 'About', href: '/about' },
  { label: 'Story', href: '/story' },
  { label: 'Contact', href: '/contact' },
  { label: 'MOR', href: '/mor' },
];

export function Header() {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    return pathname === href;
  };

  return (
    <>
      <header className="bg-light-tan/80 backdrop-blur-sm shadow-sm sage-border sticky top-0 z-50">
        <div className="flex justify-content-between align-items-center p-4 max-w-7xl mx-auto">
          {/* Logo */}
          <Link href="/" className="flex align-items-center gap-3">
            <Image
              src="/icon-hl-3.png"
              alt="Hidden Lotus"
              width={40}
              height={40}
              className="object-contain soft-rounded"
            />
            <span className="text-xl font-bold text-primary-green">Hidden Lotus</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex align-items-center gap-4">
            {navigationItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-decoration-none px-3 py-2 border-round transition-colors ${
                  isActive(item.href)
                    ? 'bg-olive-green text-white font-medium'
                    : 'text-earth-brown hover:bg-pastel-pink hover:text-secondary-brown'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            onClick={() => setSidebarVisible(true)}
            className="p-button-text p-button-rounded md:hidden bg-pastel-pink border-pastel-pink text-secondary-brown"
            aria-label="Open menu"
          >
            <Flower2 size={28} className="text-secondary-brown" />
          </Button>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <Sidebar
        visible={sidebarVisible}
        onHide={() => setSidebarVisible(false)}
        position="right"
        className="w-20rem"
      >
        <div className="flex flex-column gap-2">
          <div className="text-center mb-4">
            <h2 className="text-xl font-bold text-primary-green mb-2">Hidden Lotus</h2>
            <p className="text-sm text-earth-brown">Wellness & Healing</p>
          </div>

          {navigationItems.map(item => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setSidebarVisible(false)}
              className={`text-decoration-none p-3 border-round transition-colors ${
                isActive(item.href)
                  ? 'bg-olive-green text-white font-medium'
                  : 'text-earth-brown hover:bg-pastel-pink hover:text-secondary-brown'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </Sidebar>
    </>
  );
}
