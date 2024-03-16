import { SocialMedia } from "@/data/lifeApi"

export default function Socials() {
  return (
    <div className="my-3">
      <ul className="flex gap-4">
        {SocialMedia.map(({ name, link, icon: Icon }) => (
          <li key={name}>
            <a href={link}>
              <Icon className="w-6 h-6 fill-neutral-400 transition hover:fill-neutral-800" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}