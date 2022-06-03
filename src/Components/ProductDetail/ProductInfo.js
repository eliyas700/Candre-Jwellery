import React from "react";
import Rating from "react-rating";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ProductInfo = ({ product }) => {
  const { name, rating, reviews, totalSell, price } = product;
  return (
    <div className="py-3">
      <div>
        <h1 className=" text-3xl text-left text-accent  my-4 font-serif tracking-tight">
          {name}
        </h1>
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
            Total Sell: <span className="text-2xl font-serif">{totalSell}</span>
          </p>
        </div>
        <h2 className=" mt-5 text-left text-4xl text-black font-bold font-serif">
          Rs {price}
        </h2>
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
