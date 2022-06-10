import React from "react";
import Advantages from "../Advantages/Advantages";
import SmallHeader from "../Header1/SmallHeader";
import Header2 from "../Header2/Header2";
import Header3 from "../Header3/Header3";
import Reviews from "../ReviewSection/Reviews";
import MagnifierImg from "./MagnifierImg";
import ProductInfo from "./ProductInfo";
import ProductMoreInfo from "./ProductMoreInfo";
const product = {
  name: "SPEAR HEADS SOLITAIRE DIAMOND ENGAGEMENT RING",
  reviews: 21,
  rating: 4.7,
  styleNo: "C013425",
  price: 26038,
  img: "https://i.ibb.co/yh5J7w8/small1.png",
  totalSell: 47,
};
const ProductDetails = () => {
  return (
    <div>
      <SmallHeader></SmallHeader>
      <Header2></Header2>
      <Header3></Header3>
      <div className="grid grid-cols-2">
        <MagnifierImg></MagnifierImg>
        <ProductInfo product={product}></ProductInfo>
      </div>
      <div>
        {" "}
        <ProductMoreInfo product={product}></ProductMoreInfo>
        <Reviews></Reviews>
      </div>
      <div>
        <Advantages></Advantages>
      </div>
    </div>
  );
};

export default ProductDetails;
