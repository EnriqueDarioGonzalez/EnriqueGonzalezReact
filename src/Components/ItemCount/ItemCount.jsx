import React, { useState } from "react";
import { Button } from "react-bootstrap";

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
         <Button className="btn btn-dark" onClick={restar}>-</Button>
         <span>{count}</span>
         <Button className="btn btn-dark" onClick={sumar}>+</Button>
         </div>
         <Button className="btn btn-dark" disabled={count === 0} onClick={()=>onAdd(count) }>Comprar</Button>
        </div>
    )
}


export default ItemCount;