/* eslint-disable camelcase */
import React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from '@material-ui/core';

import EditIcon from '@material-ui/icons/Edit';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { likeCardSagaAC } from '../store/cards/actions';
import Like from './Like';
import useStyles from '../helpers/styles/useStylesSimpleCard';

const SimpleCard = React.memo(
  ({ card: { id, title, content, liked, total_likes } }) => {
    const classes = useStyles();
    const { token, role } = useSelector(
      ({ userReducers }) => userReducers.user,
    );
    const dispatch = useDispatch();

    return (
      <Card
        className={classes.root}
        style={{
          border: 10,
          borderStyle: 'solid',
          borderRadius: 1,
          borderWidth: 1,
        }}
      >
        <CardContent>
          <Typography variant='h6' component='h5'>
            {title}
          </Typography>
          <Typography
            variant='body2'
            component='p'
            style={{ marginTop: '1em' }}
          >
            {content}
          </Typography>
        </CardContent>
        <CardActions className={classes.button}>
          {role === 'admin' ? (
            <Link to={`/info/${id}`}>
              <Button size='small'>
                <EditIcon />
              </Button>
            </Link>
          ) : null}
          <Button
            size='small'
            onClick={() => {
              dispatch(likeCardSagaAC({ id, token }));
            }}
          >
            <Like like={{ liked, total_likes }} />
          </Button>
        </CardActions>
      </Card>
    );
  },
);

export default SimpleCard;
