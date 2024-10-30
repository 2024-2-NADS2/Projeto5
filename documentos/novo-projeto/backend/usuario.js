// Usuario.js
const db = require('./database');

class Usuario {
  constructor(nome_completo, email, senha, cnpj, endereco, estado, cidade, telefone) {
    this.nome_completo = nome_completo;
    this.email = email;
    this.senha = senha;
    this.cnpj = cnpj;
    this.endereco = endereco;
    this.estado = estado;
    this.cidade = cidade;
    this.telefone = telefone;
  }

  // Método para salvar um novo usuário no banco de dados
  salvar(callback) {
    const query = `INSERT INTO usuarios (nome_completo, email, senha, cnpj, endereco, estado, cidade, telefone) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
    const values = [
      this.nome_completo, 
      this.email, 
      this.senha, 
      this.cnpj, 
      this.endereco, 
      this.estado, 
      this.cidade, 
      this.telefone
    ];

    db.run(query, values, function (err) {
      if (err) {
        console.error('Erro ao inserir usuário:', err.message);
        callback(err);
      } else {
        console.log('Usuário inserido com sucesso');
        callback(null, this.lastID);
      }
    });
  }

  // Método estático para buscar um usuário por email
  static buscarPorEmail(email, callback) {
    const query = `SELECT * FROM usuarios WHERE email = ?`;
    db.get(query, [email], (err, row) => {
      if (err) {
        console.error('Erro ao buscar usuário:', err.message);
        callback(err);
      } else {
        callback(null, row);
      }
    });
  }
}

module.exports = Usuario;
