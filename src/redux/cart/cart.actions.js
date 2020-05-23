import { CartActionTypes } from './cart.types';

export const toggleCartHide = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDE,
});

export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});

export const decreaseItem = (item) => ({
  type: CartActionTypes.DECREASE_ITEM,
  payload: item,
});

export const removeItem = (item) => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item,
});
