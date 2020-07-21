import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AuthBG from '../../assets/man-standing-on-balcony-1725385/man-standing-on-balcony-1725385.png';

const useStyles = makeStyles(() => ({
  root: {
    height: '100%',
    width: '100%',
    backgroundColor: '#F5F6F9',
  },
  backgroundImg: {
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundImage: `url(${AuthBG})`,
    backgroundPosition: 'center',
  },
  form: {
    alignSelf: 'center',
  },
}));

const Auth = ({ form }) => {
  const classes = useStyles();
  return (
    <Grid container spacing={3} className={classes.root}>
      <Grid item xs={6} className={classes.backgroundImg}>
        <Box />
      </Grid>
      <Grid item xs={6} className={classes.form}>
        {form}
      </Grid>
    </Grid>
  );
};

Auth.propTypes = {
  form: PropTypes.element.isRequired,
};

export default Auth;
