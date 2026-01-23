import React from 'react'
import './Experience.css'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa"
import { SiJquery, SiMongodb, SiPostgresql, SiNextdotjs, SiFirebase } from "react-icons/si"

export default function Experience() {
    const EXPERIENCE = [
        { name: 'HTML', icon: <FaHtml5 /> },
        { name: 'CSS', icon: <FaCss3Alt /> },
        { name: 'JavaScript', icon: <FaJs /> },
        { name: 'React', icon: <FaReact /> },
        { name: 'jQuery', icon: <SiJquery /> },
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'MongoDB', icon: <SiMongodb /> },
        { name: 'PostgreSQL', icon: <SiPostgresql /> },
        { name: 'Next.js', icon: <SiNextdotjs /> },
        { name: 'SQL', icon: <FaDatabase /> },
        { name: 'Firebase', icon: <SiFirebase /> },
    ]

    return (
        <section id="experience" className="experience">
            <header className="experience-header">
                <h2 className="green">Experiencia</h2>
            </header>

            <div className="experience-grid">
                {EXPERIENCE.map((item, index) => (
                    <article key={index} className="experience-item">
                        <span className="experience-icon">{item.icon}</span>
                        <span className="experience-name">{item.name}</span>
                    </article>
                ))}
            </div>

            <p className="experience-quote">
                “Cada tecnología que aprendo me permite crear soluciones más completas,
                eficientes y con propósito.”
            </p>
        </section>
    )
}
