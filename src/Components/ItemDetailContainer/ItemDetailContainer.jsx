import React,{useEffect, useState} from "react";
import { getItem } from "../../mock/products";
import Detail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [ products , setProducto] = useState({})
    const { id } = useParams()
    useEffect(()=>{
        getItem(id)
        .then((res)=>setProducto(res))
        .catch((error)=> console.log(error))
    },[])
    return(
        <div>
            <Detail products={products}/>
        </div>
    )
}

export default ItemDetailContainer;