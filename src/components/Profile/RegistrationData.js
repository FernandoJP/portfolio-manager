import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, TextField } from '@material-ui/core';

import Box from '../UI/Box/Box';

const useStyles = theme => ({
    card: {
        width: '100%'
    },
});

class RegistrationData extends Component {

    render() {
        const { classes } = this.props;
        
        return (
            <Box title={this.props.title}>
                {this.props.data.map((row, i) => {
                    return (<Grid container spacing={3}>
                        {row.map((column, j) => {
                        return (<Grid item xs={12/row.length}>
                             <TextField disabled={!this.props.editMode} label={column.name} id={'rd-'+i+'-'+j} defaultValue={column.value} margin="normal" fullWidth/>
                        </Grid>)
                        })}
                    </Grid>)   
                })}
            </Box>
        );
    }
}

export default withStyles(useStyles)(RegistrationData);