import React from 'react';
import {Helmet} from 'react-helmet'
import  {Header, Titulo, ContenedorBotones, ContenedorHeader} from './../elements/Header'

const ExpensesByCategory = () => {
    return ( 
        <>
        <Helmet>
          <title>Gasto por categoria</title>
        </Helmet>
        <Header>

          <ContenedorHeader>
            <Titulo>Gastos por categoría</Titulo>
          </ContenedorHeader>
        </Header>
    
      </>
     );
}
 
export default ExpensesByCategory