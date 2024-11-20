import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
    const [userName, setUserName] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const storedUserName = localStorage.getItem('userName');
        if (storedUserName) {
            setUserName(storedUserName);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('userName');
        localStorage.removeItem('token');
        setUserName('');
        window.location.reload(); 
    };

    const styles = {
        body: {
            fontFamily: 'Arial, sans-serif',
            margin: 0,
            padding: 0,
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            backgroundColor: '#f5f5f5',
        },
        header: {
            backgroundColor: '#021749fe',
            color: 'white',
            padding: '15px 20px',
            position: 'sticky',
            top: 0,
            zIndex: 1000,
        },
        nav: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        logo: {
            height: '40px',
        },
        menu: {
            listStyle: 'none',
            display: 'flex',
            gap: '20px',
        },
        menuLink: {
            color: 'white',
            textDecoration: 'none',
            fontSize: '1rem',
            transition: 'color 0.3s ease',
        },
        intro: {
            background: "linear-gradient(rgba(2, 19, 73, 1), rgba(2, 19, 73, 1)), url('/images/banner.jpg') center/cover no-repeat",
            color: 'white',
            textAlign: 'center',
            padding: '80px 20px',
        },
        introHeading: {
            fontSize: '2.5rem',
            marginBottom: '20px',
        },
        introParagraph: {
            fontSize: '1.2rem',
            marginBottom: '30px',
        },
        ctaButton: {
            backgroundColor: '#00DEFE',
            color: 'white',
            textDecoration: 'none',
            padding: '15px 30px',
            borderRadius: '5px',
            fontSize: '1rem',
            transition: 'background-color 0.3s ease',
        },
        features: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '20px',
            padding: '40px 20px',
            backgroundColor: 'white',
        },
        feature: {
            backgroundColor: '#f5f5f5',
            border: '1px solid #ddd',
            borderRadius: '10px',
            padding: '20px',
            width: '300px',
            textAlign: 'center',
            transition: 'transform 0.3s ease',
        },
        featureLink: {
            color: '#333',
            textDecoration: 'none',
        },
        featureHeading: {
            fontSize: '1.5rem',
            marginBottom: '10px',
            color: '#021749fe',
        },
        callToAction: {
            textAlign: 'center',
            backgroundColor: '#f1f1f1',
            padding: '40px 20px',
        },
        callToActionHeading: {
            fontSize: '2rem',
            color: '#333',
            marginBottom: '20px',
        },
        callToActionParagraph: {
            fontSize: '1.2rem',
            color: '#666',
            marginBottom: '30px',
        },
        footer: {
            backgroundColor: '#333',
            color: 'white',
            textAlign: 'center',
            padding: '20px',
        },
        footerContent: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
        },
        socialMedia: {
            listStyle: 'none',
            display: 'flex',
            justifyContent: 'center',
            gap: '15px',
            padding: 0,
        },
        socialIcon: {
            width: '30px',
            height: 'auto',
            transition: 'opacity 0.3s ease',
        },
    };

    return (
        <div style={styles.body}>
            <header style={styles.header}>
                <nav style={styles.nav}>
                    <div className="logo">
                        <a href="/"><img src="/images/bglogo.png" alt="Logo" style={styles.logo} /></a>
                    </div>
                    <ul style={styles.menu}>
                        <li>
                            <Link to="/ajuda" style={styles.menuLink}>Ajuda</Link>
                        </li>
                        <li>
                            <Link to="/contato" style={styles.menuLink}>Contato</Link>
                        </li>
                        {userName ? (
                            <>
                                <li style={{ color: 'lightgreen' }}>Bem-vindo, {userName}</li>
                                <li>
                                    <button 
                                        onClick={handleLogout} 
                                        style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}
                                    >
                                        Logout
                                    </button>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <Link to="/cadastro" style={styles.menuLink}>Cadastro</Link>
                                </li>
                                <li>
                                    <Link to="/login" style={styles.menuLink}>Login</Link>
                                </li>
                            </>
                        )}
                    </ul>
                </nav>
            </header>

            <main>
                <section style={styles.intro}>
                    <h1 style={styles.introHeading}>Bem-vindo à Calculadora de Consumo de Água</h1>
                    <p style={styles.introParagraph}>Calcule seu consumo mensal de água e descubra como economizar!</p>
                    {!userName && (
                        <Link to="/cadastro" style={styles.ctaButton}>Cadastre-se Agora</Link>
                    )}
                </section>

                <section style={styles.features}>
                    <div style={styles.feature}>
                        <Link to="/entradaconsumo" style={styles.featureLink}>
                            <h2 style={{ ...styles.featureHeading, fontSize: '1.8rem' }}>Entrada de Dados de Consumo</h2>
                            <p style={{ fontSize: '1rem' }}>Insira informações sobre o uso de água em sua casa para calcular o consumo estimado.</p>
                        </Link>
                    </div>
                    <div style={styles.feature}>
                        <button
                            onClick={() => {
                                const userId = localStorage.getItem('userId');
                                const token = localStorage.getItem('token');
    
                                if (!userId || !token) {
                                    alert('Você precisa estar logado para acessar o histórico.');
                                    navigate('/login');
                                    return;
                                }
    
                                navigate('/historico');
                            }}
                            style={{
                                backgroundColor: 'transparent',
                                border: 'none',
                                cursor: 'pointer',
                                textDecoration: 'none',
                                color: '#333',
                                textAlign: 'center',
                            }}
                        >
                            <h2 style={{ ...styles.featureHeading, fontSize: '1.8rem' }}>Histórico de Consumo</h2>
                            <p style={{ fontSize: '1rem' }}>Visualize seu histórico de cálculos para monitorar o consumo ao longo do tempo.</p>
                        </button>
                    </div>
                </section>

                <section style={styles.callToAction}>
                    <h2 style={{ ...styles.callToActionHeading, fontSize: '2rem' }}>Pronto para começar?</h2>
                    <p style={{ ...styles.callToActionParagraph, fontSize: '1.2rem' }}>
                        {userName ? "Monitore seu consumo de água!" : "Cadastre-se agora e comece a monitorar seu consumo de água!"}
                    </p>
                    {!userName && (
                        <Link to="/cadastro" style={styles.ctaButton}>Cadastre-se</Link>
                    )}
                </section>
            </main>
           

            <footer style={styles.footer}>
                <div style={styles.footerContent}>
                    <p>&copy; 2024 HYDRA. Todos os direitos reservados.</p>
                    <ul style={styles.socialMedia}>
                        <li>
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                <img src="/images/facebook.png" alt="Facebook" style={styles.socialIcon} />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                <img src="/images/instagram.png" alt="Instagram" style={styles.socialIcon} />
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    );
};

export default Home;
