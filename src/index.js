import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import WebFont from 'webfontloader'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Contenedor from './elements/Contenedor'

WebFont.load({
  google: {
    families: ['Work Sans:400,500,700', 'sans-serif']
  }
});

const Index = () => {
  return ( 

    <BrowserRouter>
      <Contenedor>

        <App/> 
      </Contenedor>
    </BrowserRouter>
  );
}
 


ReactDOM.render(<Index/>, document.getElementById('root'));

