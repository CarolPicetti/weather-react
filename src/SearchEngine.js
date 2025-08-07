import React, { useState } from "react";
import axios from "axios";

export default function SearchEngine() {
  const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState("");
  const [description, setDescription] = useState("");
  const [wind, setWind] = useState("");
  const [icon, setIcon] = useState("");
  const [humidity, setHumidity] = useState("");
  const [loaded, setLoaded] = useState(false);

  function handleData(response) {
    setTemperature(response.data.temperature.current);
    setDescription(response.data.condition.description);
    setWind(response.data.wind.speed);
    setIcon(response.data.condition.icon_url);
    setHumidity(response.data.temperature.humidity);
    setLoaded(true);
    console.log(response.data);
  }

  function handleSearch(event) {
    event.preventDefault();
    let apiKey = "141903t193o7f25eb4f8b827eac040ff";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}}&key=${apiKey}`;
    axios.get(apiUrl).then(handleData);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSearch} className="app-container">
      <input type="search" placeholder="Enter a City" onChange={updateCity} />
      <input type="submit" value="Search" />
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <li>Temperature: {Math.round(temperature)}°C</li>
          <li>Description: {description}</li>
          <li>Wind Speed: {Math.round(wind)}km/h</li>
          <li>Humidity: {Math.round(humidity)}%</li>
          <li>
            <img src={icon} alt="Icon" />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
