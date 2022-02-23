import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

function NavBar() {
  return (
    <div>
      <Navbar expand="lg" variant="dark" fixed="top">
        <Container fluid>
          <Navbar.Brand className="fs-2" href="#home">
            MR
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto" navbarScroll>
              <Nav.Link className="fs-2 text-secondary " href="#home">
                Home
              </Nav.Link>
              <Nav.Link className="fs-2 text-secondary " href="#about">
                About
              </Nav.Link>
              <Nav.Link className="fs-2 text-secondary " href="#projects">
                Projects
              </Nav.Link>
              <Nav.Link className="fs-2 text-secondary " href="#contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
