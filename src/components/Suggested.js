import React from 'react';

import './Suggested.sass';

const suggested = () => {
    return (
        <div className="suggested">
            <span>Suggested</span>
            <ul className="suggested-container">
                <li className="suggested-container__item">
                    <a className="suggested-container__item__tag">flower</a>
                </li>
                <li className="suggested-container__item">
                    <a className="suggested-container__item__tag">love</a>
                </li>
                <li className="suggested-container__item">
                    <a className="suggested-container__item__tag">art</a>
                </li>
                <li className="suggested-container__item">
                    <a className="suggested-container__item__tag">wood</a>
                </li>
                <li className="suggested-container__item">
                    <a className="suggested-container__item__tag">wall</a>
                </li>
                <li className="suggested-container__item">
                    <a className="suggested-container__item__tag">rose</a>
                </li>
                <li className="suggested-container__item">
                    <a className="suggested-container__item__tag">more</a>
                </li>
            </ul>
        </div>
    );
};

export default suggested;