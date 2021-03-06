import React from 'react';
import './styles.css';


const Location = (props) => { //esta es una manera de transferir props, otro ejemplo en WeatherExtraInfo
    //const city = props.city; //como se hacia antes del ES6
    const { city } = props; //Destructuring ES6

    return (
        <div className="locationCont">
            <h1>
                {city}
            </h1>
        </div>
    );
};

export default Location;