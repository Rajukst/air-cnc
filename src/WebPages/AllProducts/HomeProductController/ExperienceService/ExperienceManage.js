import React from "react";
import { Row } from "react-bootstrap";
import Experience from "./Experience";

const ExperienceManage = () => {
  return (
    <div>
      <h1 className="ms-4" align="left">
        Experiences
      </h1>
      <Row xs={1} md={2} lg={4} className="g-4 m-4">
        <Experience></Experience>
      </Row>
    </div>
  );
};

export default ExperienceManage;
