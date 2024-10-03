import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/bglogo.png'

const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo">
          <Link to="/"><img src= {logo} alt="Logo" /></Link>
        </div>
        <ul className="menu">
          <li><Link to="/">Início</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><a href="#ajuda">Ajuda</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
