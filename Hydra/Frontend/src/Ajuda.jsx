import React from 'react';
import { Link } from 'react-router-dom';

const Ajuda = () => {
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
            width: '95%',
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
            maxWidth: '700px',
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
        faq: {
            marginBottom: '20px',
            paddingBottom: '20px',
            borderBottom: '1px solid #ddd',
        },
        faqTitle: {
            color: '#021749',
            fontSize: '1.2em',
            marginBottom: '10px',
        },
        faqText: {
            color: '#555',
            lineHeight: '1.6',
            marginBottom: '15px',
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
                <h1 style={styles.headerText}>Ajuda - HYDRA</h1>

                <div style={styles.faq}>
                    <h2 style={styles.faqTitle}>Como me cadastrar?</h2>
                    <p style={styles.faqText}>
                        Para se cadastrar, clique no botão "Cadastrar" na tela de login e preencha os campos solicitados, como nome, e-mail, senha e outros dados pessoais. Após preencher tudo, clique em "Cadastrar" para concluir o processo.
                    </p>
                </div>

                <div style={styles.faq}>
                    <h2 style={styles.faqTitle}>Como faço para recuperar minha senha?</h2>
                    <p style={styles.faqText}>
                        Se você esqueceu sua senha, clique no link "Esqueceu sua senha?" na tela de login. Siga as instruções que serão enviadas para o seu e-mail para redefinir sua senha.
                    </p>
                </div>

                <div style={styles.faq}>
                    <h2 style={styles.faqTitle}>Como posso entrar em contato com o suporte?</h2>
                    <p style={styles.faqText}>
                        Se você tiver dúvidas ou precisar de suporte, entre em contato conosco através do e-mail suporte@hydra.com.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Ajuda;
