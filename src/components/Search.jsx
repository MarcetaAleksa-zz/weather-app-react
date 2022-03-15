import "../styles/search.css";
import React, { useState } from "react";
import axios from "axios";
import Weather from "./Weather";
export default function Search() {
  const [selectedBtn, setSelectedBtn] = useState(0);
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const handleClick = async () => {
    // let response = await axios.get(`api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.REACT_APP_API_KEY}`)
    
      try {
        let response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=08c000bf34662c9f0606abbbb378163d`
        );
        let response2 = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${response.data.coord.lat}&lon=${response.data.coord.lon}&appid=08c000bf34662c9f0606abbbb378163d&units=metric `
        );
        setWeather(response2.data);
        setSelectedBtn(1);
        console.log(weather)
      } catch (error) {
        alert(error.response.data.message);
      }
     

    
   
  };
  return (
    <>
      <div className="search">
        <input
          type="text"
          className="box"
          value={city}
          placeholder="Pretrazi..."
          onChange={(e) => setCity(e.target.value)}
        ></input>
        <div className="btn">
          <button
            className="btn-stat"
            onClick={() => handleClick()}
            style={{
              backgroundColor: selectedBtn == 1 ? "#E6E6E6" : "#FFFFFF",
            }}
          >
            Jedan dan
          </button>
          <button
            className="btn-stat"
            onClick={() => {
              selectedBtn == 2 ? setSelectedBtn(0) : setSelectedBtn(2);
            }}
            style={{
              backgroundColor: selectedBtn == 2 ? "#E6E6E6" : "#FFFFFF",
            }}
          >
            Cetri dana
          </button>
        </div>
      </div>
      {weather?.main?.temp? <Weather data={weather} /> : null}
    </>
  );
}

// 08c000bf34662c9f0606abbbb378163d api key
// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key} open weather api
// api.openweathermap.org/data/2.5/weather?q=BanjaLuka&appid=08c000bf34662c9f0606abbbb378163d geolocation api
