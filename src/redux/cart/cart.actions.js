import { CartActionTypes } from './cart.types';

export const toggleCartHide = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDE,
});

export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});
