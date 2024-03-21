import type { Metadata } from 'next';
import clsx from 'clsx';

import { ThemeProvider } from '@/components/ThemeProvider';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { inter } from '@/styles/fonts';
import '@/styles/globals.css';

const seoDescription = 'Full Stack Developer, collaborative story-teller, and a maker of things.';

export const metadata: Metadata = {
  metadataBase: new URL(`https://palchak.io`),
  title: {
    default: 'Joey Palchak | Full Stack Developer',
    template: 'Joey Palchak | %s',
  },
  description: seoDescription,
  openGraph: {
    title: 'Joey Palchak',
    description: seoDescription,
    url: `https://palchak.io`,
    siteName: 'Joey Palchak',
    locale: 'en_US',
    type: 'website',
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
  twitter: {
    title: 'Joey Palchak',
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en" 
      className={clsx(
        'text-black bg-white dark:text-white dark:bg-neutral-900',
        inter.className,
      )}
    >
      <body className="mx-auto mt-20 max-w-xl antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <Navigation />
          <main className="mb-10 flex flex-col px-3">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
