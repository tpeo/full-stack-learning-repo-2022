import React from "react";
import { useState} from "react";
import "./style.css";
import Header from "./Header.js";
import DayContainer from "./DayContainer.js";

function App() {
  const [input, setInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [headerValues, setHeaderValues] = useState({});
  const [futureForecasts, setFutureForecasts] = useState({});
  const [desiredForecasts, setDesiredForecasts] = useState([]);
  const apiKey = "b109d2b6664d701faa022ab11ed64bb6";

  function listCities() {
    let apiCall = `https://api.openweathermap.org/geo/1.0/direct?q=${input},,US&limit=5&appid=${apiKey}`;
    // calls the API
    fetch(apiCall)
        .then((response) =>
            // after receiving a response, take the response from the server and convert it to JSON
            response.json()
        )
        .then((data) => {
            // after receiving the converted JSON data, pass the JSON to the setSearchResults() function
            if (data.length > 0) {
              setInput("");
              setSearchResults(data);
            }
        });
  }

  function selectCity(city) {
    let apiCall = `https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&type=hour&units=imperial&appid=${apiKey}`;
    // calls the API
    fetch(apiCall)
        .then((response) =>
            // after receiving a response, take the response from the server and convert it to JSON
            response.json()
        )
        .then((data) => {
            // after receiving the converted JSON data, pass the JSON to the setSearchResults() function
          setSearchResults([]);
          findPollution(data, city);
          findFutureForecasts(data, city);
          
        } );
  }

  function findPollution(data, city) {
    let pollutionCall = `http://api.openweathermap.org/data/2.5/air_pollution/history?lat=${city.lat}&lon=${city.lon}&start=${data.dt}&end=${data.dt + 3600}&appid=${apiKey}`;
    fetch (pollutionCall)
      .then((response) =>
        response.json()
      )
       .then((values) => {
        setHeaderValues({
          city: `Weather for ${city.name}, ${city.state}`,
          date: setDate(data, data.timezone),
          temp: `${data.main.temp}°`,
          description: `Weather for ${city}, ${city.state}`,
          source: `icons/${data.weather[0].icon}.svg`,
          alternate: data.weather[0].description,
          pollution: `AQI: ${values.list[0].main.aqi}`
        });
      });
  }
  function findFutureForecasts(data, city) {
    let futureForecasts = `http://api.openweathermap.org/data/2.5/forecast?lat=${data.coord.lat}&lon=${data.coord.lon}&units=imperial&appid=${apiKey}`;
           fetch (futureForecasts)
               .then((response) =>
                   response.json()
               )
               .then((value => {
                setFutureForecasts(value);
                setDesiredForecasts([4, 12, 20, 28, 36]);
               }))
              }
  function setDate(weather, timezone) {
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const date = new Date(weather.dt * 1000-(timezone * 1000));
    return `${days[date.getDay()]} ${date.getDate()}`;
  }
  


  return (
    <div className="main-container">
      <div className="weather-container">
        <Header {...headerValues}/>
        <br></br>
        <br></br>
        <br></br>
        <div style = {{display: 'flex', justifyContent: 'space-around'}}>
          {desiredForecasts.map(e => <DayContainer {...futureForecasts} index = {e} key = {e}/>)}
        </div>
      </div>
      <div className="side-container">
        <div style = {{display: "flex", justifyContent: 'space-around', marginTop: '75%'}}>
          <input className="search-input" placeholder="search for a city" onChange={(e) => setInput(e.target.value)} value = {input}></input>
          <button className="search-button" onClick = {() => listCities()}>
            search
          </button>
        </div>
           <ul style = {{marginBottom: '75%'}}>
           {searchResults.map(e => <li className = "search-result" key = {e.state} onClick={() => selectCity(e)}>{e.name}, {e.state}</li>)}
           </ul>
      </div>
    </div>
  );
}

export default App;
