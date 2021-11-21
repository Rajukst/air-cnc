import { TextField } from "@mui/material";
import React from "react";
import { Button } from "react-bootstrap";
import "./AddService.css";
const AddService = () => {
  const hanldeOnSubmit = (e) => {
    alert("button clicked");
    e.preventDefault();
  };
  return (
    <>
      <h1 className="mb-5 align-items-center justify-content-center">
        Please Fillup required Fields to add a New Service
      </h1>
      <div className="service-form">
        <h2>This is Box element</h2>
        <form onSubmit={hanldeOnSubmit}>
          <TextField
            sx={{ width: "70%", m: 2 }}
            id="standard-basic"
            label="Service Name"
            variant="standard"
            required
          />
          <TextField
            sx={{ width: "70%", m: 2 }}
            id="standard-basic"
            label="Service Location"
            variant="standard"
            required
          />
          <TextField
            sx={{ width: "70%", m: 2 }}
            id="standard-basic"
            label="Order Price"
            variant="standard"
            required
          />
          <TextField
            sx={{ width: "70%", m: 2 }}
            id="standard-basic"
            label="Image URL"
            variant="standard"
            required
          />
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
