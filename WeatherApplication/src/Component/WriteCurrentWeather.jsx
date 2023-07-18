function WriteCurrentWeather({
  weatherCountry,
  weatherRegion,
  weatherIcon,
  weatherTemperature,
  weatherDesc,
  weatherTodayDate,
}) {
  return (
    <div className="WriteCurrentWeather">
      <div className="WeatherIcon">
        <img src={weatherIcon} />
      </div>

      <div className="WeatherInfo">
        <p>Today / {weatherTodayDate.slice(0, 10)}</p>
        <h3>{weatherCountry}</h3>
        <h1>{weatherRegion}</h1>
        <p>
          Temperature: <strong>{weatherTemperature}°C</strong>
        </p>
        <p>{weatherDesc}</p>
      </div>
    </div>
  );
}

export default WriteCurrentWeather;
