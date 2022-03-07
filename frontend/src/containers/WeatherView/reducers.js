import {
    GET_DEFAULT_WEATHER_REQUEST,
    GET_DEFAULT_WEATHER_SUCCESS,
    GET_DEFAULT_WEATHER_FAILURE
  } from "../../constants";

const defaultWeather = (state = {}, action) => {
    switch (action.type) {
      case GET_DEFAULT_WEATHER_REQUEST: {
        const { request } = action;
        return { ...state, request };
      }
      case GET_DEFAULT_WEATHER_SUCCESS: {
        const { defaultWeather } = action;
        return { ...state, defaultWeather };
      }
      case GET_DEFAULT_WEATHER_FAILURE: {
        const { message } = action;
        return { ...state, message };
      }
      default:
        return state;
    }
  };

  export default defaultWeather;