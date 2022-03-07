// import logo from './logo.svg';
import './App.css';
import Header from "./components/header/header";
import InputForm from "./containers/InputForm/InputForm";
import CitiesView from "./containers/CitiesView/CitiesView";
import WeatherView from "./containers/WeatherView/WeatherView";
import WeatherViewSensor from "./containers/WeatherViewSensor/WeatherViewSensor";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <InputForm /> */}
      {/* <CitiesView /> */}
      {/* <WeatherView /> */}
      <WeatherViewSensor />
    </div>
  );
}

export default App;
