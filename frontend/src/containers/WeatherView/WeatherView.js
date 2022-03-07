import React, { useEffect } from "react";
import { useDispatch, connect } from "react-redux";
import { GET_DEFAULT_WEATHER_REQUEST } from '../../constants';

const mapStateToProps = (state) => ({
  defaultWeather: state.defaultWeather.defaultWeather,
})
    
const WeatherView = (props) => {
  const dispatch = useDispatch();
  const { defaultWeather } = props;

  useEffect(() => {
    dispatch({ type: GET_DEFAULT_WEATHER_REQUEST });
    // eslint-disable-next-line 
}, [])

  return (
    <div>
      Температура по умолчанию: 
      {defaultWeather !== undefined?  defaultWeather : null}
    </div>
  );
};

export default connect(mapStateToProps)(WeatherView);
