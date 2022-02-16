import React from "react";
import styles from "./OtherDays.module.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import icon1 from "../../icons/01d.svg";

function OtherDays() {
  return (
    <div>
      <Container>
        <Row>
          <Row className="mt-4">
            <h6 className={styles.otherDays}>OTHER DAYS</h6>

            <Col xl={2} md={4} xs={6} className={styles.col}>
              <Card style={{ width: "7.9rem" }}>
                <Card.Img variant="top" src={icon1} />
                <Card.Body>
                  <Card.Title className={styles.otherDays}>
                    Tuesday <br />
                    <span className={styles.otherDaysWeather}>Sunny</span>
                  </Card.Title>
                </Card.Body>
                <p className={styles.otherDays}>
                  15°
                  <span className={styles.otherDaysWeatherDegree}>5°</span>
                </p>
              </Card>
            </Col>
            <Col xl={2} md={4} xs={6} className={styles.col}>
              <Card style={{ width: "7.9rem" }}>
                <Card.Img variant="top" src={icon1} />
                <Card.Body>
                  <Card.Title className={styles.otherDays}>
                    Tuesday <br />
                    <span className={styles.otherDaysWeather}>Sunny</span>
                  </Card.Title>
                </Card.Body>
                <p className={styles.otherDays}>
                  15° <span className={styles.otherDaysWeatherDegree}>5°</span>
                </p>
              </Card>
            </Col>
            <Col xl={2} md={4} xs={6} className={styles.col}>
              <Card style={{ width: "7.9rem" }}>
                <Card.Img variant="top" src={icon1} />
                <Card.Body>
                  <Card.Title className={styles.otherDays}>
                    Tuesday <br />
                    <span className={styles.otherDaysWeather}>Sunny</span>
                  </Card.Title>
                </Card.Body>
                <p className={styles.otherDays}>
                  15° <span className={styles.otherDaysWeatherDegree}>5°</span>
                </p>
              </Card>
            </Col>
            <Col xl={2} md={4} xs={6} className={styles.col}>
              <Card style={{ width: "7.9rem" }}>
                <Card.Img variant="top" src={icon1} />
                <Card.Body>
                  <Card.Title className={styles.otherDays}>
                    Tuesday <br />
                    <span className={styles.otherDaysWeather}>Sunny</span>
                  </Card.Title>
                </Card.Body>
                <p className={styles.otherDays}>
                  15° <span className={styles.otherDaysWeatherDegree}>5°</span>
                </p>
              </Card>
            </Col>
            <Col xl={2} md={4} xs={6} className={styles.col}>
              <Card style={{ width: "7.9rem" }}>
                <Card.Img variant="top" src={icon1} />
                <Card.Body>
                  <Card.Title className={styles.otherDays}>
                    Tuesday <br />
                    <span className={styles.otherDaysWeather}>Sunny</span>
                  </Card.Title>
                </Card.Body>
                <p className={styles.otherDays}>
                  15° <span className={styles.otherDaysWeatherDegree}>5°</span>
                </p>
              </Card>
            </Col>
            <Col xl={2} md={4} xs={6} className={styles.col}>
              <Card style={{ width: "7.9rem" }}>
                <Card.Img variant="top" src={icon1} />
                <Card.Body>
                  <Card.Title className={styles.otherDays}>
                    Tuesday <br />
                    <span className={styles.otherDaysWeather}>Sunny</span>
                  </Card.Title>
                </Card.Body>
                <p className={styles.otherDays}>
                  15° <span className={styles.otherDaysWeatherDegree}>5°</span>
                </p>
              </Card>
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  );
}

export default OtherDays;
