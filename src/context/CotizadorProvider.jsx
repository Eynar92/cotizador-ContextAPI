import { createContext, useState } from "react";
import { obtenerDiferenciaYear } from '../helpers';

const CotizadorContext = createContext();

const CotizadorProvider = ({ children }) => {

    const [datos, setDatos] = useState({
        marca: '',
        year: '',
        plan: ''
    })

    const [error, setError] = useState('')

    const handleChangeDatos = e => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }

    const cotizarSeguro = () => {
        // Una base
        let resultado = 2000;

        // Obtener diferencia de años
        const diferencia = obtenerDiferenciaYear(datos.year);
        console.log(diferencia);
        // Hay que restar el 3% por cada año

        // Americano 15%
        // Europeo 30%
        // Asiatico 5%

        // Básico 20%
        // Completo 50%
    }

    return (
        <CotizadorContext.Provider
            value={{
                datos,
                handleChangeDatos,
                error,
                setError,
                cotizarSeguro
            }}
        >
            {children}
        </CotizadorContext.Provider>
    )
}

export {
    CotizadorProvider
}

export default CotizadorContext