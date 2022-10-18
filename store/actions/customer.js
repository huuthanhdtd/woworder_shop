import * as types from '../../constants/types';

export const getCustomer = () => ({
  type: types.GET_CUSTOMER,
});

export const getCustomerSuccess = (user) => ({
  type: types.GET_CUSTOMER_SUCCESS,
  payload: user,
});

export const getCustomerFail = (error) => ({
  type: types.GET_CUSTOMER_SUCCESS,
  payload: error,
});
