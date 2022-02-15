import React from "react";
import styles from "./CurrentDay.module.css";
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";

function CurrentDay() {
  return (
    <div>
      <Container>
        <Row>
          <Col xl={3}>
            <h6> </h6>
          </Col>
          <Col xl={6} className={styles.box1}>
            <h6>CURRENT WEATHER</h6>
            <span className={styles.hour}>15.02.2022, Tuesday 16:28</span>
            <p>Icon</p>
            <p> 15 Derece</p>
            <p>Sunny</p>
          </Col>
          <Col xl={3}>
            <h6> </h6>
          </Col>
        </Row>
        <Row>
          <Row className="mt-4">
            <h6 className={styles.otherDays}>OTHER DAYS</h6>
            <Col xl={2} md={4} sm={6} className={styles.col}>
              <Card style={{ width: "12rem" }}>
                <Card.Img
                  variant="top"
                  src="https://picsum.photos/id/237/120/180"
                />
                <Card.Body>
                  <Card.Title>Tuesday</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>Vestibulum at eros</ListGroupItem>
                </ListGroup>
              </Card>
            </Col>
            <Col xl={2} md={4} sm={6} className={styles.col}>
              <Card style={{ width: "12rem" }}>
                <Card.Img
                  variant="top"
                  src="https://picsum.photos/id/237/120/180"
                />
                <Card.Body>
                  <Card.Title>Tuesday</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>Vestibulum at eros</ListGroupItem>
                </ListGroup>
              </Card>
            </Col>
            <Col xl={2} md={4} sm={6} className={styles.col}>
              <Card style={{ width: "12rem" }}>
                <Card.Img
                  variant="top"
                  src="https://picsum.photos/id/237/120/180"
                />
                <Card.Body>
                  <Card.Title>Tuesday</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>Vestibulum at eros</ListGroupItem>
                </ListGroup>
              </Card>
            </Col>
            <Col xl={2} md={4} sm={6} className={styles.col}>
              <Card style={{ width: "12rem" }}>
                <Card.Img
                  variant="top"
                  src="https://picsum.photos/id/237/120/180"
                />
                <Card.Body>
                  <Card.Title>Tuesday</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>Vestibulum at eros</ListGroupItem>
                </ListGroup>
              </Card>
            </Col>
            <Col xl={2} md={4} sm={6} className={styles.col}>
              <Card style={{ width: "12rem" }}>
                <Card.Img
                  variant="top"
                  src="https://picsum.photos/id/237/120/180"
                />
                <Card.Body>
                  <Card.Title>Tuesday</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>Vestibulum at eros</ListGroupItem>
                </ListGroup>
              </Card>
            </Col>
            <Col xl={2} md={4} sm={6} className={styles.col}>
              <Card style={{ width: "12rem" }}>
                <Card.Img
                  variant="top"
                  src="https://picsum.photos/id/237/120/180"
                />
                <Card.Body>
                  <Card.Title>Tuesday</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>Vestibulum at eros</ListGroupItem>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  );
}

export default CurrentDay;
