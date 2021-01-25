import React from 'react';
import {Helmet} from 'react-helmet'
import  {Header, Titulo,} from './../elements/Header'
import BtnBack from './../elements/BtnBack'
import {useAuth} from './../contexts/AuthContext'

const ExpensesList = () => {

  // const {usuario} = useAuth()
  // console.log(usuario)
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