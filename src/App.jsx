import React from 'react';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Home from './pages/home';
import Contact from './pages/contact';
import Nosotros from './pages/nosotros';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Detail from './pages/Detail';
import Cart from './pages/cart'


function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/home" element={<Home />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/nosotros" element={<Nosotros />}/>
      <Route path="/carrito" element={<Cart />}/>
      <Route path="/products/:nombre" element={<Detail />}/>
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;