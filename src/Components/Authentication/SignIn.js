import React from "react";
import img1 from "../../Assets/OnlineJewellery.png";
import img2 from "../../Assets/whatsapp_chat.webp";
const SignUp = () => {
  return (
    <div>
      <input type="checkbox" id="signInModal" class="modal-toggle" />
      <div class="modal">
        <div class=" bg-slate-50 rounded-xl relative w-[720px] h-[520px] p-0">
          <label
            for="signInModal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="flex justify-between">
            <div className="w-[50%] ">
              <img className="h-[520px] rounded-xl" src={img1} alt="" />
            </div>
            <div className="w-[50%]">
              <h2 className="uppercase mt-10 text-xl ">Sign Up</h2>
              <div className="w-[60px] h-[2px] bg-success mx-auto"></div>
              <form>
                <input
                  type="text"
                  className="p-[10px] border-[1px] border-solid border-[#9A9A9A] h-[40px] w-[80%] my-5 rounded-xl"
                  placeholder="Enter Name"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="p-[10px] border-[1px] border-solid border-[#9A9A9A] h-[40px] w-[80%] mb-5 rounded-xl"
                />
                <div className="p-[10px] border-[1px] border-solid border-[#9A9A9A] h-[40px] w-[80%] mb-5 rounded-xl flex justify-between items-center px-0 mx-auto">
                  <select class=" w-full max-w-[69px] text-sm text-info border-r-2">
                    <option selected>AU+61</option>
                    <option>IN+91</option>
                    <option>UAE+96</option>
                    <option>BAN+88</option>
                    <option>UK+45</option>
                    <option>US+1</option>
                  </select>
                  <input
                    type="phone"
                    className="h-[39px] rounded-xl w-[90%] pl-1"
                  />
                </div>
                <small className="w-[80%] block mx-auto text-left text-xs">
                  By continuing, I agree to the{" "}
                  <a href="/" className="underline font-semibold">
                    Terms of Use & Privacy Policy
                  </a>
                </small>
                <div className="flex items-center w-[80%] mx-auto my-2">
                  <input
                    type="checkbox"
                    name="whatsapp"
                    id="whatsapp"
                    className="w-[20px] h-[20px]"
                  />
                  <label htmlFor="whatsapp" className="text-xs flex ml-2">
                    Subscribe me for{" "}
                    <img className="w-[20px] mx-1" src={img2} alt="" />{" "}
                    notifications.
                  </label>
                </div>
                <input
                  type="submit"
                  className="uppercase text-white w-[80%] h-[40px] bg-success rounded-xl my-4 "
                  value="Sign Up"
                />
              </form>
              <p>
                Already a member with us?{" "}
                <span className="text-success font-semibold mt-5">Sign in</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
