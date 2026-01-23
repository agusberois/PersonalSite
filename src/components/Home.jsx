import React from 'react'
import './Home.css'

export default function Home() {
    return (
        <section id="home" className="home">
            <p className="green intro">Hola, mi nombre es</p>

            <h1 className="title">Agus Berois</h1>
            <h2 className="subtitle">FullStack Developer</h2>

            <p className="description">
                Me especializo en construir aplicaciones web modernas con un enfoque en la
                experiencia de usuario, rendimiento y buenas prácticas.
                <br />
                Trabajo con tecnologías como <span className="green">Node.js, React y PostgreSQL</span>, entre otras.
            </p>
        </section>
    )
}
