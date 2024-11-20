import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import jsPDF from 'jspdf';

const Historico = () => {
    const [historico, setHistorico] = useState([]);
    const [userName, setUserName] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');
        const name = localStorage.getItem('userName');

        if (!token || !userId) {
            setError('Usuário não autenticado.');
            setIsLoading(false);
            setHistorico([]);
            setUserName('');
            navigate('/login');
            return;
        }

        if (name) setUserName(name);

        fetch(`http://localhost:5000/api/consumption/historico/${userId}`, {
            headers: { Authorization: `Bearer ${token}` },
        })
            .then(response => {
                if (!response.ok) throw new Error('Erro ao carregar histórico.');
                return response.json();
            })
            .then(data => {
                setHistorico(data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Erro ao carregar histórico:', error);
                setError('Não foi possível carregar o histórico.');
                setIsLoading(false);
            });
    }, [navigate]);

    const gerarPDF = (item) => {
        const doc = new jsPDF();
        doc.setFontSize(18);
        doc.text('Relatório de Consumo de Água', 20, 20);

        doc.setFontSize(12);
        doc.setTextColor(50);

        let yPosition = 40;

        doc.text(`Usuário: ${userName}`, 20, yPosition);
        yPosition += 10;
        doc.text(`Data do Cálculo: ${new Date(item.dataCalculo).toLocaleString()}`, 20, yPosition);
        yPosition += 10;
        doc.text(`Consumo Total: ${item.totalConsumo.toFixed(2)} litros`, 20, yPosition);
        yPosition += 20;

        doc.text('Detalhes do Consumo:', 20, yPosition);
        yPosition += 10;

        const detalhes = JSON.parse(item.detalhesConsumo);
        Object.entries(detalhes).forEach(([key, value]) => {
            doc.text(`${key.charAt(0).toUpperCase() + key.slice(1)}: ${value.toFixed(2)} litros`, 20, yPosition);
            yPosition += 10;
        });

        doc.save(`Relatorio_Historico_${item.id}.pdf`);
    };

    const styles = {
        container: {
            fontFamily: '"Poppins", sans-serif',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minHeight: '100vh',
            backgroundColor: '#FFFFFF',
            color: '#333333',
            padding: '20px',
        },
        header: {
            fontSize: '2.5rem',
            fontWeight: 700,
            marginBottom: '20px',
            color: '#021749',
        },
        subHeader: {
            fontSize: '1.2rem',
            marginBottom: '30px',
            color: '#666666',
        },
        grid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '20px',
            width: '100%',
            maxWidth: '1200px',
        },
        card: {
            backgroundColor: '#F9F9F9',
            borderRadius: '15px',
            padding: '25px',
            boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)',
            border: '1px solid #E0E0E0',
        },
        cardHeader: {
            fontWeight: 700,
            fontSize: '1.5rem',
            marginBottom: '15px',
            color: '#021749',
        },
        cardBody: {
            fontSize: '1rem',
            lineHeight: '1.6',
            color: '#333333',
        },
        detailsList: {
            marginTop: '10px',
            listStyleType: 'disc',
            paddingLeft: '20px',
            color: '#444444',
        },
        downloadButton: {
            marginTop: '20px',
            background: 'linear-gradient(90deg, #00DEFE, #04befe)',
            border: 'none',
            color: '#FFFFFF',
            padding: '12px 25px',
            borderRadius: '8px',
            fontWeight: 700,
            fontSize: '1rem',
            cursor: 'pointer',
        },
        noHistory: {
            fontSize: '1.2rem',
            marginTop: '20px',
            color: '#999999',
        },
        loading: {
            fontSize: '1.5rem',
            color: '#00DEFE',
        },
        error: {
            fontSize: '1.2rem',
            color: 'red',
        },
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Histórico de Cálculos</h1>
            <p style={styles.subHeader}>
                {userName ? `Bem-vindo, ${userName}! Aqui está o histórico de cálculos realizados.` : 'Carregando usuário...'}
            </p>
            {isLoading ? (
                <p style={styles.loading}>Carregando histórico...</p>
            ) : error ? (
                <p style={styles.error}>{error}</p>
            ) : historico.length > 0 ? (
                <div style={styles.grid}>
                    {historico.map((item, index) => (
                        <div key={item.id} style={styles.card}>
                            <div style={styles.cardHeader}>
                                Cálculo #{index + 1}
                            </div>
                            <div style={styles.cardBody}>
                                <strong>Data:</strong> {new Date(item.dataCalculo).toLocaleString()} <br />
                                <strong>Consumo Total:</strong> {item.totalConsumo.toFixed(2)} litros <br />
                                <strong>Detalhes do Consumo:</strong>
                                <ul style={styles.detailsList}>
                                    {Object.entries(JSON.parse(item.detalhesConsumo)).map(([key, value]) => (
                                        <li key={key}>
                                            {key.charAt(0).toUpperCase() + key.slice(1)}: {value.toFixed(2)} litros
                                        </li>
                                    ))}
                                </ul>
                                <button
                                    style={styles.downloadButton}
                                    onClick={() => gerarPDF(item)}
                                >
                                    Baixar Relatório PDF
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p style={styles.noHistory}>Nenhum histórico encontrado.</p>
            )}
        </div>
    );
};

export default Historico;
