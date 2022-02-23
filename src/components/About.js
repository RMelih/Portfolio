import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PageTitle from "./PageTitle";


function About() {
  return (
    <Container className="min-vh-100 bg-primary" id="about" fluid>
      <Row className="px-2">
      <PageTitle title="About Me"/>
        <Col>
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
            href="./download/MelihCV.pdf"
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
