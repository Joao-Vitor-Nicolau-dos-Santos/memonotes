import Cabecalho from "../../Componentes/Cabecalho";
import note from "../../assets/img/note.svg"
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
          
        </div>
      </>
    );
  };
  
export default Inicio;