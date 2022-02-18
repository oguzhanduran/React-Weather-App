import { useContext } from "react";
import styles from "./CurrentDay.module.css";
import { Container, Row, Col } from "react-bootstrap";
import Sunrise from "../../icons/sunrise.svg";
import Sunset from "../../icons/sunset.svg";
import Windsock from "../../icons/windsock.svg";
import Humidity from "../../icons/humidity.svg";
import WeatherContext from "../../context/WeatherContext";
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
  const { data, icon } = useContext(WeatherContext);

  console.log(icon);

  const findIcon = () => {
    if (icon[1] === "1") {
      return icon[2] === "d" ? d10 : n10;
    } else if (icon[1] === "2") {
      return icon[2] === "d" ? d20 : n20;
    } else if (icon[1] === "3") {
      return icon[2] === "d" ? d30 : n30;
    } else if (icon[1] === "3") {
      return icon[2] === "d" ? d30 : n30;
    } else if (icon[1] === "4") {
      return icon[2] === "d" ? d40 : n40;
    } else if (icon[1] === "9") {
      return icon[2] === "d" ? d90 : n90;
    } else if (icon[1] === "0") {
      return icon[2] === "d" ? d01 : n01;
    } else if (icon[1] === "3") {
      return icon[2] === "d" ? d31 : n31;
    } else if (icon[0] === "5") {
      return icon[2] === "d" ? d05 : n05;
    }
  };

  return (
    <div>
      <Container>
        <Row>
          <Col xl={2}></Col>
          <Col xl={8}>
            <Row>
              <Col md={4} className={styles.box1}>
                <h4>{data.name}</h4>
                <p className={styles.currentDaySituation}>
                  {data.weather ? data.weather[0].main : null} <br />
                  <span className={styles.currentDayColor}>
                    {data.main ? data.main.temp_max : null}°
                  </span>
                  {data.main ? data.main.temp_min : null}°
                </p>

                <div className={styles.currentDayIcon}>
                  <img src={findIcon()} alt="güneşsizz" />
                </div>
              </Col>
              <Col md={8} className={styles.box2}>
                <h4>Details</h4>
                <span className={styles.hour}>15.02.2022, Tuesday 16:28</span>
                <br />

                <img
                  className={styles.sunriseBox}
                  src={Sunrise}
                  alt="sunrise"
                />
                <span className={styles.sunriseFont}> Sunrise: 02:07</span>
                <img className={styles.sunsetBox} src={Sunset} alt="sunset" />
                <span className={styles.sunsetFont}> Sunset: 02:07</span>
                <br />
                <img
                  className={styles.sunriseBox}
                  src={Humidity}
                  alt="humidity"
                />
                <span className={styles.sunriseFont}> Humidity: 75%</span>
                <img
                  className={styles.sunsetBox}
                  src={Windsock}
                  alt="windsock"
                />
                <span className={styles.sunsetFont}> Wind Speed: 4km/h</span>
              </Col>
            </Row>
          </Col>
          <Col xl={2}></Col>
        </Row>
      </Container>
    </div>
  );
}

export default CurrentDay;
