import React from "react";
import Rating from "react-rating";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Reviews = () => {
  return (
    <div className="my-12">
      <div className="w-[35%]">
        <h2 className="text-lg mb-1 text-info">Ratings</h2>
        <h1 className="text-5xl mb-1">4.9/5</h1>
        <Rating
          className="z-[-12]"
          initialRating={4.9}
          emptySymbol={<FontAwesomeIcon icon={faStar} />}
          fullSymbol={
            <FontAwesomeIcon style={{ color: "goldenrod" }} icon={faStar} />
          }
          readonly
        ></Rating>
        <p className="my-1">21 Review(s)</p>
        <div className="flex flex-col  ">
          <div className="flex items-center w-[100%] justify-around">
            <p>
              {" "}
              <FontAwesomeIcon style={{ color: "goldenrod" }} icon={faStar} />
              <FontAwesomeIcon style={{ color: "goldenrod" }} icon={faStar} />
              <FontAwesomeIcon style={{ color: "goldenrod" }} icon={faStar} />
              <FontAwesomeIcon style={{ color: "goldenrod" }} icon={faStar} />
              <FontAwesomeIcon style={{ color: "goldenrod" }} icon={faStar} />
            </p>
            <progress
              class="progress mb-2 progress-success bg-[#f0f0f0] w-56"
              value="75"
              max="100"
            ></progress>
            <p>(14)</p>
          </div>
          <div className="flex items-center w-[100%] justify-around">
            <p>
              <FontAwesomeIcon style={{ color: "goldenrod" }} icon={faStar} />
              <FontAwesomeIcon style={{ color: "goldenrod" }} icon={faStar} />
              <FontAwesomeIcon style={{ color: "goldenrod" }} icon={faStar} />
              <FontAwesomeIcon style={{ color: "goldenrod" }} icon={faStar} />
            </p>
            <progress
              class="progress mb-2 progress-success bg-[#f0f0f0] w-56"
              value="25"
              max="100"
            ></progress>
            <p>(7)</p>
          </div>
          <div className="flex items-center w-[100%] justify-around">
            <p>
              <FontAwesomeIcon style={{ color: "goldenrod" }} icon={faStar} />
              <FontAwesomeIcon style={{ color: "goldenrod" }} icon={faStar} />
              <FontAwesomeIcon style={{ color: "goldenrod" }} icon={faStar} />
            </p>
            <progress
              class="progress mb-2 progress-success bg-[#f0f0f0] w-56"
              value="0"
              max="100"
            ></progress>
            <p>(0)</p>
          </div>
          <div className="flex items-center w-[100%] justify-around">
            <p>
              <FontAwesomeIcon style={{ color: "goldenrod" }} icon={faStar} />
              <FontAwesomeIcon style={{ color: "goldenrod" }} icon={faStar} />
            </p>
            <progress
              class="progress mb-2 progress-success bg-[#f0f0f0] w-56"
              value="0"
              max="100"
            ></progress>
            <p>(0)</p>
          </div>
          <div className="flex items-center w-[100%] justify-around">
            <p>
              <FontAwesomeIcon style={{ color: "goldenrod" }} icon={faStar} />
            </p>
            <progress
              class="progress mb-2 progress-success bg-[#f0f0f0] w-56"
              value="0"
              max="100"
            ></progress>
            <p>(0)</p>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Reviews;
