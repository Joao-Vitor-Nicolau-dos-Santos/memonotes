import Cabecalho from "../../Componentes/Cabecalho";
import note from "../../assets/img/note.svg"
import pencil from "../../assets/img/pencil.svg"
import conection from "../../assets/img/conection.svg"
import version from "../../assets/img/version.svg"
import "./Inicio.css"
import { NavLink } from "react-router-dom";

function Inicio() {
    return (
      <>
        <Cabecalho/>
        <div className="container">
          <div className="texto">
            <h3>Bem-Vindo ao</h3>
            <h1>Memo Notes</h1>
            <h5>Nossa missão é ajuda-lo na organização de seus projetos.</h5>
            <button className="note_btn">
              <NavLink className='link' to="/notas"> Criar nota →</NavLink>
            </button>
          </div>
          <img src={note} alt="note" className="note_img" />
        </div>
        <div className="container">
          <div className="apresentacao">
            <h1>Começe suas notas com a gente.</h1>
            <h5>Transforme suas ideias em realidade!
            Capture cada pensamento e faça anotações que impulsionam sua criatividade e organização.</h5>
            <div className="img_apresentacao">
              <img src={pencil} alt="note" className="note_img" />
              <img src={conection} alt="note" className="note_img" />
              <img src={pencil} alt="note" className="note_img" />
            </div>
          </div>
        </div>
      </>
    );
  };
  
export default Inicio;