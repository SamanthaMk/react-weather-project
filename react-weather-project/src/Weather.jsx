import React from "react";
import "./Weather.css";

export default function Weather() {
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
                <h2 id="city">Midrand</h2>
                <h3>
                  <br />

                  <span id="date">
                    Friday 07:44
                    <br />
                    03/Dec
                  </span>
                </h3>
                <strong id="temperature">25</strong>
                <span class="units">°C</span>
              </div>
            </div>

            <div className="right-info">
              <div className="col-sm-6">
                <ul>
                  <li>
                    Humidity: <span id="humidity">80</span> %
                  </li>
                  <li>
                    Wind:<span id="wind">7</span> km/h
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
}
