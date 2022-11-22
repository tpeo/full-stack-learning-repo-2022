import React from 'react';
import './style.css';
export default function DayContainer(props, index) {
    console.log("Date:" + setDate(props.list[props.index], props.city.timezone))
    console.log(`Image src: icons/${props.list[props.index].weather[0].icon}.svg`)
    console.log(`Upcoming Temp: ${props.list[props.index].main.temp_max}° to ${props.list[props.index].main.temp_min}°`)

    function setDate(weather, timezone) {
        const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        console.log(weather)
        const date = new Date(weather.dt * 1000-(timezone * 1000));
        return `${days[date.getDay()]} ${date.getDate()}`;
    }
    return (
        <div className = "display-weather" style = {{fontWeight: 'bold', width: '18%'}}>
            <p className = "upcoming-date">{setDate(props.list[props.index], props.city.timezone)}</p>
            <img src = {`icons/${props.list[props.index].weather[0].icon}.svg`} alt = {`${props.list[props.index].weather[0].description}`}></img>
            <p className = "upcoming-temp">{props.list[props.index].main.temp_max}° to {props.list[props.index].main.temp_min}°</p>
        </div>
    );
}