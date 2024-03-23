import { SOCIAL_MEDIA } from '@/data';
import ExternalLink from './ExternalLink';

export default function Socials() {
  return (
    <div>
      <ul className="my-3 flex gap-4">
        {SOCIAL_MEDIA.map(({ name, link, icon: Icon }) => (
          <li key={name}>
            <ExternalLink href={link}>
              <Icon className="h-5 w-5 fill-neutral-400 transition hover:fill-neutral-800 dark:hover:fill-neutral-100 dark:fill-neutral-500" />
            </ExternalLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
