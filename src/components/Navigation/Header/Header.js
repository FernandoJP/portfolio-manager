import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    toolbar: {
      minHeight: 128,
      alignItems: 'flex-start',
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(2),
      zIndex: -1
    },
    title: {
      flexGrow: 1,
      alignSelf: 'flex-end',
    },
  }));

function Header(props) {

    const classes = useStyles();

    return (
        <Toolbar className={classes.toolbar}>
            <Typography variant="h6" noWrap>
                Persistent drawer
            </Typography>
        </Toolbar>
    )
}


export default Header;