import React from "react";
import styles from "./Form.module.css";
import { Container, Row, Col, Button } from "react-bootstrap";

function Form() {
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
            />
            <Button className={styles.button} variant="outline-dark">
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
