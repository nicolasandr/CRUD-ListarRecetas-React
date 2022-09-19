import React from 'react';
import Ingrediente from './Ingrediente';

const MostrarIngredientes = (props) => {
    return (
        <div>
            <h1 className="fs-5">Ingredientes:</h1>
            <ul>
                {props.ingredientes === undefined
                    ? null
                    : props.ingredientes.map((ingrediente, posicion) => (
                          <Ingrediente
                              key={posicion}
                              ingrediente={ingrediente}
                          ></Ingrediente>
                      ))}
            </ul>
        </div>
    );
};

export default MostrarIngredientes;
