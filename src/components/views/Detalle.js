import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import MostrarIngredientes from './receta/MostrarIngredientes';

const Detalle = () => {
    const { id } = useParams();
    //variable de entorno con la direccion de mi api
    const URL = process.env.REACT_APP_API_RECETAS;
    const [receta, setReceta] = useState({});

    useEffect(() => {
        consultarAPI();
    }, []);

    const consultarAPI = async () => {
        const respuesta = await fetch(URL + '/' + id);
        const obtenerReceta = await respuesta.json();
        setReceta(obtenerReceta);
    };

    return (
        <div className="container d-flex justify-content-center py-5 my-auto">
            <Card className="flex-md-row">
                <Card.Img src={receta.imagen} className="w-50" />
                <Card.Body className="container">
                    <Card.Title>
                        <h2>{receta.titulo}</h2>
                    </Card.Title>
                    <hr />
                    <h4>Descripcion:</h4>
                    <Card.Text>{receta.descripcion}</Card.Text>
                    <MostrarIngredientes
                        ingredientes={receta.ingredientes}
                    ></MostrarIngredientes>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Detalle;
