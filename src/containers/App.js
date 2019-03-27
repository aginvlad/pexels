import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './HomePage';
import Category from './Category';
import Error404 from '../components/Error404/Erro404';

class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route
            path="/"
            exact
            component={HomePage}
            location={{ pathname: '/' }}
          />
          <Route path="/search" exact component={HomePage} />
          <Route
            path="/search/:query"
            component={props => <Category {...props} />}
            location={{ pathname: '/search/:query' }}
          />
          <Route component={Error404}/>
        </Switch>
      </>
    );
  }
}

export default App;
