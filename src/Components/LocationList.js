import React from 'react';
import WeatherLocation from './WeatherLocation';

const LocationList = () =>(
    <div>
        <WeatherLocation city={"Barranquilla,col"}/>
        <WeatherLocation city={"Bogota,col"}/>
        <WeatherLocation city={"Cali,col"}/>
    </div>
);

export default LocationList;