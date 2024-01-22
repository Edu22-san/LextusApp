import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./assets/dashboardCustomer.css";
import ChatCustomer from "../../Components/chatCustomer/chatCustomer";
import TabsCustomers from "../../Components/tabsCustomers/tabsCustomers";
import CardsDColumOne from "../../Components/cardsDashboardCustomers/cardColumOne";
import CardColumTwo from "../../Components/cardsDashboardCustomers/cardColumTwo";

const DashboardCustomer = () => {
  return (
    <>
      <div className="min-w-full flex flex-col items-center justify-center mt-[4rem]">
        <div className="md:w-[40%] lg:w-[40%] w-[90%] flex flex-col items-center justify-center">
          <h1 className="text-white text-5xl lg:text-8xl md:text-8xl font-bold text-center">
            Lorem ipsum
          </h1>
          <p className="text-center text-white text-xl md:text-2xl lg:text-2xl font-light pt-2">
            This is the client's dashboard
          </p>
        </div>

        <TabsCustomers />
        <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center rounded-xl p-1 w-[90%] lg:w-[75%] md:w-[75%] mt-[3rem] gap-8 md:gap-10 lg:gap-10">
          <CardsDColumOne />

          <CardColumTwo/>
          <div className="w-full">
            <ChatCustomer />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardCustomer;
