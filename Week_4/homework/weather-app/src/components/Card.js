import React, { useState } from "react";
import "../App.css";


export default function Card(props) {
  // weekdays
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];


  return (
    <div>
  
      <div className="daily">
                  <div className="container">
                    <h4 className="date" id="day">
                      {weekday[new Date(props.card.daily[props.val].dt * 1000).getDay()] +
                        " " +
                        new Date(props.card.daily[0].dt * 1000).getDate()}
                    </h4>
                    <img id="image" src={`/icons/${props.card.daily[props.val].weather[0].icon}.svg`}></img>
                    <h2 id="low-hi">
                      {props.card.daily[props.val].temp.min.toFixed(0)}° to{" "}
                      {props.card.daily[props.val].temp.max.toFixed(0)}°
                    </h2>
                  </div>
      </div>
               

    </div>
  );
}