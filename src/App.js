import './App.css';
import {Helmet} from 'react-helmet'
import  {Header, Titulo, ContenedorBotones, ContenedorHeader} from './elements/Header'
import Boton from './elements/Boton'

function App() {
  return (
    <>
      <Helmet>
        <title>Agregar gasto</title>
      </Helmet>
      <Header>
        <ContenedorHeader>
          <Titulo>Agregar gasto</Titulo>
          <ContenedorBotones>
            <Boton to="/categories">Categorias</Boton>
            <Boton to="/list">Lista de gastos</Boton>
            <Boton to="/">Logout</Boton>
          </ContenedorBotones>
        </ContenedorHeader>
      </Header>
  
    </>
  );
}

export default App;
