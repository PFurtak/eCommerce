import React from 'react';
import './menu-item.style.scss';

const MenuItem = ({ title, imageUrl, size }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
      className={`${size} menu-item`}>
      <div className='content'>
        <h1 className='title'>{title}</h1>
        <span className='subtitle'>Shop now</span>
      </div>
    </div>
  );
};

export default MenuItem;
