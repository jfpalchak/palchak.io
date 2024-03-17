import type { Metadata } from "next";

import { inter } from "@/styles/fonts";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
// import Header from "@/components/Header";
import "@/styles/globals.css";

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
        <Navigation />
        {/* <Header /> */}
        <main className="flex flex-col mb-10 px-3">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
