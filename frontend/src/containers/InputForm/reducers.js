import {
  INPUT_CITY_REQUEST,
  INPUT_CITY_SUCCESS,
  INPUT_CITY_FAILURE,
} from "../../constants";

const city = (state = {}, action) => {
  switch (action.type) {
    case INPUT_CITY_REQUEST: {
      const { id, city, degree } = action;
      console.log(id, city, degree)
      return { ...state, id, city, degree };
    }
    case INPUT_CITY_SUCCESS: {
      const { request } = action;
      return { ...state, request };
    }
    case INPUT_CITY_FAILURE: {
      const { message } = action;
      return { ...state, message };
    }
    default:
      return state;
  }
};

export default city;
