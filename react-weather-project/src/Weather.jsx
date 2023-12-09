import React, { useState } from "react";
import DateNow from "./DateNow";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  function handleResponse(response) {
    console.log(response.data);
    console.log(response.data);
    setReady(true);
    setWeatherData({
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

  if (ready) {
    return (
      <>
        <div className="App">
          <div className="container">
            <h1> Weather App In React</h1>
            <div className="left-info">
              <div className="col-sm-6">
                <div className="search-button">
                  <form id="search-form">
                    <input
                      type="search"
                      placeholder="Enter your City..."
                      class="form-control"
                      id="city-search"
                      autocomplete="off"
                    />
                    <input type="submit" value="Search" />
                  </form>
                  <br />
                  <h2 id="city">{weatherData.city}</h2>
                  <h3>
                    <br />

                    <span id="date">
                      {" "}
                      <DateNow date={weatherData.date} />{" "}
                    </span>
                  </h3>
                  <strong id="temperature">{weatherData.temperature}</strong>
                  <span class="units">°C</span> <br />
                  <img src={weatherData.icon} alt={weatherData.iconInfo} />
                </div>
              </div>

              <div className="right-info">
                <div className="col-sm-6">
                  <ul>
                    <li>
                      Weather info:{weatherData.description}
                      <span id="description"></span>
                    </li>
                    <li>
                      Humidity:{" "}
                      <span id="humidity">{weatherData.humidity}</span> %
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
        </div>
      </>
    );
  } else {
    const apiKey = "b19t9a07a57a44df163do01147f91d11";
    let city = "Midrand";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return "Loading the forecast...";
  }
}
