import React from 'react';

const Login = () => {
  return (
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
  );
};

export default Login;
