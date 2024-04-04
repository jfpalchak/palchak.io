import { NAME, SUMMARY, PROJECTS } from '@/data';
import Socials from '@/components/Socials';
import ProjectCard from '@/components/ProjectCard';
import Heading from '@/components/Heading';

export default function Home() {
  return (
    <section>
      <Heading>{NAME}</Heading>
      <div className="mt-6">
        <p className="text-sm sm:text-base dark:text-neutral-300">
          {SUMMARY}
        </p>
      </div>
      <div className="my-3">
        <Socials />
      </div>
      <div className="mt-8">
        <h2 className="text-lg dark:text-white font-medium">
          Projects
        </h2>
        <div className="flex flex-col gap-5">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
