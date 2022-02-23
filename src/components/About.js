import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PageTitle from "./PageTitle";

function About() {
  return (
    <Container className="vh-100 bg-primary" id="about" fluid>
      <PageTitle title="About Me" />
      <Row>
        <Col className="p-4">
          <h3 className=" fs-1 text-light ">
            Hi, My name is Melih Redzhebov. I am Web Developer from the
            Netherlands.
          </h3>
          <h3 className=" fs-1 text-light">
            You can read more about my biography, experience, skills, education
            and much more in the PDF attached bellow:
          </h3>
          <a
            className=" fs-3 text-secondary text-decoration-none"
            href="./download/Melih-Redzhebov-CV.pdf"
            download
          >
            <p>My resume(pdf)</p>
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
