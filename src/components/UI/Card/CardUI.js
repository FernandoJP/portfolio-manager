import React, { Component } from 'react';
import { Card, CardContent, makeStyles, Typography } from '@material-ui/core';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import classNames from 'classnames';

import css from './CardUI.css';

const colors = [
    { name: 'IBOV', cardColor: 'rgba(102,187,106,0.8)', bottomBgColor: '#4caf50', bottomBorderColor: '#359B39' },
    { name: 'S&P 500', cardColor: 'rgba(102,187,106,0.8)', bottomBgColor: '#4caf50', bottomBorderColor: '#359B39' },
    { name: 'IFIX', cardColor: 'rgba(102,187,106,0.8)', bottomBgColor: '#4caf50', bottomBorderColor: '#359B39' },
    { name: 'REITs', cardColor: 'rgba(102,187,106,0.8)', bottomBgColor: '#4caf50', bottomBorderColor: '#359B39' },
]

const useStyles = makeStyles((theme) => ({
    root: {

    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
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
    },
    earningStatusIcon: {
        display: 'flex',
        alignSelf: 'center',
    },
    bottomCard: {
        background: '#4caf50',
        fontSize: 14,
        padding: theme.spacing(1),
        fontFamily: 'Muli, sans-serif',
        border: '1px solid',
    },
    center: {
        display: 'flex',
        justifyContent: 'center'
    }
}));

function CardUI(props) {

    const classes = useStyles();
    console.log(css);
    const currentColor = colors.find(c => c.name === props.name);

    return (
        <Card className={css.CardUI} style={{ backgroundImage: 'url(' + props.image + ')' }}>
            <div className={classes.cardBgImg} style={{ background: currentColor.cardColor }}>
                <Typography className={classNames(classes.title, classes.center)} color="textSecondary" gutterBottom>
                    {props.description}
                </Typography>
                <CardContent>
                    <Typography variant="h5" component="h2" className={classNames(classes.middleCard, classes.center)}>
                        <ExpandLessIcon className={classes.earningStatusIcon} /> 2.00%
                    </Typography>
                </CardContent>
                <Typography variant="body2" component="p" className={classNames(classes.bottomCard, classes.center)} 
                    style={{ background: currentColor.bottomBgColor, borderColor: currentColor.bottomBorderColor }} >
                    1.00% above {props.name}
                </Typography>
            </div>
        </Card>
    )
}

export default CardUI;