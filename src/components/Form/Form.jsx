import { useState } from "react";
import styles from "./Form.module.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useCity } from "../../context/WeatherContext";
import { useTheme } from "../../context/ThemeContext";

function Form() {
  const { setCityName } = useCity();
  const { theme } = useTheme();
  const [input, setInput] = useState("");

  const onChangeHandler = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === "") {
      return alert("Please Enter a Location");
    } else {
      setCityName(input);
      setInput("");
    }
  };

  return (
    <div>
      <Container>
        <Row>
          <Col xl={4} className={styles.col}></Col>

          <Col xl={4} className={styles.col}>
            <input
              type="text"
              placeholder="Please Enter a Location"
              className={styles.locationInput}
              onChange={onChangeHandler}
              value={input}
            />
            <Button
              className={styles.button}
              variant={`${theme === "dark" ? "outline-light" : "outline-dark"}`}
              onClick={handleSubmit}
            >
              Search
            </Button>
          </Col>

          <Col xl={4} className={styles.col}></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Form;
