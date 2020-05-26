import React from 'react';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../collections-overview/CollectionsOverview';
import CategoryPage from '../category/Category';

const Shop = ({ match }) => {
  return (
    <div className='shop-page'>
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:categoryId`} component={CategoryPage} />
    </div>
  );
};

export default Shop;
