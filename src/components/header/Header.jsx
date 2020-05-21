import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';

import './Header.style.scss';
import { ReactComponent as Logo } from '../../assets/crwn.svg';
import CartIcon from '../cart-icon/CartIcon';
import CartWindow from '../cart-window/CartWindow';

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
        <div className='option' onClick={() => auth.signOut()}>
          Sign Out
        </div>
      ) : (
        <Link className='option' to='/signin'>
          Sign In
        </Link>
      )}
      <CartIcon />
    </div>
    <CartWindow />
  </div>
);

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
