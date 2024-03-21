import { ProjectCard } from "./ProjectCard";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="container mx-auto px-6 py-16 lg:py-32 text-zinc-50"
    >
      <h2 className="mb-8 text-center text-2xl font-bold lg:text-4xl lg:mb-16">
        Meus projetos
      </h2>

      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-12">
        <div className="hidden lg:block"></div>
        <div className="lg:col-span-4">
          <ProjectCard />
        </div>

        <div className="hidden lg:block lg:col-span-2"></div>

        <div className="lg:col-span-4">
          <ProjectCard />
        </div>

        <div className="hidden lg:block"></div>
      </div>
    </section>
  );
}