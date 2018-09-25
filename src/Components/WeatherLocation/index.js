import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CircularProgress from 'material-ui/CircularProgress';
import Location from './Location';
import WeatherData from './WeatherData'
import transformWeather from './../../services/transformWeather';
import './styles.css';

const url = "https://api.openweathermap.org/data/2.5/weather";
const api_key =  "806b60b3c80578a8022352e131b022a3";

class WeatherLocation extends Component {

    constructor({ city }) {
        super();
        this.state = {
            city,
            data: null
        };
    }

    handleUpdateClick = () => {
        const { city } = this.state;
        const api_weather = `${url}?q=${city}&appid=${api_key}`;
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
                {data ?<WeatherData data={data} /> :<CircularProgress size={60} thickness={7} />}
            </div>
        );
    };
}

WeatherLocation.propTypes = {
    city: PropTypes.string,
}

export default WeatherLocation;