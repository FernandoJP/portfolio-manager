import React, { Component } from 'react';
import { Button, withStyles } from '@material-ui/core';
import InputIcon from '@material-ui/icons/Input';
import { csvReader } from '../../helpers/csv-reader';

const useStyles = theme => ({
    inputButton: {
        color: '#fff',
        marginRight: theme.spacing(2),
    }
});

class ExcelReader extends Component {

    render() {
        const { classes } = this.props;

        return (
            <div>
                <Button variant="contained" color="secondary" component="label" className={classes.inputButton} startIcon={<InputIcon />}>
                    Upload File
                    <input type="file" hidden onChange={this.handleFile} />
                </Button>
            </div>
        );
    }

    handleFile = e => {
        const file = e.target.files[0];
        csvReader(file, this.props.onReadExcelFile);
    };
}

export default withStyles(useStyles)(ExcelReader)