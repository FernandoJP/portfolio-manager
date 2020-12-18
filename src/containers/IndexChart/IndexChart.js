import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import Flags from 'country-flag-icons/react/3x2'

import CardUI from '../../components/UI/Card/CardUI';
import CandlesticksChart from '../../components/UI/CandlesticksChart/CandlesticksChart';
import { faBuilding, faWarehouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const useStyles = theme => ({
    card: {
        width: '100%'
    }
});

const indexesData = {
    ibov: {
        name: 'IBOV chart', 
        icon: Flags.BR, 
        iconStyle: {width: 35,height: 32,background:'#6DA544'}, 
        csvFileName: 'ibov.csv'
    },
    ifix: {
        name: 'IFIX chart', 
        icon: FontAwesomeIcon, 
        fontAwesomeIcon: faWarehouse, 
        iconStyle: {width: 35,height: 32,background:'#00ACC1'}, 
        csvFileName: 'KNCR11.csv'
    },
    sp500: {
        name: 'S&P 500 chart', 
        icon: Flags.US, 
        iconStyle: {width: 35,height: 32,background:'#FA3838'}, 
        csvFileName: '^GSPC.csv'
    },
    reits: {
        name: 'REITs chart', 
        icon: FontAwesomeIcon, 
        fontAwesomeIcon: faBuilding, 
        iconStyle: {width: 35,height: 32,background:'#FE9701'}, 
        csvFileName: 'FRI.csv'
    }
}

class IndexChart extends Component {

    render() {
        const { classes } = this.props;
        
        const indexData = indexesData[this.props.match.params.id];

        console.log(indexData);
        return (
            <div>
                <CardUI name={indexData.name} variant="2" icon={indexData.icon} 
                    iconStyle={indexData.iconStyle} className={classes.card} fontAwesomeIcon={indexData.fontAwesomeIcon}>
                    <CandlesticksChart csvFileName={indexData.csvFileName} />
                </CardUI>
            </div>
        )
    }
}

export default withStyles(useStyles)(IndexChart);