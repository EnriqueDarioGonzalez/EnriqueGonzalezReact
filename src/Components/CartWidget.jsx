import React from 'react';
import { BiCart } from 'react-icons/bi';

const CartWidget = () => {
  return (
    <div className='border-box'><div className="cart-widget" >
      <BiCart size={24} />
    </div>
    <span className="badge text-bg-secondary">5</span>
    </div>
  );
};

export default CartWidget;