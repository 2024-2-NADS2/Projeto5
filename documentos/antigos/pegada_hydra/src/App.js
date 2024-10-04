import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles.css';
import Header from './components/Header';
import Intro from './components/Intro';
import Features from './components/Features';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Intro />
            <Features />
            <CallToAction />
          </>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Outras rotas podem ser adicionadas aqui */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
