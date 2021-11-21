import React from "react";
import { Container, Nav, Navbar, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Header.css";
const Header = () => {
  return (
    <>
      <Navbar expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 element-direction"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link className="ms-4" to="/home">
                Host your home
              </Link>
              <Link className="ms-4" to="/experience">
                host your experience
              </Link>
              <Link className="ms-4" to="/help">
                Help
              </Link>
              <Link className="ms-4" to="/login">
                Log in
              </Link>
              <Link className="ms-4" to="/add-service">
                Add A Product
              </Link>
              <button className="ms-4 sign-up-button">Sign Up</button>
            </Nav>
          </Navbar.Collapse>
          <h3 className="right-side">Aircnc</h3>
        </Container>
      </Navbar>
      <hr></hr>
    </>
  );
};

export default Header;
