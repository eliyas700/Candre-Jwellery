import React from "react";
import { FaDollarSign } from "react-icons/fa";

const Packages = () => {
  return (
    <div className="w-[90%] mx-auto">
      <div className="grid grid-cols-2 gap-14">
        <div className="w-[370px] h-[484px] border-2 hover:bg-[#143250] text-black hover:text-white ">
          <h2 className="text-3xl font-bold py-5 ">Standard</h2>
          <div className="w-[120px] h-[120px] rounded-full border-2 mx-auto ">
            <h4 className="text-4xl font-bold flex flex-col mx-auto justify-center items-center pt-3">
              <FaDollarSign size={24} />
              60 <p className="text-sm font-normal">45 Days</p>
            </h4>
          </div>
          <ol className="grid grid-cols-1 gap-y-4 mt-4">
            <li>1.Lorem ipsum dolor sit amet.</li>
            <li>2.Lorem ipsum dolor sit amet.</li>
            <li>3.Lorem ipsum dolor sit amet.</li>
          </ol>
          <button className="btn mt-4">Current Plan</button>
          <p className="">
            Ends on : 23-March-2022{" "}
            <a className="underline text-blue-700" href="/">
              Renew
            </a>
          </p>
        </div>
        <div className="w-[370px] h-[484px] border-2 hover:bg-[#143250] text-black hover:text-white ">
          <h2 className="text-3xl font-bold py-5 ">Standard</h2>
          <div className="w-[120px] h-[120px] rounded-full border-2 mx-auto ">
            <h4 className="text-4xl font-bold flex flex-col mx-auto justify-center items-center pt-3">
              <FaDollarSign size={24} />
              60 <p className="text-sm font-normal">45 Days</p>
            </h4>
          </div>
          <ol className="grid grid-cols-1 gap-y-4 mt-4">
            <li>1.Lorem ipsum dolor sit amet.</li>
            <li>2.Lorem ipsum dolor sit amet.</li>
            <li>3.Lorem ipsum dolor sit amet.</li>
          </ol>
          <button className="btn mt-4">Current Plan</button>
          <p className="">
            Ends on : 23-March-2022{" "}
            <a className="underline text-blue-700" href="/">
              Renew
            </a>
          </p>
        </div>
        <div className="w-[370px] h-[484px] border-2 hover:bg-[#143250] text-black hover:text-white ">
          <h2 className="text-3xl font-bold py-5 ">Standard</h2>
          <div className="w-[120px] h-[120px] rounded-full border-2 mx-auto ">
            <h4 className="text-4xl font-bold flex flex-col mx-auto justify-center items-center pt-3">
              <FaDollarSign size={24} />
              60 <p className="text-sm font-normal">45 Days</p>
            </h4>
          </div>
          <ol className="grid grid-cols-1 gap-y-4 mt-4">
            <li>1.Lorem ipsum dolor sit amet.</li>
            <li>2.Lorem ipsum dolor sit amet.</li>
            <li>3.Lorem ipsum dolor sit amet.</li>
          </ol>
          <button className="btn mt-4">Current Plan</button>
          <p className="">
            Ends on : 23-March-2022{" "}
            <a className="underline text-blue-700" href="/">
              Renew
            </a>
          </p>
        </div>
        <div className="w-[370px] h-[484px] border-2 hover:bg-[#143250] text-black hover:text-white ">
          <h2 className="text-3xl font-bold py-5 ">Standard</h2>
          <div className="w-[120px] h-[120px] rounded-full border-2 mx-auto ">
            <h4 className="text-4xl font-bold flex flex-col mx-auto justify-center items-center pt-3">
              <FaDollarSign size={24} />
              60 <p className="text-sm font-normal">45 Days</p>
            </h4>
          </div>
          <ol className="grid grid-cols-1 gap-y-4 mt-4">
            <li>1.Lorem ipsum dolor sit amet.</li>
            <li>2.Lorem ipsum dolor sit amet.</li>
            <li>3.Lorem ipsum dolor sit amet.</li>
          </ol>
          <button className="btn mt-4">Current Plan</button>
          <p className="">
            Ends on : 23-March-2022{" "}
            <a className="underline text-blue-700" href="/">
              Renew
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Packages;
