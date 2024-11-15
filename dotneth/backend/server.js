const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes'); // Importação das rotas de usuário
require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Rota para cadastro de usuário
app.use('/api', userRoutes);

// Rota existente para cálculo de consumo
app.post('/api/consumo', (req, res) => {
    const {
        numeroPessoas,
        chuveiroMinutos,
        descargasDiarias,
        maquinaLavarSemanal,
        torneiraMinutos,
        lavagemVeiculoMensal,
        piscinaLitros,
        jardinagemLitros,
        sistemaReutilizacao,
    } = req.body;

    const consumoChuveiro = numeroPessoas * chuveiroMinutos * 12 * 30;
    const consumoDescarga = numeroPessoas * descargasDiarias * 6 * 30;
    const consumoMaquinaLavar = maquinaLavarSemanal * 80 * 4;
    const consumoTorneira = numeroPessoas * torneiraMinutos * 10 * 30;
    const consumoLavagemVeiculo = lavagemVeiculoMensal * 200;
    const consumoPiscina = piscinaLitros * 4;
    const consumoJardinagem = jardinagemLitros * 4;

    let totalConsumo = consumoChuveiro + consumoDescarga + consumoMaquinaLavar + consumoTorneira +
                       consumoLavagemVeiculo + consumoPiscina + consumoJardinagem;

    if (sistemaReutilizacao === 'sim') {
        totalConsumo *= 0.85;
    }

    const consumoDetalhado = {
        chuveiro: consumoChuveiro,
        descarga: consumoDescarga,
        maquinaLavar: consumoMaquinaLavar,
        torneira: consumoTorneira,
        lavagemVeiculo: consumoLavagemVeiculo,
        piscina: consumoPiscina,
        jardinagem: consumoJardinagem,
    };

    res.json({
        totalConsumo: Math.round(totalConsumo),
        consumoDetalhado: consumoDetalhado,
    });
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
