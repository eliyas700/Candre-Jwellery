import React from "react";
import Advantages from "../Advantages/Advantages";
import HomePageSlider from "./HomePageSlider";
import ProductCategories from "./ProductCategories";
const HomePage = () => {
  return (
    <div>
      <HomePageSlider></HomePageSlider>
      <ProductCategories></ProductCategories>
      <Advantages></Advantages>
    </div>
  );
};

export default HomePage;
