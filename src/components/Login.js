import React,{useState} from 'react';
import {Helmet} from 'react-helmet'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'

import {auth} from './../firebase/firebaseConfig'

import {Header, Titulo,ContenedorHeader} from './../elements/Header'
import {ContenedorBoton,Input,Formulario} from './../elements/FormElements'

import Boton from './../elements/Boton'
import Alert from './../elements/Alert'

import {ReactComponent as SvgLogin} from './../images/login.svg'
const Svg = styled(SvgLogin)`
    width:100%;
    max-height: 12.25rem;
    /* w7 bug */
    min-height: 12.25rem;
    margin-bottom: 1.25rem;

`

const Login = () => {

    const history = useHistory()
    const [email,cambiarEmail] = useState('')
    const [password,cambiarPassword] = useState('')
    const [estadoAlerta,cambiarEstadoAlerta] = useState(false)
    const [alerta,cambiarAlerta] = useState({})

    const handleChange = (e) => {

        if (e.target.name === 'email') {
                cambiarEmail(e.target.value)
        }
        else if (e.target.name === 'password') {
            cambiarPassword(e.target.value)

        }

    }

    const handleSubmit = (e) =>{

        e.preventDefault()
        const REGEX_MAIL = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/
        
        cambiarEstadoAlerta(false)
        cambiarAlerta({})
        if( !REGEX_MAIL.test(email) ){
            cambiarEstadoAlerta(true)
            cambiarAlerta({tipo:'error',mensaje:'Ingresa un correo valido'})
            return
        }
        if(!email || !password) {
            cambiarEstadoAlerta(true)
            cambiarAlerta({tipo:'error',mensaje:'Completa los campos'})
            return
        }
    
        
        auth.signInWithEmailAndPassword(email,password)
        .then(()=>{

            console.log('iniciado')
            history.push('/')

        })
        .catch((err)=>{
            let message;

            switch (err.code) {
                case 'auth/wrong-password':
                    message = 'La contraseña es incorrecta.'
                    break;
                case 'auth/user-not-found':
                    message = 'No existe una cuenta con este correo.'
                    break;
                default:
                    message = 'Hubo un error al intentar crear la cuenta.'
                    break;
            }
            cambiarEstadoAlerta(true)
            cambiarAlerta({tipo:'error',mensaje:message})
        })
    
    }

    return (
        <>
             <Helmet>
                <title>Iniciar sesión</title>
            </Helmet>
            <Header>
                <ContenedorHeader>
                    <Titulo>Iniciar sesión</Titulo>
                    <div>
                        <Boton to="/register">Registro</Boton>
                    </div>
                </ContenedorHeader>
            </Header>
            <Formulario onSubmit={handleSubmit}>
                <Svg/>
                <Input value={email} onChange={handleChange}
                    name="email" type="email" placeholder="Correo electronico"/>
                <Input value={password} onChange={handleChange}
                    name="password" type="password" placeholder="Contraseña"/>
                <ContenedorBoton>
                    <Boton as="button" primario type="submit">Iniciar sesión</Boton>
                </ContenedorBoton>
            </Formulario>
            <Alert tipo={alerta.tipo} mensaje={alerta.mensaje} 
                estadoAlerta={estadoAlerta} 
                cambiarEstadoAlerta={cambiarEstadoAlerta}
            />
        </>
    );
}
 
export default Login;