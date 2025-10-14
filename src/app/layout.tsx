
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster";
import { PageTransition } from '@/components/page-transition';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

const siteConfig = {
  name: 'UGTechsolution',
  url: 'https://ugtechsolution.com', // Replace with your actual domain
  ogImage: 'https://ugtechsolution.com/og.jpg', // Replace with your actual OG image URL
  description: 'UGTechsolution provides expert e-commerce development for SMEs and technical SEO services for startups in East Africa. We build online stores with mobile money integration and boost visibility with data-driven SEO.',
  keywords: [
    'e-commerce uganda',
    'seo services for startups',
    'web development east africa',
    'mobile money integration',
    'sme online store',
    'uganda tech company',
    'digital solutions africa',
    'technical seo audit',
    'next.js development',
    'ai content strategy',
  ],
};

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | Digital Solutions for East African Businesses`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: 'UGTechsolution', url: siteConfig.url }],
  creator: 'UGTechsolution',
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@ugtechsolution', // Replace with your Twitter handle
  },
  icons: {
    icon: '/favicon.ico',
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head />
      <body
        className={cn(
          'h-full font-sans antialiased',
          inter.variable
        )}
      >
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            <PageTransition>
              {children}
            </PageTransition>
          </main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
