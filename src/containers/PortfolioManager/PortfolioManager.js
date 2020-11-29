import React, { Component } from 'react';

import Balance from '../../components/Balance/Balance';

class PortfolioManager extends Component {

  componentDidMount() {
    console.log('inside PortfolioManager component');
  }

  render() {
    return (
      <div>
        <h1>Portfolio Manager</h1>
        <Balance />
      </div>
    )
  }
}

export default PortfolioManager;