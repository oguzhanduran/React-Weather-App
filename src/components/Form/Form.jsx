import { useState } from "react";
import styles from "./Form.module.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useCity } from "../../context/WeatherContext";

function Form() {
  const { setCityName, cityName } = useCity();
  const [input, setInput] = useState("");

  const onChangeHandler = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCityName(input);
    console.log(cityName);
    setInput("");
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
              placeholder="Please Enter a Location"
              className={styles.locationInput}
              onChange={onChangeHandler}
              value={input}
            />
            <Button
              className={styles.button}
              variant="outline-dark"
              onClick={handleSubmit}
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
