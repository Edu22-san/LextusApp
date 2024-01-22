import React, { useState, useEffect, useRef } from "react";
import StatesColors from "../../Components/statesColors/statesColors";

const TabsCustomers = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [showDefaultContent, setShowDefaultContent] = useState(false);

  const tabs = ["Etapa 1", "Etapa 2"];
  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  const documentStates = {
    Evidence: "pending",
    "Application filled": "delivered",
    "Notices of 1997": "delivered",
    "Biometrics Appoinment notice": undefined,
    "Approved or denied": undefined,
    "Waitlist EAD application posible": undefined,
    "U-Visa granted": undefined,
  };

  const documentStates2 = {
    Evidence: "pending",
    "Application filled": "delivered",
    "Notices of 1997": "delivered",
    "Biometrics Appoinment notice": "delivered",
    "Approved or denied": "delivered",
    "Waitlist EAD application posible": "delivered",
    "U-Visa granted": "delivered",
  };

  const documents = [
    "Evidence",
    "Application filled",
    "Notices of 1997",
    "Biometrics Appoinment notice",
    "Approved or denied",
    "Waitlist EAD application posible",
    "U-Visa granted",
  ];
  return (
    <>
      <div className="grid grid-cols-2 items-center justify-center rounded-xl p-1 w-[90%] lg:w-[80%] md:w-[80%] mt-[1em] md:mt-[1rem] lg:mt-[1rem] gap-4">
        {tabs.map((tab, index) => (
          <div
            onClick={() => handleTabClick(index)}
            className={`rv-box-shadow-tabs w-full h-[8vh] cursor-pointer font-medium leading-5  text-xl md:text-2xl lg:text-2xl ${
              activeTab === index
                ? "bg-white text-blue-700 shadow"
                : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
            }`}
          >
            {tab}
          </div>
        ))}
      </div>
      <div className="mt-5 w-[90%]">
        <div
          className={`rounded-xl p-3 ${
            activeTab === 0 ? "" : "hidden"
          } ring-white/60 ring-offset-2 ring-offset-blue-400`}
        >
          <div className="w-full grid grid-cols-1 md:grid-cols-7 items-center justify-center  gap-4 mt-[1rem]">
            {documents.map((document, index) => (
              <div
                key={index}
                className={`rv-box-shadow-tabs h-[8vh] w-auto font-medium leading-5 ${
                  documentStates[document] === "pending"
                    ? "bg-bg-rojo text-white"
                    : documentStates[document] === "delivered"
                    ? "bg-bg-verde text-white"
                    : "bg-white text-blue-txt"
                }`}
              >
                <p className="w-full pl-[7px] pr-[7px] font-semibold text-[15px]  md:text-[18px] lg:text-[18px] ">
                  {document}
                </p>
              </div>
            ))}
          </div>
          <StatesColors />
        </div>
        <div
          className={`rounded-xl p-3 ${
            activeTab === 1 ? "" : "hidden"
          } ring-white/60 ring-offset-2 ring-offset-blue-400`}
        >
          <div className="w-full grid grid-cols-1 md:grid-cols-7 items-center justify-center  gap-4 mt-[1rem]">
            {documents.map((document, index) => (
              <div
                key={index}
                className={`rv-box-shadow-tabs h-[8vh] w-auto font-medium leading-5 ${
                  documentStates2[document] === "pending"
                    ? "bg-bg-rojo text-white"
                    : documentStates2[document] === "delivered"
                    ? "bg-bg-verde text-white"
                    : "bg-white text-blue-txt"
                }`}
              >
                <p className="w-full pl-[7px] pr-[7px] font-semibold text-[15px]  md:text-[18px] lg:text-[18px] ">
                  {document}
                </p>
              </div>
            ))}
          </div>
          <StatesColors />
        </div>
      </div>
    </>
  );
};

export default TabsCustomers;
