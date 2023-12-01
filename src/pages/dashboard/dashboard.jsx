import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./assets/dashboard.css";

const Dashboard = () => {
  return (
    <>
      <div className="min-w-full flex flex-col items-center justify-center mt-[4rem]">
        <div className="w-[40%] flex flex-col items-center justify-center">
          <h1 className="text-white text-8xl font-bold">Lorem ipsum</h1>
          <p className="text-center text-white text-2xl font-light pt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center rounded-xl p-1 w-[70%] mt-[2rem] gap-4">
          <Link to="/user/tabscontenido" className="py-2.5 text-white text-2xl font-medium leading-5 bg-transparent flex flex-col justify-center items-center boxshadow-rv w-full">
            View Users
          </Link>
          <Link to="" className="py-2.5 text-white text-2xl font-medium leading-5 bg-transparent flex flex-col justify-center items-center boxshadow-rv w-full">
            View Document Catalogs
          </Link>
          <Link to="" className="py-2.5 text-white text-2xl font-medium leading-5 bg-transparent flex flex-col justify-center items-center boxshadow-rv w-full" >
            View Payment Plans
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center rounded-xl p-1 w-[85%] mt-[3rem] gap-4">

          <div className="p-5 color-txt-rv text-base font-medium leading-5 bg-white flex flex-col justify-start items-center boxshadow-rv2 w-full h-[33vh]">
            <div className="w-full flex flex-row items-center justify-between pb-1 border-b-2 border-solid border-gray-300">
              <div className="flex flex-row items-center">
                <i class="fa-solid fa-users text-gray-300 mr-1"></i>
                <p className="text-blue-500 text-lg md:text-xl lg:text-xl  font-bold ">Actual users</p>
              </div>
              <Link className="bg-gray-300 py-1 px-4 rounded-lg text-gray-700"> Details</Link>
            </div>
            <div className="w-full flex flex-col items-center py-4">
              <h2 className="text-5xl md:text-6xl lg:text-8xl text-purple-primary font-bold">565</h2>
              <p className="text-gray-500 text-lg md:text-xl lg:text-xl">Users</p>
            </div>
          </div>

          <div className="p-5 color-txt-rv text-base font-medium leading-5 bg-white flex flex-col justify-start items-center boxshadow-rv2 w-full h-[33vh]">
            <div className="w-full flex flex-row items-center justify-between pb-1 border-b-2 border-solid border-gray-300">
              <div className="flex flex-row items-center">
                <i class="fa-regular fa-folder-open text-gray-300 mr-1"></i>
                <p className="text-blue-500 text-lg md:text-xl lg:text-xl  font-bold ">60 days documents</p>
              </div>
              <Link className="bg-gray-300 py-1 px-4 rounded-lg text-gray-700"> Details</Link>
            </div>
            <div className="w-full flex flex-col items-center py-4">
              <h2 className="text-5xl md:text-6xl lg:text-8xl text-purple-primary font-bold">2.5k</h2>
              <p className="text-gray-500 text-lg md:text-xl lg:text-xl">Documents</p>
            </div>
          </div>

          <div className="p-5 color-txt-rv text-base font-medium leading-5 bg-white flex flex-col justify-start items-center boxshadow-rv2 w-full h-auto lg:h-[33vh] md:h-[33vh]">
            <div className="w-full flex flex-row items-center justify-between pb-1 border-b-2 border-solid border-gray-300">
              <div className="flex flex-row items-center">
                <i class="fa-regular fa-folder-open text-gray-300 mr-1"></i>
                <p className="text-blue-500 text-lg md:text-xl lg:text-xl  font-bold ">Billing information</p>
              </div>
              <Link className="bg-gray-300 py-1 px-4 rounded-lg text-gray-700"> Details</Link>
            </div>
            <div className="w-full flex flex-col items-center py-3">
              <p className="text-gray-500 text-lg md:text-xl lg:text-xl">Monthly Billing</p>
              <h2 className="text-5xl md:text-5xl lg:text-4xl text-purple-primary font-bold">$6,658.00</h2>
              <p className="text-gray-500 text-lg md:text-xl lg:text-xl">Actual due</p>
              <h2 className="text-5xl md:text-5xl lg:text-4xl text-purple-primary font-bold">$10,895.00</h2>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Dashboard;
