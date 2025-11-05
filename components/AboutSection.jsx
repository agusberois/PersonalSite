"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="sobre-mi"
      className="bg-[#0A192F] text-[#CCD6F6] py-24 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-12"
    >
      {/* Texto */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex-1"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#64FFDA]">
          Sobre mí
        </h2>
        <p className="text-[#8892B0] leading-relaxed mb-4">
          Soy <span className="text-[#64FFDA]">Agustín Berois</span>,
          desarrollador <span className="text-[#64FFDA]">FullStack</span>{" "}
          apasionado por crear soluciones tecnológicas que sean eficientes,
          escalables y visualmente atractivas.
        </p>
        <p className="text-[#8892B0] leading-relaxed mb-4">
          Me especializo en el desarrollo de aplicaciones web modernas de principio a fin, usando{" "}
          tecnologías como {" "}
          <span className="text-[#64FFDA]">React</span>,{" "}
          <span className="text-[#64FFDA]">Next.js</span>,{" "}
          <span className="text-[#64FFDA]">Node.js</span>, entre otras. También tengo
          experiencia trabajando con bases de datos relacionales como{" "}
          <span className="text-[#64FFDA]">PostgreSQL</span> y no relacionales{" "}
          <span className="text-[#64FFDA]">MongoDB</span>.
        </p>
        <p className="text-[#8892B0] leading-relaxed">
          Mi objetivo es seguir creciendo profesionalmente mientras colaboro en
          proyectos que representen un desafío y generen un impacto positivo.
        </p>
      </motion.div>

      {/* Imagen */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex-1 flex justify-center"
      >
        <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-xl overflow-hidden shadow-lg shadow-[#64FFDA]/20 border border-[#64FFDA]/20 hover:shadow-[#64FFDA]/40 transition-all duration-300">
          <Image
            src="/profile.jpg" // reemplazalo luego con tu foto real
            alt="Agustín Berios"
            fill
            className="object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
}
