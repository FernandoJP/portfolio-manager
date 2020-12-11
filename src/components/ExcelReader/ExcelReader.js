import React, { Component } from 'react';
import * as XLSX from 'xlsx';
import { Button, withStyles } from '@material-ui/core';
import InputIcon from '@material-ui/icons/Input';

const useStyles = theme => ({
    inputButton: {
        color: '#fff',
        marginRight: theme.spacing(2),
    }
});

class ExcelReader extends Component {

    state = {
        file: null
    }

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
        this.setState({ ...this.state, file });
        console.log(e.target.files[0]);
        var name = file.name;
        const reader = new FileReader();
        reader.onload = (evt) => { // evt = on_file_select event
            /* Parse data */
            const bstr = evt.target.result;
            const wb = XLSX.read(bstr, { type: 'binary' });
            /* Get first worksheet */
            const wsname = wb.SheetNames[0];
            const ws = wb.Sheets[wsname];
            /* Convert array of arrays */
            const data = XLSX.utils.sheet_to_csv(ws, { header: 1 });
            /* Update state */
            console.log("Data>>>" + data);
        };
        reader.readAsBinaryString(file);
    };
}

export default withStyles(useStyles)(ExcelReader)