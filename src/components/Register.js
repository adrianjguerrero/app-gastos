import React, {useState} from 'react';
import {Helmet} from 'react-helmet'
import {Header, Titulo,ContenedorHeader} from './../elements/Header'
import Boton from './../elements/Boton'
import {ContenedorBoton,Input,Formulario} from './../elements/FormElements'
import {ReactComponent as SvgLogin} from './../images/registro.svg'
import styled from 'styled-components'

const Svg = styled(SvgLogin)`
    width:100%;
    max-height: 6.25rem;
    /* w7 bug */
    min-height: 6.25rem;
    margin-bottom: 1.25rem;

`
const Register = () => {
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