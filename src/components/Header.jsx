import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import './Header.css'
import Logo from '../assets/logo.png'
import useActiveSection from '../hooks/useActiveSection'

const NAV_LINKS = [
    { id: 'home', label: 'Inicio' },
    { id: 'about', label: 'Sobre Mí' },
    { id: 'services', label: 'Servicios' },
    { id: 'projects', label: 'Proyectos' },
    { id: 'experience', label: 'Experiencia' },
    { id: 'contact', label: 'Contacto' },
]

const SECTION_IDS = NAV_LINKS.map((link) => link.id)

export default function Header() {
    const [open, setOpen] = useState(false)
    const activeId = useActiveSection(SECTION_IDS)

    const closeMenu = () => setOpen(false)

    useEffect(() => {
        if (!open) return

        const handleKeyDown = (e) => {
            if (e.key === 'Escape') closeMenu()
        }

        document.addEventListener('keydown', handleKeyDown)
        return () => document.removeEventListener('keydown', handleKeyDown)
    }, [open])

    return (
        <header className="header">
            <img src={Logo} alt="Agus Berois" className="logo" />

            {/* Botón hamburguesa */}
            <button
                className="menu-btn"
                onClick={() => setOpen(!open)}
                aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
                aria-expanded={open}
                aria-controls="main-nav"
            >
                {open ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Overlay para cerrar al hacer click fuera */}
            {open && <div className="nav-overlay" onClick={closeMenu} />}

            <nav id="main-nav" className={`nav ${open ? 'open' : ''}`}>
                <ul>
                    {NAV_LINKS.map(({ id, label }) => (
                        <li key={id} className={id === 'contact' ? 'contacto' : undefined}>
                            <a
                                href={`#${id}`}
                                onClick={closeMenu}
                                className={activeId === id ? 'active' : undefined}
                                aria-current={activeId === id ? 'true' : undefined}
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}
