import { FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { ContactItem } from "./ContactItem";
import Link from "next/link";
import { BiEnvelope } from "react-icons/bi";

export function ContactSection() {
  return (
    <section id="contact" className="bg-zinc-100">
      <div className="container mx-auto py-16 px-6 lg:pt-32 lg:pb-52">
        <h1
          className="text-zinc-950 text-center text-4xl font-bold"
        >
          Gostou do que viu? Entre em contato
        </h1>

        <div className="flex justify-center">
          <div
            className="mt-16 grid grid-cols-2 gap-16 lg:flex lg:items-center"
          >
            <Link href="https://wa.me/5587992084588">
              <ContactItem Icon={FaWhatsapp} title="Whatsapp" />
            </Link>
            <Link href="https://www.linkedin.com/in/joseuilton/">
              <ContactItem Icon={FaLinkedinIn} title="Linkedin" />
            </Link>
            <Link href="https://www.instagram.com/joseuilton.dev/">
              <ContactItem Icon={FaInstagram} title="Instagram" />
            </Link>
            <Link href="https://github.com/joseuilton">
              <ContactItem Icon={FaGithub} title="Github" />
            </Link>
            <Link href="mailto:joseuilton.siqueira@gmail.com">
              <ContactItem Icon={BiEnvelope} title="Email" />
            </Link>
          </div>
        </div>

      </div>

    </section>
  )
}