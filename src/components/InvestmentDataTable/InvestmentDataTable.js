import React, { Component } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

const columns = [
    { field: 'id', headerName: 'Day', width: 135, type: 'number', width: 180 },
    {
        field: 'variation',
        headerName: 'Variation',
        width: 270,
        type: 'number',
        valueGetter: (params) =>
            `${params.value}%`,
    },
    {
        field: 'accumulatedReturn',
        headerName: 'Accumulated return',
        width: 270,
        type: 'number',
        valueGetter: (params) =>
            `${params.value}%`,
    }
];

const useStyles = theme => ({
    root: {
        height: 1000, 
        width: 722,
        marginTop: theme.spacing(4),
    }
});

class InvestmentDataTable extends Component {

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                {this.props.investmentData ?
                    <DataGrid rows={this.props.investmentData} columns={columns} pageSize={15} /> :
                    <p>No data to show.</p>}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        investmentData: state.returns.investmentData,
    };
}

export default connect(mapStateToProps)(withStyles(useStyles)(InvestmentDataTable));