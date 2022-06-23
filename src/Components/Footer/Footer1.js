import React from "react";
import facebook from "../../Assets/facebook.svg";
import twitter from "../../Assets/twitter.svg";
import blog from "../../Assets/blog.svg";
import youtube from "../../Assets/youtube.svg";
import wikipidiea from "../../Assets/wikipedia.svg";
import instagram from "../../Assets/instagram.svg";
const Footer1 = () => {
  return (
    <div className="bg-[#DBE4EB] py-8 my-5">
      <div className="flex w-[85%] items-center mx-auto">
        <div className="w-[25%]">
          <h2 className="text-base text-[#79769D] font-semibold ">
            Sign up for our offer Updates:{" "}
          </h2>
        </div>
        <div className=" w-[-50%] lg:w-[50%]">
          <form>
            <input
              className="py-1 mr-2 px-1"
              type="text"
              placeholder="Your email Address"
            />
            <input
              className="py-1 mr-2 mt-2 px-1"
              type="text"
              placeholder="Your mobile Number"
            />
            <input
              type="submit"
              className="text-semibold btn mt-2 bg-[#79769D] btn-sm rounded-none  text-white "
              value="Subscribe Now"
            />
          </form>
        </div>
        <div className=" w-[50%]lg:w-[23%]">
          <p className="text-base text-[#79769D]">Follow us on: </p>
          <ul className="flex justify-center mt-1 items-center">
            <li className="mr-3">
              <a href="https://www.facebook.com/" title="Facebook">
                <img width={"16px"} src={facebook} alt="facebook" />
              </a>
            </li>
            <li className="mr-3">
              <a href="https://twitter.com/" title="Twitter">
                <img width={"16px"} src={twitter} alt="twitter" />
              </a>
            </li>
            <li className="mr-3">
              <a href="https://www.youtube.com" title="youtube">
                <img width={"16px"} src={youtube} alt="youtube" />
              </a>
            </li>
            <li className="mr-3">
              <a href="/" title="Blog">
                <img width={"16px"} src={blog} alt="blog" />
              </a>
            </li>
            <li className="mr-3">
              <a href="/" title="Wikipidia">
                <img width={"16px"} src={wikipidiea} alt="Wiki" />
              </a>
            </li>
            <li className="mr-3">
              <a href="/" title="instagram">
                <img width={"16px"} src={instagram} alt="Instagram" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer1;
