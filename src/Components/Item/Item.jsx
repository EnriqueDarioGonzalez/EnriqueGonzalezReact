import {Card , Button} from "react-bootstrap";
import { Link } from "react-router-dom";


const Item = ({ id , nombre, precio, descripcion, categoria, thumbnail, style }) => {
    return (
        <Card className="mb-4">
        <Card.Img variant="top" src={thumbnail} style={style.thumbnail}/>
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text>
            <ul>
                <li>ID: {id}</li>
                <li>Nombre: {nombre}</li>
                <li>Precio: {precio}</li>
                <li>Descripcion: {descripcion}</li>
                <li>Categoria: {categoria}</li>
            </ul>
          </Card.Text>
          <Link to={`/articulo/${id}`} className="btn btn-primary">Info</Link>
        </Card.Body>
      </Card>
    );
};

export default Item;