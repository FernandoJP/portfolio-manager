import React from 'react';
import { Collapse, List, ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import AssessmentIcon from '@material-ui/icons/Assessment';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileContract } from '@fortawesome/free-solid-svg-icons'
import { faBuilding } from '@fortawesome/free-solid-svg-icons'
import { faWarehouse } from '@fortawesome/free-solid-svg-icons'
import { faIdBadge } from '@fortawesome/free-solid-svg-icons'
import { faUserEdit } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import Flags from 'country-flag-icons/react/3x2'
import { NavLink, withRouter } from 'react-router-dom';

import './NavigationItems.css';

const useStyles = makeStyles((theme) => ({
    navigationIcon: {
        minWidth: 50,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
    navLink: {
        textDecoration: 'none',
        color: 'inherit'
    }
}));

const navigationList = [
    { name: 'My investment return', icon: <AssessmentIcon />, path: '/' },
    { name: 'New investment data', icon: <NoteAddIcon />, path: '/new-investment-data' },
    {
        name: 'Profile',
        icon: <FontAwesomeIcon icon={faUser} />,
        path: '/profile',
        submenu: [
            { name: 'My profile', icon: <FontAwesomeIcon icon={faIdBadge} />, path: 'my-profile' },
            { name: 'Edit profile', icon: <FontAwesomeIcon icon={faUserEdit} />, path: 'edit-profile' },
        ]
    },
    {
        name: 'Indexes',
        icon: <FontAwesomeIcon icon={faFileContract} />,
        path: '/indexes',
        submenu: [
            { name: 'IBOV', icon: <Flags.BR />, path: '/ibov' },
            { name: 'IFIX', icon: <FontAwesomeIcon icon={faWarehouse} style={{ fontSize: 16 }} />, path: '/ifix' },
            { name: 'S&P 500', icon: <Flags.US />, path: '/sp500' },
            { name: 'REITs', icon: <FontAwesomeIcon icon={faBuilding} style={{ fontSize: 18 }} />, path: '/reits' },
        ]
    },
]

function NavigationItems(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <List>
            {navigationList.map((navigation) => (
                <NavLink exact to={navigation.path} key={navigation.name} className={classes.navLink}>
                    <ListItem button onClick={() => navigation.submenu && handleClick()}>
                        <ListItemIcon className={classes.navigationIcon}>{navigation.icon}</ListItemIcon>
                        <ListItemText primary={navigation.name}></ListItemText>
                        {navigation.submenu ? open ? <ExpandLess /> : <ExpandMore /> : null}
                    </ListItem>
                    {navigation.submenu ?
                        navigation.submenu.map((submenuItem) => (
                            <Collapse in={open} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <NavLink exact to={navigation.path + submenuItem.path} className={classes.navLink}>
                                        <ListItem button className={classes.nested}>
                                            <ListItemIcon>
                                                {submenuItem.icon}
                                            </ListItemIcon>
                                            <ListItemText primary={submenuItem.name} />
                                        </ListItem>
                                    </NavLink>
                                </List>
                            </Collapse>
                        ))
                        : null
                    }
                </NavLink >
            ))}
        </List >
    )
}

export default withRouter(NavigationItems);