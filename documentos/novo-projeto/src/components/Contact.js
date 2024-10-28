import React from 'react';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Aqui você pode implementar a lógica para enviar a mensagem
        alert("Mensagem enviada com sucesso!");
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Contato - HYDRA</h1>
            <div style={styles.contactInfo}>
                <h2 style={styles.subtitle}>Informações de Contato</h2>
                <p>Se você tiver dúvidas ou precisar de suporte, entre em contato conosco através das seguintes opções:</p>
                <p>Email: suporte@hydra.com</p>
                
            </div>

            <form style={styles.contactForm} onSubmit={handleSubmit}>
                <label style={styles.label} htmlFor="name">Seu Nome:</label>
                <input style={styles.input} type="text" id="name" name="name" required />

                <label style={styles.label} htmlFor="email">Seu E-mail:</label>
                <input style={styles.input} type="email" id="email" name="email" required />

                <label style={styles.label} htmlFor="message">Sua Mensagem:</label>
                <textarea style={styles.textarea} id="message" name="message" rows="5" required></textarea>

                <button style={styles.button} type="submit">Enviar Mensagem</button>
            </form>

            <a href="login.html" style={styles.backLink}>Voltar para Login</a>
        </div>
    );
};

const styles = {
    container: {
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
        background: '#2C2F38',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
        color: '#fefefe',
    },
    title: {
        textAlign: 'center',
        color: '#00DEFE',
        margin: '20px 0',
    },
    contactInfo: {
        marginBottom: '20px',
        borderBottom: '1px solid #444',
        paddingBottom: '15px',
    },
    subtitle: {
        color: '#00DEFE',
        marginBottom: '10px',
    },
    label: {
        margin: '10px 0 5px',
        color: '#00DEFE',
    },
    input: {
        padding: '10px',
        border: '1px solid #444',
        borderRadius: '5px',
        background: '#3A3F47',
        color: '#fefefe',
        marginBottom: '15px',
    },
    textarea: {
        padding: '10px',
        border: '1px solid #444',
        borderRadius: '5px',
        background: '#3A3F47',
        color: '#fefefe',
        marginBottom: '15px',
    },
    button: {
        padding: '10px',
        background: '#00BFFF',
        color: '#fefefe',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontWeight: 'bold',
    },
    backLink: {
        textAlign: 'center',
        marginTop: '20px',
        display: 'block',
        color: '#00BFFF',
        textDecoration: 'none',
        fontWeight: 'bold',
    }
};

export default Contact;
