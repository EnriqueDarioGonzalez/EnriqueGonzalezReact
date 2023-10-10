import ProductosContainer from "../containers/ProductosContainer";
import { Container } from "react-bootstrap";


const Articulos = ({items}) => {
    const productos = items.map((productosfilter) => {
        return {
            ...productosfilter,
        style: {
            thumbnails: {
                width: "100%",
                height: 263,
                objectFit: "cover",
            },
        },
    };
});

return (
    <Container>
        <h1>Articulos</h1>
        <div>
        </div>
        <ProductosContainer items={productos}/>
    </Container>
);
};

export default Articulos;