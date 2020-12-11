import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withStyles } from '@material-ui/core/styles';
import NoteAddIcon from '@material-ui/icons/NoteAdd';

import CardUI from '../../components/UI/Card/CardUI';
import ExcelReader from '../../components/ExcelReader/ExcelReader';
import ModelDownload from '../../components/ModelDownload/ModelDownload';

const useStyles = theme => ({
    card: {
        width: '100%'
    },
    buttonsContainer: {
        display: 'flex',
        marginTop: theme.spacing(4),
    }
});

class NewInvestmentData extends Component {

    render() {
        const { classes } = this.props;

        return (
            <div>
                <section>
                    <CardUI name="New investment data" variant="2" icon={NoteAddIcon} className={classes.card}>
                        <p>Upload an Excel or CSV file in order to set a new investment data.</p>

                        <section className={classes.buttonsContainer}>
                            <ExcelReader onReadExcelFile={this.onReadExcelFile} />
                            <ModelDownload />
                        </section>
                    </CardUI>
                </section>
            </div>
        )
    }

    onReadExcelFile = (file) => {
        console.log(file);
    }
}

export default withStyles(useStyles)(NewInvestmentData)
