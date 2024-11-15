const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

// Função de registro
exports.registerUser = (req, res) => {
    const userData = req.body;
    User.create(userData, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: 'Usuário cadastrado com sucesso!' });
    });
};

// Função de login
exports.loginUser = (req, res) => {
    const { email, senha } = req.body;
    
    User.findByEmail(email, (err, user) => {
        if (err) return res.status(500).json({ error: err.message });
        if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });

        // Verificar a senha
        bcrypt.compare(senha, user.senha, (err, isMatch) => {
            if (err) return res.status(500).json({ error: err.message });
            if (!isMatch) return res.status(401).json({ message: 'Senha incorreta' });

            // Gerar token JWT
            const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

            res.status(200).json({
                message: 'Login bem-sucedido',
                token,
                userId: user.id,
                nome: user.nome_completo
            });
        });
    });
};
