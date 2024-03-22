import { Button } from "@/app/components/Button";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
const { Badge } = require("react-simple-badges");
import { Project } from "../types/Project";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="text-zinc-50">
      <div className="w-full h-[180px] relative lg:h-[250px]">
        <Image
          src={project.images[0]}
          alt="Screenshot do projeto"
          fill
          style={{
            objectFit: "cover"
          }}
          className="rounded-lg"
        />
      </div>

      <h3 className="mt-6 mb-4  text-xl font-bold">{project.title}</h3>
      <div className="flex flex-wrap items-center gap-2">
        {project.technologies.map((technology) => (
          <Badge key={technology} className="rounded-full" name={technology} />
        ))}

        <p className="absolute invisible">
          {project.technologies.map((technology) => `${technology}, `)}
        </p>
      </div>
      <p className="mt-6 mb-8 lg:mt-4 lg:mb-6">
        {project.description}
      </p>

      <div className="flex justify-between items-center gap-5 lg:justify-normal">
        <Button size="bold" className="lg:w-auto" asChild>
          <Link href={project.demonstration} target="_blank">
            Acessar
            <FaArrowRight size={24} />
          </Link>
        </Button>

        <Button variant="gray" size="bold" className="lg:w-auto" asChild>
          <Link href={project.repository} target="_blank">
            Repositório
            <FiGithub size={24} />
          </Link>

        </Button>
      </div>
    </div>
  )
}