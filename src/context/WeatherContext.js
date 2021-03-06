import { createContext, useEffect, useState, useContext } from "react";
import WeatherService from "../services/weatherService";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [cityName, setCityName] = useState("Fethiye");
  const [apiError, setApiErrorMes] = useState(false);
  const [latAndLon, setLanAndLon] = useState({
    lat: 41.0351,
    lon: 28.9833,
  });

  // Kullanıcının mevcut girdiği şehri local storage'a kaydettik.
  useEffect(() => {
    const currentCityName = localStorage.getItem("cityName");
    setCityName(JSON.parse(currentCityName));
  }, []);

  useEffect(() => {
    localStorage.setItem("cityName", JSON.stringify(cityName));
  });

  const [cityData, setCityData] = useState([]);
  const [fullcityData, setFullcityData] = useState([]);

  useEffect(() => {
    let weatherService = new WeatherService();
    weatherService
      .getCityLatAndLon(cityName)
      .then((result) => {
        setApiErrorMes(false);
        let resData = result.data[0];
        let resLat = Object.entries(resData).find((e) => e[0] === "lat"); // Şehrin enlem değerini resLat olarak aldık.
        let resLon = Object.entries(resData).find((e) => e[0] === "lon"); // Şehrin boylam değerini resLon olarak aldık.

        setLanAndLon({ lat: resLat[1], lon: resLon[1] });
      })
      .catch((err) => setApiErrorMes(true));
  }, [cityName]); // Şehir değeri her değiştiğinde ismi değiştiğinde useEffect hook'umuz çalışacak.

  useEffect(() => {
    let weatherService = new WeatherService();
    weatherService
      .getWeeklyWeatherOfCityByLatAndLon(latAndLon.lat, latAndLon.lon)
      .then((result) => {
        setFullcityData(result.data); // enlem ve boylam değerleri aracılığı ile gelen değerleri FullcityData ve setCityData değişkenlerimize atadık.
        setCityData(result.data.daily);
      })
      .catch((err) => console.log(err));
  }, [latAndLon]);

  const values = {
    cityName,
    setCityName,
    cityData,
    apiError,
    fullcityData,
  };
  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider> // Burdaki children App.js dosyasındaki componentleri temsil eder.
  );
};

export default WeatherContext;

export const useCity = () => useContext(WeatherContext);
