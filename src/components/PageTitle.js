import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function PageTitle(props) {
  return (
    <Container className="pt-5" fluid>
      <Row>
        <Col>
          <h1 className="display-1 text-light border-bottom border-light">
            {props.title}
          </h1>
        </Col>
      </Row>
    </Container>
  );
}

export default PageTitle;
