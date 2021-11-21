import React from "react";
import { Row } from "react-bootstrap";
import Product from "./Product";

const ProductMange = () => {
  return (
    <div>
      <h1 className="ms-4" align="left">
        Homes
      </h1>
      <Row xs={1} md={2} lg={4} className="g-4 m-4">
        <Product></Product>
      </Row>
    </div>
  );
};

export default ProductMange;
