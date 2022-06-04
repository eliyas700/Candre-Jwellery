import React from "react";
import sample from "../../Assets/whatsapp.webp";
import gift from "../../Assets/gift.webp";
import ring from "../../Assets/ring.webp";
import certificate from "../../Assets/certificate.webp";
import diamond from "../../Assets/diamond.webp";
import car from "../../Assets/domesticshipping.webp";
import customercare from "../../Assets/Customer_care.svg";
const ProductMoreInfo = ({ product }) => {
  const { styleNo } = product;
  return (
    <div className="bg-[#f0f0f0] pt-7 ">
      <div className=" flex justify-between">
        <div class="overflow-x-auto p-4 w-[48%]">
          <table class="table table-compact w-full">
            <thead>
              <tr>
                <th>Product Details</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Style No</td>
                <td>{styleNo}</td>
              </tr>

              <tr class="hover">
                <td>Bottom Thickness</td>
                <td>0.2cm(2.00mm)</td>
              </tr>

              <tr>
                <td>Top Thickness</td>
                <td>0000</td>
              </tr>
              <tr>
                <td>Top Thickness</td>
                <td>0000</td>
              </tr>
              <tr>
                <td>Top Thickness</td>
                <td>0000</td>
              </tr>
              <tr>
                <td>Top Thickness</td>
                <td>0000</td>
              </tr>
            </tbody>
          </table>
          <table class="table table-compact w-full">
            <thead>
              <tr>
                <th>Diamond Details</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Style No</td>
                <td>{styleNo}</td>
              </tr>

              <tr class="hover">
                <td>Bottom Thickness</td>
                <td>0.2cm(2.00mm)</td>
              </tr>

              <tr>
                <td>Top Thickness</td>
                <td>0000</td>
              </tr>
              <tr>
                <td>Top Thickness</td>
                <td>0000</td>
              </tr>
              <tr>
                <td>Top Thickness</td>
                <td>0000</td>
              </tr>
              <tr>
                <td>Top Thickness</td>
                <td>0000</td>
              </tr>
            </tbody>
          </table>
          <table class="table table-compact w-full">
            <thead>
              <tr>
                <th>Metal Details</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Style No</td>
                <td>{styleNo}</td>
              </tr>

              <tr class="hover">
                <td>Bottom Thickness</td>
                <td>0.2cm(2.00mm)</td>
              </tr>

              <tr>
                <td>Top Thickness</td>
                <td>0000</td>
              </tr>
              <tr>
                <td>Top Thickness</td>
                <td>0000</td>
              </tr>
              <tr>
                <td>Top Thickness</td>
                <td>0000</td>
              </tr>
              <tr>
                <td>Top Thickness</td>
                <td>0000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="w-[49%] h-fit p-4 bg-white">
          <img src={sample} alt="" />
          <div class="card border-0 rounded-none  bg-primary text-white">
            <div class="card-body items-center text-center">
              <h2 class="card-title font-bold  text-xl uppercase ">
                Lorem, ipsum dolor sit amet consectetur
              </h2>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                illo eius quisquam modi iure aliquam unde pariatur eos sint
                itaque?Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
          <p className="bg-primary mt-5 py-5 text-white uppercase font-bold text-xl">
            Included with the Purchase
          </p>
          <ul className="grid grid-cols-2 my-4 items-center justify-center">
            <li className="flex items-center my-2">
              <img src={gift} alt="" />
              <span>Free gift boxs</span>
            </li>
            <li className="flex items-center my-2">
              <img src={ring} alt="" />
              <span className="ml-1"> Lorem ipsum dolor, sit </span>
            </li>
            <li className="flex items-center my-2">
              <img src={diamond} alt="" />
              <span className="ml-1"> Lorem ipsum dolor, sit </span>
            </li>
            <li className="flex items-center my-2">
              <img src={customercare} alt="" />
              <span className="ml-1"> Lorem ipsum dolor, sit </span>
            </li>
            <li className="flex items-center my-2">
              <img src={certificate} alt="" />
              <span className="ml-1"> Lorem ipsum dolor, sit </span>
            </li>
            <li className="flex items-center my-2">
              <img src={car} alt="" />
              <span className="ml-1"> Lorem ipsum dolor, sit </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductMoreInfo;
