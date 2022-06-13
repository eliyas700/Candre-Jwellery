import React from "react";
import DashboardHeader from "./DashboardHeader";
import img from "../../Assets/user.png";
const EditProfile = () => {
  return (
    <div>
      <DashboardHeader title={"Edit Profile"}></DashboardHeader>
      <div className="w-[88%] mx-auto h-auto bg-[#f8f8f8] p-4 mt-4 py-20">
        <div className="flex items-center">
          <h2 className="text-2xl text-left font-semibold pb-2 mr-4">
            Edit Profile
          </h2>
        </div>
        <div className="w-[60px] h-[2px] bg-black"></div>

        <div className="my-20 ">
          <div className="flex items-center ml-7 ">
            <img width={98} src={img} alt="" />
            <button className=" ml-3 flex justify-between items-center w-[80px] h-[40px] font-semibold  bg-[#424A4D] text-white hover:bg-[white] hover:text-[#424A4D] border-2 text-center px-2 ">
              Upload
            </button>
          </div>
          <form className="px-7 py-7">
            <div className="grid grid-cols-2 gap-x-12 gap-y-9">
              <input
                type="text"
                placeholder="User Name"
                className="px-1 py-2 w-[100%]"
              />

              <input
                type="text"
                placeholder="User Mail"
                className="px-1 py-2 w-[100%] bg-white"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="px-1 py-2 w-[100%]"
              />

              <input
                type="text"
                placeholder="Fax"
                className="px-1 py-2 w-[100%] bg-white"
              />
              <input
                type="text"
                placeholder="City"
                className="px-1 py-2 w-[100%] bg-white"
              />
              <select name="" id="">
                <option value="bd">Bangladesh</option>
                <option value="in">India</option>
                <option value="pak">Pakistan</option>
              </select>
              <input
                type="text"
                placeholder="Zip"
                className="px-1 py-2 w-[100%]"
              />

              <input
                type="text"
                placeholder="State"
                className="px-1 py-2 w-[100%] bg-white"
              />
            </div>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="w-[100%] mt-8 p-6"
              placeholder="Address"
            ></textarea>
            <button
              type="submit"
              className=" ml-3 flex justify-center items-center w-[100px] h-[40px] font-semibold  bg-[#424A4D] text-white hover:bg-[white] hover:text-[#424A4D] border-2 text-center mt-5 "
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
