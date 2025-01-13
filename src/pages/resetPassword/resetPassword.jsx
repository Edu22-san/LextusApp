import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./resetPassword.css";
import Logo from "../login/logo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const ResetPassword = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [genericPassword, setGenericPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [email, setEmail] = useState("");
  const [step, setStep] = useState(1);

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const urlBase = import.meta.env.VITE_API_BASE_URL;

  const handleNextStep = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email.");
      return;
    }

    try {
      // Crear el objeto FormData
      const formData = new FormData();
      formData.append("email", email);

      // Llamar al endpoint
      const response = await axios.post(
        urlBase + "send-password-code",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      toast.success("A generic password has been sent to your email!");
      setStep(2);
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

  const handleBackStep = (e) => {
    e.preventDefault();
    setStep(1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!genericPassword || !newPassword) {
      toast.error("Both generic password and new password are required");
      return;
    }

    try {
      const response = await axios.post(urlBase + "update-password", {
        email: email,
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
        <div className="container-card-reset-password mx-auto">
          <img
            src={Logo}
            alt=""
            className="mb-4 w-full md:w-[25rem] lg:w-[25rem]"
          />
          <h1 className="text-white font-bold text-2xl md:text-4xl lg:text-4xl">
            Reset password
          </h1>

          {step === 1 && (
            <div className="step1 w-full">
              <form
                onSubmit={handleNextStep}
                className="w-full flex flex-col items-center justify-center rv-contenedor-resetpassword"
              >
                <h1 className="text-blue-txt font-bold text-[18px] md:text-[20px] lg:text-[20px]">
                  Please enter your email
                </h1>
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="w-full h-12 pl-4 rounded-full mt-8 focus:outline-none bg-[#e8f0fe] text-blue-txt input-white text-[14px] md:text-[16px] lg:text-[16px]"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="w-full flex flex flex-row items-center justify-end mt-5">
                  <button
                    type="submit"
                    className="w-[40%] md:w-40 lg:w-40 h-auto md:h-12 lg:h-12 rounded-full text-blue-500 font-bold text-[16px] md:text-lg lg:text-lg bg-white boxshadow border-2 border-blue-500"
                  >
                    Next
                  </button>
                </div>
              </form>
            </div>
          )}

          {step === 2 && (
            <div className="step2 w-full">
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col items-center justify-center rv-contenedor-resetpassword"
              >
                <h1 className="text-blue-txt font-bold text-[18px] md:text-[20px] lg:text-[20px] text-center">
                  A generic password has been sent to your email
                </h1>
                <input
                  type="text"
                  placeholder="Enter the generic password"
                  className="w-full h-12 pl-4 rounded-full mt-4 focus:outline-none bg-[#e8f0fe] text-blue-txt input-white text-[14px] md:text-[16px] lg:text-[16px]"
                  value={genericPassword}
                  onChange={(e) => setGenericPassword(e.target.value)}
                />

                <div className="relative w-full text-center mt-[4px] md:mt-6 lg:mt-6">
                  <input
                    type={passwordVisible ? "text" : "password"}
                    placeholder="Add New Password"
                    className="w-full h-12 pl-4 rounded-full focus:outline-none bg-[#e8f0fe] text-blue-txt input-white text-[14px] md:text-[16px] lg:text-[16px]"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                  <span
                    className="container-icon2 absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
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
                <div className="w-full flex flex flex-row items-center justify-end mt-5">
                 
                  <button
                    type="submit"
                    className="w-[45%] md:w-40 lg:w-40 h-auto md:h-12 lg:h-12 rounded-full text-blue-500 font-bold text-[16px] md:text-lg lg:text-lg bg-white boxshadow border-2 border-blue-500"
                  >
                    New Password
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
