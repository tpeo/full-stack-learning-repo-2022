import React from "react";
import "./style.css";
export default function Header(props) {
  return (
      <div style = {{visibility: !props.city ? "hidden" : "visible"}}>
        <br></br>
        <br></br>
        <br></br>
          <div className="date-today">
            {props.date}
          </div>
          <div className="city-weather">
            {props.city}
          </div>
          <br></br>
          <br></br>
          <br></br>
          <div className = "upper-weather-display">
            <div>
                <div className="weather-status" style= {{fontSize: '25px', marginTop: '30px'}}>
                {props.title}
                </div>
                <div className="weather-status" style= {{fontSize: '60px'}}>
                {props.temp}
                </div>
                <div className="weather-status" style={{fontSize: '15px'}}>
                {props.pollution}
                </div>
            </div>
            <div>
              <img className="resized-image" src = {props.source} alt = {props.alternate}></img>
            </div>
          </div>
        </div>
  );
}
