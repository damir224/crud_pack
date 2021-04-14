import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useStyles from '../helpers/styles/useStylesNavBar';

export default function Navbar() {
  const { isAuth } = useSelector(({ userReducers }) => userReducers.user);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.pos}>
        <Toolbar>
          <Typography variant='h6' className={classes.title}>
            <Link to='/' className={classes.link}>
              Home
            </Link>
          </Typography>
          <Typography color='inherit'>
            {isAuth ? (
              <Link to='/logout' className={classes.link}>
                Logout
              </Link>
            ) : (
              <>
                <Link
                  to='/login'
                  style={{ marginRight: 10 }}
                  className={classes.link}
                >
                  Login
                </Link>
                <Link to='/signup' className={classes.link}>
                  Sign up
                </Link>
              </>
            )}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
