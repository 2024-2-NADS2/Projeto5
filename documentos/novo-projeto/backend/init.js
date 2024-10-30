const db = require('./database');

// Cria a tabela 'usuarios' caso ela não exista
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS usuarios (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome_completo TEXT NOT NULL,
      email TEXT UNIQUE NOT NULL,
      senha TEXT NOT NULL,
      cnpj TEXT NOT NULL,
      endereco TEXT,
      estado TEXT,
      cidade TEXT,
      telefone TEXT
    )
  `, (err) => {
    if (err) {
      return console.error('Erro ao criar tabela:', err.message);
    }
    console.log('Tabela "usuarios" pronta.');
  });
});

// Opcional: Remover a função de inserção direta aqui
db.close();
