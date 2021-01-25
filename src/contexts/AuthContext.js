import React, {useState, useEffect, useContext } from 'react'
import { auth } from '../firebase/firebaseConfig'

const AuthContext = React.createContext()

//hook(a) para acceder al contexto

const useAuth = () =>{
    return useContext(AuthContext)
}

const AuthProvider = ({children}) => {
    
    const [usuario,cambiarUsuario] = useState()

    // estado para chequear cuando cargue el usuario
    const [cargando,cambiarCargando] = useState(true)

    // efecto para ejecutar si hay usuario, solo se comprueba una vez
    useEffect(()=>{
        const cancelarSuscripcion = auth.onAuthStateChanged((user)=>{
            cambiarUsuario(user)
            cambiarCargando(false)
        })

        // para cuando cerremos sesion
        return cancelarSuscripcion

    },[])

    return (
        <AuthContext.Provider value={{usuario:usuario}}>
            {/* solamente retornamos los hijos cuando no este cargando
             ya cuando cargue retornar los children*/}
            {!cargando && children}
        </AuthContext.Provider>
    );
}
 
export {AuthProvider, AuthContext, useAuth};