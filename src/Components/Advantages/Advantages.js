import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import trust from "../../Assets/trust.svg";
import "./Swiperstyles.css";

// import required modules
import { Pagination, Navigation } from "swiper";

const Advantages = () => {
  const Advantages = [
    {
      id: 1,
      name: "Trust of Joolie Jewellers ",
      img: "https://i.ibb.co/dMfnWnr/trust.png",
    },
    {
      id: 2,
      name: "Trust of Joolie",
      img: "https://i.ibb.co/dMfnWnr/trust.png",
    },
    {
      id: 3,
      name: "Trust of Joolie",
      img: "https://i.ibb.co/dMfnWnr/trust.png",
    },
    {
      id: 4,
      name: "Trust of Joolie",
      img: "https://i.ibb.co/dMfnWnr/trust.png",
    },
    {
      id: 5,
      name: "Trust of Joolie",
      img: "https://i.ibb.co/dMfnWnr/trust.png",
    },
    {
      id: 6,
      name: "Trust of Joolie",
      img: "https://i.ibb.co/dMfnWnr/trust.png",
    },
    {
      id: 7,
      name: "Trust of Joolie",
      img: "https://i.ibb.co/dMfnWnr/trust.png",
    },
    {
      id: 8,
      name: "Trust of Joolie",
      img: "https://i.ibb.co/dMfnWnr/trust.png",
    },
  ];
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        slidesPerGroup={4}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {Advantages.map((a) => (
          <SwiperSlide key={a.id}>
            <div className="h-[200px] flex flex-col items-center justify-center px-2">
              <img className=" block w-[40px] h-auto" src={a.img} alt="" />
              <p className="text-[#979797]">{a.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Advantages;
