import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import CardUI from '../../components/UI/Card/CardUI';
import RegistrationData from '../../components/Profile/RegistrationData';

const useStyles = theme => ({
    card: {
        width: '100%'
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
        console.log(this.props.profileData);
        return (
            <div>
                <CardUI name="My profile data" variant="2" 
                    icon={FontAwesomeIcon} fontAwesomeIcon={faUser}
                    iconStyle={{padding: 4}} className={classes.card}>

                    {/* User profile data */}
                    <RegistrationData title="Registration data" data={this.state.profileDataView} />

                    {/* User investments data */}
                    <RegistrationData title="Personal financial data"  data={this.state.investmentsProfileView} />

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