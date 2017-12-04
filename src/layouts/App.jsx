import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { routes } from '../router.config';
import * as pages from '../pages';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {routes.map(route => (
            <Route path={route.path} render={props => (
              <route.component {...props} routes={route.routes} />
            )}></Route>
          ))}
        </Switch>
      </Router>
    )
  }
}
