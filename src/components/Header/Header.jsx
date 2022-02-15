import React from "react";
import styles from "./Header.module.css";
import { Container, Row, Col } from "react-bootstrap";
function Header() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1 className={styles.mainTitleStyles}>
              <span className={styles.weather}> Weather </span> Forecast
            </h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;
