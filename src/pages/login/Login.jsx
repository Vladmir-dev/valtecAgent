import "./login.scss";
import logo from "../../images/valtec-logo.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Spinner } from "react-activity";
import "react-activity/dist/library.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { login } from "../../features/auth/authAction";

const Login = () => {
  const navigate = useNavigate();
  const loading = useSelector((state) => state.user.isLoading);
  const dispatch = useDispatch()
  // console.log("loading",loading)

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    if (password && email) {
        console.log("email", email)
        console.log("password", password)
      const data = JSON.stringify({ email, password });
    //   console.log("data===>",data)
      dispatch(login(data));
    } else {
    console.log("Please Provide Login Details")
    }
  };

  return (
    <div className="w-full h-[100vh] flex justify-center items-center font-mono bg-slate-300">
      <div className="bg-white/40 backdrop-blur-xl md:w-[30%] w-[90%] p-3 py-4  md:h-auto shadow-xl rounded-md flex flex-col justify-center items-center">
        <img src={logo} alt="logo" className="logo" />
        <h1 className="text-[35px] uppercase mt-[20px]">Login</h1>
        <div className="flex flex-col md:w-[80%] w-full gap-5 mt-[50px]">
          <input
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className="md:p-6 p-5 text-[20px] border-solid border-[2px] border-gray-500 focus:outline-0"
          />
          <input
            type="text"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            className="md:p-6 p-5 text-[20px] border-solid border-[2px] border-gray-500 focus:outline-0"
          />
          <button
            onClick={handleSignIn}
            className="bg-green-600 p-4 rounded-full text-white text-[25px] flex justify-center items-center"
          >
            {loading ? <Spinner /> : "submit"}
          </button>
          <div className="flex justify-around items-center mt-[20px] text-[20px]">
            <h1 className="cursor-pointer text-blue-700">Forgot Password ?</h1>
            <Link to="/signup">
              <h1 className="cursor-pointer text-blue-700">Sign Up</h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
