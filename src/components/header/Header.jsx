import React from 'react';
import { Link } from 'react-router-dom';

import './Header.style.scss';
import { ReactComponent as Logo } from '../../assets/crwn.svg';

const Header = () => (
  <div className='header'>
    <Link to='/' className='logo-container'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        Shop
      </Link>
      <Link className='option' to='/contact'>
        Contact
      </Link>
    </div>
  </div>
);

export default Header;
