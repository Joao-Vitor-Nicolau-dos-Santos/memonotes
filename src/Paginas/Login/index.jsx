import React from "react";
import './Login.css';
import login from '../../assets/img/login.svg';
import { NavLink } from "react-router-dom";

function Login() {
  return (
    <>
      <div className="container" id="login_container">
        <div className="login_card">
          <h1>Seja bem-vindo novamente!</h1>
          <h3>Seja criativo e produtivo com o Memo Notes.</h3>
          <h5>Digite seu e-mail:</h5>
          <input type="email" name="" id="" className="email" placeholder="Coloque seu e-mail aqui."/>
          <h5>Digite sua senha: </h5>
          <input type="password" name="" id="" className="password" placeholder="Coloque sua senha aqui."/>
          <button className="forget">Esqueceu sua senha?</button>
          <button className="login_btn">Entrar</button>
          <h5>Não tem um cadastro?</h5>
          <NavLink to="/cadastro"> <button className="register">Registre agora!</button> </NavLink>
        </div>

        <div className="login_txt">
          <img src={login} alt="login" className="login_img" />
          <h2>Torne seu trabalho simples, organizado e fácil com o Memo Notes.</h2>
        </div>
        <div className="triangle"></div>
      </div>
    </>
  );
};

export default Login;