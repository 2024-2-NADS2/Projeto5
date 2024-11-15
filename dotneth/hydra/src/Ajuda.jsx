import React from 'react';
import { Link } from 'react-router-dom';

const Ajuda = () => {
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
            maxWidth: '700px',
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
        faq: {
            marginBottom: '20px',
            paddingBottom: '20px',
            borderBottom: '1px solid #444',
        },
        faqTitle: {
            color: '#00DEFE',
            fontSize: '1.2em',
            marginBottom: '10px',
        },
        faqText: {
            color: '#AFB5C3',
            lineHeight: '1.6',
            marginBottom: '15px',
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
        backLinkHover: {
            backgroundColor: '#00bfe0',
        },
    };

    return (
        <div style={styles.body}>
            <div style={styles.container}>
                <h1 style={styles.header}>Ajuda - HYDRA</h1>

                <div style={styles.faq}>
                    <h2 style={styles.faqTitle}>Como me cadastrar?</h2>
                    <p style={styles.faqText}>Para se cadastrar, clique no botão "Cadastrar" na tela de login e preencha os campos solicitados, como nome, e-mail, senha e outros dados pessoais. Após preencher tudo, clique em "Cadastrar" para concluir o processo.</p>
                </div>

                <div style={styles.faq}>
                    <h2 style={styles.faqTitle}>Como faço para recuperar minha senha?</h2>
                    <p style={styles.faqText}>Se você esqueceu sua senha, clique no link "Esqueceu sua senha?" na tela de login. Siga as instruções que serão enviadas para o seu e-mail para redefinir sua senha.</p>
                </div>

                <div style={styles.faq}>
                    <h2 style={styles.faqTitle}>Como posso entrar em contato com o suporte?</h2>
                    <p style={styles.faqText}>Se você tiver dúvidas ou precisar de suporte, entre em contato conosco através do e-mail suporte@hydra.com</p>
                </div>

                <Link to="/" style={styles.backLink}>Voltar para Home</Link>
            </div>
        </div>
    );
};

export default Ajuda;
