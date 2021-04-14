import actionTypes from '../actionTypes';

const initialState = {
  user: {
    birthdate: '',
    email: '',
    id: '',
    last_name: '',
    name: '',
    role: '',
    token: '',
    isAuth: false,
  },
};
const userReducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_AUTH:
      return {
        ...state,
        user: {
          isAuth: true,
          ...action.payload,
        },
      };
    case actionTypes.LOGOUT_AUTH:
      return {
        ...state,
        user: {
          ...initialState.user,
        },
      };
    default:
      return state;
  }
};

export default userReducers;
