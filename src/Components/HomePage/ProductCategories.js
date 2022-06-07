import React from "react";
import "./ProductCategories.css";
import img1 from "../../Assets/ring (1).webp";
import img2 from "../../Assets/Bracelet.webp";
import img3 from "../../Assets/earring.webp";
import img4 from "../../Assets/chain.webp";
import img5 from "../../Assets/mangalsutra.webp";
import img6 from "../../Assets/necklace.webp";
import img7 from "../../Assets/pendant.webp";
import { Link } from "react-router-dom";
const ProductCategories = () => {
  return (
    <div className="w-[90%] mx-auto">
      <h2 className="text-[30px] mt-5 font-semibold">Product Categories</h2>
      <small className="text-info text-sm">
        So that you don't run out of options to choose from!
      </small>
      <div
        style={{ width: "10vw" }}
        className="mx-auto bg-[#2fbccc] h-[1.5px] my-2"
      ></div>

      <div className="flex mt-16">
        <div className="w-[36%] ">
          <div className="grid grid-cols-2 gap-5">
            <div class="categories cat-1 relative">
              <Link to="/productSearch">
                <img src={img1} alt="" />
              </Link>
            </div>
            <div class="categories cat-2  relative">
              <img src={img3} alt="" />
            </div>
          </div>
          <div>
            <div class="categories cat-3 mt-6 relative">
              <img src={img2} alt="" />
            </div>
          </div>
        </div>
        <div className="w-[28%] ">
          <div class="categories cat-4 mx-7 relative">
            <img src={img7} alt="" />
          </div>
        </div>
        <div className="w-[36%] ">
          <div class="categories cat-5 relative">
            <img src={img5} alt="" />
          </div>
          <div className="grid grid-cols-2 mt-5 gap-5">
            <div class="categories cat-6 relative">
              <img src={img6} alt="" />
            </div>
            <div class="categories cat-7 relative">
              <img src={img4} alt="" />
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default ProductCategories;
