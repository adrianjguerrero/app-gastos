import React from 'react';
import {Helmet} from 'react-helmet'
import  {Header, Titulo,} from './../elements/Header'
import BtnBack from './../elements/BtnBack'

const ExpensesList = () => {
    return (
        <>
        <Helmet>
          <title>Lista de gastos</title>
        </Helmet>
        <Header>
            <BtnBack/>
            <Titulo>Lista de gastos</Titulo>
        </Header>
    
      </>
    );
}
 
export default ExpensesList