import { SOCIAL_MEDIA } from "@/data/lifeApi"
import ExternalLink from "./ExternalLink";

export default function Socials() {
  return (
    <div className="my-3">
      <ul className="flex gap-4">
        {SOCIAL_MEDIA.map(({ name, link, icon: Icon }) => (
          <li key={name}>
            <ExternalLink href={link}>
              <Icon className="w-5 h-5 fill-neutral-400 transition hover:fill-neutral-800" />
            </ExternalLink>
          </li>
        ))}
      </ul>
    </div>
  );
}