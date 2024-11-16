import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [message, setMessage] = useState('');
    const [isError, setIsError] = useState(false);

    const styles = {
        container: {
            display: 'flex',
            height: '100vh',
            alignItems: 'stretch',
            fontFamily: '"Poppins", sans-serif',
            fontSize: '16px',
            margin: 0,
            padding: 0,
            background: 'linear-gradient(135deg, #021749, #032f63)',
            color: '#FFFFFF',
        },
        contentBackground: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            padding: '40px 30px',
            color: '#FFFFFF',
        },
        contentForm: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            backgroundColor: '#121829',
            color: '#FFFFFF',
        },
        title: {
            fontSize: '40px',
            fontWeight: 800,
            lineHeight: '40px',
            marginBottom: '14px',
            color: '#00DEFE',
        },
        input: {
            backgroundColor: '#1E2430',
            border: '1px solid #3D404B',
            width: '100%',
            height: '50px',
            padding: '12px',
            borderRadius: '8px',
            color: '#FFFFFF',
            marginBottom: '16px',
            fontSize: '15px',
            outline: 'none',
        },
        button: {
            background: 'linear-gradient(90deg, #00DEFE, #04befe)',
            width: '100%',
            padding: '14px',
            color: '#121829',
            fontWeight: 700,
            fontSize: '16px',
            borderRadius: '8px',
            cursor: 'pointer',
            margin: '16px 0',
        },
        footerLink: {
            color: '#00DEFE',
            textDecoration: 'none',
            fontWeight: 500,
        },
        message: {
            color: isError ? 'red' : 'green',
            marginBottom: '16px',
            fontSize: '1rem',
            textAlign: 'center',
        },
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        const loginData = {
            email: formData.get("email"),
            senha: formData.get("senha"),
        };

        try {
            const response = await fetch('http://localhost:5000/api/users/login', { // Alteração para a rota .NET
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData),
            });

            if (response.ok) {
                const data = await response.json();
                setMessage('Login bem-sucedido!');
                setIsError(false);
                localStorage.setItem('token', data.token);
                localStorage.setItem('userName', data.nome); // Salva o nome do usuário

                setTimeout(() => {
                    navigate('/'); // Redireciona para a tela home após 1 segundo
                }, 1000);
            } else {
                setMessage('Email ou senha incorretos.');
                setIsError(true);
            }
        } catch (error) {
            console.error('Erro na requisição:', error);
            setMessage('Erro ao conectar com o servidor.');
            setIsError(true);
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.contentBackground}>
                <h1 style={styles.title}>
                    | HYDRA SITE <br /> <strong style={{ color: '#00DEFE' }}>DESENVOLVIMENTO |</strong>
                </h1>
                <p>
                    Bem-vindo ao HYDRA, a solução inovadora para monitorar e reduzir seus gastos com água.
                </p>
            </div>

            <div style={styles.contentForm}>
                <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '400px', padding: '0 25px' }}>
                    {message && <p style={styles.message}>{message}</p>}
                    <label htmlFor="email" style={{ display: 'none' }}>E-mail</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Digite seu E-mail"
                        required
                        style={styles.input}
                    />
                    <label htmlFor="senha" style={{ display: 'none' }}>Senha</label>
                    <input
                        type="password"
                        name="senha"
                        placeholder="Digite sua senha"
                        required
                        style={styles.input}
                    />
                    <button type="submit" style={styles.button}>
                        Login
                    </button>
                    <small style={{ color: '#9BA1AE', fontSize: '15px', marginTop: '20px' }}>
                        Não está registrado?{' '}
                        <a href="#" style={styles.footerLink} onClick={() => navigate('/cadastro')}>
                            Crie sua conta
                        </a>
                    </small>
                </form>
            </div>
        </div>
    );
};

export default Login;
