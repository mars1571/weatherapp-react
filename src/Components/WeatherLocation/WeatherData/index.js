import React from 'react';
import WeaherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
import './styles.css';

const WeatherData = ({ data }) => {
    const {temperature, weatherState, humidity, wind} = data;
    return(
    <div className="weatherDataCont">
        <WeaherTemperature temperature={temperature} weatherState={weatherState}/>
        <WeatherExtraInfo humidity={humidity} wind={wind}/>
    </div>);
};

export default WeatherData;