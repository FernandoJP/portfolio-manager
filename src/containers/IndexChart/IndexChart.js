import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import NoteAddIcon from '@material-ui/icons/NoteAdd';

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
                <CardUI name="New investment data" variant="2" icon={NoteAddIcon} className={classes.card}>
                    <p>Index chart page.</p>
                    <CandlesticksChart />
                </CardUI>
            </div>
        )
    }
}

export default withStyles(useStyles)(IndexChart);