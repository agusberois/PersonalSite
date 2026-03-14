import React from 'react'
import useReveal from '../hooks/useReveal'
import './Home.css'

export default function Home() {
    const { ref, isVisible } = useReveal();

    return (
        <section id="home" className="home">
            <div
                ref={ref}
                className={`home-content reveal ${isVisible ? 'active' : ''}`}
            >
                <p className="green intro">Hola, mi nombre es</p>

                <h1 className="title">Agus Berois.</h1>
                <h2 className="subtitle">Desarrollo y diseño de páginas web.</h2>

                <p className="description">
                    Soy un <span className="green">Desarrollador y Programador Web Full Stack</span> especializado en
                    diseñar y construir experiencias digitales excepcionales. Actualmente, estoy enfocado
                    en desarrollar productos accesibles, optimizados y centrados en el usuario.
                </p>

                <div className="home-actions">
                    <a href="#projects" className="btn-primary">Ver mis proyectos</a>
                    <a href="#contact" className="btn-secondary">Conectemos</a>
                </div>
            </div>
        </section>
    )
}
