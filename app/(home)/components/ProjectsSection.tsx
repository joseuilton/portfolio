import { Project } from "../types/Project";
import { ProjectCard } from "./ProjectCard";

interface ProjectsSectionProps {
  projects: Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section
      id="projects"
      className="container mx-auto px-6 py-16 lg:py-32 text-zinc-50"
    >
      <h2 className="mb-8 text-center text-2xl font-bold lg:text-4xl lg:mb-16">
        Meus projetos
      </h2>

      <div
        className="flex flex-col flex-wrap gap-y-16 lg:flex-row lg:justify-center lg:gap-x-32 
                   lg:gap-y-20"
      >
        {projects.map((project) => (
          <div key={project.id} className="lg:w-4/12">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}