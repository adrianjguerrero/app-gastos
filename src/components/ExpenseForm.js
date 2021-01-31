import React,{useState} from 'react';
import {ContenedorBoton,ContenedorFiltros,Input,InputGrande,Formulario} from './../elements/FormElements'
import Boton from './../elements/Boton'
import {ReactComponent as IconoPlus} from './../images/plus.svg'

const ExpenseForm = () => {

    const [description,cambiarDescription] = useState('')
    const [valor,cambiarValor] = useState('')

    const handleChange = (e) => {
        if(e.target.name === 'description') {
            cambiarDescription(e.target.value)
        } else if(e.target.name === 'valor') {
            cambiarValor(e.target.value.replace(/[^0-9.]/g,''))
        }
    }
    return (
        <>
            <Formulario>
                <ContenedorFiltros>
                    <p>slect</p>
                    <p>date picker</p>
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