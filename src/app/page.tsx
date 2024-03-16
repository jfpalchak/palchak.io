import { SocialMedia, Summary, MyProjects } from "@/data/lifeApi";
import { ArrowLinkIcon } from "@/components/icons";

export default function Home() {
  return (
    <section>
      {/* SUMMARY */}
      <div>
        <h1 className="text-3xl font-medium mb-6">Joey Palchak</h1>
        <p className="text-sm sm:text-base">{Summary}</p>
      </div>
      {/* SOCIALS */}
      <div className="my-3">
        <ul className="flex gap-4">
          {SocialMedia.map(({ name, link, icon: Icon }) => (
            <li key={name}>
              <a href={link}>
                <Icon className="w-6 h-6 fill-neutral-400 transition hover:fill-zinc-800" />
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* PROJECTS */}
      <div>
        <h2 className="text-lg font-medium my-5">Projects</h2>
        {MyProjects.map(({ stack, links, ...project }) => (
          <div key={project.name} className="sm:grid sm:grid-cols-4 mb-5">
            <p className="text-sm text-neutral-500">{project.status}</p>
            <div className="pb-3 col-span-3">
              <h3>{project.name}</h3>
              <p className="text-sm text-neutral-500">{project.role}</p>
              <p className="text-sm mt-2">{project.description}</p>
              <ul className="flex flex-wrap gap-1 mt-3">
                {stack.map((tech) => (
                  <li key={tech} className="items-center whitespace-nowrap rounded-full bg-gray-600/10 py-1 px-3 text-xs text-gray-900">
                    <span>{tech}</span>
                  </li>
                ))}
              </ul>
              <div className="flex justify-between mt-3 text-sm text-neutral-500">
                {links.map(({ label, href }) => (
                  <a key={label} href={href} className="flex gap-1">
                    {label}
                    <ArrowLinkIcon className="w-4 h-5 fill-neutral-500" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
