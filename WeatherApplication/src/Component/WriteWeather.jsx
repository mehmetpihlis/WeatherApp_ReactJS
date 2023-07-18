import Axios from "axios";
import { useEffect, useState } from "react";

function WriteWeather({ weather }) {
  return (
    <div className="WriteWeather">
      <p>{weather.date}</p>
      <img src={weather.day.condition.icon} />
      <p><strong>{weather.day.maxtemp_c}°C</strong></p>
    </div>
  );
}

export default WriteWeather;
