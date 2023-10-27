import { useNavigate, Link } from "react-router-dom";
import { Card , Button, Container} from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";
import { useState , useContext} from "react";
import { CartContext } from "../../context/CartContext";


const Detail = ({products}) => {
    const [quantityAdded, setQuantityAdded] = useState('')
    const {addItem} = useContext(CartContext)
    const onAdd = (cantidad) => {
        console.log(`Compraste ${cantidad} productos`)
        setQuantityAdded(cantidad)
        addItem(products, cantidad)
    }
     const navigate = useNavigate();
    return (
        <Container>
        <h1>Detalles de {products.nombre}</h1>
        <Card>
      <img src={products.thumbnail} width={'250rem'} alt="imagen"/>
      <Card.Body>
        <Card.Title>
            {products.nombre}
        </Card.Title>
        <Card>
            <ul>
                {/* <li>ID: {products.id}</li> */}
                <li>Nombre: {products.nombre}</li>
                <li>Precio: {products.precio}</li>
                <li>Descripcion: {products.descripcion}</li>
                <li>Categoria: {products.categoria}</li>
                <li>Stock: {products.stock}</li>
            </ul>
        </Card>
        { quantityAdded === '' ? <ItemCount initial={1} stock={products.stock} onAdd={onAdd} />
        : <Link to='/cart' className="btn btn-dark">Llevar al Carrito</Link> }
        <Button variant="primary" className="btn btn-dark" onClick={() => navigate (-1)}> Volver </Button>
      </Card.Body>
    </Card>
        </Container>
    );
};

export default Detail;