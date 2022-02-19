import styles from "./CurrentDay.module.css";
import { Container, Row, Col } from "react-bootstrap";
import Sunrise from "../../icons/sunrise.svg";
import Sunset from "../../icons/sunset.svg";
import Windsock from "../../icons/windsock.svg";
import Humidity from "../../icons/humidity.svg";
import { useCity } from "../../context/WeatherContext";
import d10 from "../../icons/01d.svg";
import n10 from "../../icons/01n.svg";
import d20 from "../../icons/02d.svg";
import n20 from "../../icons/02n.svg";
import d30 from "../../icons/03d.svg";
import n30 from "../../icons/03n.svg";
import d40 from "../../icons/04d.svg";
import n40 from "../../icons/04n.svg";
import d90 from "../../icons/09d.svg";
import n90 from "../../icons/09n.svg";
import d01 from "../../icons/10d.svg";
import n01 from "../../icons/10n.svg";
import d31 from "../../icons/13d.svg";
import n31 from "../../icons/13n.svg";
import d05 from "../../icons/50d.svg";
import n05 from "../../icons/50n.svg";

function CurrentDay() {
  const { cityData, fullcityData, cityName, apiError } = useCity();

  function calcTime(t) {
    const weekDay = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    var date = new Date(t * 1000).toLocaleDateString("tr-TR");
    var time = new Date(t * 1000).toLocaleTimeString("tr-TR");
    var _day = new Date(t * 1000).getUTCDay();

    return { date, time, day: weekDay[_day] };
  }

  let date = new Date(fullcityData.current?.dt * 1000);
  let sunrise = calcTime(fullcityData.current?.sunrise).time.substring(0, 5);
  let sunset = calcTime(fullcityData.current?.sunset).time.substring(0, 5);
  let humidity = fullcityData.current?.humidity;
  let weatherCondition = fullcityData.current?.weather[0].main;
  let windSpeed = Math.round(fullcityData.current?.wind_speed * 3.6);
  let maxTemp = Math.ceil(
    fullcityData.current ? fullcityData.daily[0]?.temp.max : null
  );
  let minTemp = Math.ceil(
    fullcityData.current ? fullcityData.daily[0]?.temp.min : null
  );

  let currentTemp = Math.ceil(
    fullcityData.current ? fullcityData.current?.temp : null
  );

  let descriptionName = fullcityData.current?.weather[0].description;

  console.log(currentTemp);

  let iconName = fullcityData.current
    ? fullcityData.current.weather[0].icon
    : null;

  console.log(iconName);

  console.log(cityData);

  const findIcon = () => {
    if (!iconName) {
      return console.log("There is no icon");
    } else if (iconName[1] === "1") {
      return iconName[2] === "d" ? d10 : n10;
    } else if (iconName[1] === "2") {
      return iconName[2] === "d" ? d20 : n20;
    } else if (iconName[1] === "3") {
      return iconName[2] === "d" ? d30 : n30;
    } else if (iconName[1] === "3") {
      return iconName[2] === "d" ? d30 : n30;
    } else if (iconName[1] === "4") {
      return iconName[2] === "d" ? d40 : n40;
    } else if (iconName[1] === "9") {
      return iconName[2] === "d" ? d90 : n90;
    } else if (iconName[1] === "0") {
      return iconName[2] === "d" ? d01 : n01;
    } else if (iconName[1] === "3") {
      return iconName[2] === "d" ? d31 : n31;
    } else if (iconName[0] === "5") {
      return iconName[2] === "d" ? d05 : n05;
    }
  };

  return (
    <div>
      {apiError ? (
        <div className="bg-red-500 flex flex-wrap content-center text-gray-100 justify-center h-10 rounded-lg w-1/2 container mx-auto text-center text-sm font-bold mt-4 mb-2">
          Wrong City Name!
        </div>
      ) : (
        <Container>
          <Row>
            <Col xl={2}></Col>
            <Col xl={8}>
              <Row>
                <Col md={4} className={styles.box1}>
                  <h4>
                    {cityName[0].toUpperCase() +
                      cityName.substring(1).toLowerCase()}{" "}
                    /<span className={styles.currentTemp}> {currentTemp}°</span>
                  </h4>
                  <p className={styles.currentDaySituation}>
                    {weatherCondition} <br />
                    <span className={styles.currentDayColor}>{maxTemp}°</span>
                    {minTemp}°
                  </p>

                  <div className={styles.currentDayIcon}>
                    <img src={findIcon()} alt={descriptionName} />
                  </div>
                </Col>
                <Col md={8} className={styles.box2}>
                  <h4>Details</h4>
                  <span className={styles.hour}>
                    {calcTime(fullcityData.current?.dt).date},{" "}
                    {calcTime(fullcityData.current?.dt).day}{" "}
                    {calcTime(fullcityData.current?.dt).time.substring(0, 5)}
                  </span>
                  <br />

                  <img
                    className={styles.sunriseBox}
                    src={Sunrise}
                    alt="sunrise"
                  />
                  <span className={styles.sunriseFont}>
                    {" "}
                    Sunrise: {sunrise}
                  </span>
                  <img className={styles.sunsetBox} src={Sunset} alt="sunset" />
                  <span className={styles.sunsetFont}> Sunset: {sunset}</span>
                  <br />
                  <img
                    className={styles.sunriseBox}
                    src={Humidity}
                    alt="humidity"
                  />
                  <span className={styles.sunriseFont}>
                    Humidity: {humidity}%
                  </span>
                  <img
                    className={styles.sunsetBox}
                    src={Windsock}
                    alt="windsock"
                  />
                  <span className={styles.sunsetFont}>
                    Wind Speed: {windSpeed}km/h
                  </span>
                </Col>
              </Row>
            </Col>
            <Col xl={2}></Col>
          </Row>
        </Container>
      )}
    </div>
  );
}

export default CurrentDay;
