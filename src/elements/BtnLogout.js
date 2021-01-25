import React from 'react';
import {ReactComponent as IconLogout} from './../images/log-out.svg'
import Boton from './Boton'
import {auth} from './../firebase/firebaseConfig'
import {useHistory} from 'react-router-dom'

const BtnLogout = () => {

    const history = useHistory()

    const logout = () => {

        auth.signOut().then(()=>{
            history.push('/login')
        })
        .catch(err=>{
            console.log(err);
        })
    }
    return (
        <Boton iconoGrande as="button" onClick={logout}>
            <IconLogout/>
        </Boton>
    );
}
 
export default BtnLogout;