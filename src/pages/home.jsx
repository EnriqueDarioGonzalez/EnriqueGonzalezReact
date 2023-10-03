import { useState } from "react";
import ProductosContainer from "../Components/containers/ProductosContainer";
import Products from "../data/products";
import { Container } from "react-bootstrap";


const Home = () => {
    const [selectedItems, setSelecteditems] = useState ([]);

    const estaFuncionando = (item) => {
        const newArray = [...selectedItems, item];
        setSelecteditems(newArray);
    };

    const productosWithOnClick = Products.map((Products) => {
        return {
            ...Products,
            onClick: function (id) {
                estaFuncionando(id);
        },
        style: {
            width: "100%",
            height: 263,
            objectFit: "cover",
        },
    };
});

return (
    <Container>
        <h1>Home</h1>
        <ul>
            {selectedItems.map((item) => {
                return <li key={item.id}>{JSON.stringify(item)}</li>;
            })}
        </ul>
        <ProductosContainer items={productosWithOnClick}/>
    </Container>
);
};

export default Home;