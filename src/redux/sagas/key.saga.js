import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* fetchKeySaga() {
  console.log('in fetchKeySaga: step 2');
  let response = yield axios({
    method: 'GET',
    url: '/api/key',
  });
  yield put({
    type: "SET_KEY",
    payload: response.data,
  });
  console.log('in put of fetchKeySaga, step 3');
}

function* keySaga() {
  yield takeLatest('GET_KEY', fetchKeySaga);
}

export default keySaga;