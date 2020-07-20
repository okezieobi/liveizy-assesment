import React from 'react';
import PropTypes from 'prop-types';
import { Container, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AuthBG from '../../assets/man-standing-on-balcony-1725385/man-standing-on-balcony-1725385.png';

const useStyles = makeStyles({
  root: {
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundImage: `url(${AuthBG})`,
    backgroundPosition: 'center',
  },
});

const Auth = ({ form }) => {
  const classes = useStyles();
  return (
    <main>
      <Container className={classes.root}>
        <Box />
      </Container>
      <Container>
        {form}
      </Container>
    </main>
  );
};

Auth.propTypes = {
  form: PropTypes.element.isRequired,
};

export default Auth;
