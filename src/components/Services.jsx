import React from 'react'
import { Layout, Code2, ShoppingCart, Wrench } from 'lucide-react'
import useReveal from '../hooks/useReveal'
import './Services.css'

export default function Services() {
    const { ref, isVisible } = useReveal();

    const SERVICES = [
        {
            icon: <Layout size={28} />,
            name: 'Landing Pages',
            description: 'Sitios de alto impacto para presentar tu marca, producto o negocio, con diseño a medida y optimizados para convertir visitas en clientes.'
        },
        {
            icon: <Code2 size={28} />,
            name: 'Aplicaciones Web a Medida',
            description: 'Plataformas y sistemas SaaS construidos de punta a punta con React, Node.js y PostgreSQL, adaptados a las necesidades de tu negocio.'
        },
        {
            icon: <ShoppingCart size={28} />,
            name: 'E-commerce',
            description: 'Tiendas online con integración de medios de pago y gestión de stock, pensadas para escalar junto a tu negocio.'
        },
        {
            icon: <Wrench size={28} />,
            name: 'Mantenimiento & Soporte',
            description: 'Evolución continua, mejoras y corrección de errores para productos web que ya están en producción.'
        }
    ]

    return (
        <section className="services" id="services">
            <h2 className="section-title">
                <span className="green">02.</span> Servicios
            </h2>

            <p className="services-intro">
                Como desarrollador web freelance con base en Uruguay, ayudo a empresas y
                emprendimientos de la región a construir presencia digital sólida. Estos son
                los servicios en los que puedo ayudarte:
            </p>

            <div
                ref={ref}
                className={`services-grid reveal ${isVisible ? 'active' : ''}`}
            >
                {SERVICES.map((service, index) => (
                    <article className="service-card" key={index}>
                        <span className="service-icon">{service.icon}</span>
                        <h3 className="service-name">{service.name}</h3>
                        <p className="service-description">{service.description}</p>
                    </article>
                ))}
            </div>
        </section>
    )
}
