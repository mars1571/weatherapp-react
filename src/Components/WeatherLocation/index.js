import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData'
import { CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY } from './../../constants/weathers';
import transformWeather from './../../services/transformWeather'
import './styles.css';

const location = "Barranquilla,col";
const api_key =  "806b60b3c80578a8022352e131b022a3";
const api_weather = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}`;

const data1 = {
    temperature: 20,
    weatherState: SUN,
    humidity: 10,
    wind: '10m/s'
};

class WeatherLocation extends Component {

    constructor() {
        super();
        this.state = {
            city: 'Barranquilla',
            data: data1
        };
    }

    handleUpdateClick = () => {
        fetch(api_weather).then(data => {
            return data.json();
        }).then(weather_data =>{
            const data = transformWeather(weather_data);
            this.setState({ data });
        });
    };
    
    componentWillMount() {
        console.log("componentWillMount");
    }
    
    render = () => {
        const { city, data } = this.state;
        return (
            <div className="weatherLocationCont">
                <Location city={city} />
                <WeatherData data={data} />
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        );
    };
}

export default WeatherLocation;