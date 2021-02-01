import React,{useState} from 'react';

import getUnixTime from 'date-fns/getUnixTime'
import fromUnixTime from 'date-fns/fromUnixTime'

import {useAuth} from './../contexts/AuthContext'

import {ContenedorBoton,ContenedorFiltros,Input,InputGrande,Formulario} from './../elements/FormElements'

import {ReactComponent as IconoPlus} from './../images/plus.svg'

import agregarGasto from './../firebase/addExpense'

import Boton from './../elements/Boton'
import CategorySelect from './CategorySelect'
import DatePicker from './DatePicker'

const ExpenseForm = () => {

    const [description,cambiarDescription] = useState('')
    const [valor,cambiarValor] = useState('')
    const [categoria,cambiarCategoria] = useState('hogar')
    const [fecha,cambiarFecha] = useState(new Date())
    const {usuario} = useAuth()

    const handleChange = (e) => {
        if(e.target.name === 'description') {
            cambiarDescription(e.target.value)
        } else if(e.target.name === 'valor') {
            cambiarValor(e.target.value.replace(/[^0-9.]/g,''))
        }
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(categoria,valor,description,fecha)
        // let cantidad = parseFloat(valor).toFixed(2)

        // guardamos la cantidad formateada
        // y la fecha en formato unix
        agregarGasto({
            categoria,
            valor: parseFloat(valor).toFixed(2),
            description,
            fecha:getUnixTime(fecha),
            uidUsuario: usuario.uid
        })

    }
    return (
        <>
            <Formulario onSubmit={handleSubmit}>
                <ContenedorFiltros>
                    <CategorySelect categoria={categoria} cambiarCategoria={cambiarCategoria}/>
                    <DatePicker fecha={fecha} cambiarFecha={cambiarFecha}/>
                </ContenedorFiltros>
                <div>
                    <Input type="text" name="description" id="description"
                     placeholder="Descripcion del gasto" value={description} onChange={handleChange}/>
                    <InputGrande type="text" name="valor" id="valor"
                    placeholder="0.00" value={valor} onChange={handleChange}/>
                </div>
                <ContenedorBoton>
                    <Boton as="button" primario conIcono type="submit">
                        Agregar gasto
                        <IconoPlus/>
                    </Boton>
                </ContenedorBoton>
            </Formulario>
        </>
    );
}
 
export default ExpenseForm;