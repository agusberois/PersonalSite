import { FaLinkedin, FaInstagram, FaGithub, FaWhatsapp } from "react-icons/fa";
import './Footer.css'

export default function Footer() {
    return (
        <footer className='footer'>
            <div className="footer-content">
                <div className="footer-social">
                    <a href="#"><FaLinkedin /></a>
                    <a href="#"><FaInstagram /></a>
                    <a href="#"><FaGithub /></a>
                    <a href="#"><FaWhatsapp /></a>
                </div>
                <div className="footer-info">
                    <p>Agustin Berois - Todos los derechos reservados © {new Date().getFullYear()}</p>
                </div>
            </div>
        </footer>
    )
}
