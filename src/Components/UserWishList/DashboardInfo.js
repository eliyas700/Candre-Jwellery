import React from "react";
import DashboardHeader from "./DashboardHeader";

const DashboardInfo = () => {
  return (
    <div>
      <DashboardHeader title={"Dashboard"}></DashboardHeader>
      <div className="w-[90%] mx-auto grid grid-cols-2 gap-20">
        <div className="w-[400px] h-[350px] bg-[#f8f8f8] p-4 mt-4">
          <h2 className="text-2xl text-left font-semibold pb-2">
            Account Info
          </h2>
          <div className="w-[60px] h-[2px] bg-black"></div>
          <ul className="text-left text-info">
            <li className="font-semibold  text-lg text-black my-3">User</li>
            <li>Email : user@gmail.com</li>
            <li>Phone : 348585778542</li>
            <li>Fax : 348585778542</li>
            <li>City : Test City</li>
            <li>Zip : 9880</li>
            <li> Address : Test City</li>
          </ul>
        </div>
        <div className="w-[400px] h-[350px] bg-[#f8f8f8] p-4 mt-4">
          <h2 className="text-2xl text-left font-semibold pb-2">My Wallet</h2>
          <div className="w-[60px] h-[2px] bg-black"></div>
          <h2 className="font-semibold text-xl text-black text-left my-4">
            Affiliate Bonus :
          </h2>
          <p className="font-semibold text-xl text-black text-left my-4">
            0.64 $
          </p>
          <div className="w-[96%] h-[1px] bg-info mx-auto"></div>
          <h2 className="font-semibold text-xl text-black text-left my-4">
            Wallet Balance :
          </h2>
          <p className="font-semibold text-xl text-black text-left my-4">
            103545.64 $
          </p>
          <button className="btn btn-info">Add Deposit</button>
        </div>
      </div>
    </div>
  );
};

export default DashboardInfo;
