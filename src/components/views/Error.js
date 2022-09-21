import React from 'react';
import Error404 from '../img/error404.webp'

const Error = () => {
    return (
        <div className="container d-flex justify-content-center my-5 ">
            <div>
                <img src={Error404} className="h-100" />
            </div>
        </div>
    );
};

export default Error;
