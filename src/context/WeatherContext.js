import { createContext, useState, useEffect } from "react";
import axios from "axios";
import d10 from "../icons/01d.svg";
import d40 from "../icons/04d.svg";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("Fethiye");
  const [icon, setIcon] = useState("");

  // useEffect(() => {
  //   const getWeatherData = async () => {
  //     const key = process.env.REACT_APP_WEATHER_API_KEY;
  //     try {
  //       const { data } = await axios.get(
  //         `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}`
  //       );
  //       setWeather(data);
  //     } catch {
  //       alert("Veri alınırken hata oluştu");
  //     }
  //   };
  //   getWeatherData();
  // }, [location]);

  const key = process.env.REACT_APP_WEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}`;

  const searchLocation = () => {
    axios.get(url).then((response) => {
      setData(response.data);
      setIcon(response.data.weather[0].icon);
    });
    setLocation("");
  };

  const values = {
    data,
    setData,
    location,
    setLocation,
    icon,
    searchLocation,
  };
  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider> // Burdaki children App.js dosyasındaki componentleri temsil eder.
  );
};

export default WeatherContext;
