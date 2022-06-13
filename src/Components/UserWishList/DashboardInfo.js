import React from "react";
import DashboardHeader from "./DashboardHeader";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ChangingProgressProvider from "./ChangingProgressProvider";
const DashboardInfo = () => {
  const percentage = 0;
  return (
    <div>
      <DashboardHeader title={"Dashboard"}></DashboardHeader>
      <div className="w-[90%] mx-auto">
        <div className=" grid grid-cols-2 gap-x-24">
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
          <div className="w-[400px] h-[350px] bg-[#f8f8f8] p-4 mt-4 py-6">
            <div className="w-[200px] mx-auto">
              <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                styles={buildStyles({
                  rotation: 0.25,

                  strokeLinecap: "butt",

                  textSize: "16px",

                  pathTransitionDuration: 0.5,

                  pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
                  textColor: "#f88",
                  trailColor: "#90EBF5",
                  backgroundColor: "#3e98c7",
                })}
              />
              ;
            </div>
            <h2 className="font-bold ">Total Orders</h2>
            <p className="text-info text-semibold">All Times</p>
          </div>
          <div className="w-[400px] h-[350px] bg-[#f8f8f8] p-4 mt-4 py-6">
            <div className="w-[200px] mx-auto">
              <ChangingProgressProvider values={[0, 20, 40, 60, 76]}>
                {(percentage) => (
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                    styles={buildStyles({
                      pathTransitionDuration: 0.15,
                      rotation: 0.25,

                      strokeLinecap: "butt",

                      textSize: "16px",
                      pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
                      textColor: "#f88",
                      trailColor: "#F5C765",
                      backgroundColor: "#3e98c7",
                    })}
                  />
                )}
              </ChangingProgressProvider>
              ;
            </div>
            <h2 className="font-bold ">Pending Orders</h2>
            <p className="text-info text-semibold">All Times</p>
          </div>
        </div>
        <div className="w-[99%] mx-auto h-auto bg-[#f8f8f8] p-4 mt-4 py-6">
          <h2 className="text-2xl text-left font-semibold pb-2">
            Recent Orders
          </h2>
          <div className="w-[60px] h-[2px] bg-black"></div>
          <div class="overflow-x-auto mt-5 ">
            <table class="table table-zebra w-full">
              <thead className="">
                <tr>
                  <th>#order</th>
                  <th>Date</th>
                  <th>Order total</th>
                  <th>Order Status</th>
                  <th>View</th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardInfo;
