'use client';

import { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import Link from 'next/link';
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
      <header className="bg-light-tan/80 backdrop-blur-sm shadow-sm sage-border">
        <div className="flex justify-content-between align-items-center p-4 max-w-7xl mx-auto">
          {/* Logo */}
          <Link href="/" className="flex align-items-center gap-2">
            <div className="bg-sage p-2 border-round">
              <i className="pi pi-heart text-white text-xl"></i>
            </div>
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
                    ? 'bg-soft-sage text-sage font-medium'
                    : 'text-earth-brown hover:bg-pastel-pink hover:text-secondary-brown'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            icon="pi pi-bars"
            onClick={() => setSidebarVisible(true)}
            className="p-button-text p-button-rounded md:hidden bg-sage border-sage"
            aria-label="Open menu"
          />
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
                  ? 'bg-soft-sage text-sage font-medium'
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
