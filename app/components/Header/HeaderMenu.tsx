import Link from "next/link";
import { Button } from "../Button";
import { LiaTimesSolid } from "react-icons/lia";

interface HeaderMenuProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function HeaderMenu({ isOpen, onRequestClose }: HeaderMenuProps) {
  return (
    <>
      <div
        className={`${isOpen ? 'block' : 'hidden'} lg:hidden absolute top-0 left-0 w-full min-h-screen 
                  bg-zinc-950 bg-opacity-80`}
        onClick={onRequestClose}
      ></div>
      <nav className={`${isOpen ? "translate-x-0" : "translate-x-full"} absolute top-0 right-0 p-6 w-4/5 
                       min-h-screen bg-zinc-950 text-zinc-50 transition-all duration-500
                      overflow-hidden

                       lg:static lg:w-auto lg:min-h-fit lg:bg-transparent lg:translate-x-0 lg:flex
                       lg:justify-between lg:items-center lg:gap-7 lg:p-0`}
      >
        <div className="lg:hidden flex justify-between items-center">
          <p className="text-xl font-bold">Menu</p>
          <button onClick={onRequestClose}>
            <LiaTimesSolid size={32} />
          </button>
        </div>

        <ul 
          className="flex flex-col gap-8 my-16 text-xl font-medium
                     lg:flex-row lg:text-base lg:gap-7 lg:my-0"
        >
          <li>
            <Link onClick={onRequestClose} href="#hero">
              Início
            </Link>
          </li>
          <li>
            <Link onClick={onRequestClose} href="#projects">
              Projetos
            </Link>
          </li>
          <li>
            <Link onClick={onRequestClose} href="#about">
              Sobre
            </Link>
          </li>
          <li>
            <Link onClick={onRequestClose} href="#education">
              Formações
            </Link>
          </li>
          <li>
            <Link onClick={onRequestClose} href="#contact">
              Contato
            </Link>
          </li>
        </ul>

        <Button variant="gradient" size="bold" asChild>
          <Link href="https://wa.me/5587992084588">
            Mandar mensagem
          </Link>
        </Button>
      </nav>
    </>
  )
}