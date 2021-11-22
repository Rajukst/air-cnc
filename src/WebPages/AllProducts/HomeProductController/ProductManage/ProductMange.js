import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Product from "./Product";
import "./ProductManage.css";
const ProductMange = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <>
      <div className="alignment-flexbox">
        <div>
          <p className="ms-4" align="left">
            Homes
          </p>
        </div>
        <div>
          <Link to="/all-products">
            <p className="ms-4" align="left">
              see All
            </p>
          </Link>
        </div>
      </div>
      <Row xs={1} md={2} lg={4} className="g-4 m-4">
        {product.map((getProduct) => (
          <Product
            // hhh
            key={getProduct._id}
            myProduct={getProduct}
          ></Product>
        ))}
      </Row>
    </>
  );
};

export default ProductMange;
