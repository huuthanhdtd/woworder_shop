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

export const checkoutsRequest = (data) => ({
  type: types.CHECKOUT,
  payload: data,
});

export const checkoutsSuccess = (data) => ({
  type: types.CHECKOUT_SUCCESS,
  payload: data,
});

export const checkoutsFail = (error) => ({
  type: types.CHECKOUT_FAIL,
  payload: error,
});
