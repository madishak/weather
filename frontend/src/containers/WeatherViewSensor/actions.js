import {
    GET_WEATHER_SENSOR_REQUEST,
    GET_WEATHER_SENSOR_SUCCESS,
    GET_WEATHER_SENSOR_FAILURE
  } from "../../constants";

  export const getWeatherSensorRequest = () => ({
    type: GET_WEATHER_SENSOR_REQUEST,
  });
  
  export const getWeatherSensorSuccess = (sensorData) => ({
    type: GET_WEATHER_SENSOR_SUCCESS,
    sensorData,
  });
  
  export const getWeatherSensorFailure = (message) => ({
    type: GET_WEATHER_SENSOR_FAILURE,
    message,
  });