import React from 'react';
import { connect } from 'react-redux';
import CartItem from '../cart-item/CartItem';

import CustomButton from '../custom-button/CustomButton';

import './CartWindow.style.scss';

const CartWindow = ({ cartItems }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>Checkout</CustomButton>
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToProps)(CartWindow);
