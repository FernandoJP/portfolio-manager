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

import './NavigationItems.css';

const useStyles = makeStyles((theme) => ({
    navigationIcon: {
        minWidth: 50,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));

const navigationList = [
    { name: 'My investment return', icon: <AssessmentIcon /> },
    { name: 'New investment data', icon: <NoteAddIcon /> },
    {
        name: 'Profile',
        icon: <FontAwesomeIcon icon={faUser} />,
        submenu: [
            { name: 'My profile', icon: <FontAwesomeIcon icon={faIdBadge} /> },
            { name: 'Edit profile', icon: <FontAwesomeIcon icon={faUserEdit} /> },
        ]
    },
    {
        name: 'Indexes',
        icon: <FontAwesomeIcon icon={faFileContract} />,
        submenu: [
            { name: 'IBOV', icon: <Flags.BR /> },
            { name: 'IFIX', icon: <FontAwesomeIcon icon={faWarehouse} style={{ fontSize: 16 }} /> },
            { name: 'S&P 500', icon: <Flags.US /> },
            { name: 'REITs', icon: <FontAwesomeIcon icon={faBuilding} style={{ fontSize: 18 }} /> },
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
                <div key={navigation.name}>
                    <ListItem button button onClick={() => navigation.submenu && handleClick()}>
                        <ListItemIcon className={classes.navigationIcon}>{navigation.icon}</ListItemIcon>
                        <ListItemText primary={navigation.name}></ListItemText>
                        {navigation.submenu ? open ? <ExpandLess /> : <ExpandMore /> : null}
                    </ListItem>
                    {navigation.submenu ?
                        navigation.submenu.map((submenuItem) => (
                            <Collapse in={open} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItem button className={classes.nested}>
                                        <ListItemIcon>
                                            {submenuItem.icon}
                                        </ListItemIcon>
                                        <ListItemText primary={submenuItem.name} />
                                    </ListItem>
                                </List>
                            </Collapse>
                        ))
                        : null}
                </div>
            ))}
        </List>
    )
}


export default NavigationItems;