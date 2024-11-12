import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./login.css";
import Logo from "./logo.png";
import Api from "../../services/api";
import { setSession } from "../../services/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Clear previous errors
    setEmailError("");
    setPasswordError("");
    setLoginError("");

    let hasError = false;

    // Validate email
    if (!email) {
      setEmailError("Email is required.");
      toast.error("Email is required.");
      hasError = true;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Email format is invalid.");
      toast.error("Email format is invalid.");
      hasError = true;
    }

    // Validate password
    if (!password) {
      setPasswordError("Password is required.");
      toast.error("Password is required.");
      hasError = true;
    }

    if (hasError) {
      return;
    }
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    const urlBase = import.meta.env.VITE_API_BASE_URL;

    axios
      .post(urlBase + "auth/login", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        setSession(response.data);

        toast.success("Login successful!");


        const role = response.data.id_rol;
        if (role === "1") {
          navigate("user/dashboard");
        } else if (role === "2") {
          navigate("user/dashboard-customer");
        } else {
   
          navigate("user/dashboard");
        }
      })
      .catch((error) => {
        if (error.response) {
          const backendMessage = error.response.data.message;
          const statusCode = error.response.status;

          if (
            statusCode === 403 &&
            backendMessage === "You have to change the generic password."
          ) {
            const redirectUrl = error.response.data.redirect;
            toast.error(backendMessage);
            setTimeout(() => {
              navigate(redirectUrl);
            }, 3000);
          } else if (backendMessage) {
            toast.error(backendMessage);
            setLoginError(backendMessage);
          }
        } else {
          // Manejar error general si no hay respuesta del backend
          setLoginError("An error occurred during login. Please try again.");
          toast.error("An error occurred during login. Please try again.");
        }

        console.error("Login error: ", error);
      });
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
    console.log("es visible");
  };

  return (
    <>
      <div className="bg-blue-bg min-w-full h-screen flex flex-col items-center justify-center">
        <div className="container-card-login mx-auto">
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />

          <h1 className="text-white font-bold text-2xl md:text-4xl lg:text-4xl">
            Welcome to Law Portal
          </h1>
          <img
            src={Logo}
            alt=""
            className="mt-4 w-full md:w-[25rem] lg:w-[25rem]"
          />

          <input
            type="text"
            placeholder="Usuario"
            className={`w-full md:w-1/2 lg:w-1/2 h-12 pl-4 rounded-full mt-8 focus:outline-none boxshadow ${
              emailError ? "border border-red-500" : ""
            }`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && (
            <div className="text-red-500 text-sm mt-2">{emailError}</div>
          )}

          <div className="relative w-full md:w-1/2 lg:w-1/2 text-center mt-8">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Password"
              className={`h-12 w-full pl-4 rounded-full focus:outline-none boxshadow ${
                passwordError ? "border border-red-500" : ""
              }`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordError && (
              <div className="text-red-500 text-sm mt-2">{passwordError}</div>
            )}

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

          <div className="w-1/2 mt-8 flex flex-col sm:flex-row items-center justify-between ">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="h-5 w-5 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
              />
              <label className="text-white">Remember me</label>
            </div>
            <a className="text-white hover:underline text-center">
              Forgot your password?
            </a>
          </div>
          <button
            className="w-40 h-12 mt-8 rounded-full text-blue-500 font-bold text-lg bg-white boxshadow"
            onClick={handleLogin}
          >
            Sign in
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
