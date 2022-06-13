import React from "react";
import { Link, Outlet } from "react-router-dom";
import SmallHeader from "../Header1/SmallHeader";
import Header2 from "../Header2/Header2";
import Header3 from "../Header3/Header3";
import DashboardHeader from "./DashboardHeader";

const UserWishList = () => {
  return (
    <div>
      <Header2></Header2>
      {/* <DashboardHeader></DashboardHeader> */}
      <div>
        <>
          <div className="navbar-end  lg:hidden">
            <label
              tabIndex="1"
              htmlFor="my-drawer-2"
              className="btn btn-accent lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
          </div>
          <div className="drawer drawer-mobile overflow-hidden">
            <input
              id="my-drawer-2"
              type="checkbox"
              className="drawer-toggle "
            />
            <div className="drawer-content ">
              {/* <!-- Page content here --> */}

              <Outlet></Outlet>
            </div>
            <div className="drawer-side min-h-screen overflow-hidden">
              <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
              <ul className="menu p-4 w-48 lg:w-56 bg-primary  text-neutral text-sm ">
                {/* <!-- Sidebar content here --> */}
                <h2 className="text-xl font-semibold border-b-2 mb-3 uppercase pb-2">
                  Dashboard
                </h2>
                <li>
                  <Link to="/wishlist" className="border-b-2">
                    Dashboard
                  </Link>
                </li>

                <li>
                  <div class="dropdown relative">
                    <label
                      tabindex="0"
                      class="flex justify-between items-center"
                    >
                      Listing
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default UserWishList;