import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import './ItemReceta.css';
const ItemReceta = (props) => {
    //variable de entorno con la direccion de mi api
    const URL = process.env.REACT_APP_API_RECETAS;
    const handleDelete = () => {
        //
        Swal.fire({
            title: '¿Esta seguro de eliminar esta receta?',
            text: 'No se puede revertir esta accion',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Borrar',
            cancelButtonText: 'Cancelar',
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const parametros = {
                        method: 'DELETE',
                    };
                    const respuesta = await fetch(
                        URL + '/' + props.receta._id,
                        parametros
                    );
                    if (respuesta.status === 200) {
                        Swal.fire(
                            'Receta eliminada',
                            'La receta se eliminó con exito',
                            'success'
                        );
                        props.consultarAPI();
                    }
                } catch (error) {
                    console.log(error);
                }
            }
        });
    };

    return (
        <tr className="bg-transparent">
            <td>{props.receta._id}</td>
            <td>{props.receta.titulo}</td>
            <td>
                <div className="truncate">{props.receta.imagen}</div>
            </td>
            <td>
                <div className="truncate">{props.receta.descripcion}</div>
            </td>
            <td>
                <div className="truncate">
                    {props.receta.ingredientes.toString()}
                </div>
            </td>
            <td>
                <Link
                    to={`/administrar/editar/${props.receta._id}`}
                    className="btn btn-secondary mx-2"
                >
                    Editar
                </Link>
                <Button variant="danger" onClick={handleDelete}>
                    Borrar
                </Button>
            </td>
        </tr>
    );
};

export default ItemReceta;
