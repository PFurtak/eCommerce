import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { selectCartItemCount } from '../../redux/cart/cart.selectors';
import { connect } from 'react-redux';
import { toggleCartHide } from '../../redux/cart/cart.actions';

import './CartIcon.style.scss';

const CartIcon = ({ toggleCartHide, itemCount }) => {
  return (
    <div className='cart-icon' onClick={toggleCartHide}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{itemCount}</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHide: () => dispatch(toggleCartHide()),
});

const mapStateToProps = (state) => ({
  itemCount: selectCartItemCount(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
