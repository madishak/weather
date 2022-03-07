import {
  GET_CITIES_REQUEST,
  GET_CITIES_SUCCESS,
  GET_CITIES_FAILURE,
  DELETE_CITY_REQUEST,
  DELETE_CITY_SUCCESS,
  DELETE_CITY_FAILURE,
} from "../../constants";

export const cities = (state = {}, action) => {
  switch (action.type) {
    case GET_CITIES_REQUEST: {
      const { request } = action;
      return { ...state, request };
    }
    case GET_CITIES_SUCCESS: {
      const { cities } = action;
      // const newCities = [...cities]
      // console.log('new', newCities);
      return { ...state, cities };
    }
    case GET_CITIES_FAILURE: {
      const { message } = action;
      return { ...state, message };
    }
    case DELETE_CITY_REQUEST: {
      const { id } = action;
      console.log('reducer', state.cities.cities);
      const newState = state.cities.cities.filter((city, i) => i !== id)
      state = newState
      // console.log('reducer', state.cities.cities.filter((city, i) => i !== id));
      return { ...state, state };
    }
    default:
      return state;
  }
};

export const deleteCity = (state = {}, action) => {
  switch (action.type) {
    case DELETE_CITY_REQUEST: {
      const { id } = action;
      // console.log('reducer', state.cities.cities);
      const newState = state.cities.cities.filter((city, i) => i !== id)
      state = newState
      console.log('reducer', state.cities.cities.filter((city, i) => i !== id));
      return {...state, state};
    }
    case DELETE_CITY_SUCCESS: {
      const { request } = action;
      return { ...state, request };
    }
    case DELETE_CITY_FAILURE: {
      const { message } = action;
      return { ...state, message };
    }
    default:
      return state;
  }
};
