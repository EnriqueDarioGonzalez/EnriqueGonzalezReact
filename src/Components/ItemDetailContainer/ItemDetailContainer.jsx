import React,{useEffect, useState} from "react";
import Detail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { db } from "../firebase/firebase";
import { collection, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
    const [ products , setProducto] = useState({})
    const { id } = useParams()
    useEffect(()=>{
        const collectionProd = collection(db, 'articulos')
        const referenciaAlDoc = doc(collectionProd, id)
        getDoc(referenciaAlDoc)
        .then((res)=> setProducto({id:res.id, ...res.data()}))
        .catch((error)=> console.log(error))
    },[])
    return(
        <div>
            <Detail products={products}/>
        </div>
    )
}

export default ItemDetailContainer;