import { NAME, SUMMARY, PROJECTS } from "@/data/lifeApi";
import Socials from "@/components/Socials";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <section>
      <div>
        <h1 className="text-3xl font-medium mb-6">
          {NAME}
        </h1>
        <p className="text-sm sm:text-base">
          {SUMMARY}
        </p>
      </div>
      <Socials />
      <div>
        <h2 className="text-lg font-medium mt-8">
          Projects
        </h2>
        {PROJECTS.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}
