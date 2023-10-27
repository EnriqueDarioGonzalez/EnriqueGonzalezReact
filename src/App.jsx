import React, {useEffect} from 'react';
import NavBar from './Components/Layout/NavBar';
import Footer from './Components/Layout/Footer';
import ContactForm from './pages/contact';
import Nosotros from './pages/nosotros';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './Components/cart/Cart';
import ItemListContainer from './Components/containers/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import Checkout from './Components/Checkout/Checkout';


function App() {
  return (
    <CartProvider>
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<ItemListContainer />}/>
      <Route path="/articulos" element={<ItemListContainer />}/>
      <Route path="/contact" element={<ContactForm />}/>
      <Route path="/nosotros" element={<Nosotros />}/>
      <Route path="/cart" element={<Cart />}/>
      <Route path="/articulos/:categoriaId" element={<ItemListContainer greeting='Bienvenido a la Categoria:'/>}/>
      <Route path="/articulo/:id" element={<ItemDetailContainer />}/>
      <Route path="/checkout" element={<Checkout/>}/>
    </Routes>
    <Footer />
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;