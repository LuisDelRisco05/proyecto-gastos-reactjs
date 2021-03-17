import React, { Fragment, useState} from 'react';
import Error from './Error';
import PropTypes from 'prop-types';

const Pregunta = ({guardarPresupuesto, guardarRestante, actualizarPregunta}) => {
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);

    // Función que lee el presupuesto
    const definirPresupuesto = e => {
        guardarCantidad( parseInt(e.target.value) )
    }
    // Submit para definir el presupuesto
    const agregarPresupuesto = e => {
        e.preventDefault();

        // Validar
        if(cantidad < 1 || isNaN(cantidad)){
            guardarError(true);
            return;
        }
        // si se pasa la validación
        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        actualizarPregunta(false);
    } 
      

    return ( 
        <Fragment>
            <h2>Coloca tu presupuesto</h2>
            {error ? <Error mensaje="El Presupuesto Es Incorrecto"/> : null    
        }
            <form
                onSubmit={agregarPresupuesto}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={definirPresupuesto}
                />
                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="definir presupuesto"
                />
            </form>
        </Fragment>

    );
}
Pregunta.propTypes = {
    guardarPresupuesto: PropTypes.func.isRequired,
    guardarRestante: PropTypes.func.isRequired,
    actualizarPregunta: PropTypes.func.isRequired
}
 
export default Pregunta;