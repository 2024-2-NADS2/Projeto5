import React from 'react';
import instagram from '../assets/instagram.png'
import facebook from '../assets/facebook.png'
const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>&copy; 2024 HYDRA. Todos os direitos reservados.</p>
        <ul className="social-media">
          <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><img src= {facebook} alt="Facebook" /></a></li>
          <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><img src= {instagram}  alt="Instagram" /></a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
