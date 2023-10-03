import { useNavigate, useParams } from "react-router-dom";
import { Card , Button, Container} from "react-bootstrap";
import Products from "../data/products";


const Detail = () => {
    const { nombre } = useParams();
    const products = Products.find(i => i.nombre === nombre)
    const navigate = useNavigate();
    return (
        <Container>
        <h1>Detalles de {nombre}</h1>
        <Card>
      <Card.Img variant="top" src={products.thumbnail} />
      <Card.Body>
        <Card.Title>
            {products.name}
        </Card.Title>
        <Card.Text>
            <ul>
                <li>ID: {products.id}</li>
                <li>Nombre: {products.nombre}</li>
                <li>Precio: {products.precio}</li>
                <li>Descripcion: {products.descripcion}</li>
                <li>Categoria: {products.categoria}</li>
            </ul>
        </Card.Text>
        <Button variant="primary" onClick={() => navigate (-1)}> Volver </Button>
      </Card.Body>
    </Card>
        </Container>
    );
};

export default Detail;