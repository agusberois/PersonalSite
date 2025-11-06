"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#inicio", label: "Inicio" },
    { href: "#sobre-mi", label: "Sobre mí" },
    //{ href: "#proyectos", label: "Proyectos" },
    { href: "#experiencia", label: "Experiencia" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-navy/95 backdrop-blur-sm border-b border-electric/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Brand */}
          <a href="#inicio" className="text-electric text-lg font-bold">
            Agustín Berois
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 text-lightGray">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="hover:text-electric transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
                href="https://tally.so/r/dWqYMK"
                className="ml-4 px-5 py-2 rounded-lg font-semibold border-2 border-electric text-electric hover:bg-electric hover:text-navy transition-all duration-300 shadow-[0_0_10px_rgba(100,255,218,0.3)]"
                target="_blank"
                >
                Contactame
            </a>
          </nav>

          {/* Mobile button */}
          <button
            aria-label="Abrir menú"
            className="md:hidden p-2 rounded-md text-lightGray focus:outline-none focus:ring-2 focus:ring-electric/60"
            onClick={() => setOpen((s) => !s)}
          >
            {/* Icono hamburguesa / cerrar */}
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>


        {/* Hamburguer Menu */}
              {open && (
  <div className="md:hidden absolute top-full left-0 w-full bg-[#0A192F]/95 backdrop-blur-md border-t border-electric/20 shadow-lg animate-slideDown">
    <nav className="flex flex-col py-4 px-6 space-y-3">
      {links.map((l) => (
        <a
          key={l.href}
          href={l.href}
          className="text-lightGray py-2 border-b border-white/5 last:border-none hover:text-electric transition-colors"
          onClick={() => setOpen(false)}
        >
          {l.label}
        </a>
      ))}

      <a
        href="#contacto"
        className="mt-2 inline-block text-center px-5 py-2 rounded-lg font-semibold border-2 border-electric text-electric hover:bg-electric hover:text-navy transition-all duration-300 shadow-[0_0_10px_rgba(100,255,218,0.3)]"
        onClick={() => setOpen(false)}
      >
        Contactame
      </a>
    </nav>
  </div>
)}


        
      </div>
    </header>
  );
}
