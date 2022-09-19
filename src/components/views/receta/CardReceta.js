import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CardReceta = (props) => {
    const URL = 'http://localhost:3005/recetas';

    return (
        <div className="col-6 col-md-4 col-lg-3 mt-4">
            <Card className="h-100">
                <Card.Img
                    variant="top"
                    className="rounded"
                    src={props.receta.imagen}
                />
                <Card.Body>
                    <Card.Title>{props.receta.titulo}</Card.Title>
                    <Card.Text>{props.receta.descripcion}</Card.Text>
                </Card.Body>
                <div className="mx-3">
                    <Link
                        to={'/detalle/' + props.receta.id}
                        className="btn btn-primary mb-3"
                    >
                        Ver mas
                    </Link>
                </div>
            </Card>
        </div>
    );
};

export default CardReceta;
