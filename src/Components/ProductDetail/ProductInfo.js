import React from "react";
import Rating from "react-rating";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ProductInfo = ({ product }) => {
  const { name, rating, reviews, totalSell, price } = product;
  return (
    <div className="py-3 text-info">
      <div>
        <h1 className=" text-lg font-bold text-left text-info  my-4">{name}</h1>
        <div className="w-72 flex justify-around">
          <div className="flex">
            <Rating
              className="z-[-12]"
              initialRating={rating}
              emptySymbol={<FontAwesomeIcon icon={faStar} />}
              fullSymbol={
                <FontAwesomeIcon style={{ color: "goldenrod" }} icon={faStar} />
              }
              readonly
            ></Rating>
            <p>({reviews})</p>
          </div>
          <p className="font-semibold">
            Total Sell: <span className="text-xl ">{totalSell}</span>
          </p>
        </div>
        <h2 className=" mt-5 text-left text-2xl text-black font-bold ">
          Rs. {price}
        </h2>
        <div>
          <div
            tabindex="0"
            class="collapse my-3 text-left collapse-plus border border-base-300 border-x-0 pb-1 bg-base-100"
          >
            <div class="collapse-title text-[16px] min-h-fit  py-2">
              View Product Description
            </div>
            <div class="collapse-content">
              <p className="text-[13px]">
                Nothing says perfection and beauty like this dreamy looking and
                alluring gold and diamond engagement ring. The unusual design
                and irresistible, gorgeous diamond will surely help you get a
                'yes'!
              </p>
            </div>
          </div>
          <div
            tabindex="0"
            class="collapse my-3 text-left collapse-plus border border-base-300 border-x-0 pb-1 bg-base-100"
          >
            <div class="collapse-title text-[16px] min-h-fit  py-2">
              View Price Breakup
            </div>
            <div class="collapse-content">
              <p className="text-[13px]">
                <div class="price_bifurcation">
                  <div class="gold_div">
                    <span class="gold top">Metal</span>
                    <span class="gold_rate bottom" id="gold_rate">
                      7,910
                    </span>
                  </div>
                  <div class="add">+</div>
                  <div class="diamond_div" style={{ width: "auto" }}>
                    <span class="diamond top">Diamond</span>
                    <span class="diamond_rate bottom" id="diamond_rate">
                      <span class="crossed">9,720</span>&nbsp;7,290
                    </span>
                  </div>

                  <div class="add">+</div>
                  <div class="making_charges_div">
                    <span class="making_charges top">Making Charges</span>
                    <span
                      class="making_charges_rate bottom"
                      id="making_charges_rate"
                      style={{
                        textDecoration: "none",
                        textAlign: "center",
                        width: "90px ",
                        float: "left",
                        display: "table",
                        paddingLeft: "10px",
                      }}
                    >
                      7,650
                    </span>

                    <span
                      class="making_charges_rate_new bottom"
                      id="making_charges_rate_new"
                    ></span>
                  </div>
                  <div class="add">+</div>
                  <div class="vat_div">
                    <span class="vat top">GST(3%)</span>
                    <span class="vat__">
                      <span
                        class="vat_rate bottom original_gst"
                        id="vat_rate"
                        style={{
                          textDecoration: "line-through",
                          float: "left",
                          display: "inline-flex",
                          width: "auto",
                          marginRight: "8px",
                          textAlign: "center",
                        }}
                      >
                        758
                      </span>
                      <span
                        class="vat_rate bottom discounted_gst"
                        id="vat_rate_new"
                        style={{
                          display: "inline-flex",
                          width: "auto",
                          textAlign: "center",
                          clear: "none",
                        }}
                      >
                        686
                      </span>
                    </span>
                  </div>
                </div>
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-[35%] my-5 items-center justify-between">
          <span>Metal Selection:</span>

          <label htmlFor="18k">
            <input type="radio" name="metal" value="18K" id="18k" />
            18K
          </label>

          <label htmlFor="14k">
            <input type="radio" value="14K" name="metal" id="14k" />
            14K
          </label>
        </div>
        <div className=" my-4 flex justify-between w-[70%] items-center">
          <span>Diamond Quality: </span>
          <label className="text-accent" htmlFor="12GH">
            <input type="radio" name="diamond" value="12GH" id="12GH" />
            12GH
          </label>
          <label className="text-accent" htmlFor="14GH">
            <input type="radio" name="diamond" value="14GH" id="14GH" />
            14GH
          </label>
          <label className="text-accent" htmlFor="16GH">
            <input type="radio" name="diamond" value="12GH" id="16GH" />
            16GH
          </label>
          <label className="text-accent" htmlFor="18GH">
            <input type="radio" name="diamond" value="12GH" id="18GH" />
            18GH
          </label>
          <label className="text-accent" htmlFor="20GH">
            <input type="radio" name="diamond" value="12GH" id="20GH" />
            20GH
          </label>
        </div>
        <div className="text-left">
          <label className="text-xl font-semibold" htmlFor="quantity">
            Quantity:{" "}
          </label>
          <input
            className="border-2 w-24"
            type="number"
            name=""
            id="quantity"
          />
        </div>
        <div className="w-[90%] my-7 flex justify-between">
          <button className="uppercase w-64 btn bg-primary text-neutral hover:text-black">
            Add to Cart
          </button>
          <button className="w-64 uppercase btn bg-primary text-neutral hover:text-black">
            Add to Wishlist
          </button>
        </div>
        <div className="flex justify-between w-[97%]">
          <small>
            <a className="text-blue-500 underline" href="/">
              Notify Me
            </a>{" "}
            When thr Price Drop.
          </small>
          <p>
            Call us <strong>+1111113434</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
