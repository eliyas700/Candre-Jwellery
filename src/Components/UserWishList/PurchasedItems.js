import React from "react";
import DashboardHeader from "./DashboardHeader";

const PurchasedItems = () => {
  return (
    <div>
      <DashboardHeader title={"Purchased Items"}></DashboardHeader>
      <div className="w-[88%] mx-auto h-auto bg-[#f8f8f8] p-4 mt-4 py-6">
        <h2 className="text-2xl text-left font-semibold pb-2">
          Purchased Items
        </h2>
        <div className="w-[60px] h-[2px] bg-black"></div>

        <div className="flex justify-between mt-9">
          <div>
            <span>Show</span>
            <select name="" id="" className="w-[60px] mx-3 border-2">
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">25</option>
            </select>
            <span>Entries</span>
          </div>
          <div>
            <label htmlFor="search">Search :</label>
            <input
              className="border-2 border-info w-[160px] ml-2"
              type="text"
              name=""
              id=""
            />
          </div>
        </div>
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

            {/* <tbody className=""></tbody> */}
          </table>
          <p className="text-info min-w-[100%] font-semibold mx-auto  py-3 bg-white block">
            No Data Available in table
          </p>
          <p className="text-left mt-8">Showing 0 to 0 of 0 entries </p>
          <div className="mx-auto w-[30%] my-7">
            <div class="btn-group  my-4">
              <button class="btn ">Previous</button>

              <button class="btn">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchasedItems;
