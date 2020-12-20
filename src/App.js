import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import './App.css';
import PortfolioManager from './containers/PortfolioManager/PortfolioManager';
import Layout from './hoc/Layout/Layout';
import NewInvestmentData from './containers/NewInvestmentData/NewInvestmentData';
import UserProfileData from './containers/UserProfile/UserProfileData';
import IndexChart from './containers/IndexChart/IndexChart';

class App extends Component {

  render() {
    let routes = (
        <Switch>
          <Route path="/new-investment-data" component={NewInvestmentData} />
          <Route path="/indexes/:id" component={IndexChart} /> {/* id: ibov, ifix, sp500 or reits */}
          <Route path="/profile/my-profile" component={UserProfileData} />
          <Route path="/profile/edit" component={() => (<UserProfileData editMode={true} />)} />
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

