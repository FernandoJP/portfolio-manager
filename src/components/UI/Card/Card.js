import React, { Component } from 'react';
import { Card, CardContent, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

function CardUI(props) {

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
                {props.title}
                </Typography>
            <CardContent>
                {props.children}
            </CardContent>
        </Card>
    )
}

export default CardUI;