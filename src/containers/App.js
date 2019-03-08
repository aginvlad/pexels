import React, { Component } from 'react';
import { Route } from 'react-router-dom'; 

import HomePage from './HomePage';
import Category from './Category';
import Aux from '../hoc/Aux';

class App extends Component {
  render() {
    return (
        <Aux>
          <Route path="/" exact component={HomePage} />
          <Route path="/search"  component={Category} />
        </Aux>
    );
  }
}

export default App;
