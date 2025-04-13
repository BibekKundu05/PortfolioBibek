import React from 'react'
import {FaLinkedin, FaGithub, FaInstagram} from 'react-icons/fa';
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container grid">
            <div className="footer__socials">
          
              <a href="https://www.linkedin.com/in/bibek-kundu/" className="footer__social-link">
                <FaLinkedin />
              </a>

              <a href="https://github.com/BibekKundu05" className="footer__social-link">
                <FaGithub />
              </a>

              <a href="https://www.instagram.com/iambibekkundu_07/" className="footer__social-link">
                <FaInstagram />
              </a>

            </div>

            <p className="footer__copyright text-cs">
                &copy; 2025<span> Bibek.K</span>. All Rights Reserved
            </p>

            <p className="footer__copyright text-cs">Developed by
            <span> Bibek Kundu</span></p>
        </div>
    </footer>
  )
}

export default Footer