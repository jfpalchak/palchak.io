import type { Metadata } from "next";

import { inter } from "@/styles/fonts";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    template: 'Joey Palchak | %s',
    default:  "Joey Palchak | Full Stack Developer",
  },
  description: "A Full Stack Developer, collaborative story-teller, and a maker of things.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="antialiased mt-20 max-w-xl mx-auto">
        <Navbar />
        <main className="flex flex-col mb-10 px-3">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
