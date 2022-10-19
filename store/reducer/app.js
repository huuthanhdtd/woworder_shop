import * as types from '../../constants/types';

const initialState = {
  isLoading: false,
  error: null,
  isCheckouts: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.IS_AUTHENTICATING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case types.AUTH_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case types.CHECKOUT:
      return {
        ...state,
        isLoading: action.payload,
      };
    case types.CHECKOUT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isCheckouts: true,
      };
    case types.CHECKOUT_FAIL:
      return {
        ...state,
        isLoading: false,
        isCheckouts: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
