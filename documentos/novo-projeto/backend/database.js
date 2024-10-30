const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Cria ou abre o banco de dados
const db = new sqlite3.Database(path.join(__dirname, 'pegada_hidrica.db'), (err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados', err.message);
  } else {
    console.log('Conectado ao banco de dados SQLite');
  }
});

module.exports = db;
