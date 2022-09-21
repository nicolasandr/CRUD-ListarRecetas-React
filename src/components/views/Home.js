import React, { useState, useEffect } from 'react';
import CardReceta from './receta/CardReceta';

const Home = () => {
    const [listaRecetas, setListaRecetas] = useState([]);
    const URL = process.env.REACT_APP_API_RECETAS;

    useEffect(() => {
        consultarAPI();
    }, []);

    const consultarAPI = async () => {
        try {
            const respuesta = await fetch(URL);
            const obtenerRecetas = await respuesta.json();
            setListaRecetas(obtenerRecetas);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="container">
            <h1 className="display-4 mt-5 text-center">
                Conocé todas nuestras recetas
            </h1>
            <hr />
            <div className="row mb-5">
                {listaRecetas.map((receta) => (
                    <CardReceta key={receta.id} receta={receta}></CardReceta>
                ))}
            </div>
        </div>
    );
};

export default Home;
