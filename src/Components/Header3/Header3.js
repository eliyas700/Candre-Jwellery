import React from "react";
import "./Header3.css";
import trending from "../../Assets/Trending.webp";
const Header3 = () => {
  return (
    <div className="border-b-2">
      <ul className=" header3 pb-[20px] mx-16  flex justify-between">
        <li>
          <div class="dropdown dropdown-hover">
            <label tabindex="0" class=" m-1 ">
              <a href="/" className=" pb-5 hover:border-b-2 border-[#2fbccc]">
                Trending
              </a>
            </label>
            <div
              tabindex="0"
              class="dropdown-content  p-10 shadow bg-base-100  w-[90vw] text-left flex justify-between top-12 "
            >
              <ul>
                <li className="mb-2 text-sm">
                  <a href="/">Bestsellers</a>
                </li>
                <li className="mb-2 text-sm">
                  <a href="/">Bespoke</a>
                </li>
                <li className="mb-2 text-sm">
                  <a href="/">DGRP</a>
                </li>
                <li className="mb-2 text-sm">
                  <a href="/">New Arrivals</a>
                </li>
                <li className="mb-2 text-sm">
                  <a href="/">Our Picks</a>
                </li>
                <li className="mb-2 text-sm">
                  <a href="/">Express Delivery</a>
                </li>
                <li className="mb-2 text-sm">
                  <a href="/">Virtual Try On</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="/">
                    <img src={trending} alt="" />
                  </a>
                </li>
                <li className="my-2">
                  <a href="/" className="hover:text-[#2fbccc]">
                    {" "}
                    About Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <a href="/">Rings</a>
        </li>
        <li>
          <a href="/">Earrings</a>
        </li>
        <li>
          <a href="/">Necklaces</a>
        </li>
        <li>
          <a href="/">Chains</a>
        </li>
        <li>
          <a href="/">Bangles</a>
        </li>
        <li>
          <a href="/">Other Jewellery</a>
        </li>
        <li>
          <a href="/">Collections</a>
        </li>
        <li>
          <a href="/">Solitaires</a>
        </li>
        <li>
          <a href="/">Gifts</a>
        </li>
        <li>
          <a href="/">Wedding</a>
        </li>
        <li>
          <a href="/">Sale</a>
        </li>
      </ul>
    </div>
  );
};

export default Header3;
