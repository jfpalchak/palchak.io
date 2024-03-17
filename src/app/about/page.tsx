import type { Metadata } from "next";
import { NAME, ABOUT } from '@/data/lifeApi';
import Socials from "@/components/Socials";

export const metadata: Metadata = {
  title: 'About',
  description: 'A few words about me.'
};

export default function AboutPage() {
  return (
    <section>
      <div>
        <h1 className="text-3xl font-medium mb-6">
          {NAME}
          <span className="text-xl font-normal">
            {' / about me'}
          </span>
        </h1>
        {ABOUT.map((info, index) => (
          <p key={index} className="text-sm sm:text-base pb-2">
            {info}
          </p>
        ))}
      </div>

      <Socials />

    </section>
  )
}
