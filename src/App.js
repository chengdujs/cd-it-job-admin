import React, { Component, PropTypes } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import {
  Login,
  Main
} from './pages';

export class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Main}>
            {/*<Route path="" component={Login} />*/}
          </Route>
        </div>
      </Router>
    );
  }
}
