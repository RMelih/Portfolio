import React from "react";
import PageTitle from "./PageTitle";
import { Container, Row, Col } from "react-bootstrap";
import Project from "./Project";

function Projects() {
  return (
    <Container className="vh-100 bg-primary" id="projects" fluid>
      <PageTitle title="Projects" />
      <Row>
        <Col className="p-4">
          <Project
            link="https://play.unity.com/mg/other/city-racer-2"
            title="City Racer"
            description="Racing game made in Unity"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Projects;
