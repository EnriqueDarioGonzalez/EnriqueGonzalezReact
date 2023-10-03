import React from 'react';
import CartWidget from '../Components/common/CartWidget';
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink className="navbar-brand" href="/">Candila Store</NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
        <li className="nav-item">
            <NavLink className="nav-link" to="/home">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact">Contacto</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/nosotros">Nosotros</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/carrito">Carrito</NavLink>
          </li>
        </ul>
      </div>
            <div>
            <CartWidget />
            </div>
    </nav>
  );
};

export default NavBar;