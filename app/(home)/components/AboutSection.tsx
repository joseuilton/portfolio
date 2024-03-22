import Image from "next/image";
import { Badge } from "react-simple-badges";

export function AboutSection() {
  return (
    <section id="about" className="bg-zinc-100">
      <div
        className="container mx-auto px-6 grid grid-cols-4 gap-12 py-16
                   lg:grid-cols-12 lg:gap-0 lg:py-32"
      >
        <div className="flex justify-center col-span-4">
          <div className="relative w-3/4 min-h-[295px] lg:w-full">
            <Image
              src={"/images/about-image.png"}
              alt="Foto de Uilton"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>

        <div className="hidden lg:block"></div>

        <div className="text-zinc-950 col-span-4 order-first lg:order-last lg:col-span-7">
          <h2 className="mb-4 text-2xl font-bold lg:text-4xl">Quem sou eu?</h2>
          <h3 className="mb-8 font-bold lg:text-xl">
            Um Jovem Comprometido com o Futuro da Programação
          </h3>

          <p className="mb-4">
            Me chamo José Uilton e minha jornada na programação começou com uma simples pergunta na infância: como os jogos são feitos? Desde então, mergulhei no mundo da programação e descobri minha paixão. Ao longo da adolescência, dediquei-me ao estudo e desenvolvimento de diversos sites, jogos e aplicativos, moldando minha habilidade e conhecimento na área.
          </p>
          <p>
            Aos 18 anos, estou mais preparado do que nunca para buscar oportunidades na indústria da programação. Residente em Venturosa, Pernambuco, estou atualmente cursando Ciência da Computação na UFAPE, buscando ampliar meu conhecimento e contribuir para a construção do novo futuro tecnológico.
          </p>

          <h3 className="mt-6 mb-4 font-bold">
            Principais habilidades:
          </h3>

          <div className="grid grid-cols-4 gap-x-4 gap-y-6">
            <h4 className="col-span-1 font-small font-bold">Frontend:</h4>
            <div className="flex flex-wrap items-center gap-2 col-span-3">
              <Badge className="rounded-full" logoColor="#333333" name="JavaScript" />
              <Badge className="rounded-full" name="TypeScript" />
              <Badge className="rounded-full" name="React" />
              <Badge className="rounded-full" name="Next.js" />
              <Badge className="rounded-full" name="Tailwind CSS" />
              <p className="absolute invisible">
                Javascript, Typescript, React, Next.js, Tailwind CSS
              </p>
            </div>

            <h4 className="col-span-1 font-small font-bold">Backend:</h4>
            <div className="flex flex-wrap items-center gap-2 col-span-3">
              <Badge className="rounded-full" name="Node.js" />
              <Badge className="rounded-full" name="Fastify" />
              <Badge className="rounded-full" name="Express" />
              <Badge className="rounded-full" name="NestJS" />
              <Badge className="rounded-full" name="PostgreSQL" />
              <Badge className="rounded-full" name="MongoDB" />
              <Badge className="rounded-full" name="Redis" />
              <p className="absolute invisible">
                Node.js, Fastify, Express, NestJS, PostgreSQL, MongoDB, Redis
              </p>
            </div>

            <h4 className="col-span-1 font-small font-bold">Outros:</h4>
            <div className="flex flex-wrap items-center gap-2 col-span-3">
              <Badge className="rounded-full" name="Figma" />
              <Badge className="rounded-full" name="Git" />
              <Badge className="rounded-full" name="GitHub" />
              <Badge className="rounded-full" name="Docker" />
              <Badge className="rounded-full" name="Amazon AWS" />
              <p className="absolute invisible">
                Figma, Git, Github, Docker, Amazon AWS
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}