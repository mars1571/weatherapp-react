import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData'
import { CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY } from './../../constants/weathers';
import './styles.css';

const data1 = {
    temperature: 20,
    weatherState: SUN,
    humidity: 10,
    wind: '10m/s'
};

const data2 = {
    temperature: 10,
    weatherState: WINDY,
    humidity: 10,
    wind: '20m/s'
};

class WeatherLocation extends Component {

    constructor(){
        super();
        this.state = {
            city: 'Barranquilla',
            data: data1
        };
    }

    handleUpdateClick = () => {
        this.setState({
            data: data2
        });
    };

    render = () => (
        <div className="weatherLocationCont">
            <Location city={this.state.city} />
            <WeatherData data={this.state.data} />
            <button onClick={this.handleUpdateClick}>Actualizar</button>
        </div>
    );
}

export default WeatherLocation;