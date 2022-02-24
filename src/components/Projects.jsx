import React from "react";
import PageTitle from "./PageTitle";
import { Container, Row, Col } from "react-bootstrap";
import Project from "./Project";

function Projects() {
  return (
    <Container className="min-vh-100 bg-primary" id="projects" fluid>
      <Row className="px-2">
        <PageTitle title="Projects" />
        <Col>
          <h1 className="text-light display-3 mb-2"> Web development</h1>
          <Project
            link="https://rmelih.github.io/Todolist/"
            title="Todolist"
            description="Todolist made in React"
          />
          <Project
            link="https://rmelih.github.io/DrumKit/"
            title="DrumKit"
            description="Simple drum kit"
          />
          <Project
            link="https://rmelih.github.io/DiceGame/"
            title="DiceGame"
            description="Simple dice game"
          />
          <Project
            link="https://rmelih.github.io/TrueMusicMaster/"
            title="TrueMusicMaster"
            description="One of my first websites"
          />
        </Col>
        <Col>
          <h1 className="text-light display-3 mb-2"> Game Development</h1>
          <Project
            link="https://melihr.itch.io/shape-gatherer"
            title="Shape Gatherer"
            description="2d game in Untiy"
          />
          <Project
            link="https://melihr.itch.io/city-racer"
            title="City Racer"
            description="Racing game made in Unity"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Projects;
