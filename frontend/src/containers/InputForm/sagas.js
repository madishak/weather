import axios from "axios";
import { call, put, take, fork } from "redux-saga/effects";
import {
  INPUT_CITY_REQUEST,
  INPUT_CITY_SUCCESS,
  INPUT_CITY_FAILURE,
} from "../../constants";

function* sendCity(id, city, degree) {
    console.log(city, degree)
  try {
    const request = yield call(axios.post, "http://127.0.0.1:5000/", {
    id,  
    city,
      degree,
    });
    console.log(request);
    yield put({ type: INPUT_CITY_SUCCESS, request });
  } catch (error) {
    yield put({ type: INPUT_CITY_FAILURE, message: error });
  }
}

function* sendCityWatcher() {
  const { id, city, degree } = yield take(INPUT_CITY_REQUEST);
  yield fork(sendCity, id, city, degree);
}

export default sendCityWatcher;
