import React, { useState } from 'react'
import './Contact.css'

export default function Contact() {

    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(form)
    }

    return (
        <div id="contact" className='contact'>
            <h2>Contacto</h2>
            <p>¿Quieres que trabajemos juntos? ¡Hablemos!</p>
            <form className='contact-form' onSubmit={handleSubmit}>
                <input type="text" placeholder='Nombre' value={form.name} onChange={handleChange} />
                <input type="email" placeholder='Email' value={form.email} onChange={handleChange} />
                <textarea name="" id="" cols="30" rows="10" placeholder='Mensaje' value={form.message} onChange={handleChange}></textarea>
                <button type='submit'>Enviar</button>
            </form>
        </div>
    )
}
