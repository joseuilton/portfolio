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
              style={{objectFit: "cover"}}
            />
          </div>
        </div>

        <div className="hidden lg:block"></div>

        <div className="text-zinc-950 col-span-4 order-first lg:order-last lg:col-span-7">
          <h2 className="mb-4 text-2xl font-bold lg:text-4xl">Quem eu sou?</h2>
          <h3 className="mb-8 font-bold lg:text-xl">
            Um jovem comprometido em fazer parte da construção do novo futuro
          </h3>

          <p className="mb-4">
            Meu nome é José Uilton, descobri a programação a partir de um simples questionamento que tive na minha infância: como é feito um jogo? A partir daí comecei a pesquisar e descobri o que mudaria a minha vida: a programação, desde então sempre estudei e programei diversos sites, jogos e aplicativos, em toda a minha adolescência a programação esteve presente.
          </p>
          <p>
            Hoje me encontro com os meus 18 anos, mais preparado do que nunca para conseguir uma oportunidade na área da programação. Sou residente em venturosa/Pernambuco e estou cursando ciência da computação na UFAPE.
          </p>

          <h3 className="mt-6 mb-4 font-bold">
            Principais habilidades:
          </h3>

          <div className="grid grid-cols-4 gap-x-4 gap-y-6">
            <h4 className="col-span-1 font-small font-bold">Frontend:</h4>
            <div className="flex flex-wrap items-center gap-2 col-span-3">
              <Badge className="rounded-full" logoColor="#333333" name="JavaScript" />
              <Badge className="rounded-full" name="Next.js" />
              <Badge className="rounded-full" name="TypeScript" />
              <Badge className="rounded-full" name="React" />
              <Badge className="rounded-full" name="Tailwind CSS" />
            </div>

            <h4 className="col-span-1 font-small font-bold">Backend:</h4>
            <div className="flex flex-wrap items-center gap-2 col-span-3">
              <Badge className="rounded-full" name="Node.js" />
              <Badge className="rounded-full" name="Redis" />
              <Badge className="rounded-full" name="Fastify" />
              <Badge className="rounded-full" name="Express" />
              <Badge className="rounded-full" name="PostgreSQL" />
              <Badge className="rounded-full" name="MongoDB" />
            </div>

            <h4 className="col-span-1 font-small font-bold">Outros:</h4>
            <div className="flex flex-wrap items-center gap-2 col-span-3">
              <Badge className="rounded-full" name="Figma" />
              <Badge className="rounded-full" name="Git" />
              <Badge className="rounded-full" name="GitHub" />
              <Badge className="rounded-full" name="Docker" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}