import React from "react";
import './App.css';
import Weather from "./Weather";
export default function App() {
  return <div className="App">
    <div className="container">
    <Weather defaultCity="New York" />
  <footer>
    This project was coded by {" "} 
  <a href="https://github.com/CarolPicetti">Carolina Picetti</a> and is on {" "}
  <a href="https://github.com/CarolPicetti/weather-react" target="_blank" rel="noreferrer">Github {" "}</a>
  and hosted on {" "}
  <a href="https://app.netlify.com/teams/carolpicetti/projects" target="_blank" rel="noreferrer">Netlify</a>
  </footer>
  </div>
  </div>
  
}