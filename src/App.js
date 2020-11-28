import React, { Component } from 'react';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import { withRouter } from "react-router";

import './App.css';
import PortfolioManager from './containers/PortfolioManager/PortfolioManager';
import Layout from './hoc/Layout/Layout';

class App extends Component {

  render() {
    let routes = (
      <BrowserRouter>
        <Switch>
          <Route path="/teste" component={PortfolioManager} />
          <Route path="/" exact component={PortfolioManager} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    );

    return (
      <div>
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}

export default withRouter(App);

