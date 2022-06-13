import React from "react";
import { AiFillEye } from "react-icons/ai";
import { FaTrash } from "react-icons/fa";
import DashboardHeader from "./DashboardHeader";

const FavoriteSeller = () => {
  return (
    <div>
      <div>
        <DashboardHeader title={"Favorite Sellers"}></DashboardHeader>
        <div className="w-[88%] mx-auto h-auto bg-[#f8f8f8] p-4 mt-4 py-6">
          <div className="flex items-center">
            <h2 className="text-2xl text-left font-semibold pb-2 mr-4">
              Favorite Sellers
            </h2>
            <button className=" flex justify-between items-center w-[130px] h-[40px] font-semi px-2 bg-[#424A4D] text-white hover:bg-[white] hover:text-[#424A4D] border-2">
              Add Deposit
            </button>
          </div>
          <div className="w-[60px] h-[2px] bg-black"></div>

          <div class="overflow-x-auto mt-5 ">
            <table class="table table-zebra w-full">
              <thead className="">
                <tr>
                  <th>Shop Name</th>
                  <th>Owner Name</th>
                  <th>Address </th>
                  <th> Action</th>
                </tr>
              </thead>

              <tbody className="">
                <tr>
                  <td>Test Stores</td>
                  <td>User</td>
                  <td>Space Needle 400 Broad St, Seattles</td>
                  <td className="flex">
                    <button className="bg-[#424A4D] text-white hover:bg-[white] hover:text-[#424A4D] btn">
                      <AiFillEye size={20} />
                    </button>
                    <button className="bg-[#424A4D] text-white hover:bg-[white] hover:text-[#424A4D] btn">
                      <FaTrash size={20} />
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
    </div>
  );
};

export default FavoriteSeller;
