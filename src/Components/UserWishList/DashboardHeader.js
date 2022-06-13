import React from "react";
import img from "../../Assets/1648110638breadpng.png";
const DashboardHeader = ({ title }) => {
  return (
    <div className="relative">
      <img className="h-[140px] w-[100%]" src={img} alt="" />
      <h2 className="absolute top-[44%] left-[44%] text-4xl text-white font-semibold">
        {title}
      </h2>
    </div>
  );
};

export default DashboardHeader;
