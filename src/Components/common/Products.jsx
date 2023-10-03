import {Card , Button} from "react-bootstrap";
import { Link } from "react-router-dom";


const Productos = ({ id , nombre, precio, descripcion, categoria, onClick, thumbnail , style}) => {
    return (
        <Card className="mb-4">
        <Card.Img variant="top" src={thumbnail} style={style.thumbnail}/>
        <Card.Body>
          <Card.Title>Articulo</Card.Title>
          <Card.Text>
            <ul>
                <li>ID: {id}</li>
                <li>Nombre: {nombre}</li>
                <li>Precio: {precio}</li>
                <li>Descripcion: {descripcion}</li>
                <li>Categoria: {categoria}</li>
            </ul>
          </Card.Text>
          <Link to={`/products/${nombre}`} className="btn btn-primary">Abrir </Link>
        </Card.Body>
      </Card>
    );
};

export default Productos;