import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsPreview } from '../../redux/shop/shop.selector';

import Collection from '../collection/Collection';
import './CollectionsOverview.style.scss';

const CollectionsOverview = ({ collections }) => {
  return (
    <div className='collections-overview'>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <Collection key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
