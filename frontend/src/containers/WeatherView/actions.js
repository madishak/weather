import {
    GET_DEFAULT_WEATHER_REQUEST,
    GET_DEFAULT_WEATHER_SUCCESS,
    GET_DEFAULT_WEATHER_FAILURE
  } from "../../constants";

  export const getDefaultWeatherRequest = () => ({
    type: GET_DEFAULT_WEATHER_REQUEST,
  });
  
  export const getDefaultWeatherSuccess = (defaultWeather) => ({
    type: GET_DEFAULT_WEATHER_SUCCESS,
    defaultWeather,
  });
  
  export const getDefaultWeatherFailure = (message) => ({
    type: GET_DEFAULT_WEATHER_FAILURE,
    message,
  });