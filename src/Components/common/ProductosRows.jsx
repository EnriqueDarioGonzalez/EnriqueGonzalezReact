import Productos from "../Item/Item";
import { Col , Row} from "react-bootstrap";

const ProductosGrid = ({ items }) => {

  return(
    <Row>
      {items.map((item) => {
            return (
              <Col md={3}>
              <Productos
              id={item.id}
              nombre={item.nombre}
              precio={item.precio}
              descripcion={item.descripcion}
              thumbnail={item.thumbnail}
              categoria={item.categoria}
              onClick={item.onClick}
              style={item.style}
              />
              </Col>
            );
          })}
    </Row>
    );
};

export default ProductosGrid;