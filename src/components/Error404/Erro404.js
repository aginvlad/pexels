import React from 'react';
import Menu from '../Menu/Menu';
import './Error404.sass';

const error404 = () => {
    return(
        <>
            <Menu />
            <div className="error-404">
                <h1 className="error-404__title">404</h1>
                <h2 className="error-404__subtitle">Ouch, something went wrong!</h2>
            </div>
        </>
    );
};

export default error404;