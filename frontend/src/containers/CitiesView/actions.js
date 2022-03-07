import {
  GET_CITIES_REQUEST,
  GET_CITIES_SUCCESS,
  GET_CITIES_FAILURE,
  DELETE_CITY_REQUEST,
  DELETE_CITY_SUCCESS,
  DELETE_CITY_FAILURE,
} from "../../constants";

export const getMessegesRequest = () => ({
  type: GET_CITIES_REQUEST,
});

export const getMessegesSuccess = (cities) => ({
  type: GET_CITIES_SUCCESS,
  cities,
});

export const getMessegesFailure = (message) => ({
  type: GET_CITIES_FAILURE,
  message,
});

export const deleteCityRequest = (id) => ({
  type: DELETE_CITY_REQUEST,
  id,
});

export const deleteCitySuccess = (request) => ({
    type: DELETE_CITY_SUCCESS,
    request,
  });
  
export const deleteCityFailure = (message) => ({
    type: DELETE_CITY_FAILURE,
    message,
});
  