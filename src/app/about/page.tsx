import { type Metadata } from 'next';
import { NAME, ABOUT } from '@/data';
import Socials from '@/components/Socials';
import Heading from '@/components/Heading';
import ExternalLink from '@/components/ExternalLink';
import { ArrowLinkIcon } from '@/components/icons';

export const metadata: Metadata = {
  title: 'About',
  description: 'A few words about me.',
};

export default function AboutPage() {
  return (
    <section className="group">
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
      <div className="mt-8 flex text-neutral-800 dark:text-neutral-300">
        <ExternalLink
          href="/cv/2024.pdf"
          target="_blank"
          className="flex gap-1 group/link items-center group-hover:transition-all underline-offset-2 hover:underline dark:hover:text-neutral-100"
        >
          <ArrowLinkIcon className="h-5 w-5 fill-neutral-800 group-hover:transition-all dark:fill-neutral-300 dark:group-hover/link:fill-neutral-100" />
          <p className="h-6">my resume</p>
        </ExternalLink>
      </div>
    </section>
  );
}
