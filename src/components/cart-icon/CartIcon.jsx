import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { toggleCartHide } from '../../redux/cart/cart.actions';

import './CartIcon.style.scss';

const CartIcon = ({ toggleCartHide }) => {
  return (
    <div className='cart-icon' onClick={toggleCartHide}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>0</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHide: () => dispatch(toggleCartHide()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
