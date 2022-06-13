import React from "react";
import DashboardHeader from "./DashboardHeader";

const OrderTracking = () => {
  return (
    <div>
      <DashboardHeader title={"Order Tracking"}></DashboardHeader>
      <div className="w-[88%] mx-auto h-auto bg-[#f8f8f8] p-4 mt-4 py-20">
        <div className="flex items-center">
          <h2 className="text-2xl text-left font-semibold pb-2 mr-4">
            Get Tracking Code
          </h2>
        </div>

        <div className="my-4 flex items-center justify-center">
          <input
            type="text"
            className="w-[70%] px-3 py-2 rounded-full mr-3"
            placeholder="Get Tracking Code "
            name=""
            id="searchTrack"
          />
          <label htmlFor="searchTrack">
            <button className=" flex justify-between items-center w-[150px] h-[40px] font-semi px-2 bg-[#424A4D] text-white hover:bg-[white] hover:text-[#424A4D] border-2">
              View Tracking
            </button>
          </label>
        </div>
      </div>
    </div>
  );
};

export default OrderTracking;
