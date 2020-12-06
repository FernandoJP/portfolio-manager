import React, { Component } from 'react';
import { fade, makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';

const useStyles = theme => ({
    headerButtons: {
        position: 'absolute',
        right: 20,
    }
});

class HeaderButtons extends Component {

    state = {
        anchorEl: null,
        isOpen: false
    }

    render() {
        const { classes } = this.props;

        const handleProfileMenuOpen = (event) => {
            this.setState({ anchorEl: event.currentTarget });
            this.setState({ isOpen: true });
        };

        const handleMenuClose = () => {
            this.setState({ anchorEl: null });
            this.setState({ isOpen: false });
        };

        const menuId = 'primary-search-account-menu';

        const renderMenu = (
            <Menu
                anchorEl={this.state.anchorEl}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                id={menuId}
                keepMounted
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={this.state.isOpen}
                onClose={handleMenuClose}
            >
                <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                <MenuItem onClick={handleMenuClose}>My account</MenuItem>
            </Menu>
        );

        return (
            <div>
                <div className={classes.headerButtons}>
                    <IconButton color="inherit">
                        <Badge badgeContent={13} color="primary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    <IconButton
                        edge="end"
                        aria-label="account of current user"
                        aria-haspopup="true"
                        onClick={handleProfileMenuOpen}
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                </div>
                {renderMenu}
            </div>
        );
    }
}

export default withStyles(useStyles, { withTheme: true })(HeaderButtons);
