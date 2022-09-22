import React, { useState, useEffect } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { cantidadCaracteres, cantidadCaracteresAdmin } from './helpers';

const Login = () => {
    const [administrador, setAdministrador] = useState('');
    const [clave, setClave] = useState('');
    const [msjError, setMsjError] = useState(false);
    const [caracterInvalid,setCaracterInvalid] = useState(false);
    const [datosAdmin, setDatosAdmin] = useState([]);

    const URL = process.env.REACT_APP_API_ADMINISTRADORES;

    const navegacion = useNavigate();

    useEffect(() => {
        consultarAPI();
    }, []);

    const consultarAPI = async () => {
        try {
            const respuesta = await fetch(URL);
            const obtenerAdministrador = await respuesta.json();
            setDatosAdmin(obtenerAdministrador);
        } catch (error) {
            console.log(error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
         const Usuarios = datosAdmin.find((element) => element.administrador === administrador)
        if (
            cantidadCaracteresAdmin(administrador, 1) &&
            cantidadCaracteresAdmin(clave, 1)
        ) {
            try {
                    setCaracterInvalid(false);
                if (
                    Usuarios !== undefined &&
                    Usuarios.administrador === administrador &&
                    Usuarios.claveadmin === clave
                ) {
                    navegacion('/administrar');
                } else {
                    setMsjError(true);
                }
            } catch (error) {
                console.log(error);
            }
        } else {
            setCaracterInvalid(true);
        }
        
    };

    return (
        <div>
            <Card className="container ms-auto me-auto my-5 bg-light border rounded px-0">
                <div className="bg-brown rounded py-2">
                    <h1 className="fs-4 fw-light text-center text-light">
                        Bienvenido Administrador
                    </h1>
                </div>
                <Form className="m-3" onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formAdmin">
                        <Form.Label>Nombre Administrador*</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ej: Admin"
                            onChange={(e) => setAdministrador(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formClave">
                        <Form.Label>Contraseña*</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ej: 1234admin"
                            onChange={(e) => setClave(e.target.value)}
                        />
                    </Form.Group>

                    <Button variant="outline-dark" type="submit">
                        Ingresar
                    </Button>
                </Form>
                {msjError ? (
                    <Alert variant="danger" className=" mx-3">
                        El usuario o contraseña ingresada no es correcta!
                    </Alert>
                ) : null}
                {caracterInvalid ? (
                    <Alert variant="danger" className=" mx-3">
                        contraseña o usuario no ingresado!
                    </Alert>
                ) : null}
            </Card>
        </div>
    );
};

export default Login;
