import * as types from '../../constants/types';

export const logIn = (form) => ({
  type: types.LOGIN,
  payload: form,
});

export const logInSuccess = (token) => ({
  type: types.LOGIN_SUCCESS,
  payload: token,
});
export const logOut = () => ({
  type: types.LOGOUT,
});

export const logOutSuccess = () => ({
  type: types.LOGOUT_SUCCESS,
  payload: {},
});

export const authenticating = (boolean = true) => ({
  type: types.IS_AUTHENTICATING,
  payload: boolean,
});

export const authError = (error) => ({
  type: types.AUTH_ERROR,
  payload: error,
});
