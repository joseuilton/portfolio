"use client";
import { FaBars } from "react-icons/fa";
import { HeaderMenu } from "./HeaderMenu";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleOpenMenu() {
    setIsMenuOpen(true);
  }

  return (
    <header className="bg-zinc-950">
      <div className="container mx-auto flex justify-between items-center p-6">
        <h3 className="text-xl font-bold text-zinc-50">José Uilton</h3>

        <button type="button" className="text-zinc-50 lg:hidden" onClick={handleOpenMenu}>
          <FaBars size={32} />
        </button>

        <HeaderMenu
          isOpen={isMenuOpen}
          onRequestClose={() => setIsMenuOpen(false)}
        />
      </div>
    </header>
  )
}