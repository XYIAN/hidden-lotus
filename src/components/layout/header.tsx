'use client';

import { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import Link from 'next/link';
import Image from 'next/image';
import { Flower2 } from 'lucide-react';
import { usePathname } from 'next/navigation';
import '@/styles/header.css';

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
      <header className="sticky top-0 z-50 w-full header-blur">
        <div className="flex justify-content-between align-items-center p-4 max-w-7xl mx-auto">
          {/* Logo */}
          <Link href="/" className="flex align-items-center gap-3">
            <Image
              src="/icon-hl-1.png"
              alt="Hidden Lotus"
              width={50}
              height={50}
              className="rounded-lg object-contain"
              style={{ borderRadius: '12px' }}
              priority
            />
            <span className="text-xl font-bold text-primary-green">Hidden Lotus</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6">
            {navigationItems.map(item => (
              <Link
                key={item.label}
                href={item.href}
                className={`text-earth-brown hover:text-primary-green transition-colors duration-200 px-2 py-1 rounded-md ${
                  pathname === item.href ? 'bg-sage-green-600 text-white' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            icon={<Flower2 className="text-primary-green" />}
            onClick={() => setSidebarVisible(true)}
            className="p-button-text p-button-rounded md:hidden bg-transparent border-none"
            aria-label="Open menu"
          />
        </div>
      </header>

      {/* Mobile Sidebar */}
      <Sidebar
        visible={sidebarVisible}
        onHide={() => setSidebarVisible(false)}
        position="right"
        header={
          <div className="flex align-items-center gap-3">
            <Image
              src="/icon-hl-1.png"
              alt="Hidden Lotus Logo"
              width={50}
              height={50}
              className="rounded-lg object-contain"
              style={{ borderRadius: '12px' }}
            />
            <span className="text-2xl font-bold text-primary-green tracking-wide">
              Hidden Lotus
            </span>
          </div>
        }
        className="w-80 bg-[#ede8e0] bg-gradient-to-br from-[#ede8e0] via-[#e2d3c0] to-[#c7b299] backdrop-blur-lg border-l border-sage-green-200/60 shadow-xl"
      >
        <div className="flex flex-column gap-4 p-6 mt-4">
          {navigationItems.map(item => (
            <Link
              key={item.label}
              href={item.href}
              className={`text-earth-brown text-lg font-medium px-4 py-3 rounded-lg transition-colors duration-200 ${
                pathname === item.href
                  ? 'bg-sage-green-600 text-white shadow-md ring-2 ring-primary-green'
                  : 'hover:bg-pastel-pink/30 hover:text-primary-green'
              }`}
              onClick={() => setSidebarVisible(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </Sidebar>
    </>
  );
}
