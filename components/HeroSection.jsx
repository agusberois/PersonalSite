"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="flex flex-col justify-center items-center text-center h-screen px-6 md:px-20 bg-[#0A192F] text-[#CCD6F6]"
    >
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-[#64FFDA] mb-3 text-sm md:text-base tracking-wide"
      >
        Hola, mi nombre es
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold text-[#CCD6F6]"
      >
        Agustín Berois
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-2xl md:text-4xl font-semibold text-[#8892B0] mt-2"
      >
        FullStack Developer
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="text-[#8892B0] max-w-2xl mt-5 text-sm md:text-base leading-relaxed"
      >
        Me especializo en construir aplicaciones web modernas con un enfoque en
        la experiencia de usuario, rendimiento y buenas prácticas. Trabajo con
        tecnologías como <span className="text-[#64FFDA]">Node.js</span>,{" "}
        <span className="text-[#64FFDA]">React</span>, {" "}
        <span className="text-[#64FFDA]">PostgreSQL</span>, entre otras.
      </motion.p>

      <motion.a
        href="#proyectos"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="mt-8 inline-block border border-[#64FFDA] text-[#64FFDA] px-6 py-3 rounded-md hover:bg-[#64FFDA]/10 transition"
      >
        Ver mis proyectos
      </motion.a>
    </section>
  );
}
