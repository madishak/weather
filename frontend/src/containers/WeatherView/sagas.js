import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import {
    GET_DEFAULT_WEATHER_REQUEST,
    GET_DEFAULT_WEATHER_SUCCESS,
    GET_DEFAULT_WEATHER_FAILURE
  } from "../../constants";

function* getDefaultWeather() {
    try {
      const response = yield call(axios.get, "http://127.0.0.1:5000/");
      const defaultWeather = yield response.data.defaultWeather;
      yield put({ type: GET_DEFAULT_WEATHER_SUCCESS,  defaultWeather});
    } catch (error) {
      yield put({ type: GET_DEFAULT_WEATHER_FAILURE, message: error });
    }
  }
  
function* getDefaultWeatherWatcher() {
    yield takeEvery(GET_DEFAULT_WEATHER_REQUEST, getDefaultWeather);
  }
  

export default getDefaultWeatherWatcher;