import { Button } from "@/app/components/Button";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { Badge } from "react-simple-badges";

export function ProjectCard() {
  return (
    <div className="text-zinc-50">
      <div className="w-full h-[180px] relative lg:h-[250px]">
        <Image
          src={"/images/project1.png"}
          alt="Screenshot do projeto"
          fill
          style={{
            objectFit: "cover"
          }}
          className="rounded-lg"
        />
      </div>

      <h3 className="mt-6 mb-4  text-xl font-bold">FSW Barber</h3>
      <div className="flex flex-wrap items-center gap-2">
          <Badge className="rounded-full" logoColor="#333333" name="JavaScript" />
          <Badge className="rounded-full" name="TypeScript" />
          <Badge className="rounded-full" name="React" />
          <Badge className="rounded-full" name="Tailwind CSS" />
          <Badge className="rounded-full" name="PostgreSQL" />
      </div>
      <p className="mt-6 mb-8 lg:mt-4 lg:mb-6">
        Sistema de reserva para barbearias, onde o usuário pode buscar por barbearias, escolher um serviço, realizar um agendamento com horário e data e cancelar uma reserva feita
      </p>

      <div className="flex justify-between items-center gap-5 lg:justify-normal">
        <Button size="bold" className="lg:w-auto">
          Acessar
          <FaArrowRight size={24} />
        </Button>

        <Button variant="gray" size="bold" className="lg:w-auto">
          Repositório
          <FiGithub size={24} />
        </Button>
      </div>
    </div>
  )
}