import React, { useState } from 'react';

function ContactForm() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Nombre:', nombre);
    console.log('Correo:', correo);
    console.log('Mensaje:', mensaje);
    setNombre('');
    setCorreo('');
    setMensaje('');
  };

  return (
    <div className="container">
      <h2>Formulario de Contacto</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre:</label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="correo" className="form-label">Correo Electrónico:</label>
          <input
            type="email"
            className="form-control"
            id="correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="mensaje" className="form-label">Mensaje:</label>
          <textarea
            className="form-control"
            id="mensaje"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            rows="4"
            required
          />
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-primary">Enviar</button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;