import React from "react";
import { Link } from "react-router-dom";
import {BiLogIn} from 'react-icons/bi'
import {BsFillPersonFill, BsWhatsapp, BsFacebook, BsTwitter} from 'react-icons/bs'

const Footer = () =>{
    const whatsappURL = 'https://tu-url-de-whatsapp.com';
    const facebookURL = 'https://tu-url-de-facebook.com';
    const twitterURL = 'https://tu-url-de-twitter.com';
    return(
    <footer className="footer-container bg-dark">
        <div className="footer-container__login">
        <Link to={'/login'} className="footer-container__link">
        <BsFillPersonFill className="me-1"/>
        Ingresar</Link>
        <Link to={'/sign-up'} className="footer-container__link">
        <BiLogIn className="me-1"/>
        Registrarse</Link>
        </div>
        <div className="footer-container__redes-sociales">
            <a href={whatsappURL} target="_blank" rel="noopener noreferrer">
                <BsWhatsapp className="whatsapp"/>
            </a>
            <a href={facebookURL} target="_blank" rel="noopener noreferrer">
                <BsFacebook className="facebook"/>
            </a>
            <a href={twitterURL} target="_blank" rel="noopener noreferrer">
                <BsTwitter className="twitter"/>
            </a>
        </div>
        <div className="footer-container__contacto">
            <Link to={'/contacto'} className='footer-container__contacto-link'>Contactanos Aqui</Link>
        </div>
    </footer>
    )
}

export default Footer