import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    nome_completo: '',
    email: '',
    senha: '',
    cnpj: '',
    telefone: '',
    endereco: '',
    cidade: '',
    estado: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/api/usuarios', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Usuário cadastrado com sucesso!');
      } else {
        const errorData = await response.json();
        alert(`Erro ao cadastrar usuário: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Erro ao conectar com o backend:', error);
      alert('Erro ao enviar os dados. Verifique a conexão com o backend.');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.registerContainer}>
        <h2 style={styles.title}>Cadastre-se</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="nome_completo"
            placeholder="Nome Completo"
            value={formData.nome}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="password"
            name="senha"
            placeholder="Senha"
            value={formData.senha}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="text"
            name="cnpj"
            placeholder="CNPJ"
            value={formData.cnpj}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="tel"
            name="telefone"
            placeholder="Telefone"
            value={formData.telefone}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="text"
            name="endereco"
            placeholder="Endereço"
            value={formData.endereco}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="text"
            name="cidade"
            placeholder="Cidade"
            value={formData.cidade}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="text"
            name="estado"
            placeholder="Estado"
            value={formData.estado}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <button type="submit" style={styles.button}>
            Cadastrar
          </button>
        </form>
        <p style={styles.footer}>
          Já tem uma conta? <a href="#" style={styles.link}>Faça login aqui</a>
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#021749fe',
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
    transition: 'background-color 0.3s ease',
    marginTop: '10px',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },
  footer: {
    color: '#666',
    fontSize: '0.9rem',
    marginTop: '20px',
  },
  link: {
    color: '#00BFFF',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
  },
  linkHover: {
    color: '#0056b3',
  },
};

export default Register;
