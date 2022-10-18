import * as types from '../../constants/types';

const initialState = {
  isLoading: false,
  error: null,
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
    default:
      return state;
  }
};
