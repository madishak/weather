import {
    GET_WEATHER_SENSOR_REQUEST,
    GET_WEATHER_SENSOR_SUCCESS,
    GET_WEATHER_SENSOR_FAILURE
  } from "../../constants";

const weatherSensorData = (state = {}, action) => {
    switch (action.type) {
      case GET_WEATHER_SENSOR_REQUEST: {
        const { request } = action;
        return { ...state, request };
      }
      case GET_WEATHER_SENSOR_SUCCESS: {
        const { sensorData } = action;
        console.log(sensorData)
        return { ...state, sensorData };
      }
      case GET_WEATHER_SENSOR_FAILURE: {
        const { message } = action;
        return { ...state, message };
      }
      default:
        return state;
    }
  };

  export default weatherSensorData;