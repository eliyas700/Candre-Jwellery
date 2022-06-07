import React from "react";
import { Link } from "react-router-dom";
import tracking from "../../Assets/tracking.svg";
const SmallHeader = () => {
  return (
    <div className="bg-secondary text-primary py-2">
      <div className="w-[85%] mx-auto flex justify-between">
        <div className="w-[25%] flex justify-between">
          <div className="flex items-center">
            <svg
              width="18"
              height="18"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.0025 0H9.9975C4.48375 0 0 4.485 0 10C0 12.1875 0.705 14.215 1.90375 15.8612L0.6575 19.5763L4.50125 18.3475C6.0825 19.395 7.96875 20 10.0025 20C15.5162 20 20 15.5138 20 10C20 4.48625 15.5162 0 10.0025 0Z"
                fill="#4CAF50"
              ></path>
              <path
                d="M15.8213 14.1212C15.58 14.8025 14.6225 15.3675 13.8588 15.5325C13.3363 15.6437 12.6538 15.7325 10.3563 14.78C7.4175 13.5625 5.525 10.5762 5.3775 10.3825C5.23625 10.1887 4.19 8.80123 4.19 7.36623C4.19 5.93123 4.91875 5.23248 5.2125 4.93248C5.45375 4.68623 5.8525 4.57373 6.235 4.57373C6.35875 4.57373 6.47 4.57998 6.57 4.58498C6.86375 4.59748 7.01125 4.61498 7.205 5.07873C7.44625 5.65998 8.03375 7.09498 8.10375 7.24248C8.175 7.38998 8.24625 7.58998 8.14625 7.78373C8.0525 7.98373 7.97 8.07248 7.8225 8.24248C7.675 8.41248 7.535 8.54248 7.3875 8.72498C7.2525 8.88373 7.1 9.05373 7.27 9.34748C7.44 9.63498 8.0275 10.5937 8.8925 11.3637C10.0088 12.3575 10.9138 12.675 11.2375 12.81C11.4788 12.91 11.7663 12.8862 11.9425 12.6987C12.1663 12.4575 12.4425 12.0575 12.7238 11.6637C12.9238 11.3812 13.1763 11.3462 13.4413 11.4462C13.7113 11.54 15.14 12.2462 15.4338 12.3925C15.7275 12.54 15.9213 12.61 15.9925 12.7337C16.0625 12.8575 16.0625 13.4387 15.8213 14.1212Z"
                fill="#FAFAFA"
              ></path>
            </svg>
            <p className="ml-2 text-sm">Whatsapp Us!</p>
          </div>
          <div className="flex items-center">
            <img src={tracking} alt="" />
            <p className="text-sm ml-2">Order Tracking</p>
          </div>
        </div>
        <div className="w-[50%">
          <small className="font-bold text-xs text-black">
            EXTRA 5% Instant Discount on Jewellery with Ships Fast tag*
          </small>
        </div>
        <div className="w-[25%]">
          <ul className="flex justify-around">
            <Link to="/contact" className="text-sm">
              Contact Us
            </Link>
            <li className="text-sm">Blog</li>
            <li>
              <select class=" border-2 rounded-2xl text-xs border-primary">
                <option>AUD</option>
                <option>GBD</option>
                <option>CAD</option>
                <option>EUR</option>
                <option selected>INR</option>
                <option>SGD</option>
                <option>USD</option>
                <option>AED</option>
              </select>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SmallHeader;
