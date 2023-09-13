import React from 'react';
import NavBar from '../src/Components/NavBar';
import Footer from '../src/Components/Footer';
import ItemListContainer from '../src/Components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido a nuestra tienda en línea!" />
      <Footer />
    </div>
  );
}

export default App;