import React from "react";
import styles from "./Form.module.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import WeatherContext from "../../context/WeatherContext";
import { useContext } from "react";

function Form() {
  const { location, setLocation, searchLocation } = useContext(WeatherContext);

  const getInput = (e) => {
    setLocation(e.target.value);
  };

  return (
    <div>
      <Container>
        <Row>
          <Col xl={4} className={styles.col}>
            <h4></h4>
          </Col>
          <Col xl={5} className={styles.col}>
            <input
              type="text"
              placeholder="Please Enter Location"
              className={styles.locationInput}
              value={location}
              onChange={getInput}
            />
            <Button
              className={styles.button}
              variant="outline-dark"
              onClick={searchLocation}
            >
              Search
            </Button>
          </Col>

          <Col xl={3} className={styles.col}></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Form;
