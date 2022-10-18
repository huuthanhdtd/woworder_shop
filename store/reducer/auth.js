import * as types from '../../constants/types';

const initialState = {
  token: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
      };
    case types.LOGOUT_SUCCESS:
      return {};
    default:
      return state;
  }
};
