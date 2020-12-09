import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { withStyles } from '@material-ui/core/styles';
import CardUI from '../../components/UI/Card/CardUI';
import NoteAddIcon from '@material-ui/icons/NoteAdd';

const useStyles = theme => ({
    root: {
        display: 'flex',
    },
});

class NewInvestmentData extends Component {

    render() {
        const { classes } = this.props;

        return (
            <div>
                <section>
                    <CardUI name="New investment data" variant="2" icon={NoteAddIcon}>
                        <p>New investment data</p>
                    </CardUI>
                </section>
            </div>
        )
    }
}

export default withStyles(useStyles)(NewInvestmentData)
