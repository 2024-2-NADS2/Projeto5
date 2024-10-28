// Ajuda.js
import React from 'react';

const Ajuda = () => {
    return (
        <div className="container">
            <style>
                {`
                    body {
                        font-family: "Montserrat", sans-serif;
                        background: #10141E;
                        color: #fefefe;
                        margin: 0;
                        padding: 0;
                    }

                    h1 {
                        text-align: center;
                        color: #00DEFE;
                        margin: 20px 0;
                    }

                    .container {
                        max-width: 800px;
                        margin: 0 auto;
                        padding: 20px;
                        background: #2C2F38;
                        border-radius: 10px;
                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
                    }

                    .faq {
                        margin-bottom: 20px;
                        border-bottom: 1px solid #444;
                        padding-bottom: 15px;
                    }

                    .faq h2 {
                        color: #00DEFE;
                        margin-bottom: 10px;
                    }

                    .faq p {
                        margin: 5px 0 15px;
                        color: #AFB5C3;
                    }

                    .back-link {
                        text-align: center;
                        margin-top: 20px;
                        display: block;
                        color: #00BFFF;
                        text-decoration: none;
                        font-weight: bold;
                    }

                    .back-link:hover {
                        text-decoration: underline;
                    }
                `}
            </style>
            <h1>Ajuda - HYDRA</h1>
            <div className="faq">
                <h2>Como me cadastrar?</h2>
                <p>
                    Para se cadastrar, clique no botão "Cadastrar" na tela de login e preencha os campos solicitados,
                    como nome, e-mail, senha e outros dados pessoais. Após preencher tudo, clique em "Cadastrar" para
                    concluir o processo.
                </p>
            </div>

            <div className="faq">
                <h2>Como faço para recuperar minha senha?</h2>
                <p>
                    Se você esqueceu sua senha, clique no link "Esqueceu sua senha?" na tela de login. Siga as
                    instruções que serão enviadas para o seu e-mail para redefinir sua senha.
                </p>
            </div>

            <div className="faq">
                <h2>Como posso entrar em contato com o suporte?</h2>
                <p>
                    Se você tiver dúvidas ou precisar de suporte, entre em contato conosco através do e-mail
                    suporte@hydra.com.
                </p>
            </div>

            <a href="login.html" className="back-link">Voltar para Login</a>
        </div>
    );
};

export default Ajuda;
