import React, { useState } from "react";
import logo from "../../images/valtec-logo.png";
import { Link } from "react-router-dom";
import { signup } from "../../features/auth/authAction";
import { useDispatch } from "react-redux";

const SignUp = () => {
  const dispatch = useDispatch();

  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="w-full h-[100vh] flex justify-center items-center font-mono bg-slate-300">
      <div className="bg-white/40 backdrop-blur-xl md:w-[30%] w-[90%] p-3   md:h-auto py-4 shadow-xl rounded-md flex flex-col justify-center items-center">
        <img src={logo} alt="logo" className="logo" />
        <h1 className="text-[35px] uppercase mt-[20px]">Sign Up</h1>
        <div className="flex flex-col md:w-[80%] w-full gap-5 mt-[50px]">
          <div className="flex justify-between">
            <input
              type="text"
              placeholder="First Name"
              onChange={(e) => setFirstName(e.target.value)}
              className="md:p-6 p-5 text-[20px] w-[45%] border-solid border-[2px] border-gray-500 focus:outline-0"
            />
            <input
              type="text"
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
              className="md:p-6 p-5 text-[20px] w-[45%] border-solid border-[2px] border-gray-500 focus:outline-0"
            />
          </div>

          <input
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className="md:p-6 p-5 text-[20px] border-solid border-[2px] border-gray-500 focus:outline-0"
          />

          <div className="flex justify-between">
            <input
              type="text"
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
              className="md:p-6 p-5 w-[45%] text-[20px] border-solid border-[2px] border-gray-500 focus:outline-0"
            />
            <input
              type="text"
              placeholder="Date Of Birth"
              onChange={(e) => setDob(e.target.value)}
              className="md:p-6 p-5 text-[20px] w-[45%] border-solid border-[2px] border-gray-500 focus:outline-0"
            />
          </div>
          <input
            type="text"
            placeholder="Phone Number"
            onChange={() => setPhoneNumber(e.target.value)}
            className="md:p-6 p-5 text-[20px] border-solid border-[2px] border-gray-500 focus:outline-0"
          />
          <input
            type="text"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            className="md:p-6 p-5 text-[20px] border-solid border-[2px] border-gray-500 focus:outline-0"
          />
          <button
            onClick={() => console.log("/dashboard/jobs")}
            className="bg-green-600 p-4 rounded-full text-white text-[25px]"
          >
            submit
          </button>
          <div className="flex justify-around items-center mt-[20px] text-[20px]">
            <h1 className="cursor-pointer text-blue-700">Forgot Password ?</h1>
            <Link to="/">
              <h1 className="cursor-pointer text-blue-700">Login</h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
