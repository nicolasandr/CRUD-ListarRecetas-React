import React, { useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { cantidadCaracteres, validarURL } from './helpers';
import { useNavigate } from 'react-router-dom';
import './crearReceta.css'

const CrearReceta = () => {
    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [imagen, setImagen] = useState('');
    const [ingredientes, setIngredientes] = useState([]);
    const [msjError, setMsjError] = useState(false);
    
    const URL = process.env.REACT_APP_API_RECETAS;
    
    const navegacion = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        //validaciones
        if (
            cantidadCaracteres(titulo, 2, 50) &&
            validarURL(imagen) &&
            cantidadCaracteres(descripcion, 5, 500)
        ) {
            setMsjError(false);
            const nuevaReceta = {
                titulo,
                ingredientes,
                descripcion,
                imagen,
            };
            try {
                const parametrosPeticion = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(nuevaReceta),
                };
                const respuesta = await fetch(URL, parametrosPeticion);
                if (respuesta.status === 201) {
                    // console.log('el producto se creo correctamente');
                    navegacion('/administrar');
                }
            } catch (error) {
                console.log(error);
            }
        } else {
            setMsjError(true);
        }
    };
    return (
        <Card className="container ms-auto me-auto my-5 bg-light border rounded px-0">
            <div className="bg-brown rounded py-2">
                <h1 className="fs-4 fw-light text-center text-light">
                    Agrega una nueva receta
                </h1>
            </div>
            <Form className="m-3" onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formTitulo">
                    <Form.Label>Nombre *</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ej: Ratatouille"
                        onChange={(e) => setTitulo(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formTitulo">
                    <Form.Label>URL Imagen</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ej: https://images.pexels.com/photos/7439978/pexels-photo-7439978.jpeg?auto=compress&cs=tinysrgb&w=600"
                        onChange={(e) => setImagen(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formTitulo">
                    <Form.Label>Descripcion *</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ingrese una descripcion de 5 a 500 caracteres"
                        onChange={(e) => setDescripcion(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formTitulo">
                    <Form.Label>Ingredientes *</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="ingrediente 1, ingrediente 2, etc"
                        onChange={(e) =>
                            setIngredientes(e.target.value.split(','))
                        }
                    />
                </Form.Group>
                <Button variant="outline-dark" type="submit">
                    Guardar
                </Button>
            </Form>
            {msjError ? (
                <Alert variant="danger" className=" mx-3">
                    No pudimos crear la receta,verifica los datos ingresados y
                    vuelve a intentar!
                </Alert>
            ) : null}
        </Card>
    );
};

export default CrearReceta;
