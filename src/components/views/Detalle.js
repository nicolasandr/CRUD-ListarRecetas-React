import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import MostrarIngredientes from './receta/MostrarIngredientes';

const Detalle = () => {
    const { id } = useParams();
    const URL = 'http://localhost:3005/recetas';
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
        <Card className="w-75 me-auto ms-auto m-5">
            <Card.Header className="text-center">{receta.titulo}</Card.Header>
            <img src={receta.imagen} alt={receta.titulo} />
            <Card.Body>
                <h5>Descripcion:</h5>
                <Card.Text>{receta.descripcion}</Card.Text>
                <hr />
                <MostrarIngredientes
                    ingredientes={receta.ingredientes}
                ></MostrarIngredientes>
            </Card.Body>
        </Card>
    );
};

export default Detalle;
