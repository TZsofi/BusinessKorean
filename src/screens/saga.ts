import {loginSaga} from './login/store/saga';
import {all} from 'redux-saga/effects';

export function* screensSaga() {
  yield all([loginSaga()]);
}
