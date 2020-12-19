import React, { Component } from 'react';
import { Card, CardContent, makeStyles, Typography } from '@material-ui/core';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import classNames from 'classnames';

import './CardUI.css';

const colors = [
    { name: 'IBOV', cardColor: 'rgba(102,187,106,0.8)', bottomBgColor: '#4caf50', bottomBorderColor: '#359B39' },
    { name: 'S&P 500', cardColor: 'rgba(255,82,82,0.8)', bottomBgColor: '#FA3838', bottomBorderColor: '#DB3030' },
    { name: 'IFIX', cardColor: 'rgba(4,126,210,0.8)', bottomBgColor: '#00ACC1', bottomBorderColor: '#078EA0' },
    { name: 'REITs', cardColor: 'rgba(255,167,39,0.8)', bottomBgColor: '#FE9701', bottomBorderColor: '#DA860B' },
]

const useStyles = makeStyles((theme) => ({
    //variant 1
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    variant1Title: {
        fontSize: 16,
        paddingTop: theme.spacing(1),
        color: '#fff',
        fontFamily: 'Muli Extra Light, sans-serif',
    },
    pos: {
        marginBottom: 12,
    },
    cardBgImg: {
        height: '100%',
        width: '100%',
    },
    middleCard: {
        fontSize: 30,
        fontFamily: 'Muli Bold, sans-serif',
        padding: theme.spacing(1),
        color: '#fff'
    },
    earningStatusIcon: {
        display: 'flex',
        alignSelf: 'center',
        fontSize: 24,
    },
    bottomCard: {
        background: '#4caf50',
        fontSize: 14,
        padding: theme.spacing(1),
        fontFamily: 'Muli, sans-serif',
        border: '1px solid',
        color: '#fff'
    },
    center: {
        display: 'flex',
        justifyContent: 'center'
    },

    //variant 2
    root: {
        marginTop: theme.spacing(2)
    },
    icon: {
        borderRadius: '50%',
        background: '#85c4e9',
        color: '#fff',
        padding: 3,
        fontSize: 28,
    },
    variant2Title: {
        fontSize: 16,
        display: 'flex',
        paddingTop: theme.spacing(1),
    },
    titleText: {
        marginLeft: theme.spacing(1),
        paddingTop: 0,
        color: 'color: rgba(0, 0, 0, 0.87)',
        fontFamily: 'Muli Light, sans-serif',
        fontSize: '1.1rem'
    }
}));

function CardUI(props) {

    const classes = useStyles();
    const currentColor = colors.find(c => c.name === props.name);

    switch (props.variant) {
        case '1':
            return (
                <Card className="CardUI" style={{ backgroundImage: 'url(' + props.image + ')' }}>
                    <div className={classes.cardBgImg} style={{ background: currentColor.cardColor }}>
                        <Typography className={classNames(classes.variant1Title, classes.center)} color="textSecondary" gutterBottom>
                            {props.description}
                        </Typography>
                        <CardContent>
                            <Typography variant="h5" component="h2" className={classNames(classes.middleCard, classes.center)}>
                                {props.indexPercentage >= 0 ? <ExpandLessIcon className={classes.earningStatusIcon} /> : <ExpandMoreIcon className={classes.earningStatusIcon} /> }
                                {props.indexPercentage}
                            </Typography>
                        </CardContent>
                        <Typography variant="body2" component="p" className={classNames(classes.bottomCard, classes.center)}
                            style={{ background: currentColor.bottomBgColor, borderColor: currentColor.bottomBorderColor }} >
                            {props.profitabilityPercentage} {props.profitabilityPercentage >= 0 ? 'above' : 'bellow'} {props.name}
                        </Typography>
                    </div>
                </Card>
            )
        case '2':
            return (
                <Card className={classes.root} variant="outlined">
                    <CardContent>
                        <Typography className={classes.variant2Title} color="textPrimary" gutterBottom>
                            <props.icon className={classes.icon} style={props.iconStyle} icon={props.fontAwesomeIcon}></props.icon>
                            <Typography component="h1" className={classes.titleText}> {props.name} </Typography>
                        </Typography>
                        {props.children}
                    </CardContent>
                </Card>
            )
        default:
            throw 'Invalid variant prop value';
    }

}

export default CardUI;