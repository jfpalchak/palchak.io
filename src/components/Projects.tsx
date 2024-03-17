import Image from "next/image";

import { PROJECTS } from "@/data/lifeApi";
import { ArrowLinkIcon } from "@/components/icons";
import ExternalLink from "@/components/ExternalLink";

export default function Projects() {
  return (
    <div>
      <h2 className="text-lg font-medium mt-8">Projects</h2>
      {PROJECTS.map(({ stack, links, ...project }) => (
        <div key={project.name} className="sm:grid sm:grid-cols-4 mb-5 min-h-[260px]">
          <p className="pt-3 pl-3 sm:pl-0 text-sm text-neutral-500">{project.status}</p>
          <div className="flex flex-col sm:justify-between p-3 col-span-3 transition-all rounded-lg group hover:bg-neutral-100 hover:cursor-pointer">
            <div className="flex rounded-full ring-1 h-10 w-10 items-center justify-center bg-white shadow-md shadow-neutral-800/5 ring-neutral-900/5 ">
              <Image
                src={project.logo}
                width={18}
                height={18}
                alt={`${project.name} logo.`}
                className="object-contain"
              />
            </div>
            <h3 className="mt-2">{project.name}</h3>
            <p className="text-sm text-neutral-500">{project.role}</p>
            <p className="text-sm mt-3">{project.description}</p>
            <ul className="flex flex-wrap gap-1 mt-4">
              {stack.map((tech) => (
                <li key={tech} className="items-center whitespace-nowrap rounded-full bg-gray-600/10 py-1 px-3 text-xs text-gray-900">
                  <span>{tech}</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-between mt-4 text-sm text-neutral-500">
              {links.map(({ label, href }) => (
                <ExternalLink
                  key={label}
                  href={href}
                  className="group flex gap-1 transition group-hover:text-neutral-800 hover:underline"
                >
                  {label}
                  <ArrowLinkIcon className="w-4 h-5 fill-neutral-500 transition group-hover:fill-neutral-800" />
                </ExternalLink>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}