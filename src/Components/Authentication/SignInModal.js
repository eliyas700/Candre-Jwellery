import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import signUpImg from "../../Assets/OnlineJewellery.png";
import signInImg from "../../Assets/sign_in.webp";
import whatsapp from "../../Assets/whatsapp_chat.webp";
import ApiService from "../../Services/api.service";
import { TokenService } from "../../Services/Storage.service";

const temp = {
  email: "",
  password: "",
  user_type: "Customer",
};
const SignInModal = () => {
  const [signUp, setSignUp] = useState(false);
  const [signIn, setSignIn] = useState(true);

  const [values, setValues] = useState(temp);
  const onChangeHandler = (e) => {
    let { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const navigate = useNavigate();
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("accounts/login", {
        ...values,
      });
      TokenService.saveData(res.data);
      TokenService.saveToken(res.data.token);
      ApiService.setHeader();
      toast.success("Logged in successful");
      navigate("/cart");
    } catch (error) {
      console.log(error.response);
      toast.error(error.response.data.non_field_errors[0]);
    }
  };

  return (
    <div>
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
            {!signUp && signIn ? (
              <div className="flex justify-between items-center">
                <div className="w-[50%] ">
                  <img
                    className="h-[520px] rounded-xl"
                    src={signInImg}
                    alt=""
                  />
                </div>
                <div className="w-[50%]">
                  <h2 className="uppercase mt-10 text-xl ">login</h2>
                  <div className="w-[60px] h-[2px] bg-success mx-auto mb-10"></div>
                  <form onSubmit={onSubmit}>
                    <input
                      type="email"
                      name="email"
                      value={values.email}
                      onChange={onChangeHandler}
                      placeholder="Enter E-mail Id/Phone number"
                      className="p-[10px] border-[1px] border-solid border-[#9A9A9A] h-[40px] w-[80%] mb-5 rounded-xl"
                    />
                    <input
                      type="password"
                      name="password"
                      onChange={onChangeHandler}
                      value={values.value}
                      placeholder="Enter Password"
                      className="p-[10px] border-[1px] border-solid border-[#9A9A9A] h-[40px] w-[80%] mb-5 rounded-xl"
                    />

                    <button
                      type="submit"
                      className="uppercase text-white w-[80%] h-[40px] bg-success rounded-xl my-4 "
                    >
                      Continue
                    </button>
                  </form>
                  <p>
                    Do not have an account?{" "}
                    <button
                      className="text-success font-semibold mt-5 "
                      onClick={() => {
                        setSignUp(true);
                        setSignIn(false);
                      }}
                    >
                      Sign Up
                    </button>
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex justify-between">
                <div className="w-[50%] ">
                  <img
                    className="h-[520px] rounded-xl"
                    src={signUpImg}
                    alt=""
                  />
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
                        placeholder="Mobile"
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
                        <img className="w-[20px] mx-1" src={whatsapp} alt="" />{" "}
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
                    <button
                      className="text-success font-semibold mt-5 "
                      onClick={() => {
                        setSignUp(false);
                        setSignIn(true);
                      }}
                    >
                      Sign In
                    </button>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInModal;
