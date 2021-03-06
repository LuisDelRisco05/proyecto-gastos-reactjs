import React, {useState} from 'react';
import Error from './Error';
import shortid from 'shortid';
import PropTypes from 'prop-types';

const Formulario = ({guardarGasto, guardarCrearGasto}) => {
    const [nombre, guardarNombre] = useState('');
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);

    // Cuando el usuario agrega un gasto
    const agregarGasto = e => {
        e.preventDefault();

        // Validar
        if(nombre.trim() === '' || isNaN(cantidad) || cantidad < 1){
            guardarError(true);
            return;
        }
        guardarError(false);
        // Construir el gasto
        const gasto = {
            nombre,
            cantidad,
            id: shortid.generate()
        }

        // Pasar el gasto al componente principal
        guardarGasto(gasto);
        guardarCrearGasto(true)

        // Resetear form
        guardarNombre('');
        guardarCantidad(0);
        
        
    }
    return (
        <form
            onSubmit={agregarGasto}
        >
            <h2>Agrega tus gatos aquí</h2>
            {error ? <Error mensaje="Ambos Campos Son Obligatorios O Presupuesto Incorrecto" /> : null}

            <div className="campo">
                <label>Nombre gasto:</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte.."
                    value={nombre}
                    onChange={e => guardarNombre(e.target.value)}
                />
            </div>
            <div className="campo">
                <label>Cantidad gasto:</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 300"
                    value={cantidad}
                    onChange={e => guardarCantidad(parseInt(e.target.value, 10))}
                />
            </div>
            <input
                type="submit"
                className="buttom-primary u-full-width"
                value="Agregar gasto"
            />
        </form>
      );
}

Formulario.propTypes = {
    guardarGasto: PropTypes.func.isRequired,
    guardarCrearGasto: PropTypes.func.isRequired
}

export default Formulario;