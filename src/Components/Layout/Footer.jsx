import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="copyright">
          &copy; {new Date().getFullYear()} Tienda Candila. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;