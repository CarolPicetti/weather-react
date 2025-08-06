import React from "react"
import axios from "axios"

export default function Weather(props){ 
    function handleResponse(response) {
        alert(`The temperature in ${props.city} is ${response.data.temperature.current}`)
    }
    let Apikey = "141903t193o7f25eb4f8b827eac040ff";
    let ApiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.city}&key=${Apikey}`
    axios.get(ApiUrl).then(handleResponse)
    return <h1>Hello World</h1>
}