import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./cardLogin.css";
import Logo from "./logo.png";

const CardLogin = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
      <div className="container-card-login mx-auto">
        <h1 className="text-white font-bold text-4xl">Welcome to Law Portal</h1>
        <img src={Logo} alt="" className="mt-4" />
        <input
          type="text"
          placeholder="Usuario"
          className="w-1/2 h-12 pl-4 rounded-full mt-4 focus:outline-none boxshadow"
        />
        <div className="relative w-1/2 text-center mt-8">
          <input
            type={passwordVisible ? "text" : "password"}
            placeholder="Password"
            className="h-12 w-full pl-4 rounded-full focus:outline-none boxshadow"
          />
          <span
            className="container-icon absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            {passwordVisible ? (
              <i
                className="fa-regular fa-eye icon-style"
                style={{ color: "#b2b2b2", cursor: "pointer" }}
              ></i>
            ) : (
              <i
                className="fa-regular fa-eye-slash icon-style"
                style={{ color: "#b2b2b2", cursor: "pointer" }}
              ></i>
            )}
          </span>
        </div>
        <div className="w-1/2 mt-8 flex items-center justify-between ">
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="h-5 w-5 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
            />
            <label className="text-white">Remember me</label>
          </div>
          <a className="text-white hover:underline">Forgot your password?</a>
        </div>
        <button className="w-40 h-12 mt-8 rounded-full text-blue-500 font-bold text-lg bg-white boxshadow">
          <Link
            to="/user/dashboard"
            className="flex items-center justify-center w-full h-full"
          >
            Sign in
          </Link>
        </button>
      </div>
    </>
  );
};

export default CardLogin;
