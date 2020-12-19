import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import './Box.css';

const useStyles = makeStyles((theme) => ({
    titleText: {

    }
}));

function Box(props) {
    const classes = useStyles();

    return (
        <div>
            <div class="fieldset">
                <div class="legend">
                    <Typography component="h2" className={classes.titleText}>
                        {props.title}
                    </Typography>
                </div>
                {props.children}
            </div>
        </div>
    )
}

export default Box;