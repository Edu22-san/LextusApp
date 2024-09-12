import React, { useState, useEffect, useRef } from "react";
import StatesColors from "../../Components/statesColors/statesColors";
import Api from "../../services/api";

const TabsCustomers = ({ matters }) => {
  const [activeTab, setActiveTab] = useState(0);



  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  const getTabContainerClass = () => {
    switch (matters.length) {
      case 1:
        return "grid-cols-1 justify-center"; // Solo uno, centrar
      case 2:
        return "grid-cols-2"; // Dos, distribuir en dos columnas
      case 3:
        return "grid-cols-3"; // Tres, distribuir en tres columnas
      default:
        return "grid-cols-2"; // Más de tres, por defecto dos columnas
    }
  };
  

  return (
    <>
      <div className={`grid ${getTabContainerClass()} items-center rounded-xl p-1 w-[90%] lg:w-[80%] md:w-[80%] mt-[1em] md:mt-[1rem] lg:mt-[1rem] gap-4`}>
      {matters.map((matterData, index) => (
          <div
            key={index}
            onClick={() => handleTabClick(index)}
            className={`rv-box-shadow-tabs w-full h-[8vh] cursor-pointer font-medium leading-5 text-xl md:text-2xl lg:text-2xl ${
              activeTab === index
                ? "bg-white text-blue-700 shadow"
                : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
            }`}
          >
            <span className="font-bold">Matter:</span> {matterData.matter}
          </div>
        ))}
      </div>
      <div className="mt-5 w-[90%]">
      {mattersData.map((matter, index) => (
          <div
            key={index}
            className={`rounded-xl p-3 ${
              activeTab === index ? "" : "hidden"
            } ring-white/60 ring-offset-2 ring-offset-blue-400`}
          >
            <div className="w-full grid grid-cols-1 md:grid-cols-9 items-center justify-center gap-4 mt-[1rem]">
              {matter.steps.map((step, stepIndex) => (
                 <div
                 key={stepIndex}
                 className={`rv-box-shadow-tabs h-[7vh] w-auto font-medium leading-5 ${
                   step.status === "Pending"
                     ? "bg-red-500 text-white"
                     : step.status === "Completed"
                     ? "bg-green-500 text-white"
                     : ""
                 }`}
               >
                  <p className="w-full pl-[7px] pr-[7px] font-semibold text-[15px] md:text-[15px] lg:text-[15px]">
                    {step.step_name}
                  </p>
                </div>
              ))}
            </div>
            <StatesColors />
          </div>
        ))}
      </div>
    </>
  );
};

export default TabsCustomers;
