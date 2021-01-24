import React from 'react';
import {Helmet} from 'react-helmet'
import {Header, Titulo,ContenedorHeader} from './../elements/Header'
import Boton from './../elements/Boton'
import {ContenedorBoton,Input,Formulario} from './../elements/FormElements'
import {ReactComponent as SvgLogin} from './../images/login.svg'
import styled from 'styled-components'
const Svg = styled(SvgLogin)`
    width:100%;
    max-height: 12.25rem;
    /* w7 bug */
    min-height: 12.25rem;
    margin-bottom: 1.25rem;

`

const Login = () => {
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
            <Formulario>
                <Svg/>
                <Input type="email" placeholder="Correo electronico"/>
                <Input type="password" placeholder="Contraseña"/>
                <ContenedorBoton>
                    <Boton as="button" primario type="submit">Iniciar sesión</Boton>
                </ContenedorBoton>
            </Formulario>
        </>
    );
}
 
export default Login;