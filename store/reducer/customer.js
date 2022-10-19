import * as types from '../../constants/types';

const initialState = {
  user: null,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_CUSTOMER:
      return {
        state,
      };
    case types.GET_CUSTOMER_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case types.GET_CUSTOMER_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case types.LOGOUT_SUCCESS:
      return initialState;
    default:
      return state;
  }
};
