import { useNavigate } from "react-router-dom";
import { Card , Button, Container} from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";


const Detail = ({products}) => {
    const onAdd = (cantidad) => {
        console.log(`Compraste ${cantidad} productos`)
    }
     const navigate = useNavigate();
    return (
        <Container>
        <h1>Detalles de {products.nombre}</h1>
        <Card>
      <Card.Img variant="top" src={products.thumbnail}/>
      <Card.Body>
        <Card.Title>
            {products.nombre}
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
        <ItemCount initial={1} stock={10} onAdd={onAdd} />
        <Button variant="primary" onClick={() => navigate (-1)}> Volver </Button>
      </Card.Body>
    </Card>
        </Container>
    );
};

export default Detail;