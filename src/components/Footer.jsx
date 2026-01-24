import { FaLinkedin, FaInstagram, FaGithub, FaWhatsapp } from "react-icons/fa";
import './Footer.css'

export default function Footer() {
    return (
        <footer className='footer'>
            <div className="footer-content">
                <div className="footer-social">
                    <a href="https://www.linkedin.com/in/agustin-rodriguez-berois/" target="_blank"><FaLinkedin /></a>
                    <a href="https://www.instagram.com/agusberoisdev/" target="_blank"><FaInstagram /></a>
                    <a href="https://github.com/agusberois" target="_blank"><FaGithub /></a>
                    <a href="https://wa.me/59891920278" target="_blank"><FaWhatsapp /></a>
                </div>
                <div className="footer-info">
                    <p>Agustin Berois - Todos los derechos reservados © {new Date().getFullYear()}</p>
                </div>
            </div>
        </footer>
    )
}
