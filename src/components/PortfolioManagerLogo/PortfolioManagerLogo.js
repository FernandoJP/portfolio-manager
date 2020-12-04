import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core';

import logo from '../../assets/img/portfolio-manager-icon.png';

const useStyles = makeStyles((theme) => ({
    
    root: {
        display: 'flex',
        alignItems: 'center'
    },
    logoImg: {
        height: '2.0rem'
    },
    logoText: {
        fontFamily: 'Lucida Sans Unicode',
        padding: 4,
    },
    logoTextFirst: {
        color: theme.palette.primary.main,
        fontWeight: 'light'
    },
    logoTextSecond: {
        color: theme.palette.secondary.main,
        fontWeight: 'bold',
        textShadow: '0px 1px 0 #358638'
    }
}));

function PortfolioManagerLogo(props) {

    const classes = useStyles();

    const theme = useTheme();

    console.log(theme);

    return (
        <div className={classes.root}>
            <img src={logo} alt="Portfolio manager logo" className={classes.logoImg} />
            <span className={classes.logoText}>
                <span className={classes.logoTextFirst}>Portfolio</span>
                <span className={classes.logoTextSecond}>Manager</span>
            </span>
        </div>
    )
}


export default PortfolioManagerLogo;