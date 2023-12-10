import React from "react";
import DateNow from "./DateNow";

export default function Forecast(props) {
  return (
    <div className="Forecast">
      <div className="left-info">
        <div className="col-6">
          <h2 id="city">{props.city}</h2>
          <h3>
            <br />
            <span id="date">
              {" "}
              <DateNow date={props.date} />{" "}
            </span>
          </h3>
          <strong id="temperature">{props.temperature}</strong>
          <span class="units">°C</span> <br />
          <img src={props.icon} alt={props.iconInfo} />
        </div>
      </div>
    </div>
  );
}
