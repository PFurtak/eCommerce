import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';

import './Header.style.scss';
import { ReactComponent as Logo } from '../../assets/crwn.svg';

const Header = ({ currentUser }) => (
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
      {currentUser ? (
        <Link clasName='option' onClick={() => auth.signOut()}>
          Sign Out
        </Link>
      ) : (
        <Link className='option' to='/signin'>
          Sign In
        </Link>
      )}
    </div>
  </div>
);

export default Header;
