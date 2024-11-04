import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./formVerifyEmailStyle.css";
import Logo from "../login/logo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
const FormVerifyEmail = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [genericPassword, setGenericPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
    console.log("es visible");
  };

  const urlBase = import.meta.env.VITE_API_BASE_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar los campos
    if (!genericPassword || !newPassword) {
      toast.error("Both generic password and new password are required");
      return;
    }

    try {
      const response = await axios.post(urlBase + "verify-email", {
        generic_password: genericPassword,
        new_password: newPassword,
      });

      toast.success("Password updated successfully!");

      setTimeout(() => {
        navigate("/");
      }, 5000);
    } catch (error) {
      if (error.response?.data?.messages?.error) {
        toast.error(error.response.data.messages.error);
      } else {
        toast.error(
          error.response?.data?.message ||
            "An error occurred. Please try again."
        );
      }
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="bg-blue-bg min-w-full h-screen flex flex-col items-center justify-center">
        <div className="container-card-verify-email mx-auto">
          <img
            src={Logo}
            alt=""
            className="mb-4 w-full md:w-[25rem] lg:w-[25rem]"
          />
          <h1 className="text-white font-bold text-2xl md:text-4xl lg:text-4xl">
            Verify User
          </h1>

          <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col items-center justify-center"
          >
            <input
              type="text"
              placeholder="Enter the generic password sent to your email"
              className="w-full md:w-[90%] lg:w-[90%] h-12 pl-4 rounded-full mt-8 focus:outline-none boxshadow"
              value={genericPassword}
              onChange={(e) => setGenericPassword(e.target.value)}
            />

            <div className="relative w-full md:w-[90%] lg:w-[90%] text-center mt-8">
              <input
                type={passwordVisible ? "text" : "password"}
                placeholder="Add New Password"
                className="h-12 w-full pl-4 rounded-full focus:outline-none boxshadow"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
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

            <button
              type="submit"
              className="w-40 h-12 mt-8 rounded-full text-blue-500 font-bold text-lg bg-white boxshadow"
            >
              New Password
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormVerifyEmail;
