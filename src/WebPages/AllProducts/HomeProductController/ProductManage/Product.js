import React from "react";
import { Card, Col } from "react-bootstrap";
import Rattings from "../../../Shared/Rattings/Rattings";

const Product = ({ myProduct }) => {
  const { name, location, price, image } = myProduct;
  return (
    <>
      <Col>
        <Card>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <h4 align="left">{location}</h4>
            <h3 align="left">{name}</h3>
            <h5 align="left">${price} per person</h5>
            <div align="left">
              <Rattings></Rattings>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default Product;
