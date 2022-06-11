import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showfahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showcelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          °C |{" "}
          <a href="/" onClick={showfahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    <div className="WeatherTemperature">
      <span className="temperature">{Math.round(fahrenheit())}</span>
      <span className="unit">
        <a href="/" onClick={showcelsius}>
          °C
        </a>{" "}
        |°F
      </span>
    </div>;
  }
}
