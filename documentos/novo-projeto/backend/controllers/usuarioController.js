const db = require('../database');

exports.cadastrarUsuario = (req, res) => {
  const { nome_completo, email, senha, cnpj, endereco, estado, cidade, telefone } = req.body;

  const sql = `INSERT INTO usuarios (nome_completo, email, senha, cnpj, endereco, estado, cidade, telefone) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

  db.run(sql, [nome_completo, email, senha, cnpj, endereco, estado, cidade, telefone], function(err) {
    if (err) {
      return res.status(500).json({ message: 'Erro ao cadastrar usuário', error: err.message });
    }
    res.status(201).json({ id: this.lastID, nome_completo });
  });
};
