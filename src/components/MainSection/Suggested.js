import React from 'react';
import { NavLink } from 'react-router-dom';

import './Suggested.sass';

const suggested = (props) => {
    return (
        <div className="suggested">
            <span>Suggested</span>
            <ul className="suggested-container">
                {props.links.map(el => {
                    return(
                        <li className="suggested-container__item">
                            <NavLink to={`/search/${el}`} activeClassName="suggested-container__item__tag">{el}</NavLink>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default suggested;