import React from "react";
import styles from "./CurrentDay.module.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import icon1 from "../../icons/01d.svg";
import Sunrise from "../../icons/sunrise.svg";
import Sunset from "../../icons/sunset.svg";
import Windsock from "../../icons/windsock.svg";
import Humidity from "../../icons/humidity.svg";

function CurrentDay() {
  return (
    <div>
      <Container>
        <Row>
          <Col xl={2}></Col>
          <Col xl={8}>
            <Row>
              <Col md={4} className={styles.box1}>
                <h4>Dalaman</h4>
                <p className={styles.currentDaySituation}>
                  Sunny <br />
                  <span className={styles.currentDayColor}>15°</span> 5°
                </p>

                <div className={styles.currentDayIcon}>
                  <img src={icon1} alt="güneşli" />
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
