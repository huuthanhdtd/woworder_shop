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

export const checkoutsSuccess = () => ({
  type: types.CHECKOUT_SUCCESS,
});

export const checkoutsFail = (error) => ({
  type: types.CHECKOUT_FAIL,
  payload: error,
});

export const checkoutsReset = () => ({
  type: types.CHECKOUT_RESET,
});

export const createAddressRequest = (data) => ({
  type: types.CREATE_ADDRESS,
  payload: data,
});
export const createAddressSuccess = (data) => ({
  type: types.CREATE_ADDRESS_SUCCESS,
  payload: data,
});
export const createAddressFail = (err) => ({
  type: types.CREATE_ADDRESS_FAIL,
  payload: err,
});

export const updateAddressRequest = (data, id) => ({
  type: types.UPDATE_ADDRESS,
  payload: { data, id },
});
export const updateAddressSuccess = (data) => ({
  type: types.UPDATE_ADDRESS_SUCCESS,
  payload: data,
});
export const updateAddressFail = (err) => ({
  type: types.UPDATE_ADDRESS_FAIL,
  payload: err,
});
export const deleteAddressRequest = (id) => ({
  type: types.DELETE_ADDRESS,
  payload: id,
});
export const deleteAddressSuccess = (data) => ({
  type: types.DELETE_ADDRESS_SUCCESS,
  payload: data,
});
export const deleteAddressFail = (err) => ({
  type: types.DELETE_ADDRESS_FAIL,
  payload: err,
});
