import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AuthBG from '../../assets/man-standing-on-balcony-1725385/man-standing-on-balcony-1725385.png';
import Logo from '../../assets/liveizy-logo-1/liveizy-logo-1.png';

const useStyles = makeStyles((theme) => ({
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
  logo: {
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundImage: `url(${Logo})`,
    backgroundPosition: 'center',
    height: '8vh',
    width: '20%',
  },
  card: {
    padding: theme.spacing(1),
  },
}));

const Auth = ({ form }) => {
  const classes = useStyles();
  return (
    <Grid container spacing={3} className={classes.root}>
      <Grid item xs={6} className={classes.backgroundImg}>
        <Grid container justify="flex-end" alignContent="flex-end" className={classes.card}>
          <Grid>
            <Paper>
              <Typography>
                Our job is to granty you peace of mind
                <br />
                when it comes to choosing an apartment
                <br />
                as a tenant or as landlord looking for
                <br />
                the right tenant .
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={6} className={classes.form}>
        <Grid container direction="column">
          <Grid className={classes.logo} item />
          <Grid item>
            {form}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

Auth.propTypes = {
  form: PropTypes.element.isRequired,
};

export default Auth;
