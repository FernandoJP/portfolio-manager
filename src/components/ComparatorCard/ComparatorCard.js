import { withStyles } from '@material-ui/core';
import React, { Component } from 'react';

import CardUI from '../UI/Card/CardUI';
import ibovBgImg from '../../assets/img/br-flag.jpg';
import sp500BgImg from '../../assets/img/us-flag.jpg';
import ifixBgImg from '../../assets/img/fiis.jpg';
import reitsBgImg from '../../assets/img/reits.jpg';

const useStyles = theme => ({

});

const comparatorData = [
    { name: 'IBOV', description: 'iBovespa', image: ibovBgImg },
    { name: 'S&P 500', description: 'S&P 500', image: sp500BgImg },
    { name: 'IFIX', description: 'Fundos Imobiliários', image: ifixBgImg },
    { name: 'REITs', description: 'FTSE Nareit All REITs', image: reitsBgImg },
]

class ComparatorCard extends Component {
    render() {
        const { classes } = this.props;
        const comparator = comparatorData.find(c => c.name === this.props.type);
        console.log({comparator});
        return (
            <CardUI 
                name={comparator.name} 
                description={comparator.description} 
                image={comparator.image} 
                variant="1" 
                indexPercentage={this.props.indexPercentage} 
                profitabilityPercentage={this.props.profitabilityPercentage}
             />
        )
    }
}

export default withStyles(useStyles)(ComparatorCard)