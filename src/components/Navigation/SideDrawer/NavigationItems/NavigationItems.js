import { List, ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import AssessmentIcon from '@material-ui/icons/Assessment';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    navigationIcon: {
        minWidth: 50,
    },
}));

const navigationList = [
    { name: 'My investment return', icon: <AssessmentIcon /> },
    { name: 'New investment data', icon: <NoteAddIcon /> },
]

function NavigationItems(props) {
    const classes = useStyles();

    return (
        <List>
            {navigationList.map((navigation) => (
                <ListItem button key={navigation.name}>
                    <ListItemIcon className={classes.navigationIcon}>{navigation.icon}</ListItemIcon>
                    <ListItemText primary={navigation.name}></ListItemText>
                </ListItem>
            ))}
        </List>
    )
}


export default NavigationItems;