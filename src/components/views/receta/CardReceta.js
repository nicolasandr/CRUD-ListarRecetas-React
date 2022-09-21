import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CardReceta = (props) => {
    return (
        <div className="col-6 col-md-4 col-lg-3 mt-4">
            <Card className="h-100">
                <Card.Img
                    variant="top"
                    className="rounded "
                    src={props.receta.imagen}
                />
                <div className="mb-0 mt-auto">
                    <Card.Body>
                        <Card.Title>{props.receta.titulo}</Card.Title>
                        <div className="row">
                            <Card.Text className="col-10 text-truncate pb-4">
                                {props.receta.descripcion}
                            </Card.Text>
                        </div>
                        {/* <Card.Text>{props.receta.descripcion}</Card.Text> */}
                    </Card.Body>
                    <div className="mx-3 py-4">
                        <Link
                            to={'/detalle/' + props.receta.id}
                            className=" bg-button "
                        >
                            Ver mas
                        </Link>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default CardReceta;
