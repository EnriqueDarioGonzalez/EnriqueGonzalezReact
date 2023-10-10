import React from 'react';
import NavBar from './Components/Layout/NavBar';
import Footer from './Components/Layout/Footer';
import Articulos from './Components/ItemList/ItemList';
import ContactForm from './pages/contact';
import Nosotros from './pages/nosotros';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Detail from './Components/ItemDetail/ItemDetail';
import Cart from './pages/cart'
import ItemListContainer from './Components/containers/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<ItemListContainer />}/>
      <Route path="/articulos" element={<ItemListContainer />}/>
      <Route path="/contact" element={<ContactForm />}/>
      <Route path="/nosotros" element={<Nosotros />}/>
      <Route path="/carrito" element={<Cart />}/>
      <Route path="/articulos/:categoriaId" element={<ItemListContainer greeting='Bienvenido a la Categoria:'/>}/>
      <Route path="/articulo/:id" element={<ItemDetailContainer />}/>
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;