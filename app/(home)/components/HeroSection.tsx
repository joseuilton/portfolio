import { Button } from "@/app/components/Button";
import Link from "next/link";
import { FaGithub, FaInstagram, FaJava, FaLinkedinIn, FaNodeJs, FaReact, FaRegEnvelope, FaWhatsapp } from "react-icons/fa";
import { FiFileText } from "react-icons/fi";
import Image from "next/image";
import { RiJavascriptFill } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";


export function HeroSection() {
  const heroLanguageIcons = [FaReact, RiJavascriptFill, SiTailwindcss, FaJava, FaNodeJs];

  return (
    <section
      id="hero"
    >
      <div
        className="container mx-auto px-6 py-8 grid grid-cols-4 gap-y-12
                   lg:py-24 lg:grid-cols-12"
      >
        <div className="col-span-4 text-zinc-50 lg:col-span-6">
          <h1 className="text-3xl font-bold lg:text-5xl">
            Olá! Eu sou <span className="bg-gradient-to-r from-primary-500 to-secondary-500 text-transparent bg-clip-text">Uilton,</span> Desenvolvedor Full Stack Javascript
          </h1>

          <p className="mt-6 mb-8 font-medium lg:mb-6">
            Sou um desenvolvedor apaixonado por tecnologia e inovação, sempre em busca de novos desafios para crescer profissionalmente e adquirir novas habilidades, veja os meus projetos e competências e descubra como posso contribuir em seu próximo projeto.
          </p>

          <nav>
            <ul className="flex items-center flex-wrap gap-8">
              <li>
                <Button variant="outline-light" size="icon" asChild>
                  <Link href="https://wa.me/5587992084588" target="_blank">
                    <FaWhatsapp size={24} />
                  </Link>
                </Button>
              </li>

              <li>
                <Button variant="outline-light" size="icon" asChild>
                  <Link href="https://www.linkedin.com/in/joseuilton/" target="_blank">
                    <FaLinkedinIn size={24} />
                  </Link>
                </Button>
              </li>

              <li>
                <Button variant="outline-light" size="icon" asChild>
                  <Link href="https://www.instagram.com/joseuilton.dev/" target="_blank">
                    <FaInstagram size={24} />
                  </Link>
                </Button>
              </li>

              <li>
                <Button variant="outline-light" size="icon" asChild>
                  <Link href="https://github.com/joseuilton" target="_blank">
                    <FaGithub size={24} />
                  </Link>
                </Button>
              </li>

              <li>
                <Button variant="outline-light" size="icon" asChild>
                  <Link href="mailto:joseuilton.siqueira@gmail.com" target="_blank">
                    <FaRegEnvelope size={24} />
                  </Link>
                </Button>
              </li>

              <li>
                <Button variant="outline-light" asChild>
                  <Link href="/files/curriculo.docx" target="_blank">
                    Baixar CV
                    <FiFileText size={24} />
                  </Link>
                </Button>
              </li>
            </ul>
          </nav>
        </div>

        <div className="hidden lg:block lg:col-span-2"></div>

        <div className="flex justify-center col-span-4 lg:col-span-3">
          <div className="relative w-3/4 min-h-[267px] lg:w-full">
            <Image
              src={"/images/hero-image.png"}
              alt="Foto de Uilton"
              fill
              style={{objectFit: "contain"}}
            />
          </div>

        </div>
      </div>

      <div
        className="w-full h-[75px] mt-8 bg-gradient-to-r from-primary-500 to-secondary-500
                   flex justify-center
                   lg:mt-0 lg:h-[100px]"
      >
        <div
          className="relative flex items-center justify-center gap-6 bg-zinc-900 shrink-0 w-[150%] 
                     h-full -rotate-3
                     shadow-[0px_4px_8px_0px_rgba(255,255,255,0.05),0px_-4px_8px_0px_rgba(255,255,255,0.05)]
                     lg:gap-8"
        >
          <Image
            src={"/images/zap.svg"}
            alt="Ícone de raio"
            width={36}
            height={36}
            className="w-[45px] h-auto"
          />

          {heroLanguageIcons.map((Icon) => (
            <>
              <div>
                <Icon className="text-zinc-50 w-auto h-[42px] lg:w-auto lg:h-[52px]" />
              </div>
              <Image
                src={"/images/zap.svg"}
                alt="Ícone de raio"
                width={36}
                height={36}
                className="lg:w-[45px] lg:h-auto"
              />
            </>
          ))}

          {heroLanguageIcons.map((Icon) => (
            <>
              <div>
                <Icon className="text-zinc-50 w-auto h-[42px] lg:w-auto lg:h-[52px]" />
              </div>
              <Image
                src={"/images/zap.svg"}
                alt="Ícone de raio"
                width={36}
                height={36}
                className="lg:w-[45px] lg:h-auto"
              />
            </>
          ))}
        </div>
      </div>

    </section >
  )
}