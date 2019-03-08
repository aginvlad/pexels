import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'; 

import HomePage from './HomePage';
import Category from './Category';
import Aux from '../hoc/Aux';

class App extends Component {
  render() {
    return (
        <Aux>
          <Switch>
            <Route path="/" exact component={HomePage} location={{ pathname: '/' }} />
            <Route path="/search" exact component={HomePage} />
            <Route path="/search/:query" component={ props => <Category {...props} />}  location={{ pathname: '/search/:query' }}/>
          </Switch>
        </Aux>
    );
  }
}

export default App;
