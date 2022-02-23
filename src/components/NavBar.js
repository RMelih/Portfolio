import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

function NavBar() {
  return (
    <div>
      <Navbar expand="lg" variant="dark" fixed="top">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="m-auto " navbarScroll>
              <Nav.Link className="display-6  text-secondary px-lg-5" href="#home">
                Home
              </Nav.Link>
              <Nav.Link className="display-6 text-secondary px-lg-5" href="#about">
                About
              </Nav.Link>
              <Navbar.Brand href="#home">
                <h1 className="display-3 px-lg-5 logo-name">MR</h1>
              </Navbar.Brand>
              <Nav.Link className="display-6  text-secondary px-lg-5" href="#projects">
                Projects
              </Nav.Link>
              <Nav.Link className="display-6  text-secondary px-lg-5" href="#contact">
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
