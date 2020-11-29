import { makeStyles, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import clsx from 'clsx';

const useStyles = theme => ({
    root: {
        display: 'flex',
    }
});

class Layout extends Component {

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <SideDrawer>
                    {this.props.children}
                </SideDrawer>
            </div>
        )
    }
}

export default withStyles(useStyles)(Layout)