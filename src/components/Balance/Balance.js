import { Typography } from '@material-ui/core';
import React, { Component } from 'react';

import CardUI from '../UI/Card/Card';

class Balance extends Component {
    render() {
        return (
            <CardUI title="Balance">
                <Typography variant="h5" component="h2">
                    teste
                </Typography>
                <Typography color="textSecondary">
                    adjective
                </Typography>
                <Typography variant="body2" component="p">
                    well meaning and kindly.
                <br />
                    {'"a benevolent smile"'}
                </Typography>
            </CardUI>
        )
    }
}

export default Balance;