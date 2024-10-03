import React from 'react';

const Features = () => {
  return (
    <section className="features">
      <div className="feature">
        <h2>Entrada de Dados de Consumo</h2>
        <p>Insira informações sobre o uso de água em sua casa para calcular o consumo estimado.</p>
      </div>
      <div className="feature">
        <h2>Gráficos e Histórico de Consumo</h2>
        <p>Visualize seu histórico de cálculos e gráficos para monitorar o consumo ao longo do tempo.</p>
      </div>
      <div className="feature">
        <h2>Sugestões de Economia</h2>
        <p>Receba dicas personalizadas para reduzir seu consumo de água e economizar.</p>
      </div>
      <div className="feature">
        <h2>Download de Relatório</h2>
        <p>Baixe um relatório em PDF com seus dados de consumo e sugestões de economia.</p>
      </div>
    </section>
  );
};

export default Features;
