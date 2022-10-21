import { call, delay, put, select } from 'redux-saga/effects';
import * as types from '../../constants/types';
import { logInUser } from '../../lib/services/login';
import {
  authenticating,
  authError,
  logInSuccess,
  logOutSuccess,
} from '../actions/auth';
import Router from 'next/router';
import {
  checkoutsFail,
  checkoutsReset,
  checkoutsSuccess,
  createAddressFail,
  createAddressSuccess,
  deleteAddressFail,
  deleteAddressSuccess,
  getCustomerFail,
  getCustomerSuccess,
  updateAddressFail,
  updateAddressSuccess,
} from '../actions/customer';
import {
  checkouts,
  createAddress,
  customer,
  deleteAddress,
  updateAddress,
} from '../../lib/services/customer';
import { auth } from '../../utils/selector';

function* handleError(e) {
  yield put(authenticating(false));
  yield put(authError(e));
}

function* request() {
  yield put(authenticating());
}

function* resetCheckout() {
  yield delay(5100);
  yield put(checkoutsReset());
}

export function* authSaga({ type, payload }) {
  switch (type) {
    case types.LOGIN:
      try {
        yield request();
        const res = yield call(logInUser, payload);
        if (res.status === 'E_UNAUTHORIZED') {
          yield handleError(res.error);
        } else {
          try {
            const user = yield call(customer, res.token, res?.user?.id);
            if (user.status === 'E_NOT_FOUND') {
              yield put(getCustomerFail(user.error));
            } else {
              yield put(getCustomerSuccess(user));
            }
          } catch (error) {
            yield put(getCustomerFail(error));
          }
          yield put(logInSuccess(res));
          yield put(authenticating(false));
          Router.push('/');
        }
      } catch (error) {
        yield handleError(error.response);
      }
      break;
    case types.LOGOUT:
      try {
        yield request();
        yield put(logOutSuccess());
        yield put(authenticating(false));
        yield put(authError(null));
      } catch (error) {
        yield handleError(error);
      }
    case types.GET_CUSTOMER:
      try {
        const { user, token } = yield select(auth);
        if (token) {
          const res = yield call(customer, token, user?.id);
          if (res.status === 'E_NOT_FOUND') {
            yield put(getCustomerFail(res.error));
          } else {
            yield put(getCustomerSuccess(res));
          }
        }
      } catch (error) {
        yield put(getCustomerFail(error));
      }
      break;
    case types.CHECKOUT:
      try {
        const { token } = yield select(auth);
        if (accessToken) {
          const res = yield call(checkouts, payload, token);
          if (
            res.status === 'E_NOT_FOUND' ||
            res.status === 'E_UNAUTHORIZED' ||
            res.status === 'E_MISSING_OR_INVALID_PARAMS'
          ) {
            yield put(checkoutsFail(res.error));
            yield resetCheckout();
          } else {
            yield put(checkoutsSuccess());
            yield resetCheckout();
          }
        }
      } catch (error) {
        yield put(checkoutsFail(error.response));
        yield resetCheckout();
      }
    case types.CREATE_ADDRESS:
      try {
        const { user, token } = yield select(auth);
        const res = yield call(createAddress, payload, token, user.id);
        if (res.item) {
          yield put(createAddressSuccess(res.item));
        }
      } catch (error) {
        yield put(createAddressFail(error.response));
      }
      break;
    case types.UPDATE_ADDRESS:
      try {
        const { user, token } = yield select(auth);
        const res = yield call(updateAddress, payload, token, user.id);
        if (res.item) {
          yield put(updateAddressSuccess(res.item));
        }
      } catch (error) {
        yield put(updateAddressFail(error.response));
      }
      break;
    case types.DELETE_ADDRESS:
      try {
        const { user, token } = yield select(auth);
        const res = yield call(deleteAddress, payload, token, user.id);
        if (res.item) {
          yield put(deleteAddressSuccess(item.item));
        }
      } catch (error) {
        yield put(deleteAddressFail(error.response));
      }
      break;
    default:
      break;
  }
}
