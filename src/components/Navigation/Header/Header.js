import React, { Component, PureComponent } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import { IconButton, makeStyles, Typography, withStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';

import SearchInput from '../../UI/SearchInput.js/SearchInput';

const useStyles = theme => ({
  toolbar: {
    minHeight: 158,
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    backgroundImage: 'radial-gradient( circle farthest-corner at 10% 20%, #a53394 0%, rgba(241,147,55,1) 53.4%, #44CC49 99.5% )',
    zIndex: -1
  },
  title: {
    flexGrow: 1,
    alignSelf: 'flex-end',
  },
});

class Header extends Component {

  render() {
    const { classes } = this.props;

    return (
      <Toolbar className={classes.toolbar}>
        {this.props.children}
        <SearchInput />
      </Toolbar>
    )
  }
}


export default withStyles(useStyles)(Header)