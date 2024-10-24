import { Navigate,Route,Routes } from 'react-router-dom';
import BlocList from './Componentes/BlocList/index';
import BlocForm from './Componentes/BlocForm/index';
import Cabecalho from './Componentes/Cabecalho';


// // Configurações das paginas
import Cadastro from './Paginas/Notas/index';
import Inexistente from './Paginas/Inicio/index';
import Inicio from './Paginas/Inicio/index';
import Login from './Paginas/Inicio/index';
import Notas from './Paginas/Notas/index';


// Sistema de notas em si


function App() {
  return (
    <>
      <Cabecalho/>
      <BlocForm/>
      <BlocList/>

      <Routes>
        <Route index element={<Navigate replace to="/inicio" />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/notas" element={<Notas />}/>
        <Route path="*" element={<Inexistente />} />
      </Routes>
    </>
  );
};

export default App;
