import { NAME, SUMMARY, PROJECTS } from '@/data';
import Socials from '@/components/Socials';
import ProjectCard from '@/components/ProjectCard';
import Heading from '@/components/Heading';

export default function Home() {
  return (
    <section>
      <Heading>{NAME}</Heading>
      <div>
        <p className="text-sm sm:text-base dark:text-neutral-300">
          {SUMMARY}
        </p>
      </div>
      <Socials />
      <div>
        <h2 className="mt-8 text-lg font-medium">
          Projects
        </h2>
        {PROJECTS.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}
