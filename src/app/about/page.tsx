import type { Metadata } from "next";
import { About } from '@/data/lifeApi';
import Socials from "@/components/Socials";

export const metadata: Metadata = {
  title: 'About',
};

export default function AboutPage() {
  return (
    <section>
      <div>
        <h1 className="text-3xl font-medium mb-6">Joey Palchak <span className="text-xl font-normal">/ about me</span></h1>
        {About.map((info, index) => (
          <p key={index} className="pb-2">{info}</p>
        ))}
      </div>

      <Socials />

    </section>
  )
}
