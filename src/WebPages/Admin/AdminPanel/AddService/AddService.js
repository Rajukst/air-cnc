import React, { useRef } from "react";
import { Button } from "react-bootstrap";
import "./AddService.css";
const AddService = () => {
  const addName = useRef();
  const addLocation = useRef();
  const addPrice = useRef();
  const addImage = useRef();

  const hanldeOnSubmit = (e) => {
    e.preventDefault();
    const name = addName.current.value;
    const location = addLocation.current.value;
    const price = addPrice.current.value;
    const image = addImage.current.value;
    const total = { name, location, price, image };
    console.log(total);

    e.target.reset();
    fetch("http://localhost:5000/home-product", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(total),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedOne) {
          alert("home Product added SuccessFully");
        }
      });
  };
  return (
    <>
      <h1 className="mb-5 align-items-center justify-content-center">
        Please Fillup required Fields to add a New Service
      </h1>
      <div className="service-form">
        <h2>This is Box element</h2>
        <form onSubmit={hanldeOnSubmit}>
          <input
            type="text"
            name=""
            id=""
            ref={addName}
            placeholder="Product Name"
          />
          <br />
          <br />
          <input
            type="text"
            name=""
            id=""
            ref={addPrice}
            placeholder="Product Price"
          />
          <br />
          <br />
          <input
            type="text"
            name=""
            id=""
            ref={addLocation}
            placeholder="Product Location"
          />
          <br />
          <br />
          <input
            type="text"
            name=""
            id=""
            ref={addImage}
            placeholder="Product Image or Url"
          />
          <br />
          <br />
          <Button className="m-5" type="submit">
            Add
          </Button>
        </form>
      </div>
    </>
  );
};

export default AddService;
