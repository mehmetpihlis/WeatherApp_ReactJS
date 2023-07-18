import { useState, useEffect } from "react";
import "./App.css";
import SearchCity from "./Component/SearchCity";
import Axios from "axios";
import ListWeather from "./Component/ListWeather";
import WriteCurrentWeather from "./Component/WriteCurrentWeather";

function App() {
  const [weatherList, setWeatherList] = useState([]);
  const [weatherIcon, setWeatherIcon] = useState("");
  const [weatherCountry, setWeatherCountry] = useState("");
  const [weatherRegion, setWeatherRegion] = useState("");
  const [weatherTemperature, setWeatherTemperature] = useState("");
  const [weatherDesc, setWeatherDesc] = useState("");
  const [weatherTodayDate, setWeatherTodayDate] = useState("");

  const PutCity = async (city) => {
    let forecastList, currentWeather;
    try {
      forecastList = await Axios.get(
        `http://api.weatherapi.com/v1/forecast.json?key=0504205d8eb84d809d662827231407&q=${city}&days=5`
      );
      currentWeather = await Axios.get(
        `http://api.weatherapi.com/v1/current.json?key=0504205d8eb84d809d662827231407&q=${city}`
      );

      console.log(forecastList);
    } catch (error) {
      alert("Lütfen Bir Şehir Adı Girin ya da Girdiğiniz Adı Kontrol Edin !");
    }

    let ForecastList = forecastList.data.forecast.forecastday;
    setWeatherList([ForecastList[1],ForecastList[2],ForecastList[3],ForecastList[4]]);

    setWeatherCountry(currentWeather.data.location.country);
    setWeatherRegion(currentWeather.data.location.region);
    setWeatherIcon(currentWeather.data.current.condition.icon);
    setWeatherTemperature(currentWeather.data.current.temp_c);
    setWeatherDesc(currentWeather.data.current.condition.text);
    setWeatherTodayDate(currentWeather.data.current.last_updated);
  };

  return (
    <div className="App">
      <SearchCity PutCity={PutCity} />

      <WriteCurrentWeather
      weatherCountry= {weatherCountry}
      weatherRegion= {weatherRegion}
      weatherIcon= {weatherIcon}
      weatherDesc= {weatherDesc}
      weatherTemperature= {weatherTemperature}
      weatherTodayDate= {weatherTodayDate}
      />

      <ListWeather WeatherList={weatherList} />
    </div>
  );
}

export default App;
