import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import ComparatorCard from '../../components/ComparatorCard/ComparatorCard';
import ReturnChart from '../../components/ReturnChart/ReturnChart';
import CardUI from '../../components/UI/Card/CardUI';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';

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

  render() {
    const { classes } = this.props;

    return (
      <div>
        <section className={classes.cardsSection}>
          <ComparatorCard type={cardComparators.ibov} indexPercentage={1.25} profitabilityPercentage={0.45} />
          <ComparatorCard type={cardComparators.ifix} indexPercentage={-0.40} profitabilityPercentage={2.20} />
          <ComparatorCard type={cardComparators.sp500} indexPercentage={1.9} profitabilityPercentage={-0.1} />
          <ComparatorCard type={cardComparators.reit} indexPercentage={-0.10} profitabilityPercentage={1.80} />
        </section>
          
        <section>
        <CardUI name="Returns graph" variant="2" icon={TrendingUpIcon}>
          <ReturnChart />
        </CardUI>
        </section>
      </div>
    )
  }
}

export default withStyles(useStyles)(PortfolioManager)
