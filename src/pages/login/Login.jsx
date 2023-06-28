import "./login.scss";
import logo from "../../images/valtec-logo.png";

const Login = () => {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center font-mono bg-slate-300">
      <div className="bg-white/40 backdrop-blur-xl md:w-[30%] w-[90%] p-3 md:p-0  md:h-[50%] shadow-xl rounded-md flex flex-col justify-center items-center">
        <img src={logo} alt="logo" className="logo" />
        <div className="flex flex-col md:w-[80%] w-full gap-5 mt-[50px]">
          <input
            type="text"
            placeholder="username"
            className="p-4 text-[20px]"
          />
          <input
            type="text"
            placeholder="password"
            className="p-4 text-[20px]"
          />
          <button className="bg-green-600 p-4 rounded-full text-white text-[25px]">submit</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
