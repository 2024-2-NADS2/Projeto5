import React from 'react';
import { Link } from 'react-router-dom';


const Intro = () => {
  return (
    <section className="intro">
      <h1>Bem-vindo à Calculadora de Consumo de Água</h1>
      <p>Calcule seu consumo mensal de água e descubra como economizar!</p>
      
      <Link to="/register" className="cta-button">Cadastre-se agora </Link>
    </section>
  );
};

export default Intro;
