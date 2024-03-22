import { Button } from "@/app/components/Button";
import Link from "next/link";
import { FaRegFile } from "react-icons/fa";
import { Education } from "../types/Education";

interface EducationSectionProps {
  educations: Education[];
}

export function EducationSection({ educations }: EducationSectionProps) {
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
          {educations.map((education) => (
            <li key={education.id}>
              <h3 className="text-xl font-bold">
                {education.title}
              </h3>
              <h4 className="mt-3 text-sm font-bold lg:text-base">
                Instituição: {education.instituicion}
              </h4>
              <p className="mt-6 text-sm lg:text-base">
                {education.description}
              </p>

              {education.certification && (
                <Button className="mt-8 w-fit" variant="primary" asChild>
                  <Link href="/">
                    Visualizar certificado
                    <FaRegFile size={24} />
                  </Link>
                </Button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}