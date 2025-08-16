import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";
import { useState } from "react";

export default function Weather (props) {
    const [weatherData, setWeatherData] = useState({ ready: false});
    function handleResponse(response){
    console.log(response.data);
    setWeatherData({
        ready: true,
        city: response.data.city,
        temperature: Math.round(response.data.temperature.current),
        wind: response.data.wind.speed,
        humidity: response.data.temperature.humidity,
        description: response.data.condition.description,
        iconUrl: "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png",
        date: new Date (response.data.time * 1000),
    })
    }

    if (weatherData.ready) {
        return <div className="Weather">
    <form>
        <div className="row">
        <div className="col-9">
        <input type="search" placeholder="Enter a City..." className="form-control" autoFocus="on"/>
        </div>
        <div className="col-3">
        <input type="submit" value="Search" className="btn btn-primary w-100"/>
        </div>
        </div>
    </form>
    <h1>{weatherData.city}</h1>
    <ul>
        <li>
            <FormattedDate date={weatherData.date} /> 
        </li>
        <li className="text-capitalize">{weatherData.description}</li>
    </ul>
    <div className="row mt-3">
        <div className="col-6">
            <div className="clearfix">
                <img src={weatherData.iconUrl} alt={weatherData.description} className="float-left"></img>
                
                    <span className="temperature">{weatherData.temperature}</span>
                    <span className="unit">°C</span>
                
            </div>    
        </div>
        <div className="col-6">
            <ul>
                <li>
                    Humidity: {weatherData.humidity} %
                </li>
                <li>
                    Wind: {weatherData.wind} km/h
                </li>
            </ul>
        </div>


    </div>
 </div>
} else {
    const apiKey = "141903t193o7f25eb4f8b827eac040ff";
    let apiUrl =`https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
}
}
