import type { Metadata } from 'next';

import { inter } from '@/styles/fonts';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: {
    template: 'Joey Palchak | %s',
    default: 'Joey Palchak | Full Stack Developer',
  },
  description: 'A Full Stack Developer, collaborative story-teller, and a maker of things.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="mx-auto mt-20 max-w-xl antialiased">
        <Navigation />
        <main className="mb-10 flex flex-col px-3">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
