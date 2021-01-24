import React from 'react';
import {Helmet} from 'react-helmet'
import {Header, Titulo, ContenedorBotones, ContenedorHeader} from './../elements/Header'
import Boton from './../elements/Boton'
import {ContenedorBoton,ContenedorFiltros,Input,InputGrande,Formulario} from './../elements/FormElements'
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
            <Formulario>
                <Svg/>
                <Input type="email" placeholder="Correo electronico"/>
                <Input type="password" placeholder="Contraseña"/>
                <Input type="password" placeholder="Repetir Contraseña"/>
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