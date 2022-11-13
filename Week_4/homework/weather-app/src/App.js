import React, { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/Card";
import CityList from "./components/CityList";

export default function App() {
  const [searchInput, setSearchInput] = useState("");
  const [card, setCard] = useState([]);
  const [city, setCity] = useState({}); 
  const [aqi, setAqi] = useState("");
  const [results, setResults] = useState([]);
  
  const apiKey = "a27d769dcbc9a6f9c06314f228efc100";
  const [dataLoaded, setDataLoaded] = useState(false);

  const days = [1, 2, 3, 4, 5];

  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];


  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  
  // function that uses OpenWeatherMap's geocoding API to find locations
  function search() {
    if (searchInput) {
      // creates the API call with the value from the search input as a query
      let apiCall = `https://api.openweathermap.org/geo/1.0/direct?q=${searchInput},,US&limit=5&appid=${apiKey}`;
      // calls the API
      fetch(apiCall)
        .then((response) => response.json())
        .then((data) => {
          setResults(data);
          console.log(results)
        });
    }
  }

  // function that renders the search results as a unordered list
  function saveCity(result) {
      setCity({
        fullName: result.name,
        name: result.name,
        state: result.state,
        lat: result.lat,
        lon: result.lon
      });

      console.log("result " + result.name)
  }


  useEffect(() => {
    // let apiCall = `https://api.openweathermap.org/data/2.5/weather?lat=33.44&lon=-94.01&units=imperial&appid=396b57b412e2e85115f9385a9656e2c7`;
    console.log("City Changed")
    // If city object is empty
    if(Object.keys(city).length !== 0){
      let apiCall = `https://api.openweathermap.org/data/2.5/onecall?lat=${city.lat}&lon=${city.lon}&units=imperial&appid=482077a69851b3a52657d892f35a699b`;
      let aqiCall = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${city.lat}&lon=${city.lon}&units=imperial&appid=396b57b412e2e85115f9385a9656e2c7`;


      // calls the API
      const apiPromise = fetch(apiCall).then((response) => response.json())
      const aqiProimse = fetch(aqiCall).then((response) => response.json())
      
      Promise.all([apiPromise, aqiProimse]).then(data => {
        const apiData = data[0]
        const aqiData = data[1]
        // Handle API Stuff
        setCard(apiData);
        setDataLoaded(true);
        setAqi(aqiData.list[0].main.aqi);
      })
    }
  }, [city]);

 
  return (
    <div style={{display: "flex"}}>
    {dataLoaded == true && (
      <div className="main-container">
        <div className="head">
            <h4 className="date" id="today">
              {weekday[new Date(card.daily[0].dt * 1000).getDay()] +
                " " +
                new Date(card.daily[0].dt * 1000).getDate()}
            </h4>
            <h1 id="location">
              Weather for {city.fullName}, {city.state}
            </h1>
          </div>

          <div className="current">
            <div className="flex-container">
              <div>
                <div>
                  <h4 id="weather">{card.current.weather[0].main}</h4>
                  <h2 id="temp">{card.current.temp}°</h2>
                  <h5 id="aqi">AQI: {aqi}</h5>
                </div>
                <div>
                  <img id="image" src= {`./icons/${card.current.weather[0].icon}.svg`}/>
                </div>
              </div>
            </div>
          </div>

      <div className="weather-container">
            <div className="flex-container">
             {days.map((i) => (
                <Card val={i} card={card}></Card>
              ))}

            </div>
      </div>
      </div>
   )}
      <div className="side-container">
        <div>
              <input
                id="search-input"
                type="search"
                placeholder="search for a city"
                onChange={handleChange}
                value={searchInput}
              />

              <button id="search-button" onClick={() => search()}>
                search
              </button>

            <CityList results={results} func={saveCity}></CityList>   
        </div>
      </div>
    </div>

  );
}