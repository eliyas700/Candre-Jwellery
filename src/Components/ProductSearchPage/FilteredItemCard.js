import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { AiFillStar } from "react-icons/ai";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import img1 from "../../Assets/c012928_1_3.webp";
import img2 from "../../Assets/c012928_2_4.webp";
import img3 from "../../Assets/c012928_5_3.webp";
// import required modules
import { EffectCube, Pagination } from "swiper";
import { Link, useNavigate } from "react-router-dom";
const FilteredItemCard = () => {
  const navigate = useNavigate();
  return (
    <div className="grid  mt-3 grid-cols-1 lg:grid-cols-3">
      <div
        onClick={() => navigate("/singleProduct")}
        class="card card-compact w-[273px] h-[378px] shadow-none hover:shadow-xl  bg-base-100 rounded-none "
      >
        <figure>
          <>
            <Swiper
              effect={"cube"}
              grabCursor={true}
              cubeEffect={{
                shadow: false,
                slideShadows: false,
                shadowOffset: 0,
                shadowScale: 0.94,
              }}
              pagination={true}
              modules={[EffectCube, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={img1} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img2} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img3} alt="" />
              </SwiperSlide>
            </Swiper>
          </>
        </figure>
        <div class="px-1 mt-3  py-1">
          <div className="flex justify-between">
            {" "}
            <div>
              <p className="text-orange-500 text-l g font-semibold">
                Rs 21,513
              </p>
            </div>
            <div>
              <p className="flex w-[100px] items-center text-info">
                4.8
                <AiFillStar className="text-orange-500" size={22} /> |
                <span> (116)</span>
              </p>
            </div>
          </div>
          <p className="text-orange-500 text-sm mt-2">
            25% off on Diamond and Gemstone pr..
          </p>
        </div>
      </div>
    </div>
  );
};

export default FilteredItemCard;
