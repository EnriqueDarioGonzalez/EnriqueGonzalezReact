import React,{useEffect, useState} from 'react';
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/firebase';

const ItemListContainer = ({ greeting }) => {
  const [products, setProductos]= useState ([])
  const {categoriaId}= useParams()

    useEffect(()=>{
      const coleccionProductos = categoriaId ? query(collection(db, "articulos"), where("categoria", "==", categoriaId)):collection(db, "articulos")
      getDocs(coleccionProductos)
      .then((res)=>{
        const list = res.docs.map((product)=>{
          return{
            id:product.id,
            ...product.data()
          }
        })
        setProductos(list)
      })
      .catch((error)=>console.log(error))
},[categoriaId])


  return (
    <div className="item-list-container">
      <h2 className="greeting">{greeting} <span>{categoriaId && categoriaId}</span></h2>
      <ItemList items={products} />
    </div>
  );
};

export default ItemListContainer;