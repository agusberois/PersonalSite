"use client";
import { FaLinkedin, FaInstagram, FaGithub, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0A192F] text-white py-10 border-t border-[#112240] flex flex-col items-center justify-center gap-6">
      <div className="flex gap-8 text-3xl">
        <a
          href="https://www.linkedin.com/in/agustin-rodriguez-berois/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#64FFDA] transition-colors"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/agusberoisdev"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#64FFDA] transition-colors"
        >
          <FaInstagram />
        </a>
        <a
          href="https://wa.me/598XXXXXXXX"  // 👉 reemplazá con tu número sin el + ni ceros iniciales
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#64FFDA] transition-colors"
        >
          <FaWhatsapp />
        </a>
        <a
          href="https://github.com/agusberois"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#64FFDA] transition-colors"
        >
          <FaGithub />
        </a>
      </div>

      <p className="text-gray-500 text-sm">
        © {new Date().getFullYear()} Agus Berois — Todos los derechos reservados.
      </p>
    </footer>
  );
}
