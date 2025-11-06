"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Nutritrackers",
    description: "Aplicación web para nutricionistas que permite gestionar clientes, planes y trackeos de progreso.",
    image: "/nutritrackers.png", // luego cambiás por tus imágenes reales
    technologies: ["React", "Node.js", "PostgreSQL"],
    demoLink: "https://nutritrackers.com",
  }
];

export default function Projects() {
  return (
    <section id="proyectos" className="min-h-screen flex flex-col items-center justify-center bg-[#0f172a] text-white px-6 py-24">
      <h2 className="text-4xl font-bold mb-12 text-center">Proyectos</h2>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl w-full">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-[#1e293b] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>

            <div className="p-5 flex flex-col gap-4">
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="text-gray-300 text-sm">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="bg-blue-600 text-xs px-2 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-3">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm bg-blue-500 hover:bg-blue-600 px-3 py-2 rounded-lg transition"
                >
                  <ExternalLink size={16} /> Ir
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
