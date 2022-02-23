import React from "react";
import PageTitle from "./PageTitle";
import { Container, Row, Col } from "react-bootstrap";
import Link from "./Link";

function Contact() {
  return (
    <Container className="min-vh-100 bg-primary" id="contact" fluid>
      <Row  className="px-2">
      <PageTitle title="Contact" />
        <Col className="">
          <h1 className="text-light">
            Feel free to reach out through any platforms bellow:
          </h1>
          <a href="mailto:mrredzhebov@gmail.com ">
            <h3 className="text-secondary">mrredzhebov@gmail.com</h3>
          </a>
          <Link
            name="LinkedIn"
            link="https://nl.linkedin.com/in/melih-redzhebov"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
