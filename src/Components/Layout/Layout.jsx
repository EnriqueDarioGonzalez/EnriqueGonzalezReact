import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import CartWidget from '../common/CartWidget';
const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <main>{children}</main>
      <CartWidget />
      <Footer />
    </div>
  );
};

export default Layout;