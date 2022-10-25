import * as types from '../../constants/types';
import { deleteAddressUser, updateAddressUser } from '../utils/userAddress';
const initialState = {
  user: null,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_CUSTOMER:
      return {
        ...state,
      };
    case types.GET_CUSTOMER_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    // case types.CREATE_ADDRESS:
    // case types.UPDATE_ADDRESS:
    // case types.DELETE_ADDRESS:
    //   return {
    //     ...state,
    //   };

    case types.CREATE_ADDRESS_SUCCESS:
    case types.UPDATE_ADDRESS_SUCCESS:
      return {
        ...state,
        user: updateAddressUser(state.user, action.payload),
      };
    case types.DELETE_ADDRESS_SUCCESS:
      return {
        ...state,
        user: deleteAddressUser(state.user, action.payload),
      };
    case types.GET_CUSTOMER_FAIL:
    case types.CREATE_ADDRESS_FAIL:
    case types.UPDATE_ADDRESS_FAIL:
    case types.DELETE_ADDRESS_FAIL:
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
