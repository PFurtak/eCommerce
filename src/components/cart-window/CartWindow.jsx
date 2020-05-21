import React from 'react';

import CustomButton from '../custom-button/CustomButton';

import './CartWindow.style.scss';

const CartWindow = () => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'></div>
      <CustomButton>Checkout</CustomButton>
    </div>
  );
};

export default CartWindow;
