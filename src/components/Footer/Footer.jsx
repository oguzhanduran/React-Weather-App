import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import styles from "./Footer.module.css";
import { Container, Row, Col } from "react-bootstrap";
import LinkedinIcon from "../../icons/linkedinIcon";
import GithubIcon from "../../icons/githubIcon";
import TwitterIcon from "../../icons/twitterIcon";
import { useCity } from "../../context/WeatherContext";
function Footer() {
  const { apiError } = useCity();
  return (
    <footer>
      <Container className={`${apiError ? styles.container : null}`}>
        <Row>
          <Col sm={5}></Col>
          <Col sm={2}>
            {" "}
            <p className={styles.footerText}>
              Developed by{" "}
              <a href="https://www.linkedin.com/in/oguzhnduran/">
                Oğuzhan Duran
              </a>
            </p>
            <Row>
              <Col>
                <span className={styles.icons}>
                  <a
                    href="https://www.linkedin.com/in/oguzhnduran/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <LinkedinIcon />
                  </a>
                </span>
              </Col>

              <Col>
                <span className={styles.icons}>
                  <a
                    href="https://github.com/oguzhanduran"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <GithubIcon />
                  </a>
                </span>
              </Col>

              <Col>
                <span className={styles.icons}>
                  <a
                    href="https://twitter.com/oguzhnduran"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <TwitterIcon />
                  </a>
                </span>
              </Col>
            </Row>
          </Col>
          <Col sm={5}></Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
