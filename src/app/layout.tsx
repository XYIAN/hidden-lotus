import type { Metadata } from 'next';
import { Inter, Roboto_Mono } from 'next/font/google';
import './globals.css';
import { Providers } from '@/lib/providers';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

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
  title: {
    template: '%s | Hidden Lotus',
    default: 'Hidden Lotus - Wellness & Healing Center',
  },
  description:
    'Discover authentic wellness experiences at Hidden Lotus. From yoga and meditation to reiki healing, we provide holistic approaches to your well-being journey.',
  keywords:
    'wellness, yoga, meditation, reiki, healing, holistic health, mindfulness, wellness center, spiritual healing, energy healing, mindfulness practice',
  authors: [{ name: 'Hidden Lotus' }],
  creator: 'Hidden Lotus',
  publisher: 'Hidden Lotus',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://hidden-lotus.netlify.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://hidden-lotus.netlify.app',
    siteName: 'Hidden Lotus',
    title: 'Hidden Lotus - Wellness & Healing Center',
    description:
      'Discover authentic wellness experiences at Hidden Lotus. From yoga and meditation to reiki healing, we provide holistic approaches to your well-being journey.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Hidden Lotus - Wellness & Healing Center',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hidden Lotus - Wellness & Healing Center',
    description:
      'Discover authentic wellness experiences at Hidden Lotus. From yoga and meditation to reiki healing, we provide holistic approaches to your well-being journey.',
    images: ['/og-image.png'],
    creator: '@hiddenlotus',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'wellness',
  classification: 'Health & Wellness',
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
          <div className="min-h-screen flex flex-column">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
