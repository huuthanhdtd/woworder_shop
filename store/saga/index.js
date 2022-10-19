import { call, put } from 'redux-saga/effects';
import * as types from '../../constants/types';
import { logInUser } from '../../lib/services/login';
import {
  authenticating,
  authError,
  logInSuccess,
  logOutSuccess,
} from '../actions/auth';
import Router from 'next/router';
import { getCustomerFail, getCustomerSuccess } from '../actions/customer';
import { checkouts, customer } from '../../lib/services/customer';

function* handleError(e) {
  yield put(authenticating(false));
  yield put(authError(e));
}

function* request() {
  yield put(authenticating());
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
    case types.CHECKOUT:
      try {
        const res = yield call(checkouts, payload);
      } catch (error) {}
      break;
    default:
      break;
  }
}
