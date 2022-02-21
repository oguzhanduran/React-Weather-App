import { useCity } from "../../context/WeatherContext";
import React from "react";
import styles from "./OtherDays.module.css";
import { Container, Row, Col, Card } from "react-bootstrap";

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

function OtherDays() {
  const { fullcityData, apiError } = useCity();

  const sevenDay = fullcityData.daily?.slice(1, 7);
  console.log(sevenDay);

  return (
    <Container>
      <Row className="mt-4">
        <h6 className={styles.otherDays}>OTHER DAYS</h6>

        {sevenDay?.map((day, i) => {
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

            var _day = new Date(t * 1000).getUTCDay();

            return { day: weekDay[_day] };
          }

          let weatherCondition = day?.weather[0].main;

          let maxTemp = Math.ceil(day?.temp.max);
          let minTemp = Math.ceil(day?.temp.min);

          let iconName = day ? day.weather[0].icon : null;

          console.log(iconName);

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
            <Col xl={2} md={4} xs={6} className={styles.col} key={i}>
              <Card style={{ width: "8.9rem" }}>
                <Card.Img variant="top" src={findIcon()} />
                <Card.Body>
                  <Card.Title className={styles.otherDays}>
                    {calcTime(day?.dt).day} <br />
                    <span className={styles.otherDaysWeather}>
                      {weatherCondition}
                    </span>
                  </Card.Title>
                </Card.Body>
                <p className={styles.otherDays}>
                  {maxTemp}°
                  <span className={styles.otherDaysWeatherDegree}>
                    {minTemp}°
                  </span>
                </p>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default OtherDays;
