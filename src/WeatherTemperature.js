import React, { useState } from "react";

export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState("celsius");
    function showFahrenheint(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }

    function showCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }
    if (unit === "celsius") {
        return (
            <div className="WeatherTemperature">
                <span className="temperature">{props.celsius}</span>
                <span className="unit"> °C | <a href="/" onClick={showFahrenheint}>°F</a></span>
            </div>
        )
    } else {
        let fahrenheint = (props.celsius * 9 / 5) + 32;
        return (
            <div className="WeatherTemperature">
                <span className="temperature">{(fahrenheint)}</span>
                <span className="unit"><a href="/" onClick={showCelsius}> °C</a> |°F</span>
            </div>
        )
    }


}