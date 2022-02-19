import axios from "axios";

export const apiKey = "0d5135752812b9d20b5076fff675e2c6";

export default class WeatherService {
  getCityLatAndLon(cityName) {
    let apiurl = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${apiKey}`;
    return axios.get(apiurl);
  }

  getWeeklyWeatherOfCityByLatAndLon(lat, lon) {
    let apiurl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    return axios.get(apiurl);
  }
}
