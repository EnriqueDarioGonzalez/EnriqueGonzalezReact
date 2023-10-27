import React from 'react';
import CartWidget from '../common/CartWidget';
import { NavLink } from "react-router-dom";
import { NavDropdown } from 'react-bootstrap';

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
            <NavDropdown title="Articulos" id="basic-nav-dropdown">Articulos
            <NavDropdown.Item as={NavLink} to='/articulos'>Todos</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to='/articulos/Hombre'>Hombres</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to='/articulos/Niño'>Niños</NavDropdown.Item>
            </NavDropdown>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact">Contacto</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/nosotros">Nosotros</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/cart">Carrito</NavLink>
          </li>
        </ul>
      </div>
            <div>
            <NavLink style={{textDecoration:'none'}} to='/cart'><CartWidget /></NavLink>
            </div>
    </nav>
  );
};

export default NavBar;