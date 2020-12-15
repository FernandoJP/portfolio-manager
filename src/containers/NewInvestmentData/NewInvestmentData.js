import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withStyles } from '@material-ui/core/styles';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import { connect } from 'react-redux';

import CardUI from '../../components/UI/Card/CardUI';
import ExcelReader from '../../components/ExcelReader/ExcelReader';
import ModelDownload from '../../components/ModelDownload/ModelDownload';
import InvestmentDataTable from '../../components/InvestmentDataTable/InvestmentDataTable'
import * as actions from '../../store/actions/returns';

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
                <CardUI name="New investment data" variant="2" icon={NoteAddIcon} className={classes.card}>
                    <p>Upload an Excel or CSV file in order to set a new investment data.</p>

                    <section className={classes.buttonsContainer}>
                        <ExcelReader onReadExcelFile={this.onReadExcelFileHandler} />
                        <ModelDownload />
                    </section>

                    <section>
                        <InvestmentDataTable />
                    </section>
                </CardUI>
            </div>
        )
    }

    onReadExcelFileHandler = (file) => {
        console.log({file});
        this.props.onSetReturnsData(file);
    }
}

const mapStateToProps = state => {
    return {
        returnsData: state.returns.returnsData,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onSetReturnsData: (data) => { 
            dispatch(actions.setReturnsData(data));
            dispatch(actions.setInvestmentData(data)) 
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(NewInvestmentData));