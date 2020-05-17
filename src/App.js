import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/pages/homepage/Home';
import Shop from './components/pages/shoppage/Shop';
import Header from './components/header/Header';
import SignInAndSignUpPage from './components/pages/auth/SignInAndSignUp';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/shop' component={Shop} />
        <Route path='/signin' component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
