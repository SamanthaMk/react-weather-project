import React, { useState } from "react";
import Forecast from "./Forecast";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.city);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.temperature.current),
      city: response.data.city,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      description: response.data.condition.description,
      date: new Date(response.data.time * 1000),
      iconInfo: response.data.condition.icon,
      icon: "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png",
    });
  }

  function search() {
    const apiKey = "b19t9a07a57a44df163do01147f91d11"
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="App">
        <div className="container">
          <h1> Weather App In React</h1>

          <div className="search-button">
            <form onSubmit={handleSubmit} id="search-form">
              <input
                type="search"
                placeholder="Enter your City..."
                class="form-control"
                id="city-search"
                autocomplete="off"
                onClick={handleCity}
              />
              <input type="submit" value="Search" />
            </form>
            <br />

            <Forecast data={weatherData} />

            <div className="right-info">
              <div className="col-6">
                <ul>
                  <li>
                    Weather info:{weatherData.description}
                    <span id="description"></span>
                  </li>
                  <li>
                    Humidity: <span id="humidity">{weatherData.humidity}</span>{" "}
                    %
                  </li>
                  <li>
                    Wind:<span id="wind">{weatherData.wind}</span> km/h
                  </li>
                </ul>
                <br /> {/* Weather forecst div*/}
                <div class="weather-forecast" id="forecast">
                  <li>Sat 04 Dec ☀️ 19 °C</li>
                  <li>Sun 05 Dec 💧 12 °C</li>
                  <li>Sat 06 Dec ⛅ 16 °C</li>
                  <li>Sat 07 Dec ☀️ 25°C</li>
                  <li>Sat 04 Dec ⛅️ 15 °C</li>
                  <li>Sat 04 Dec ⛅️ 17 °C</li>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          {" "}
          <a href="https://github.com/SamanthaMk/react-weather-project">
            Open Source code by Siphosethu Samantha
          </a>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading the forecast...";
  }
}
