import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">Candila Store</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/contacto">Contacto</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/nosotros">Nosotros</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/articulos">Articulos</a>
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