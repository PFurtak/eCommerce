import React from 'react';

import { connect } from 'react-redux';
import { selectCategory } from '../../../redux/shop/shop.selector';

import CollectionItem from '../../collection-items/CollectionItems';

import './Category.style.scss';

const CategoryPage = ({ category }) => {
  console.log('category: ', category);
  return (
    <div className='category'>
      <h2>CATEGORY PAGE</h2>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  category: selectCategory(ownProps.match.params.categoryId)(state),
});

export default connect(mapStateToProps)(CategoryPage);
