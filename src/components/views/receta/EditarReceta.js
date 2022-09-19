import React, { useEffect, useState, useRef } from 'react';
import { Card, Button, Form, Alert } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { cantidadCaracteres, validarURL } from './helpers';

const EditarReceta = () => {
    // traer parametro
    const { id } = useParams();

    const [recetas, setRecetas] = useState({});
    const tituloRef = useRef('');
    const descripcionRef = useRef('');
    const imagenRef = useRef('');
    const ingredientesRef = useRef([]);

    const [msjError, setMsjError] = useState(false);
    //variable de entorno con la direccion de mi api
    const URL = process.env.REACT_APP_API_RECETAS;
    const navegacion = useNavigate();

    useEffect(() => {
        consultarAPI();
    }, []);

    const consultarAPI = async () => {
        try {
            const respuesta = await fetch(URL + '/' + id);
            const obtenerReceta = await respuesta.json();
            setRecetas(obtenerReceta);
        } catch (error) {
            console.log(error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (
            cantidadCaracteres(tituloRef.current.value, 2, 50) &&
            validarURL(imagenRef.current.value) &&
            cantidadCaracteres(descripcionRef.current.value, 5, 500)
        ) {
            setMsjError(false);
            const recetaEditar = {
                titulo: tituloRef.current.value,
                descripcion: descripcionRef.current.value,
                imagen: imagenRef.current.value,
                ingredientes: ingredientesRef.current.value.split(','),
            };
            try {
                const parametrosPeticion = {
                    method: 'PUT',
                    headers: {
                        'Content-type': 'application/json',
                    },
                    body: JSON.stringify(recetaEditar),
                };
                const respuesta = await fetch(
                    URL + '/' + id,
                    parametrosPeticion
                );
                if (respuesta.status === 200) {
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
            <Card.Header className="bg-dark">
                <h1 className="fs-4 fw-light text-center text-light">
                    Agrega una receta
                </h1>
            </Card.Header>
            <Form className="m-3" onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formTitulo">
                    <Form.Label>Nombre *</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ej: Chocotorta"
                        defaultValue={recetas.titulo}
                        ref={tituloRef}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formTitulo">
                    <Form.Label>URL Imagen</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ej: https://media.istockphoto.com/photos/homemade-chocotorta-picture-id1327623325?s=612x612"
                        defaultValue={recetas.imagen}
                        ref={imagenRef}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formTitulo">
                    <Form.Label>Descripcion *</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ingrese una descripcion de  5 a 500 caracteres"
                        defaultValue={recetas.descripcion}
                        ref={descripcionRef}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formTitulo">
                    <Form.Label>Ingredientes *</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="ingrediente 1, ingrediente 2, ingrediente 3, etc"
                        defaultValue={recetas.ingredientes}
                        ref={ingredientesRef}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Actualizar
                </Button>
            </Form>
            {msjError ? (
                <Alert variant="danger" className=" mx-3">
                    La receta no pudo ser creada, verifique los datos
                    ingresados!
                </Alert>
            ) : null}
        </Card>
    );
};

export default EditarReceta;
