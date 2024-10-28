import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="call-to-action">
      <h2>Pronto para começar?</h2>
      <p>Cadastre-se agora e comece a monitorar seu consumo de água!</p>
      <Link to="/register" className="cta-button">Cadastre-se</Link>

    </section>
  );
};

export default CallToAction;
