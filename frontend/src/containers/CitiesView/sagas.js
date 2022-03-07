import axios from "axios";
import { call, put, takeEvery, fork, take } from "redux-saga/effects";
import {
  GET_CITIES_REQUEST,
  GET_CITIES_SUCCESS,
  GET_CITIES_FAILURE,
  DELETE_CITY_REQUEST,
  DELETE_CITY_SUCCESS,
  DELETE_CITY_FAILURE,
} from "../../constants";

function* getCities() {
  try {
    const response = yield call(axios.get, "http://127.0.0.1:5000/");
    const cities = yield response.data;
    yield put({ type: GET_CITIES_SUCCESS, cities });
  } catch (error) {
    yield put({ type: GET_CITIES_FAILURE, message: error });
  }
}

export function* getCitiesWatcher() {
  yield takeEvery(GET_CITIES_REQUEST, getCities);
}

function* deleteCity(id) {
  // console.log('ID', id);
  try {
    const request = yield call(axios.post, "http://127.0.0.1:5000/", {
      id,
    });
    console.log(request);
    yield put({ type: DELETE_CITY_SUCCESS, request });
  } catch (error) {
    yield put({ type: DELETE_CITY_FAILURE, message: error });
  }
}

export function* deleteCityWatcher() {
  const { id } = yield take(DELETE_CITY_REQUEST);
  console.log('ID', id);
  yield fork(deleteCity, id);
}
