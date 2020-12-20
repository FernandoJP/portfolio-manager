import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { faUser, faUserEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Grid, TextField } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';

import CardUI from '../../components/UI/Card/CardUI';
import RegistrationData from '../../components/Profile/RegistrationData';

const useStyles = theme => ({
    card: {
        width: '100%'
    },
    submitButton: {
        margin: theme.spacing(2),
        color: '#fff',
    },
});

class UserProfileData extends Component {

    state = {
        profileDataView: [],
        investmentsProfileView: []
    }

    componentWillMount() {
        this.initUserData();
    }
    
    componentDidUpdate() {
        this.initUserData();
    }

    initUserData() {
        const pd = this.props.profileData;

        const profileDataView = [
            [ {name:'Name', value:pd.name}, {name:'Surname', value:pd.surname} ],
            [ {name:'Phone number', value:pd.phone}, {name:'Mobile number', value:pd.mobilePhone} ],
            [ {name:'Street', value:pd.street} ],
            [ {name:'City', value:pd.city}, {name:'State', value:pd.state}, {name:'Country', value:pd.country} ],
        ];
        const investmentsProfileView = [
            [ {name:'Total balance', value:pd.balance}, {name:'Salary', value:pd.salary} ],
            [ {name:'Variable income percentage', value:pd.variableIncomePercentage}, {name:'Fixed income percentage', value:pd.fixedIncomePercentage} ],
            [ {name:'Investor type', value:pd.type} ],
        ];

        this.setState( { profileDataView, investmentsProfileView } );
    }

    render() {
        const { classes } = this.props;
        const editMode = this.props.editMode;
        const name = editMode ? 'Edit profile data' : 'My profile data';
        const fontAwesomeIcon = editMode ? faUserEdit : faUser;

        console.log(editMode);
        return (
            <div>
                <CardUI name={name} variant="2" 
                    icon={FontAwesomeIcon} fontAwesomeIcon={fontAwesomeIcon}
                    iconStyle={{height: 33, width: 33, padding:6}} className={classes.card}>

                    {/* User profile data */}
                    <RegistrationData title="Registration data" data={this.state.profileDataView} editMode={editMode} />

                    {/* User investments data */}
                    <RegistrationData title="Personal financial data"  data={this.state.investmentsProfileView} editMode={editMode} />

                    {editMode ? 
                    <Button variant="contained" color="primary" className={classes.button} startIcon={<SaveIcon />} className={classes.submitButton}>
                        Save
                    </Button> 
                : null }

                </CardUI>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        profileData: state.profile.profileData,
    };
}

export default connect(mapStateToProps)(withStyles(useStyles)(UserProfileData));