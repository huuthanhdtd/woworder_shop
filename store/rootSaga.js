import { takeLatest } from 'redux-saga/effects';
import * as action from '../constants/types';
import { authSaga } from './saga';
function* rootSaga() {
  yield takeLatest(
    [
      action.LOGIN,
      action.LOGOUT,
      action.GET_CUSTOMER,
      action.CHECKOUT,
      action.CREATE_ADDRESS,
      action.UPDATE_ADDRESS,
      action.DELETE_ADDRESS,
    ],
    authSaga
  );
}

export default rootSaga;
