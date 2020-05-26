import { createSelector } from 'reselect';

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCategory = (categoryUrlParam) =>
  createSelector(
    [selectCollections],
    (collections) => collections[categoryUrlParam]
  );
