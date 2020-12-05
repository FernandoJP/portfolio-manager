import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import ComparatorCard from '../../components/ComparatorCard/ComparatorCard';

const useStyles = theme => ({
  root: {
    display: 'flex',
  },
  cardsSection: {
    display: 'flex'
  }
});

const cardComparators = {
  ibov: 'IBOV',
  ifix: 'IFIX',
  sp500: 'S&P 500',
  reit: 'REITs'
}

class PortfolioManager extends Component {

  componentDidMount() {
    console.log('inside PortfolioManager component');
  }
  //TODO fazer com redux, não usar mais state
  render() {
    const { classes } = this.props;

    return (
      <div>
        <section className={classes.cardsSection}>
          <ComparatorCard type={cardComparators.ibov} />
          <ComparatorCard type={cardComparators.ifix} />
          <ComparatorCard type={cardComparators.sp500} />
          <ComparatorCard type={cardComparators.reit} />
        </section>
      </div>
    )
  }
}

export default withStyles(useStyles)(PortfolioManager)
