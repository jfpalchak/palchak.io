import type { Metadata } from "next";

import { inter } from "@/styles/fonts";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";

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
      <body className="antialiased">
        <main className="flex flex-col max-w-xl mx-auto mt-20 px-3">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
