import React,{useEffect, useState} from 'react';
import ItemList from '../ItemList/ItemList'
import { getProducts } from '../../mock/products';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {
  const [products, setProductos]= useState ([])
  const {categoriaId}= useParams()
  useEffect(()=>{
    getProducts()
    .then((res)=>{
      if(categoriaId){
        setProductos(res.filter((i)=> i.categoria === categoriaId))
      }else{
        setProductos(res)
      }
    })
    .catch((error)=> console.log(error))
  },[categoriaId])


  return (
    <div className="item-list-container">
      <h2 className="greeting">{greeting} <span>{categoriaId && categoriaId}</span></h2>
      <ItemList items={products} />
    </div>
  );
};

export default ItemListContainer;