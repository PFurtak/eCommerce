import React from 'react';
import './home.style.scss';

const Home = () => {
  return (
    <div className='home-page'>
      <div className='directory-menu'>
        <div className='menu-item'>
          <div className='content'>
            <h1 className='title'>Hats</h1>
            <span className='subtitle'>Shop now</span>
          </div>
        </div>
        <div className='menu-item'>
          <div className='content'>
            <h1 className='title'>Jackets</h1>
            <span className='subtitle'>Shop now</span>
          </div>
        </div>
        <div className='menu-item'>
          <div className='content'>
            <h1 className='title'>Shoes</h1>
            <span className='subtitle'>Shop now</span>
          </div>
        </div>
        <div className='menu-item'>
          <div className='content'>
            <h1 className='title'>Womens</h1>
            <span className='subtitle'>Shop now</span>
          </div>
        </div>
        <div className='menu-item'>
          <div className='content'>
            <h1 className='title'>Mens</h1>
            <span className='subtitle'>Shop now</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
