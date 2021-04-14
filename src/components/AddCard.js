import React from 'react';
import {
  FormControl, TextField, Box, Button,
} from '@material-ui/core';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { addCardSagaAC } from '../store/cards/actions';
import useStyles from '../helpers/styles/useStylesCard';

export default function AddCard() {
  const { token } = useSelector(({ userReducers }) => userReducers.user);
  const dispatch = useDispatch();
  const classes = useStyles();
  const refDone = React.useRef(false);
  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
    },
    onSubmit: async ({
      title,
      description,
    }) => {
      await dispatch(
        addCardSagaAC({
          title,
          description,
          token,
        }),
      );
      refDone.current = true;
    },
  });

  return (
    <Box
      className={classes.root}
      component='span'
      m={1}
      style={{ marginTop: '5em' }}
    >
      {refDone.current && <Redirect to='/' />}
      <div className={classes.container}>
        <form onSubmit={formik.handleSubmit}>
          <FormControl variant='outlined'>
            <TextField
              fullWidth
              id='title'
              name='title'
              label='Title'
              type='text'
              value={formik.values.title}
              placeholder='Enter title'
              onChange={formik.handleChange}
              className={classes.title}
              variant='outlined'
            />
            <TextField
              fullWidth
              id='description'
              name='description'
              label='Description'
              type='text'
              value={formik.values.description}
              placeholder='Enter description'
              onChange={formik.handleChange}
              className={classes.description}
              multiline
              rows={6}
              variant='outlined'
            />
            <Button
              className={classes.button}
              variant='contained'
              type='submit'
            >
              Save
            </Button>
          </FormControl>
        </form>
      </div>
    </Box>
  );
}
