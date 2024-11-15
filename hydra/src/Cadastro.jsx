import React, { useState } from 'react';

const Cadastro = () => {
    const [message, setMessage] = useState(null); // Estado para mensagem de sucesso ou erro

    const styles = {
        body: {
            fontFamily: 'Arial, sans-serif',
            margin: 0,
            padding: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            backgroundColor: '#021749fe',
        },
        container: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            padding: '20px',
        },
        registerContainer: {
            backgroundColor: 'white',
            padding: '40px',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            width: '100%',
            maxWidth: '400px',
            textAlign: 'center',
        },
        title: {
            fontSize: '1.8rem',
            marginBottom: '20px',
            color: '#333',
        },
        input: {
            width: 'calc(100% - 20px)',
            padding: '10px',
            margin: '10px 0',
            border: '1px solid #ddd',
            borderRadius: '5px',
            outline: 'none',
        },
        button: {
            width: '100%',
            padding: '10px',
            backgroundColor: '#00DEFE',
            border: 'none',
            color: 'white',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '1rem',
            marginTop: '10px',
        },
        footer: {
            color: '#666',
            fontSize: '0.9rem',
            marginTop: '20px',
        },
        footerLink: {
            color: '#00BFFF',
            textDecoration: 'none',
        },
        successMessage: {
            color: 'green',
            marginTop: '20px',
        },
        errorMessage: {
            color: 'red',
            marginTop: '20px',
        },
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        const userData = {
            nome_completo: formData.get("nome_completo"),
            email: formData.get("email"),
            senha: formData.get("senha"),
            cnpj: formData.get("cnpj"),
            telefone: formData.get("telefone"),
            endereco: formData.get("endereco"),
            cidade: formData.get("cidade"),
            estado: formData.get("estado"),
        };

        try {
            const response = await fetch('http://localhost:5000/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (response.ok) {
                setMessage({ type: 'success', text: 'Cadastro realizado com sucesso!' });
            } else {
                setMessage({ type: 'error', text: 'Email ou cnpj já cadastrado, por favor fazer login.' });
            }
        } catch (error) {
            setMessage({ type: 'error', text: 'Erro na requisição. Tente novamente.' });
        }
    };

    return (
        <div style={styles.body}>
            <div style={styles.container}>
                <div style={styles.registerContainer}>
                    <h2 style={styles.title}>Cadastre-se</h2>
                    <form id="register-form" onSubmit={handleSubmit}>
                        <input type="text" name="nome_completo" placeholder="Nome Completo" required style={styles.input} />
                        <input type="email" name="email" placeholder="E-mail" required style={styles.input} />
                        <input type="password" name="senha" placeholder="Senha" required style={styles.input} />
                        <input type="text" name="cnpj" placeholder="CNPJ" required style={styles.input} />
                        <input type="tel" name="telefone" placeholder="Telefone" required style={styles.input} />
                        <input type="text" name="endereco" placeholder="Endereço" required style={styles.input} />
                        <input type="text" name="cidade" placeholder="Cidade" required style={styles.input} />
                        <input type="text" name="estado" placeholder="Estado" required style={styles.input} />
                        <button type="submit" style={styles.button}>Cadastrar</button>
                    </form>
                    
                    {/* Exibe a mensagem de sucesso ou erro */}
                    {message && (
                        <div style={message.type === 'success' ? styles.successMessage : styles.errorMessage}>
                            {message.text}
                        </div>
                    )}

                    <p style={styles.footer}>
                        Já tem uma conta? <a href="login" style={styles.footerLink}>Faça login aqui</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Cadastro;
