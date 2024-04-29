import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';

import './Navbar.scss';

function Navbar() {
  const {} = useContext(AppContext);
  return (
    <nav className="nav-container">
      <h1 className="h1">
        <NavLink to="./">PirikupApp</NavLink>
      </h1>
      <img
        className="nav-img"
        src="https://cdn.pixabay.com/photo/2013/07/12/12/56/ford-mustang-146580_1280.png"
        alt=""
      />
      <ul>
        <li>
          <NavLink to="/aboutUs">About us</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
