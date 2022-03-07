import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import {
    GET_WEATHER_SENSOR_REQUEST,
    GET_WEATHER_SENSOR_SUCCESS,
    GET_WEATHER_SENSOR_FAILURE
  } from "../../constants";

function* getweatherSensorData() {
    try {
      const response = yield call(axios.get, "http://127.0.0.1:5000/");
      const sensorData = yield response.data;
      console.log(sensorData)
      yield put({ type: GET_WEATHER_SENSOR_SUCCESS,  sensorData });
    } catch (error) {
      yield put({ type: GET_WEATHER_SENSOR_FAILURE, message: error });
    }
  }
  
function* getweatherSensorDataWatcher() {
    yield takeEvery(GET_WEATHER_SENSOR_REQUEST, getweatherSensorData);
  }
  

export default getweatherSensorDataWatcher;