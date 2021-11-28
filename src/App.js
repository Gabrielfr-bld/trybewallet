import React from 'react';
import { Route, Switch } from 'react-router';
import Login from './pages/Login';
import Wallet from './pages/Wallet';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/carteira" component={ Wallet } />
      </Switch>
    </div>);
}

export default App;
