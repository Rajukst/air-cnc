import React from "react";
import ExperienceManage from "../ExperienceService/ExperienceManage";
import ProductMange from "../ProductManage/ProductMange";

const Main = () => {
  return (
    <div>
      <h1>This is Main Connection File</h1>
      <ExperienceManage></ExperienceManage>
      <ProductMange></ProductMange>
    </div>
  );
};

export default Main;
