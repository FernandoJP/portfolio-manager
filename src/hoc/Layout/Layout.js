import { makeStyles, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

const useStyles = theme => ({
    root: {
        display: 'flex',
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
});

class Layout extends Component {

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <SideDrawer />
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    <Typography paragraph>
                        Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
                        facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
                        tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
                        consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
                        vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
                        hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
                        tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
                        nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
                        accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
                    </Typography>
                </main>
            </div>
        )
    }
}

export default withStyles(useStyles)(Layout)