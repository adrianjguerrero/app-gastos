import React from 'react';
import styled from 'styled-components'

// importando el svg como un componente  de react
import {ReactComponent as Puntos} from './../images/puntos.svg'


const Svg = styled.svg`
    height: 50vh;
    width: 100%;
    position: fixed;
    bottom: 0;
    z-index: 0;
    path {
        fill: rgba(135,182,194, .15);
    }
`;
 
const PuntosArriba = styled(Puntos)`
    position: fixed;
    z-index: 1;
    top: 2.5rem; /* 40px */
    left: 2.5rem; /* 40px */
`;
 
const PuntosAbajo = styled(Puntos)`
    position: fixed;
    z-index: 1;
    bottom: 2.5rem; /* 40px */
    right: 2.5rem; /* 40px */
`;

const Background = () => {
    return ( 
        <>
            <PuntosArriba/>
            <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" 
                preserveAspectRatio="none">
                <path
                 fill-opacity="1" 
                 d="M0,128L34.3,133.3C68.6,139,137,149,206,154.7C274.3,160,343,160,411,170.7C480,181,549,203,617,197.3C685.7,192,754,160,823,138.7C891.4,117,960,107,1029,96C1097.1,85,1166,75,1234,90.7C1302.9,107,1371,149,1406,170.7L1440,192L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z">
                </path>
            </Svg>
            <PuntosAbajo/>
        </>
     );
}
 
export default Background;