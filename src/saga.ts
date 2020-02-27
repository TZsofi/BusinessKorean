import {all} from 'redux-saga/effects';
import {screensSaga} from './screens/saga';

export function* rootSaga() {
  yield all([screensSaga()]);
}
