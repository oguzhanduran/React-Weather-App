import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useTheme } from "../../context/ThemeContext";
import styles from "./Footer.module.css";
import { Container, Row, Col } from "react-bootstrap";
import LinkedinIcon from "../../icons/linkedinIcon";
import GithubIcon from "../../icons/githubIcon";
import TwitterIcon from "../../icons/twitterIcon";
function Footer() {
  const { theme } = useTheme();
  return (
    <footer>
      <Container>
        <Row>
          <Col sm={5}></Col>
          <Col sm={3}>
            {" "}
            <p className={styles.footerText}>
              Developed by{" "}
              <a href="https://www.linkedin.com/in/oguzhnduran/">
                Oğuzhan Duran
              </a>
            </p>
            <span className={styles.icons}>
              <a
                href="https://www.linkedin.com/in/oguzhnduran/"
                rel="noreferrer"
                target="_blank"
              >
                <LinkedinIcon />
              </a>
            </span>
            <span className={styles.icons}>
              <a
                href="https://github.com/oguzhanduran"
                rel="noreferrer"
                target="_blank"
              >
                <GithubIcon />
              </a>
            </span>
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
          <Col sm={4}></Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
