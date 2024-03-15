import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: 'Joey Palchak | %s',
    default:  "Joey Palchak | Full Stack Developer",
  },
  description: "A Full Stack Developer, collaborative story-teller, and a maker of things.",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
