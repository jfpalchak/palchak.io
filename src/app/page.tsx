import { SocialMedia, Summary } from "@/data/lifeApi";

export default function Home() {
  return (
    <section>
      <div>
        <h1 className="text-3xl font-medium mb-6">Joey Palchak</h1>
        <p>{Summary}</p>
      </div>
      <div className="my-3">
        <ul className="flex gap-4">
          {SocialMedia.map((social) => (
            <li key={social.name}>
              <a href={social.link}>{social.name}</a>
            </li>
          ))}
        </ul>
      </div>
      <br/>
      <div>
        <h1>Projects</h1>
        VinoSeeker
        Cranberry
        EOL
        Text Adventure
      </div>
    </section>
  );
}
