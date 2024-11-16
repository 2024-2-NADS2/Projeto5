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
            fontFamily: '"Montserrat", sans-serif',
            color: '#333',
            backgroundColor: '#f9f9f9',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minHeight: '100vh',
            padding: '20px',
        },
        headerWrapper: {
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '20px',
        },
        header: {
            backgroundColor: '#021749',
            color: 'white',
            width: '100%',
            maxWidth: '700px',
            padding: '15px 20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            borderRadius: '10px',
        },
        logo: {
            height: '40px',
            cursor: 'pointer',
        },
        container: {
            width: '100%',
            maxWidth: '700px',
            padding: '30px',
            background: '#ffffff',
            borderRadius: '12px',
            boxShadow: '0 6px 16px rgba(0, 0, 0, 0.1)',
        },
        title: {
            textAlign: 'center',
            color: '#021749',
            fontSize: '1.5rem',
            marginBottom: '20px',
        },
        formConsumo: {
            display: 'grid',
            gridTemplateColumns: '1fr 2fr',
            alignItems: 'center',
            gap: '20px 15px',
        },
        label: {
            fontWeight: 'bold',
            color: '#021749',
            marginBottom: '5px',
            textAlign: 'right', 
            paddingRight: '10px',  
        },
        input: {
            padding: '12px',
            border: '1px solid #ddd',
            borderRadius: '8px',
            background: '#f9f9f9',
            color: '#333',
            fontSize: '1rem',
            transition: 'box-shadow 0.3s',
        },
        select: {
            padding: '12px',
            border: '1px solid #ddd',
            borderRadius: '8px',
            background: '#f9f9f9',
            color: '#333',
            fontSize: '1rem',
        },
        ctaButton: {
            backgroundColor: '#007bff',
            color: 'white',
            padding: '12px',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: 'bold',
            transition: 'background-color 0.3s ease',
            gridColumn: 'span 2',  
            textAlign: 'center',
        },
        resultContainer: {
            marginTop: '20px',
            backgroundColor: '#eaf4ff',
            padding: '15px',
            borderRadius: '8px',
            border: '1px solid #007bff',
            color: '#007bff',
            fontWeight: 'bold',
            textAlign: 'center',
        },
        downloadButton: {
            marginTop: '15px',
            backgroundColor: '#28a745',
            color: 'white',
            padding: '12px',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer',
            fontSize: '1rem',
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
            const response = await fetch('http://localhost:5000/api/consumption/calculate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                },
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

        Object.entries(dadosEntrada).forEach(([key, value]) => {
            doc.text(`${key}: ${value}`, 20, yPosition);
            yPosition += 10;
        });

        yPosition += 10;
        doc.setFontSize(12);
        doc.text('Consumo Detalhado (em litros):', 20, yPosition);
        doc.line(20, yPosition + 2, 200, yPosition + 2);
        yPosition += 10;

        Object.entries(consumoDetalhado).forEach(([atividade, consumo]) => {
            doc.text(`${atividade}: ${consumo.toFixed(2)} L`, 20, yPosition);
            yPosition += 10;
        });

        doc.save('Relatorio_Consumo_Agua.pdf');
    };

    useEffect(() => {
        if (Object.keys(consumoDetalhado).length) {
            const ctx = chartRef.current.getContext('2d');
            if (chartRef.current.chart) chartRef.current.chart.destroy();
            chartRef.current.chart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: Object.keys(consumoDetalhado),
                    datasets: [
                        {
                            label: 'Consumo de Água (L)',
                            data: Object.values(consumoDetalhado),
                            backgroundColor: 'rgba(0, 123, 255, 0.6)',
                            borderColor: 'rgba(0, 123, 255, 1)',
                            borderWidth: 1,
                        },
                    ],
                },
                options: { scales: { y: { beginAtZero: true } } },
            });
        }
    }, [consumoDetalhado]);

    return (
        <div style={styles.body}>
            <div style={styles.headerWrapper}>
                <header style={styles.header}>
                    <Link to="/">
                        <img src="/images/bglogo.png" alt="Logo" style={styles.logo} />
                    </Link>
                </header>
            </div>

            <div style={styles.container}>
                <h2 style={styles.title}>Entrada de Dados de Consumo de Água</h2>
                <form onSubmit={handleSubmit} style={styles.formConsumo}>
                    <label htmlFor="numero-pessoas" style={styles.label}>Número de Pessoas</label>
                    <input type="number" id="numero-pessoas" name="numero-pessoas" required style={styles.input} />

                    <label htmlFor="chuveiro" style={styles.label}>Tempo de Chuveiro (min/dia)</label>
                    <input type="number" id="chuveiro" name="chuveiro" required style={styles.input} />

                    <label htmlFor="vaso-sanitario" style={styles.label}>Descargas Diárias</label>
                    <input type="number" id="vaso-sanitario" name="vaso-sanitario" required style={styles.input} />

                    <label htmlFor="maquina-lavar" style={styles.label}>Máquina de Lavar (ciclos/semana)</label>
                    <input type="number" id="maquina-lavar" name="maquina-lavar" required style={styles.input} />

                    <label htmlFor="torneira" style={styles.label}>Tempo de Torneira (min/dia)</label>
                    <input type="number" id="torneira" name="torneira" required style={styles.input} />

                    <label htmlFor="lavagem-veiculo" style={styles.label}>Lavagens de Veículo por Mês</label>
                    <input type="number" id="lavagem-veiculo" name="lavagem-veiculo" required style={styles.input} />

                    <label htmlFor="manutencao-piscina" style={styles.label}>Piscina (L/semana)</label>
                    <input type="number" id="manutencao-piscina" name="manutencao-piscina" required style={styles.input} />

                    <label htmlFor="jardinagem" style={styles.label}>Jardinagem (L/semana)</label>
                    <input type="number" id="jardinagem" name="jardinagem" required style={styles.input} />

                    <label htmlFor="sistema-reutilizacao" style={styles.label}>Sistema de Reutilização</label>
                    <select id="sistema-reutilizacao" name="sistema-reutilizacao" required style={styles.select}>
                        <option value="sim">Sim</option>
                        <option value="nao">Não</option>
                    </select>

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
