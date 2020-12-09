import React, { Component } from 'react';
import { Route, Switch, Redirect, BrowserRouter, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';
import PortfolioManager from './containers/PortfolioManager/PortfolioManager';
import Layout from './hoc/Layout/Layout';
import NewInvestmentData from './containers/NewInvestmentData/NewInvestmentData';

class App extends Component {

  render() {
    let routes = (
        <Switch>
          <Route path="/new-investment-data" component={NewInvestmentData} />
          <Route path="/" exact component={PortfolioManager} />
          <Redirect to="/" />
        </Switch>
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

