import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import {Helmet} from "react-helmet";

import favicon from './images/logo.png'

import './index.css';
import Contenedor from './elements/Contenedor'
import Background from './elements/Background'

import {AuthProvider} from './contexts/AuthContext'

import App from './App';
import Login from './components/Login'
import Register from './components/Register'
import ExpensesByCategory from './components/ExpensesByCategory'
import ExpensesList from './components/ExpensesList'
import EditExpense from './components/EditExpense'

WebFont.load({
  google: {
    families: ['Work Sans:400,500,700', 'sans-serif']
  }
});

const Index = () => {
  return ( 

    <>
      <Helmet>
        <link rel="shortcut icon" href={favicon} type="image/x-icon"/>
      </Helmet>
      <AuthProvider>
        <BrowserRouter>
          <Contenedor>
            <Switch>
              <Route path="/login" component={Login}/>
              <Route path="/register" component={Register}/>
              <Route path="/categories" component={ExpensesByCategory}/>
              <Route path="/list" component={ExpensesList}/>
              <Route path="/edit/:id" component={EditExpense}/>
              <Route path="/" component={App}/>
              
            </Switch>
          </Contenedor>
        </BrowserRouter>
      </AuthProvider>
      <Background/>
    </>
  );
}
 


ReactDOM.render(<Index/>, document.getElementById('root'));

