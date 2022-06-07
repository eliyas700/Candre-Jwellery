import React from "react";
import { BiChevronDown } from "react-icons/bi";
import FilteredItem from "./FilteredItem";

const ProductSearchPage = () => {
  return (
    <div className="w-[90%] h-auto mx-auto">
      <div class="text-xs text-info breadcrumbs">
        <ul>
          <li>
            <a>Home </a>
          </li>
          <li>
            <a>Jewellery</a>
          </li>
          <li>Women</li>
          <li>Rings</li>
        </ul>
      </div>
      <div className="flex my-3 text-xs text-info">
        <span className="font-bold text-black mr-2 ">Related Searches :</span>
        <ul className="flex">
          <li>
            <a href="/">Engagement Rings</a> |{" "}
          </li>
          <li>
            <a href="/">Diamond Rings For Women</a> |{" "}
          </li>
          <li>
            <a href="/">Diamond Engagement Rings </a>|{" "}
          </li>
          <li>
            <a href="/">Engagement Rings For Women</a> |{" "}
          </li>
          <li>
            <a href="/">Real Diamond Rings </a>|{" "}
          </li>
          <li>
            <a href="/">Mens Diamond Wedding Bands</a>{" "}
          </li>
        </ul>
      </div>
      <div className="border-2 ">
        <div className="flex p-4 mt-3">
          <p className="font-bold text-black mr-5 uppercase">
            Currently Shopping By :
          </p>
          <span> Rings</span>
        </div>
        <div className="flex w-auto mb-3 justify-between mx-2 h-auto">
          <div class="dropdown dropdown-hover">
            <label
              tabindex="0"
              class="btn m-1 uppercase text-sm font-light btn-sm rounded-none bg-[#e7eff2] flex justify-between w-[130px]"
            >
              Ships By
              <BiChevronDown />
            </label>
            <ul
              tabindex="0"
              class="dropdown-content menu p-2 shadow bg-base-100  w-60 "
            >
              <li>
                <div className="flex items-center">
                  <input type="checkbox" name="days" id="10 to 20" />
                  <label htmlFor="10 to 20">10 to 20 days (827) </label>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <input type="checkbox" name="days" id="above 20" />
                  <label htmlFor="above 20">Above 20 days (827) </label>
                </div>
              </li>
            </ul>
          </div>
          <div class="dropdown dropdown-hover">
            <label
              tabindex="0"
              class="btn m-1 uppercase text-sm font-light btn-sm rounded-none bg-[#e7eff2] flex justify-between w-[130px]"
            >
              Ships By
              <BiChevronDown />
            </label>
            <ul
              tabindex="0"
              class="dropdown-content menu p-2 shadow bg-base-100  w-60 "
            >
              <li>
                <div className="flex items-center">
                  <input type="checkbox" name="days" id="10 to 20" />
                  <label htmlFor="10 to 20">10 to 20 days (827) </label>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <input type="checkbox" name="days" id="above 20" />
                  <label htmlFor="above 20">Above 20 days (827) </label>
                </div>
              </li>
            </ul>
          </div>
          <div class="dropdown dropdown-hover">
            <label
              tabindex="0"
              class="btn m-1 uppercase text-sm font-light btn-sm rounded-none bg-[#e7eff2] flex justify-between w-[130px]"
            >
              Ships By
              <BiChevronDown />
            </label>
            <ul
              tabindex="0"
              class="dropdown-content menu p-2 shadow bg-base-100  w-60 "
            >
              <li>
                <div className="flex items-center">
                  <input type="checkbox" name="days" id="10 to 20" />
                  <label htmlFor="10 to 20">10 to 20 days (827) </label>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <input type="checkbox" name="days" id="above 20" />
                  <label htmlFor="above 20">Above 20 days (827) </label>
                </div>
              </li>
            </ul>
          </div>
          <div class="dropdown dropdown-hover">
            <label
              tabindex="0"
              class="btn m-1 uppercase text-sm font-light btn-sm rounded-none bg-[#e7eff2] flex justify-between w-[130px]"
            >
              Ships By
              <BiChevronDown />
            </label>
            <ul
              tabindex="0"
              class="dropdown-content menu p-2 shadow bg-base-100  w-60 "
            >
              <li>
                <div className="flex items-center">
                  <input type="checkbox" name="days" id="10 to 20" />
                  <label htmlFor="10 to 20">10 to 20 days (827) </label>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <input type="checkbox" name="days" id="above 20" />
                  <label htmlFor="above 20">Above 20 days (827) </label>
                </div>
              </li>
            </ul>
          </div>
          <div class="dropdown dropdown-hover">
            <label
              tabindex="0"
              class="btn m-1 uppercase text-sm font-light btn-sm rounded-none bg-[#e7eff2] flex justify-between w-[130px]"
            >
              Ships By
              <BiChevronDown />
            </label>
            <ul
              tabindex="0"
              class="dropdown-content menu p-2 shadow bg-base-100  w-60 "
            >
              <li>
                <div className="flex items-center">
                  <input type="checkbox" name="days" id="10 to 20" />
                  <label htmlFor="10 to 20">10 to 20 days (827) </label>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <input type="checkbox" name="days" id="above 20" />
                  <label htmlFor="above 20">Above 20 days (827) </label>
                </div>
              </li>
            </ul>
          </div>
          <div class="dropdown dropdown-hover">
            <label
              tabindex="0"
              class="btn m-1 uppercase text-sm font-light btn-sm rounded-none bg-[#e7eff2] flex justify-between w-[130px]"
            >
              Ships By
              <BiChevronDown />
            </label>
            <ul
              tabindex="0"
              class="dropdown-content menu p-2 shadow bg-base-100  w-60 "
            >
              <li>
                <div className="flex items-center">
                  <input type="checkbox" name="days" id="10 to 20" />
                  <label htmlFor="10 to 20">10 to 20 days (827) </label>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <input type="checkbox" name="days" id="above 20" />
                  <label htmlFor="above 20">Above 20 days (827) </label>
                </div>
              </li>
            </ul>
          </div>
          <div class="dropdown dropdown-hover">
            <label
              tabindex="0"
              class="btn m-1 uppercase text-sm font-light btn-sm rounded-none bg-[#e7eff2] flex justify-between w-[130px]"
            >
              Ships By
              <BiChevronDown />
            </label>
            <ul
              tabindex="0"
              class="dropdown-content menu p-2 shadow bg-base-100  w-60 "
            >
              <li>
                <div className="flex items-center">
                  <input type="checkbox" name="days" id="10 to 20" />
                  <label htmlFor="10 to 20">10 to 20 days (827) </label>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <input type="checkbox" name="days" id="above 20" />
                  <label htmlFor="above 20">Above 20 days (827) </label>
                </div>
              </li>
            </ul>
          </div>
          <button className="uppercase text-sm  btn-sm rounded-none bg-[#2fbccc] text-white">
            More Filter
          </button>
        </div>
      </div>

      <FilteredItem></FilteredItem>
    </div>
  );
};

export default ProductSearchPage;
