import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import Flags from 'country-flag-icons/react/3x2'

import CardUI from '../../components/UI/Card/CardUI';
import CandlesticksChart from '../../components/UI/CandlesticksChart/CandlesticksChart';

const useStyles = theme => ({
    card: {
        width: '100%'
    }
});

class IndexChart extends Component {

    render() {
        const { classes } = this.props;

        return (
            <div>
                <CardUI name="IBOV chart" variant="2" icon={Flags.BR} 
                    iconStyle={{width: 35,height: 32,background:'#6DA544'}} className={classes.card}>
                    <CandlesticksChart />
                </CardUI>
            </div>
        )
    }
}

export default withStyles(useStyles)(IndexChart);