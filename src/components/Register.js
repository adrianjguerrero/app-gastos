import React, {useState} from 'react';
import {Helmet} from 'react-helmet'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'

import {auth} from './../firebase/firebaseConfig'

import {Header, Titulo,ContenedorHeader} from './../elements/Header'
import Boton from './../elements/Boton'
import {ContenedorBoton,Input,Formulario} from './../elements/FormElements'
import {ReactComponent as SvgLogin} from './../images/registro.svg'

const Svg = styled(SvgLogin)`
    width:100%;
    max-height: 6.25rem;
    /* w7 bug */
    min-height: 6.25rem;
    margin-bottom: 1.25rem;

`
const Register = () => {
    const history = useHistory()
    const [email,cambiarEmail] = useState('')
    const [password,cambiarPassword] = useState('')
    const [password2,cambiarPassword2] = useState('')

    const handleChange = (e) => {

        switch (e.target.name) {
            case 'email':
                cambiarEmail(e.target.value)
                break;
            case 'password':
                cambiarPassword(e.target.value)
                break
            case 'password2':
                cambiarPassword2(e.target.value)
                break
            default:
                break;
        }
    }


const handleSubmit = (e) =>{
    e.preventDefault()
    const REGEX_MAIL = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/
    if( !REGEX_MAIL.test(email) ){
        console.log('invalid mail')
        return
    }
    if(!email || !password || !password2) {
        console.log('complete fields')
        return
    }

    if(password !== password2) {
        console.log('password are not same');
        return
    }
    
        auth.createUserWithEmailAndPassword(email,password)
        .then(()=>{

            console.log('registrado')
            history.push('/')

        })
        .catch((err)=>{
            let message;
            switch (err.code) {
                case 'auth/invalid-password':
                    message = 'La contraseña tiene que ser de al menos 6 caracteres.'
                    break;
                case 'auth/email-already-in-use':
                    message = 'Ya existe una cuenta con el correo electrónico proporcionado.'
                break;
                case 'auth/invalid-email':
                    message = 'El correo electrónico no es válido.'
                break;
                default:
                    message = 'Hubo un error al intentar crear la cuenta.'
                break;
            }
            console.log(message)
        })

}
    return (
        <>
            <Helmet>
                <title>Crear cuenta</title>
            </Helmet>
            <Header>
                <ContenedorHeader>
                    <Titulo>Crear cuenta</Titulo>
                    <div>
                        <Boton to="/login">Iniciar sesión</Boton>
                    </div>
                </ContenedorHeader>
            </Header>
            <Formulario onSubmit={handleSubmit}>
                <Svg/>
                <Input value={email} onChange={handleChange} type="email" name="email" placeholder="Correo electronico"/>
                <Input value={password} onChange={handleChange} type="password" name="password" placeholder="Contraseña"/>
                <Input value={password2} onChange={handleChange} type="password" name="password2" placeholder="Repetir Contraseña"/>
                <ContenedorBoton>
                    {/* le ponemos el as porq esto es un link, ya con esto
                    no va a actuar como link */}
                    <Boton as="button" primario type="submit">Crear Cuenta</Boton>
                </ContenedorBoton>
            </Formulario>
        </>
    );
}
 
export default Register