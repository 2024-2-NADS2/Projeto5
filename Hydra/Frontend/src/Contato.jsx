import React from 'react';
import { Link } from 'react-router-dom';

const Contato = () => {
    const styles = {
        body: {
            fontFamily: '"Montserrat", sans-serif',
            backgroundColor: '#ffffff',
            color: '#333',
            margin: 0,
            padding: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minHeight: '100vh',
        },
        headerWrapper: {
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '20px',
            paddingBottom: '10px',
        },
        header: {
            backgroundColor: '#021749',
            color: 'white',
            width: '100%',
            maxWidth: '600px',
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
            maxWidth: '600px',
            padding: '30px',
            background: '#f9f9f9',
            borderRadius: '12px',
            boxShadow: '0 6px 16px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
            marginTop: '20px',
        },
        headerText: {
            color: '#021749',
            marginBottom: '30px',
        },
        contactInfo: {
            marginBottom: '25px',
            paddingBottom: '15px',
            borderBottom: '1px solid #ddd',
        },
        contactInfoTitle: {
            color: '#021749',
            fontSize: '1.2em',
            marginBottom: '10px',
        },
        contactInfoText: {
            color: '#555',
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
            color: '#021749',
            fontSize: '0.9em',
        },
        input: {
            padding: '12px',
            border: '1px solid #ddd',
            borderRadius: '8px',
            background: '#f9f9f9',
            color: '#333',
            fontSize: '1em',
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
        },
    };

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
                <h1 style={styles.headerText}>Contato - HYDRA</h1>

                <div style={styles.contactInfo}>
                    <h2 style={styles.contactInfoTitle}>Informações de Contato</h2>
                    <p style={styles.contactInfoText}>
                        Se você tiver dúvidas ou pretende ser um patrocinador, entre em contato conosco através das seguintes opções:
                    </p>
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
            </div>
        </div>
    );
};

export default Contato;
