import React from "react";
import Advantages from "../Advantages/Advantages";
import SignInModal from "../Authentication/SignInModal";
import SignUp from "../Authentication/SignUp";
import SmallHeader from "../Header1/SmallHeader";
import Header2 from "../Header2/Header2";
import Header3 from "../Header3/Header3";
import HomePageSlider from "./HomePageSlider";
import ProductCategories from "./ProductCategories";
const HomePage = () => {
  return (
    <div>
      <SmallHeader></SmallHeader>
      <Header2></Header2>
      <Header3></Header3>
      <HomePageSlider></HomePageSlider>
      <ProductCategories></ProductCategories>
      <Advantages></Advantages>
      <SignUp />
      <SignInModal />
    </div>
  );
};

export default HomePage;
