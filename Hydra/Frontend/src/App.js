import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Home';
import Cadastro from './Cadastro';
import Login from './Login';
import Ajuda from './Ajuda';
import Contato from './Contato';
import EntradaConsumo from './EntradaConsumo';
import Historico from './Historico';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/login" element={<Login />} />
                <Route path="/ajuda" element={<Ajuda />} />
                <Route path="/contato" element={<Contato />} />
                <Route path="/entradaconsumo" element={<EntradaConsumo />} />
                <Route path="/historico" element={<Historico />} />
            </Routes>
        </Router>
    );
}

export default App;
