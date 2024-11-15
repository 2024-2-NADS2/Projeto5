import React from 'react';
import { Link } from 'react-router-dom';

const Contato = () => {
    const styles = {
        body: {
            fontFamily: '"Montserrat", sans-serif',
            background: 'linear-gradient(135deg, #021749, #032f63)',
            color: '#fefefe',
            margin: 0,
            padding: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
        },
        container: {
            maxWidth: '600px',
            padding: '30px',
            background: '#1a1f2d',
            borderRadius: '12px',
            boxShadow: '0 6px 16px rgba(0, 0, 0, 0.6)',
            textAlign: 'center',
        },
        header: {
            textAlign: 'center',
            color: '#00DEFE',
            marginBottom: '30px',
        },
        contactInfo: {
            marginBottom: '25px',
            paddingBottom: '15px',
            borderBottom: '1px solid #444',
        },
        contactInfoTitle: {
            color: '#00DEFE',
            fontSize: '1.2em',
            marginBottom: '10px',
        },
        contactInfoText: {
            color: '#AFB5C3',
            lineHeight: '1.6',
            marginBottom: '10px',
        },
        contactForm: {
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
        },
        label: {
            textAlign: 'left',
            color: '#00DEFE',
            fontSize: '0.9em',
        },
        input: {
            padding: '12px',
            border: '1px solid #3D404B',
            borderRadius: '8px',
            background: '#2E3345',
            color: '#fefefe',
            fontSize: '1em',
            transition: 'box-shadow 0.3s',
        },
        button: {
            padding: '12px',
            background: 'linear-gradient(90deg, #00DEFE, #04befe)',
            color: '#121829',
            border: 'none',
            borderRadius: '8px',
            fontWeight: 'bold',
            fontSize: '1em',
            cursor: 'pointer',
            transition: 'box-shadow 0.3s',
        },
        backLink: {
            display: 'inline-block',
            padding: '12px 24px',
            marginTop: '20px',
            backgroundColor: '#00DEFE',
            color: '#121829',
            borderRadius: '8px',
            fontWeight: 'bold',
            textDecoration: 'none',
            transition: 'background-color 0.3s ease',
        },
    };

    return (
        <div style={styles.body}>
            <div style={styles.container}>
                <h1 style={styles.header}>Contato - HYDRA</h1>
                
                <div style={styles.contactInfo}>
                    <h2 style={styles.contactInfoTitle}>Informações de Contato</h2>
                    <p style={styles.contactInfoText}>Se você tiver dúvidas ou pretende ser um patrocinador, entre em contato conosco através das seguintes opções:</p>
                    <p style={styles.contactInfoText}>Email: suporte@hydra.com</p>
                </div>

                <form style={styles.contactForm}>
                    <label htmlFor="name" style={styles.label}>Seu Nome:</label>
                    <input type="text" id="name" name="name" required style={styles.input} />

                    <label htmlFor="email" style={styles.label}>Seu E-mail:</label>
                    <input type="email" id="email" name="email" required style={styles.input} />

                    <label htmlFor="message" style={styles.label}>Sua Mensagem:</label>
                    <textarea id="message" name="message" rows="5" required style={styles.input}></textarea>

                    <button type="submit" style={styles.button}>Enviar Mensagem</button>
                </form>

                <Link to="/" style={styles.backLink}>Voltar para Home</Link>
            </div>
        </div>
    );
};

export default Contato;
