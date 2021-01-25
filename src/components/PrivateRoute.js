import React from 'react';
import {useAuth} from '../contexts/AuthContext'

import {Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({children,...restoDePropiedades}) => {
    const {usuario} = useAuth()

        if(usuario) {
            // le pasamos a la ruta sus propiedades y el children
            return <Route {...restoDePropiedades}>{children}</Route>
        } else {
            // sino redireccionar
            return <Redirect to="/login"/>
        }
}
 
export default PrivateRoute;