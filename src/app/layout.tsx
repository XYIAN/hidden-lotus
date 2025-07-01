import type { Metadata } from 'next';
import { Inter, Roboto_Mono } from 'next/font/google';
import './globals.css';
import { Providers } from '@/lib/providers';
import { Header } from '@/components/layout/header';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Hidden Lotus - Wellness & Healing',
  description:
    'Discover authentic wellness experiences with Hidden Lotus. Yoga, Reiki, and holistic healing in a peaceful environment.',
  keywords: 'wellness, yoga, reiki, healing, meditation, mindfulness',
  openGraph: {
    title: 'Hidden Lotus - Wellness & Healing',
    description:
      'Discover authentic wellness experiences with Hidden Lotus. Yoga, Reiki, and holistic healing in a peaceful environment.',
    url: 'https://hiddenlotus.com',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Hidden Lotus Logo',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hidden Lotus - Wellness & Healing',
    description:
      'Discover authentic wellness experiences with Hidden Lotus. Yoga, Reiki, and holistic healing in a peaceful environment.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${robotoMono.variable} antialiased`}>
        <Providers>
          <Header />
          <main className="min-h-screen">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
