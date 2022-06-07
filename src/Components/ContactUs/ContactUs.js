import React from "react";
import call from "../../Assets/call.svg";
import clock from "../../Assets/clock.svg";
import mail from "../../Assets/mail.svg";
import img from "../../Assets/whatsapp (1).webp";
const ContactUs = () => {
  return (
    <div className="bg-[#f3f3f3] py-2 flex justify-between ">
      <div className="w-[76%] bg-white ml-4 mr-2  ">
        <div className="pt-14  pb-7 ">
          <h3 className="text-3xl font- uppercase text-center">Contact Us</h3>
          <div className="w-40  h-[1px] bg-slate-800 mx-auto"></div>
          <p className="text-[13px] text-left px-6 py-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            accusamus quis molestias aspernatur eaque. Explicabo dolorum
            distinctio hic ducimus veniam? Ipsum laudantium atque, accusamus
            distinctio
          </p>
        </div>
        <div className="w-[90%] h-[1px] bg-slate-800 mx-auto"></div>
        <div className="w-[95%] mx-auto py-10 flex justify-between">
          <div class="overflow-x-auto w-[60%]">
            <table class="table table-compact w-full">
              <tbody>
                <tr>
                  <td className="border-0">
                    <div className="flex">
                      <img className="w-[20px]" src={call} alt="" />
                      <span className="ml-2 text-info">Call:</span>
                    </div>
                  </td>
                  <td className="font-bold border-0 text-info">+121434343</td>
                </tr>
                <tr>
                  <td className="border-0">
                    <div className="flex">
                      <img className="w-[20px]" src={clock} alt="" />
                      <span className="ml-2 text-info">Working Hrs:</span>
                    </div>
                  </td>
                  <td className="border-0">
                    <p className="font-bold text-info">
                      9:00 am to 9:00pm{" "}
                      <span className="font-normal">(7days a week)</span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border-0">
                    <div className="flex">
                      <img className="w-[20px]" src={mail} alt="" />
                      <span className="ml-2 text-info">Email:</span>
                    </div>
                  </td>
                  <td className="border-0">
                    <tr>
                      <td className="border-0">For Customer Support </td>
                      <td className="font-bold border-0 text-info">
                        :support@joolie.com
                      </td>
                    </tr>
                    <tr>
                      <td className="border-0">Careers </td>
                      <td className="font-bold border-0 text-info">
                        :support@joolie.com
                      </td>
                    </tr>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className=" border-left  w-[38%] h-16">
            <div>
              <h1 className="text-info font-semibold text-normal text-left pl-6">
                Corporate Office :
              </h1>
              <p className="text-sm text-left mx-auto pl-6 pt-4">
                Psyber Inc
                <br />
                A-75, Aditya Estate,
                <br /> Mind Space, <br />
                Malad West
                <br /> Mumbai, Maharashtra 400064
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[28%] pl-4 pr-3">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default ContactUs;
