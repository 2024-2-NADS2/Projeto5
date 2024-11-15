import React, { useState, useEffect, useRef } from 'react';
import jsPDF from 'jspdf';
import { Chart, registerables } from 'chart.js';
import { Link } from 'react-router-dom';

Chart.register(...registerables);

const EntradaConsumo = () => {
    const [resultado, setResultado] = useState(null);
    const [dadosEntrada, setDadosEntrada] = useState(null);
    const [consumoDetalhado, setConsumoDetalhado] = useState({});
    const chartRef = useRef(null);

    const styles = {
        body: {
            fontFamily: 'Arial, sans-serif',
            color: '#333',
            backgroundColor: '#f5f5f5',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minHeight: '100vh',
            padding: '20px',
        },
        header: {
            backgroundColor: '#021749',
            color: 'white',
            width: '100%',
            padding: '15px 20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: '5px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            marginBottom: '20px',
            maxWidth: '600px',
        },
        logo: {
            height: '40px',
            cursor: 'pointer',
        },
        container: {
            backgroundColor: '#fff',
            borderRadius: '10px',
            padding: '30px 20px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            maxWidth: '600px',
            width: '100%',
        },
        formConsumo: {
            display: 'grid',
            gap: '15px',
        },
        label: {
            fontWeight: 'bold',
            marginBottom: '5px',
        },
        input: {
            padding: '10px',
            fontSize: '1rem',
            borderRadius: '5px',
            border: '1px solid #ddd',
        },
        select: {
            padding: '10px',
            fontSize: '1rem',
            borderRadius: '5px',
            border: '1px solid #ddd',
        },
        ctaButton: {
            backgroundColor: '#007bff',
            color: 'white',
            padding: '10px',
            borderRadius: '5px',
            border: 'none',
            cursor: 'pointer',
            fontSize: '1rem',
            marginTop: '10px',
        },
        downloadButton: {
            marginTop: '15px',
            backgroundColor: '#28a745',
            color: 'white',
            padding: '10px',
            borderRadius: '5px',
            border: 'none',
            cursor: 'pointer',
            fontSize: '1rem',
        },
        resultContainer: {
            marginTop: '20px',
            backgroundColor: '#f1f9ff',
            padding: '15px',
            borderRadius: '5px',
            border: '1px solid #007bff',
            color: '#007bff',
            fontWeight: 'bold',
        },
        chartContainer: {
            marginTop: '20px',
            textAlign: 'center',
        },
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        const payload = {
            numeroPessoas: parseInt(data["numero-pessoas"]),
            chuveiroMinutos: parseInt(data["chuveiro"]),
            descargasDiarias: parseInt(data["vaso-sanitario"]),
            maquinaLavarSemanal: parseInt(data["maquina-lavar"]),
            torneiraMinutos: parseInt(data["torneira"]),
            lavagemVeiculoMensal: parseInt(data["lavagem-veiculo"]),
            piscinaLitros: parseInt(data["manutencao-piscina"]),
            jardinagemLitros: parseInt(data["jardinagem"]),
            sistemaReutilizacao: data["sistema-reutilizacao"],
        };

        setDadosEntrada(payload);

        try {
            const response = await fetch('http://localhost:3001/api/consumo', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            const result = await response.json();
            setResultado(`Consumo Estimado: ${result.totalConsumo} litros por mês`);
            setConsumoDetalhado(result.consumoDetalhado);
        } catch (error) {
            console.error('Erro ao calcular o consumo:', error);
            alert('Houve um erro ao calcular o consumo.');
        }
    };

    const gerarRelatorioPDF = () => {
        const doc = new jsPDF();
        doc.setFontSize(18);
        doc.text('Relatório de Consumo de Água', 20, 20);
        
        doc.setFontSize(12);
        doc.setTextColor(50);

        let yPosition = 40;
        
        doc.text('Dados de Entrada', 20, yPosition);
        doc.line(20, yPosition + 2, 200, yPosition + 2);
        yPosition += 10;
        
        doc.text(`Número de Pessoas: ${dadosEntrada.numeroPessoas}`, 20, yPosition);
        yPosition += 10;
        doc.text(`Tempo de Chuveiro: ${dadosEntrada.chuveiroMinutos} min/dia`, 20, yPosition);
        yPosition += 10;
        doc.text(`Descargas Diárias: ${dadosEntrada.descargasDiarias}`, 20, yPosition);
        yPosition += 10;
        doc.text(`Máquina de Lavar: ${dadosEntrada.maquinaLavarSemanal} ciclos/semana`, 20, yPosition);
        yPosition += 10;
        doc.text(`Tempo de Torneira: ${dadosEntrada.torneiraMinutos} min/dia`, 20, yPosition);
        yPosition += 10;
        doc.text(`Lavagens de Veículo: ${dadosEntrada.lavagemVeiculoMensal} por mês`, 20, yPosition);
        yPosition += 10;
        doc.text(`Piscina: ${dadosEntrada.piscinaLitros} L/semana`, 20, yPosition);
        yPosition += 10;
        doc.text(`Jardinagem: ${dadosEntrada.jardinagemLitros} L/semana`, 20, yPosition);
        yPosition += 10;
        doc.text(`Sistema de Reutilização: ${dadosEntrada.sistemaReutilizacao}`, 20, yPosition);
        yPosition += 20;

        doc.setFontSize(12);
        doc.text('Consumo Detalhado (em litros):', 20, yPosition);
        doc.line(20, yPosition + 2, 200, yPosition + 2);
        yPosition += 10;

        Object.entries(consumoDetalhado).forEach(([atividade, consumo]) => {
            doc.text(`${atividade}: ${consumo.toFixed(2)} L`, 20, yPosition);
            yPosition += 10;
        });

        yPosition += 10;
        doc.setFontSize(12);
        doc.text('Dicas de Economia:', 20, yPosition);
        doc.line(20, yPosition + 2, 200, yPosition + 2);
        yPosition += 10;

        const dicas = gerarDicasEconomia();
        dicas.forEach((dica) => {
            doc.text(`- ${dica}`, 20, yPosition);
            yPosition += 10;
        });

        doc.save('Relatorio_Consumo_Agua.pdf');
    };

    const gerarDicasEconomia = () => {
        const dicas = [];
        if (consumoDetalhado.chuveiro > 10000) {
            dicas.push("Reduza o tempo de banho para economizar água.");
        }
        if (consumoDetalhado.descarga > 2000) {
            dicas.push("Use descargas econômicas para reduzir o consumo de água.");
        }
        if (consumoDetalhado.maquinaLavar > 1000) {
            dicas.push("Acumule roupas antes de usar a máquina de lavar.");
        }
        if (consumoDetalhado.torneira > 5000) {
            dicas.push("Feche a torneira enquanto ensaboa as mãos ou escova os dentes.");
        }
        if (consumoDetalhado.jardinagem > 2000) {
            dicas.push("Reutilize água da chuva para jardinagem.");
        }
        if (consumoDetalhado.lavagemVeiculo > 500) {
            dicas.push("Reduza a frequência de lavagem do veículo.");
        }
        return dicas.length ? dicas : ["Continue mantendo práticas sustentáveis de consumo de água!"];
    };

    useEffect(() => {
        if (Object.keys(consumoDetalhado).length) {
            const ctx = chartRef.current.getContext('2d');
            if (chartRef.current.chart) chartRef.current.chart.destroy();
            chartRef.current.chart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: Object.keys(consumoDetalhado),
                    datasets: [{
                        label: 'Consumo de Água (L)',
                        data: Object.values(consumoDetalhado),
                        backgroundColor: 'rgba(0, 123, 255, 0.6)',
                        borderColor: 'rgba(0, 123, 255, 1)',
                        borderWidth: 1,
                    }],
                },
                options: { scales: { y: { beginAtZero: true } } },
            });
        }
    }, [consumoDetalhado]);

    return (
        <div style={styles.body}>
            <header style={styles.header}>
                <Link to="/">
                    <img src="/images/logo.png" alt="Logo" style={styles.logo} />
                </Link>
            </header>

            <div style={styles.container}>
                <h2>Entrada de Dados de Consumo de Água</h2>
                <form onSubmit={handleSubmit} style={styles.formConsumo}>
                    <div>
                        <label htmlFor="numero-pessoas" style={styles.label}>Número de Pessoas</label>
                        <input type="number" id="numero-pessoas" name="numero-pessoas" required style={styles.input} />
                    </div>
                    <div>
                        <label htmlFor="chuveiro" style={styles.label}>Tempo de Chuveiro (min/dia)</label>
                        <input type="number" id="chuveiro" name="chuveiro" required style={styles.input} />
                    </div>
                    <div>
                        <label htmlFor="vaso-sanitario" style={styles.label}>Descargas Diárias</label>
                        <input type="number" id="vaso-sanitario" name="vaso-sanitario" required style={styles.input} />
                    </div>
                    <div>
                        <label htmlFor="maquina-lavar" style={styles.label}>Máquina de Lavar (ciclos/semana)</label>
                        <input type="number" id="maquina-lavar" name="maquina-lavar" required style={styles.input} />
                    </div>
                    <div>
                        <label htmlFor="torneira" style={styles.label}>Tempo de Torneira (min/dia)</label>
                        <input type="number" id="torneira" name="torneira" required style={styles.input} />
                    </div>
                    <div>
                        <label htmlFor="lavagem-veiculo" style={styles.label}>Lavagens de Veículo por Mês</label>
                        <input type="number" id="lavagem-veiculo" name="lavagem-veiculo" required style={styles.input} />
                    </div>
                    <div>
                        <label htmlFor="manutencao-piscina" style={styles.label}>Piscina (L/semana)</label>
                        <input type="number" id="manutencao-piscina" name="manutencao-piscina" required style={styles.input} />
                    </div>
                    <div>
                        <label htmlFor="jardinagem" style={styles.label}>Jardinagem (L/semana)</label>
                        <input type="number" id="jardinagem" name="jardinagem" required style={styles.input} />
                    </div>
                    <div>
                        <label htmlFor="sistema-reutilizacao" style={styles.label}>Sistema de Reutilização</label>
                        <select id="sistema-reutilizacao" name="sistema-reutilizacao" required style={styles.select}>
                            <option value="sim">Sim</option>
                            <option value="nao">Não</option>
                        </select>
                    </div>
                    <button type="submit" style={styles.ctaButton}>Calcular Consumo</button>
                </form>

                {resultado && (
                    <div style={styles.resultContainer}>
                        <h3>{resultado}</h3>
                        <button onClick={gerarRelatorioPDF} style={styles.downloadButton}>Baixar Relatório</button>
                        <div style={styles.chartContainer}>
                            <canvas ref={chartRef} id="consumoChart" width="400" height="200"></canvas>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default EntradaConsumo;
