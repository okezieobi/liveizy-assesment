import React from 'react';
import PropTypes from 'prop-types';
import {
  TextField, Button, ButtonGroup, Grid, Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  item: {
    margin: theme.spacing(2),
  },
  field: {
    margin: theme.spacing(2),
  },
}));

function Form({ inputs, buttons }) {
  const classes = useStyles();

  return (
    <form noValidate autoComplete="off">
      <Grid container direction="column">
        <Grid items>
          <Typography>Test</Typography>
        </Grid>
        <Grid items className={classes.item}>
          <Grid container>
            {
          inputs.map(({ id, label }) => (
            <Grid item xs={6}>
              <TextField className={classes.field} id={id} label={label} variant="outlined" />
            </Grid>
          ))
        }
          </Grid>
        </Grid>
        <Grid items className={classes.item}>
          <ButtonGroup>
            {
          buttons.map(({ id, text }) => (
            <Button color="primary" variant="contained" id={id}>{text}</Button>
          ))
        }
          </ButtonGroup>
        </Grid>
      </Grid>
    </form>
  );
}

Form.propTypes = {
  inputs: PropTypes.arrayOf.isRequired,
  buttons: PropTypes.arrayOf.isRequired,
};

export default Form;
