import React from 'react'
import useReveal from '../hooks/useReveal'
import { ExternalLink } from 'lucide-react'
import './Projects.css'

export default function Projects() {
    const { ref, isVisible } = useReveal();

    const PROJECTS = [
        {
            name: 'Pieza Clave',
            description: "Plataforma de herramientas psicoeducativas enfocada en el bienestar mental. Incluye recursos interactivos y un diseño accesible para todos los usuarios.",
            image: "https://www.piezaclave.uy/logo-color.png",
            link: "https://piezaclave.uy",
            tags: ["NextJS", "PostgreSQL"]
        },
        {
            name: 'Olague & Paez',
            description: "Landing page para Olague & Paez, estudio contable y jurídico. Diseño profesional pensado para transmitir confianza y facilitar el contacto con potenciales clientes.",
            image: "https://pub-fedd89d0558f4b9d91e3aa50b1c1eef2.r2.dev/logo-12.png",
            link: "https://olaguepaez.com",
            tags: ["React"]
        },
        {
            name: 'MG Limpieza',
            description: "Landing page para MG Limpieza, servicio de limpieza en Montevideo, Uruguay. Diseño simple y directo para facilitar el contacto y la contratación del servicio.",
            image: "https://www.mglimpieza.uy/logo.png",
            link: "https://mglimpieza.uy",
            tags: ["React"]
        }
    ]

    return (
        <section className="projects" id="projects">
            <h2 className="section-title">
                <span className="green">03.</span> Algunos Proyectos
            </h2>

            <div
                ref={ref}
                className={`projects-list reveal ${isVisible ? 'active' : ''}`}
            >
                {PROJECTS.map((project, index) => (
                    <article className="project-feature" key={index}>
                        <div className="project-content">
                            <p className="project-overline">Proyecto Destacado</p>
                            <h3 className="project-title">
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    {project.name}
                                </a>
                            </h3>

                            <div className="project-description">
                                <p>{project.description}</p>
                            </div>

                            <ul className="project-tech-list">
                                {project.tags.map((tag, i) => (
                                    <li key={i}>{tag}</li>
                                ))}
                            </ul>

                            <div className="project-links">
                                <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label="Ver Proyecto Externo">
                                    <ExternalLink size={22} />
                                </a>
                            </div>
                        </div>

                        <div className="project-image">
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <div className="img-wrapper">
                                    <img
                                        src={project.image}
                                        alt={`Imagen del proyecto ${project.name}`}
                                        loading="lazy"
                                    />
                                </div>
                            </a>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}
