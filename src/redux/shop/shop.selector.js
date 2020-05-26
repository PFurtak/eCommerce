import { createSelector } from 'reselect';

const CATEGORY_ID_MAP = {
  hats: 1,
  sneaker: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
};

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCategory = (categoryUrlParam) =>
  createSelector([selectCollections], (collections) =>
    collections.find(
      (collection) => collection.id === CATEGORY_ID_MAP[categoryUrlParam]
    )
  );
