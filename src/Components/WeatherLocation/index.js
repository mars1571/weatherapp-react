import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData'
import transformWeather from './../../services/transformWeather'
import './styles.css';

const location = "Barranquilla,col";
const api_key =  "806b60b3c80578a8022352e131b022a3";
const api_weather = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}`;

class WeatherLocation extends Component {

    constructor() {
        super();
        this.state = {
            city: 'Barranquilla',
            data: null
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
    
    componentWillMount() {//se ejecuta luego del constructor, una unica vez
        this.handleUpdateClick();
    }

    render = () => {
        const { city, data } = this.state;
        return (
            <div className="weatherLocationCont">
                <Location city={city} />
                {data ?<WeatherData data={data} /> : 'cargando...'}
            </div>
        );
    };
}

export default WeatherLocation;