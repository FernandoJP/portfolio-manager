import React from 'react';
import { Button, makeStyles } from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    downloadLink: {
        textDecoration: 'none'
    },
    downloadButton: {
        color: '#fff',
        marginLeft: theme.spacing(2),
    },
}));

function ModelDownload(props) {

    const classes = useStyles();

    return (
        <div>
            <Link to="/assets/files/Model.xlsx" target="_blank" download className={classes.downloadLink}>
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<GetAppIcon />}
                    className={classes.downloadButton}
                    download>
                    Download a model
                </Button>
            </Link>
        </div>
    )
}

export default ModelDownload;