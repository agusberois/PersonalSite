"use client";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiJquery, SiMongodb, SiPostgresql, SiNextdotjs, SiFirebase } from "react-icons/si";

export default function Experience() {
  const technologies = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-5xl" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-5xl" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-5xl" /> },
    { name: "React", icon: <FaReact className="text-cyan-400 text-5xl" /> },
    { name: "jQuery", icon: <SiJquery className="text-blue-400 text-5xl" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-5xl" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-5xl" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-600 text-5xl" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white text-5xl" /> },
    { name: "SQL", icon: <FaDatabase className="text-gray-400 text-5xl" /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-500 text-5xl" /> },
  ];

  return (
    <section
      id="experiencia"
      className="min-h-screen flex flex-col justify-center items-center bg-[#0A192F] text-white px-6 py-20"
    >
      <h2 className="text-4xl font-bold text-[#64FFDA] mb-12 border-b-4 border-[#64FFDA] pb-2">
        Experiencia
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 max-w-5xl">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-2 p-4 bg-[#112240] rounded-xl shadow-md hover:scale-105 hover:shadow-[#64FFDA]/30 transition-transform duration-300"
          >
            {tech.icon}
            <p className="text-gray-300 font-medium">{tech.name}</p>
          </div>
        ))}
      </div>

      <p className="mt-14 text-center max-w-2xl text-gray-400 text-lg italic">
        “Cada tecnología que aprendo me permite crear soluciones más completas, eficientes y con propósito.”
      </p>
    </section>
  );
}
