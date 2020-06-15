import {loginSaga} from './loginscreens/login/store/saga';
import {all} from 'redux-saga/effects';
import {signUpSaga} from './loginscreens/signUpModal/store/saga';

export function* screensSaga() {
  yield all([loginSaga(), signUpSaga()]);
}
