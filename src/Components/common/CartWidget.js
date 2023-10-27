import React, { useContext } from 'react';
import { BiCart } from 'react-icons/bi';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
  const {cartQuantity} = useContext(CartContext)
  return (
    <div className='border-box'><div className="cart-widget" >
      <BiCart size={24} color='black'/>
    </div>
    {cartQuantity() > 0 && <span className="badge text-bg-secondary">{cartQuantity()}</span>}
    </div>
  );
};

export default CartWidget;