import React, { useEffect } from 'react';
import { Container, Card, Typography } from '@material-ui/core';
import AddBoxIcon from '@material-ui/icons/AddBox';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SimpleCard from './SimpleCard';
import { getCardsSagaAC } from '../store/cards/actions';
import useStyles from '../helpers/styles/useStylesCardList';

export default function CardList() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { token, role, isAuth } = useSelector(
    (state) => state.userReducers.user
  );
  const { cards } = useSelector((state) => state.cardsReducers);
  const [cardListArr, setCardListArr] = React.useState([]);
  useEffect(() => {
    dispatch(getCardsSagaAC(token));
  }, [dispatch, token]);
  useEffect(() => {
    setCardListArr(cards);
  }, [cards]);

  return (
    <>
      {cardListArr.length !== 0 && (
        <Typography variant="h2" align="center" style={{ marginTop: '1em' }}>
          Card List
        </Typography>
      )}
      <Container className={classes.root}>
        {role === 'admin' ? (
          <Card
            className={classes.add}
            style={{
              borderStyle: 'dashed',
              borderRadius: 4,
              borderWidth: 1,
            }}
          >
            <Link
              to="/create"
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <div style={{ display: 'flex' }}>
                <AddBoxIcon fontSize="large" />
              </div>
            </Link>
          </Card>
        ) : null}
        {cardListArr.length && isAuth ? (
          cardListArr.map((e) => <SimpleCard key={e.id} card={e} />)
        ) : (
          <Typography variant="h4">
            Sorry! You need to be logged in to access this page.
          </Typography>
        )}
      </Container>
    </>
  );
}
