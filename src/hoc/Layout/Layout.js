import { makeStyles, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import clsx from 'clsx';

const useStyles = theme => ({
    root: {
        display: 'flex',
    }
});

const theme = createMuiTheme({
    palette: {
        primary: {
            // main: 'rgb(76,175,80)'
            // main: '#1DD925'
            //main: 'rgb(175,17,11)'
            main: '#85C4E9'
        },
        secondary: {
             main: '#4CAF4E'
        }
    }
});

class Layout extends Component {

    render() {
        const { classes } = this.props;

        return (
            <MuiThemeProvider theme={theme}>
                <div className={classes.root}>
                    <SideDrawer>
                        {this.props.children}
                    </SideDrawer>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default withStyles(useStyles)(Layout)