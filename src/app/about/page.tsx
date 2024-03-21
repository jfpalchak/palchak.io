import type { Metadata } from 'next';
import { NAME, ABOUT } from '@/data';
import Socials from '@/components/Socials';
import Heading from '@/components/Heading';

export const metadata: Metadata = {
  title: 'About',
  description: 'A few words about me.',
};

export default function AboutPage() {
  return (
    <section>
      <Heading subtitle="/ about me">
        {NAME}
      </Heading>
      <div>
        {ABOUT.map((info, index) => (
          <p key={index} className="pb-2 text-sm sm:text-base dark:text-neutral-300">
            {info}
          </p>
        ))}
      </div>
      <Socials />
    </section>
  );
}
