import React from "react";
import "./Cadastro.css"

function Cadastro() {
    return (
      <>
        <div className="container" id="container_cadastro">
          <div className="register_card">
            <h1>Bora se registrar?</h1>
            <h5>Qual seu nome?</h5>
            <input type="name" placeholder="Digite seu nome aqui."/>
            <h5>Digite seu melhor e-mail:</h5>
            <input type="email" name="" id="" placeholder="Digite seu e-mail"/>
            <h5>Crie uma senha forte:</h5>
            <input type="password" name="" id="" placeholder="Crie uma senha."/>
            <h5>Repita essa senha:</h5>
            <input type="password" name="" id="" placeholder="Repita sua senha."/>
            <button type="button">Registrar</button>
          </div>
          <div className="triangle_cadastro"></div>
        </div>
      </>
    );
  };
  
export default Cadastro;