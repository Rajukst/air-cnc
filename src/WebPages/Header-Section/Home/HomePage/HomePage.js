import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Main from "../../../AllProducts/HomeProductController/Main/Main";

import HomeLeftChart from "../HomeLeftChart/HomeLeftChart";

import "./HomePage.css";
const HomePage = () => {
  return (
    <>
      <Container fluid>
        <Row className="mx-5">
          <Col className="left" sm={12} lg={3}>
            <HomeLeftChart></HomeLeftChart>
          </Col>
          <Col className="right" sm={12} lg={9}>
            <Main></Main>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
