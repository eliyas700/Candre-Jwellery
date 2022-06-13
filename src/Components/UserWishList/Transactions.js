import React from "react";
import DashboardHeader from "./DashboardHeader";

const Transactions = () => {
  return (
    <div>
      <DashboardHeader title={"Transactions"}></DashboardHeader>
      <div className="w-[88%] mx-auto h-auto bg-[#f8f8f8] p-4 mt-4 py-6">
        <div className="flex items-center">
          <h2 className="text-2xl text-left font-semibold pb-2 mr-4">
            Transactions
          </h2>
        </div>
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
                <th>Transaction ID</th>
                <th>Amount</th>
                <th>Transaction Date</th>
                <th> Details</th>
                <th> View</th>
              </tr>
            </thead>

            <tbody className="">
              <tr>
                <td>zVk0117N9V</td>
                <td>+ 30$</td>
                <td>29-Apr-2022</td>
                <td>Payment Deposit</td>
                <td>
                  <button className=" flex justify-between items-center btn font-semi px-2 bg-[#424A4D] text-white hover:bg-[white] hover:text-[#424A4D] border-2">
                    View
                  </button>
                </td>
              </tr>
              <tr>
                <td>zVk0117N9V</td>
                <td>0$</td>
                <td>29-Apr-2022</td>
                <td>Payment Deposit</td>
                <td>
                  <button className=" flex justify-between items-center btn font-semi px-2 bg-[#424A4D] text-white hover:bg-[white] hover:text-[#424A4D] border-2">
                    View
                  </button>
                </td>
              </tr>
            </tbody>
          </table>

          <p className="text-left mt-8">Showing 1 to 2 of 2 entries </p>
          <div className="mx-auto w-[30%] my-7">
            <div class="btn-group  my-4">
              <button class="btn ">Previous</button>
              <button class="btn btn-active ">1</button>
              <button class="btn">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
