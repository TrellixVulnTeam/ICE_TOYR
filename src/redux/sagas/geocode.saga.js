import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* fetchGeocodeSaga(action) {
  console.log('in fetchGeocodeSaga: step 2', action.payload);
  let response = yield axios({
    method: 'GET',
    url: '/api/geocode',
    params: action.payload
  });
  yield put({
    type: "SET_GEOCODE",
    payload: response.data,
  });
  console.log('in put of fetchGeocodeSaga, step 3');
}

function* geocodeSaga() {
  yield takeLatest('GET_GEOCODE', fetchGeocodeSaga);
}

export default geocodeSaga;