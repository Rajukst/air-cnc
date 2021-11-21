import React from "react";
import { Row } from "react-bootstrap";
import ExperienceItems from "../Experience-items/ExperienceItems";
import DynamicProducts from "./DynamicProducts";

const HomeProducts = () => {
  return (
    <div>
      <h1>This is Home Products</h1>
      <Row className="g-4 m-4">
        <ExperienceItems></ExperienceItems>
      </Row>
    </div>
  );
};

export default HomeProducts;
