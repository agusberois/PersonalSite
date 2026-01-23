import React from 'react'
import ProfileImage from '../assets/profile.webp'
import './AboutMe.css'

export default function AboutMe() {
    return (
        <section className="aboutMe" id="about">
            <div className="about-text">
                <h2 className="green">Sobre mí</h2>

                <p>
                    Soy <span className="green">Agustín Berois</span>, desarrollador
                    <span className="green"> FullStack</span> apasionado por crear soluciones
                    tecnológicas eficientes, escalables y visualmente atractivas.
                </p>

                <p>
                    Me especializo en el desarrollo de aplicaciones web modernas de principio a fin,
                    usando tecnologías como <span className="green">React, Next.js y Node.js</span>.
                    También tengo experiencia con bases de datos relacionales como
                    <span className="green"> PostgreSQL</span> y no relacionales
                    <span className="green"> MongoDB</span>.
                </p>
            </div>

            <div className="about-image">
                <img src={ProfileImage} alt="Foto de perfil" />
            </div>
        </section>
    )
}
