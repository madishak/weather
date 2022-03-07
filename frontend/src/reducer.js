import { combineReducers } from "redux";
import city  from "./containers/InputForm/reducers";
import { cities, deleteCity }  from "./containers/CitiesView/reducers";
import defaultWeather from "./containers/WeatherView/reducers";
import weatherSensorData from "./containers/WeatherViewSensor/reducers";

export default combineReducers({
    city,
    cities,
    // deleteCity,
    defaultWeather,
    weatherSensorData,
})