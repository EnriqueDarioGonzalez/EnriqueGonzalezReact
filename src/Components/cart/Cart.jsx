import React,{useContext} from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import CartItem from '../CartItem/CartItem'

const Cart = () => {
const{cart, clear, totalPay} = useContext(CartContext)
  return (
    <div>
        {cart.length
        ? <div>
            {cart.map((item)=> <CartItem key={item.id} item={item}/>)}
            <p>Total a Pagar: ${totalPay()}</p>
            <div>
        <button className='btn btn-dark' onClick={clear}>Vaciar el Carrito</button>
        <Link className='btn btn-dark' to='/checkout'>Terminar Compra</Link>
        </div>
        </div>
        : <div>
            <h3>Tu Carrito Está Vacio</h3>
            <Link to='/' className='btn btn-dark'>Ir a Comprar</Link>
        </div>}
    </div>
  )
}

export default Cart