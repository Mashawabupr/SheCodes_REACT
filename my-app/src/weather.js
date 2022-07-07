import React from "react";
import axios from "axios";

export default function Weather() {
  function showWeather(response) {
    console.log(response.data);
  }
  let url = `https://api.openweathermap.org/data/2.5/weather?q=tbilisi&appid=2610fc391e59a1d4c413f050d38f672d`;
  axios.get(url).then(showWeather);
  return <h2>Hello from weather!</h2>;
}
