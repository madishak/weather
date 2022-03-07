import {
  INPUT_CITY_REQUEST,
  INPUT_CITY_SUCCESS,
  INPUT_CITY_FAILURE,
} from "../../constants";

export const inputCityRequest = (id, city, degree) => ({
  type: INPUT_CITY_REQUEST,
  id,
  city,
  degree,
});

export const inputCitySuccess = (request) => ({
  type: INPUT_CITY_SUCCESS,
  request,
});

export const linputCityFailure = (message) => ({
  type: INPUT_CITY_FAILURE,
  message,
});
