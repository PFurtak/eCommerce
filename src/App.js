import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/pages/homepage/Home';
import Shop from './components/pages/shoppage/Shop';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/shop' component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
