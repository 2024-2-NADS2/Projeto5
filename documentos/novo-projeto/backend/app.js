const express = require('express');
const db = require('./database');
const app = express();
const cors = require('cors');  
app.use(cors());  
const PORT = 3001;

app.use(express.json());

app.post('/api/usuarios', (req, res) => {
  const { nome_completo, email, senha, cnpj, endereco, estado, cidade, telefone } = req.body;

  // Verifica se o e-mail já existe no banco de dados
  db.get(`SELECT * FROM usuarios WHERE email = ?`, [email], (err, row) => {
    if (err) {
      console.error('Erro ao consultar o banco de dados:', err.message);
      return res.status(500).json({ message: 'Erro no servidor.' });
    }

    if (row) {
      // E-mail já existe
      return res.status(400).json({ message: 'E-mail já cadastrado.' });
    }

    // Insere o novo usuário se o e-mail não existir
    const query = `INSERT INTO usuarios (nome_completo, email, senha, cnpj, endereco, estado, cidade, telefone) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

    db.run(query, [nome_completo, email, senha, cnpj, endereco, estado, cidade, telefone], function (err) {
      if (err) {
        console.error('Erro ao inserir usuário:', err.message);
        res.status(400).json({ message: 'Erro ao cadastrar usuário' });
      } else {
        res.status(201).json({ message: 'Usuário cadastrado com sucesso', userId: this.lastID });
      }
    });
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
