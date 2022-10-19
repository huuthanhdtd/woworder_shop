import * as types from '../../constants/types';

const initialState = {
  token: null,
  user: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
      };
    case types.LOGOUT_SUCCESS:
      return initialState;
    default:
      return state;
  }
};
