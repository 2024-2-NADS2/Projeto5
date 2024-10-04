import React from 'react';

const Login = () => {
  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Poppins:wght@100;400;700&display=swap');
          
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            outline: 0;
          }

          body {
            font-family: "Poppins", sans-serif;
            font-size: 15px;
          }

          h1 {
            color: #fff;
            font-size: 35px;
            font-weight: 900;
            line-height: 36px;
            margin-bottom: 12px;
          }

          strong {
            color: #00DEFE;
          }

          p {
            color: #AFB5C3;
          }

          a {
            font-size: 13px;
            text-decoration: none;
            color: #fff;
            font-weight: 700;
          }

          .container {
            display: flex;
            height: 100vh;
            align-items: stretch;
          }

          .content-background {
            background: #021749fe;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            flex: 1;
            padding: 35px 25px;
            position: relative;
          }

          img {
            position: absolute;
            top: 20px;
            left: 20px;
            width: 100px;
            height: auto;
            border-radius: 8px;
          }

          .content-form {
            background: #10141E;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            flex: 1;
          }

          .content-form form {
            width: 100%;
            max-width: 680px;
            color: #fff;
            padding: 0 25px;
          }

          .content-form form input[type="text"],
          input[type="password"] {
            background: #3D404b;
            border: 0;
            width: 100%;
            height: 45px;
            padding: 15px;
            border-radius: 6px;
            color: #fefefe;
            margin-top: 8px;
            margin-bottom: 18px;
          }

          .content-form form input::placeholder {
            color: #9BA1AE;
          }

          .content-form form button {
            background: #00DEFE;
            width: 100%;
            border: 0;
            padding: 14px;
            font-family: "Poppins", sans-serif;
            color: #2D272A;
            font-weight: 700;
            box-shadow: 0px 8px 26px rgba(0, 222, 254, 0.36);
            border-radius: 6px;
            cursor: pointer;
            margin: 12px 0;
          }

          .content-form a:nth-child(1) {
            color: #00DEFE;
            font-weight: 400;
          }

          .options-login {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 13px;
            color: #9BA1AE;
            line-height: 16px;
          }

          .options-login input[type="checkbox"] {
            margin-right: 8px;
            width: 17px;
            height: 17px;
            border: 0;
            border-radius: 6px;
          }

          small {
            color: #9BA1AE;
            font-size: 14px;
            line-height: 17px;
          }
        `}
      </style>

      <div className="container">
        <div className="content-background">
          <h1>| HYDRA SITE <br /> <strong>DESENVOLVIMENTO |</strong></h1>
          <p>Bem-vindo ao HYDRA, a solução inovadora para monitorar e reduzir seus gastos com água.</p>
        </div>
        <div className="content-form">
          <form>
            <label htmlFor="email">E-mail</label>
            <input type="text" id="email" placeholder="Digite seu E-mail" />
            <label htmlFor="senha">Senha</label>
            <input type="password" id="senha" placeholder="Digite sua senha" />
            <div className="options-login">
              <label htmlFor="lembrar-senha">
                <input type="checkbox" id="lembrar-senha" checked /> Lembrar senha
              </label>
              <a href="#">Esqueceu sua senha?</a>
            </div>
            <button type="submit">Login</button>
            <small>Não está registrado? <a href="#">Crie sua conta</a></small>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
