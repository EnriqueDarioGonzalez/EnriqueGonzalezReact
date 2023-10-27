import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartItem = ({item}) => {
    const {deleteItem} = useContext(CartContext)
  return (
    <div className='d-flex justify-content-around align-items-center'>
        <img src={item.thumbnail} alt={item.name}/>
        <p>{item.nombre}</p>
        <p>${item.precio}</p>
        <p>{item.quantity}</p>
        <p>SubTotal: ${item.quantity * item.precio}</p>
        <button className='btn btn-danger' onClick={()=>deleteItem(item.id)}> X </button>
    </div>
  )
}

export default CartItem