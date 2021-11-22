import React from "react";
import MyCalender from "../../../Shared/Calender/MyCalender";

import "./HomeLeftChart.css";
const HomeLeftChart = () => {
  return (
    <>
      <h2>Where do you want to go</h2>
      <div className="location-bar">
        <h3 align="left">Location</h3>
        <h6 className="disable" align="left">
          Add City, Landmark, or address
        </h6>
      </div>
      <div className="calender-items">
        <div className="m-2 my-calender">
          <h5 className=" my-calender" align="left">
            Arival
          </h5>
          <MyCalender></MyCalender>
        </div>
        <div className="m-2 my-calender">
          <h5 className=" my-calender" align="left">
            Departure
          </h5>
          <MyCalender></MyCalender>
        </div>
      </div>
    </>
  );
};

export default HomeLeftChart;
