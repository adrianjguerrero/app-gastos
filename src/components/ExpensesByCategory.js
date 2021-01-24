import React from 'react';
import {Helmet} from 'react-helmet'
import  {Header, Titulo} from './../elements/Header'
import BtnBack from './../elements/BtnBack'

const ExpensesByCategory = () => {
    return ( 
        <>
        <Helmet>
          <title>Gasto por categoria</title>
        </Helmet>
        <Header>
            <BtnBack/>
            <Titulo>Gastos por categoría</Titulo>
        </Header>
    
      </>
     );
}
 
export default ExpensesByCategory