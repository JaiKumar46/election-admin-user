import React from 'react';
import { makeStyles } from '@material-ui/core';
import notfound from '../../Assesst/not-found-2384304__480.jpg';
const useStyles = makeStyles({
    error: {
        
        textAlign: 'center',
        marginTop: '5px',
        marginBottom: '5px',
    },
  });

const NotFound = () => {
    const classes = useStyles();
    return (
        <div className={classes.error}>
            <img src={notfound} style={{width:'100%',height:'100%'}} alt="not found"/>
        </div>
    )
}

export default NotFound;