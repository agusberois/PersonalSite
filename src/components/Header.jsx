import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import './Header.css'
import Logo from '../assets/logo.png'

export default function Header() {
    const [open, setOpen] = useState(false)

    return (
        <header className="header">
            <img src={Logo} alt="Logo" className="logo" />

            {/* Botón hamburguesa */}
            <button className="menu-btn" onClick={() => setOpen(!open)}>
                {open ? <X size={28} /> : <Menu size={28} />}
            </button>

            <nav className={`nav ${open ? 'open' : ''}`}>
                <ul>
                    <li><a href="#home">Inicio</a></li>
                    <li><a href="#about">Sobre Mí</a></li>
                    <li><a href="#projects">Proyectos</a></li>
                    <li><a href="#experience">Experiencia</a></li>
                    <li className="contacto"><a href="#contact">Contacto</a></li>
                </ul>
            </nav>
        </header>
    )
}
