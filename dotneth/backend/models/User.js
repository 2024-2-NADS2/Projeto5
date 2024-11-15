const bcrypt = require('bcryptjs');
const connection = require('../config/db');

const User = {
    create: (data, callback) => {
        bcrypt.hash(data.senha, 10, (err, hash) => {
            if (err) throw err;
            const sql = `
                INSERT INTO users (nome_completo, email, senha, cnpj, telefone, endereco, cidade, estado)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?)
            `;
            connection.query(
                sql,
                [data.nome_completo, data.email, hash, data.cnpj, data.telefone, data.endereco, data.cidade, data.estado],
                callback
            );
        });
    },
    findByEmail: (email, callback) => {
        const sql = `SELECT * FROM users WHERE email = ?`;
        connection.query(sql, [email], (err, results) => {
            if (err) return callback(err, null);
            if (results.length > 0) {
                callback(null, results[0]);
            } else {
                callback(null, null);
            }
        });
    },
};

module.exports = User;
