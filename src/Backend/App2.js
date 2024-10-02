import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Intro from './components/Intro';
import Features from './components/Features';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import Login from './components/Login';
import MainClass from './MainClass'; 

function App() {
    
    const mainInstance = new MainClass('Nathan');

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
            </Routes>
            <h1>{mainInstance.greet()}</h1> {Olá}
            <Footer />
        </div>
    );
}

export default App;
