import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Productos from "../Item/Item";

const ItemCount = ({ stock , onAdd , initial }) => {

    const [ count, setCount ] = useState (initial)
    const sumar = () => {
        if(count < stock ){
        setCount(count + 1)
    }
    }

    const restar = () => {
        if(count > 0) {
        setCount(count - 1)
    }
    }
    return (
        <div>
            <div>
         <Button onClick={restar}>-</Button>
         <span>{count}</span>
         <Button onClick={sumar}>+</Button>
         </div>
         <Button disabled={count === 0} onClick={()=>onAdd(count)}>Comprar</Button>
        </div>
    )
}


export default ItemCount;