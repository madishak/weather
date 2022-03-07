import { all } from "redux-saga/effects";
import sendCityWatcher from "./containers/InputForm/sagas";
import { getCitiesWatcher } from "./containers/CitiesView/sagas";
import getDefaultWeatherWatcher from "./containers/WeatherView/sagas";
import getweatherSensorDataWatcher from "./containers/WeatherViewSensor/sagas";

export default function* rootSaga() {
    yield all([
        sendCityWatcher(), 
        getCitiesWatcher(),
        // deleteCityWatcher(),
        getDefaultWeatherWatcher(),
        getweatherSensorDataWatcher(),
    ])
}