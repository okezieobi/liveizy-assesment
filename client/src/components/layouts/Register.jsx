import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Auth from '../templates/Auth';
import Form from '../templates/Form';

const useStyles = makeStyles(() => ({
  root: {
    height: '100vh',
    width: '100vw',
  },
}));

function Register() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Auth
        form={(
          <Form
            inputs={[{ label: 'Full Name' },
              { label: 'Email Address' }, { label: 'Create Password' }, { label: 'Confirm Password' }]}
            buttons={[{ text: 'Create Account' }]}
          />
)}
      />
    </div>
  );
}

export default Register;
