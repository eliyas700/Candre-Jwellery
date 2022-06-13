import React from "react";
import DashboardHeader from "./DashboardHeader";

const ResetPassword = () => {
  return (
    <div>
      <DashboardHeader title={"Deposite"}></DashboardHeader>
      <div className="w-[88%]  h-auto bg-[#f8f8f8] p-4 mt-4 py-6">
        <h2 className="text-2xl text-left font-semibold pb-2 mr-4">
          Reset Password
        </h2>
        <div className="w-[60px] h-[2px] bg-black mx-0"></div>

        <form className="mt-10">
          <input
            type="password"
            placeholder="Current Password"
            className="w-[80%] px-2 py-3 mb-5"
          />
          <input
            type="password"
            placeholder="New Password"
            className="w-[80%] px-2 py-3 mb-5"
          />
          <input
            type="password"
            placeholder="Re-type New Password"
            className="w-[80%] px-2 py-3 mb-5"
          />
          <input
            type="submit"
            className="block  w-[80px] h-[40px] font-semi px-2 bg-[#424A4D] text-white hover:bg-[white] hover:text-[#424A4D] border-2 ml-24"
          />
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
