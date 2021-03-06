import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchBox from '../SearchBox/SearchBox';
import './Menu.sass';

const menu = props => {
  const mode =
    props.mode === 'transparent'
      ? 'navigation navbar--transparent'
      : 'navigation navbar';

  return (
    <nav className={mode}>
      <div className="navigation__logo">
        <NavLink to="/" activeClassName="navigation__logo__link">
          <div className="navigation__logo__link__icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32px"
              height="32px"
              viewBox="0 0 32 32"
            >
              <path
                d="M2 0h28a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"
                fill="#05A081"
              />
              <path
                d="M13 21h3.863v-3.752h1.167a3.124 3.124 0 1 0 0-6.248H13v10zm5.863 2H11V9h7.03a5.124 5.124 0 0 1 .833 10.18V23z"
                fill="#fff"
              />
            </svg>
          </div>
          <div className="navigation__logo__link__title">Pexels</div>
        </NavLink>
      </div>
      <SearchBox
        initialQuery={props.initialQuery}
        useClass="searchbox searchbox--menu"
        color="#fff"
      />
    </nav>
  );
};

export default menu;
