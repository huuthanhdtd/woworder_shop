import { takeLatest } from 'redux-saga/effects';
import * as action from '../constants/types';
import { authSaga } from './saga';
function* rootSaga() {
  yield takeLatest([action.LOGIN, action.LOGOUT, action.CHECKOUT], authSaga);
}

export default rootSaga;
