import { all } from 'redux-saga/effects';
import customerSaga from './customer.saga';
import keySaga from './key.saga';
import geocode from './geocode.saga';

export default function* rootSaga() {
  yield all([
    customerSaga(),
    keySaga(),
    geocode(),
  ]);
}
