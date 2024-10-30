// app.js
const express = require('express');
const cors = require('cors');
const Usuario = require('./usuario'); // Importa a classe Usuario
const app = express();

app.use(cors());
app.use(express.json());

const PORT = 3001;

// Rota para cadastrar um novo usuário
app.post('/api/usuarios', (req, res) => {
  const { nome_completo, email, senha, cnpj, endereco, estado, cidade, telefone } = req.body;
  
  // Verifica se o e-mail já existe usando o método estático da classe Usuario
  Usuario.buscarPorEmail(email, (err, usuarioExistente) => {
    if (err) {
      console.error('Erro ao consultar o banco de dados:', err.message);
      return res.status(500).json({ message: 'Erro no servidor.' });
    }

    if (usuarioExistente) {
      return res.status(400).json({ message: 'E-mail já cadastrado.' });
    }

    // Cria uma nova instância da classe Usuario e tenta salvar no banco
    const novoUsuario = new Usuario(nome_completo, email, senha, cnpj, endereco, estado, cidade, telefone);
    novoUsuario.salvar((err, userId) => {
      if (err) {
        console.error('Erro ao inserir usuário:', err.message);
        res.status(400).json({ message: 'Erro ao cadastrar usuário' });
      } else {
        res.status(201).json({ message: 'Usuário cadastrado com sucesso', userId });
      }
    });
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
