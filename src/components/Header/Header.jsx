import React from "react";
import { useTheme } from "../../context/ThemeContext";
import styles from "./Header.module.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import darkMode from "../../icons/01d.svg";
import lightMode from "../../icons/01n.svg";

function Header() {
  const { theme, setTheme } = useTheme();

  function changeTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }
  return (
    <div>
      <Container>
        <Row>
          <Col sm={11}>
            <h1 className={styles.mainTitleStyles}>
              <span className={styles.weather}> Weather </span> Forecast
            </h1>{" "}
          </Col>
          <Col sm={1}>
            <Button
              type="button"
              onClick={changeTheme}
              className={styles.btnTheme}
              variant={`${
                theme === "dark" ? "outline-warning" : "outline-primary"
              }`}
            >
              {theme === "dark" ? (
                <img alt="light" src={lightMode} width="25"></img>
              ) : (
                <img alt="dark" src={darkMode} width="25"></img>
              )}
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;
