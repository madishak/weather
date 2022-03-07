import React, { useEffect } from "react";
import { useDispatch, connect } from "react-redux";
import { GET_WEATHER_SENSOR_REQUEST } from '../../constants';
import sunPic from '../WeatherViewSensor/images/sun.png';
import rainPic from '../WeatherViewSensor/images/rainy.png';
import snowflakePic from '../WeatherViewSensor/images/snowflake.png';
import sunCloudPic from '../WeatherViewSensor/images/sunCloud.png';
import '../WeatherViewSensor/styles.css';

const mapStateToProps = (state) => {
    console.log(state)
    return ({
        weatherSensorData: state.weatherSensorData.sensorData,
    })
}


    
const WeatherViewSensor = (props) => {
    const dispatch = useDispatch();
    const { weatherSensorData } = props;
  
    useEffect(() => {
      dispatch({ type: GET_WEATHER_SENSOR_REQUEST });
      // eslint-disable-next-line 
  }, [])

  return (
<div className='weather__wrapper'>
    <div className='weather__inner'>
        
    
   
     {weatherSensorData? <div>

       <div className='weather__inner-temp'>
         
           {/* {if (weatherSensorData.temperature > 0 ) {
             <img src={sunPic} className='weather_img' alt='sun' />
           }
           else if (weatherSensorData.temperature > 0 &&  weatherSensorData.rain >= 1023 / 2) {
            <img src={rainPic} className='weather_img' alt='rain' />
           }
         } */}
        
         { weatherSensorData.temperature > 0 &&  weatherSensorData.rain <= 1023 / 2 ? <img src={sunPic} className='weather_img' alt='sun' /> : null }
       { weatherSensorData.temperature > 0 &&  weatherSensorData.rain >= 1023 / 2 ? <img src={rainPic} className='weather_img' alt='rain' /> : null}
       { weatherSensorData.temperature < 0 &&  weatherSensorData.rain >= 1023 / 2 ? <img src={snowflakePic} className='weather_img' alt='snow' /> : null}
       { weatherSensorData.temperature < 0 &&  weatherSensorData.rain <= 1023 / 2 ? <img src={sunCloudPic} className='weather_img' alt='sunCloud' /> : null}
       {/* <img src={rainPic} className='weather_img' alt='rain' />
       <img src={snowflakePic} className='weather_img' alt='snow' /> */}
       <div className='weather__caption-temp'>{weatherSensorData.temperature}&#8451;</div>
       </div>
       <div>Атмосферное давление: {weatherSensorData.pressure} мм рт. ст.</div>
       <div>Влажность воздуха: {weatherSensorData.humidity}%</div>
       </div> : null

     }
    </div>
    </div>
  );
};

export default connect(mapStateToProps)(WeatherViewSensor);
