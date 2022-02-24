import axios from "axios";

export const apiKey = process.env.REACT_APP_WEATHER_API_KEY; //env'de oluşturduğumuz key değerini aldık.

export default class WeatherService {
  // Girilen şehrin enlem ve boylam değerini çağırmamız için kullandığımız api.
  getCityLatAndLon(cityName) {
    let apiurl = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${apiKey}`;
    return axios.get(apiurl);
  }

  getWeeklyWeatherOfCityByLatAndLon(lat, lon) {
    // Aldığımız enlem ve boylam değerlerini kullanarak o enlem ve boylama sahip hava durumu bilgilerini aldığımız api.
    let apiurl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    return axios.get(apiurl);
  }
}

// Bu şekilde yapmamızın nedeni sitede isim değerleri girilerek alabileceğimiz ücretsiz bir apinin olmaması.
