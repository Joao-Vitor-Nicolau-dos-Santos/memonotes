import { Navigate,Route,Routes } from 'react-router-dom';
import BlocList from './Componentes/BlocList/index';
import BlocForm from './Componentes/BlocForm/index';
import Cabecalho from './Componentes/Cabecalho';


// // Configurações das paginas
// import Notas from './Paginas/Notas';
// import Salvos from './Paginas/Salvos';
// import Config from './Paginas/Config';
// import Inicio from './Paginas/Inicio';

// Sistema de notas em si


function App() {
  return (
    <>
      <Cabecalho/>
      <BlocForm/>
      <BlocList/>

      {/* <Routes>
          <Route index element={<Navigate replace to="/inicio" />} />
          <Route path='/inicio' element={<Inicio/>} />
          <Route path='/salvos' element={<Salvos/>} />
          <Route path='/notas' element={<Notas/>} />
          <Route path='/config' element={<Config/>} />
      </Routes> */}
    </>
  );
};

export default App;
