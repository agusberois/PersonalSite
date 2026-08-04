import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import ReCAPTCHA from 'react-google-recaptcha'
import useReveal from '../hooks/useReveal'
import './Contact.css'

export default function Contact() {
    const { ref, isVisible } = useReveal();
    const formRef = useRef(null)

    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })

    const [captchaOk, setCaptchaOk] = useState(false)
    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState({ type: 'idle', message: '' })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleCaptchaChange = (token) => {
        setCaptchaOk(!!token)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setStatus({ type: 'idle', message: '' })
        setLoading(true)

        if (!captchaOk) {
            setStatus({ type: 'validation', message: 'Por favor, verifica el captcha.' })
            setLoading(false)
            return
        }

        if (!form.name || !form.email || !form.message || !form.phone) {
            setStatus({ type: 'validation', message: 'Por favor, completa todos los campos.' })
            setLoading(false)
            return
        }

        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(() => {
                setStatus({ type: 'success', message: 'Mensaje enviado correctamente. ¡Gracias por escribir!' })
                setForm({
                    name: '',
                    email: '',
                    phone: '',
                    message: ''
                })
            })
            .catch((error) => {
                console.error('Error al enviar:', error)
                setStatus({ type: 'error', message: 'Hubo un error al enviar el mensaje. Intenta nuevamente.' })
            })
            .finally(() => {
                setLoading(false)
            })
    }

    return (
        <section id="contact" className="contact">
            <h2 className="section-title">
                <span className="green">05.</span> ¿Qué sigue?
            </h2>

            <div
                ref={ref}
                className={`contact-content reveal ${isVisible ? 'active' : ''}`}
            >
                <h3 className="contact-heading">Ponte en contacto</h3>
                <p className="contact-desc">
                    Si tienes una pregunta, un proyecto en mente, o simplemente quieres saludar,
                    este formulario es para ti.
                </p>

                <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Nombre completo"
                        value={form.name}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Correo electrónico"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="text"
                        name="phone"
                        placeholder="Teléfono (opcional)"
                        value={form.phone}
                        onChange={handleChange}
                    />

                    <textarea
                        name="message"
                        placeholder="Escribe tu mensaje aquí..."
                        rows="5"
                        value={form.message}
                        onChange={handleChange}
                        required
                    />

                    <div className="captcha-container">
                        <ReCAPTCHA
                            sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY || ' '}
                            onChange={handleCaptchaChange}
                            theme="dark"
                        />
                    </div>

                    <button type="submit" className="submit-btn" disabled={loading || !captchaOk}>
                        {loading ? 'Enviando...' : !captchaOk ? 'Verificar Captcha' : 'Enviar Mensaje'}
                    </button>

                    {status.type !== 'idle' && (
                        <p className={`form-status form-status--${status.type}`} role="status">
                            {status.message}
                        </p>
                    )}
                </form>
            </div>
        </section>
    )
}
