import { Button } from "@/app/components/Button";
import Link from "next/link";
import { FaRegFile } from "react-icons/fa";

export function EducationSection() {
  return (
    <section 
      id="education"
      className="container grid grid-cols-4 gap-y-12 mx-auto py-16 px-6 lg:py-32 lg:grid-cols-12"
    >
      <div className="hidden lg:block"></div>

      <div className="col-span-4">
        <h2 className="text-4xl text-zinc-300 font-bold lg:text-6xl">
          Graduações e certificações
        </h2>
      </div>

      <div className="hidden lg:block"></div>

      <div className="col-span-4 lg:col-span-5">
        <ul className="flex flex-col gap-16 text-white">
          <li>
            <h3 className="text-xl font-bold">
              Cursando: Ciência da computação | 2024-2027
            </h3>
            <h4 className="mt-3 text-sm font-bold lg:text-base">
              Instituição: UFAPE (Universidade Federal do Agreste de Pernambuco)
            </h4>
            <p className="mt-6 text-sm lg:text-base">
              Fui aprovado em 3° lugar no curso de ciência da computação na UFAPE no sisu de 2024
            </p>
          </li>

          <li>
            <h3 className="text-xl font-bold">
              Certificado: Ignite NodeJS | 2022
            </h3>
            <h4 className="mt-3 text-sm font-bold lg:text-base">
              Instituição: Rocketseat
            </h4>
            <p className="mt-6 text-sm lg:text-base">
              Ganhei uma bolsa de estudos de 1 ano na rocketseat por meio do evento DoWhile, durante esse tempo eu estudei a trilha de NodeJS, onde aprendi diversos conceitos utilizados no mercado como Clean architecture, SOLID, TDD, Documentação com Swagger e etc.
            </p>

              <Button className="mt-8 w-fit" variant="primary" asChild>
              <Link href="/">
                Visualizar certificado
                <FaRegFile size={24} />
              </Link>
            </Button>
            
          </li>
        </ul>
      </div>
    </section>
  )
}