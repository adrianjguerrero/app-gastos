import {db} from './firebaseConfig'

const agregarGasto = ({categoria,description,valor,fecha,uidUsuario}) => {

    db.collection('gastos').add({
        categoria,description,valor,fecha,uidUsuario
    })
}

export default agregarGasto