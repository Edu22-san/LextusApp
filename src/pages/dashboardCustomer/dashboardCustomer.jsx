import React, { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./assets/dashboardCustomer.css";
import ChatCustomer from "../../Components/chatCustomer/chatCustomer";
import TabsCustomers from "../../Components/tabsCustomers/tabsCustomers";
import CardDocumentsPending from "../../Components/cardsDashboardCustomers/CardDocumentsPending";
import CardChecklists from "../../Components/cardsDashboardCustomers/CardChecklists";
import Api from "../../services/api";
import StatesColors from "../../Components/statesColors/statesColors";

const DashboardCustomer = () => {
  const [mattersData, setMattersData] = useState([]);
  const [activeTab, setActiveTab] = useState(0);
  const [isChatVisible, setIsChatVisible] = useState(false);

  function mattersbyuser_get() {
    Api.get("user-matter")
      .then((response) => {
        if (response.data) {
          console.log("Datos:", response.data);
          setMattersData(response.data);
        }
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
      });
  }

  useEffect(() => {
    mattersbyuser_get();
  }, []);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  // crear grid dependiendo de mattersData
  const getTabContainerClass = () => {
    switch (mattersData.length) {
      case 1:
        return "grid-cols-1 justify-center";
      case 2:
        return "grid-cols-2";
      case 3:
        return "grid-cols-3";
      default:
        return "grid-cols-2";
    }
  };
  // visibilidad de chat
  const toggleChatVisibility = () => {
    setIsChatVisible(!isChatVisible);
  };

  return (
    <>
      <div className="min-w-full max-w-[1600px] w-[85%] flex flex-col items-center justify-center mt-[4rem] relative">
        <div className="md:w-[40%] lg:w-[40%] w-[90%] flex flex-col items-center justify-center">
          <h1 className="text-white text-5xl lg:text-7xl md:text-5xl font-bold text-center">
            Welcome to <br /> Lextus Portal
          </h1>
          <p className="text-center text-white text-xl md:text-2xl lg:text-2xl font-light pt-2">
            This is the client's dashboard
          </p>
        </div>

        <div
          className={`grid ${getTabContainerClass()} items-center bg-white-rv rounded-full p-1 max-w-[1600px] w-auto mt-[1em] md:mt-[1rem] lg:mt-[1rem] gap-4 p-[12px]`}
        >
          {mattersData.map((matterData, index) => (
            <div
              key={index}
              onClick={() => handleTabClick(index)}
              className={`rv-box-shadow-tabs w-full cursor-pointer font-medium leading-5 px-[15px] py-[10px] text-xl md:text-2xl lg:text-2xl  ${
                activeTab === index
                  ? "bg-white text-blue-700 shadow"
                  : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
              }`}
            >
              <span className="font-bold">Matter:</span> {matterData.matter}
            </div>
          ))}
        </div>
        <div className="mt-5 max-w-[1600px] w-[85%] grid-card-dashboard-customer">
          <div className="card-dashboard-customer1 p-5 color-txt-rv text-base font-medium leading-5 bg-white flex flex-col justify-start items-center boxshadow-rv2 overflow-y-auto">
            <div className="w-full flex flex-row items-center justify-between pb-1 border-b-2 border-solid border-gray-300">
              <div className="flex flex-row items-center">
                <i className="fa-regular fa-folder-open text-[#061056] mr-1"></i>
                <p className="text-blue-500 text-lg font-bold text-[14px] md:text-[17px] lg:text-[17px]">
                  Steps
                </p>
              </div>
              <StatesColors />
            </div>
            {mattersData.map((matter, index) => (
              <div
                key={index}
                className={`rounded-xl p-3 w-full ${
                  activeTab === index ? "" : "hidden"
                } ring-white/60 ring-offset-2 ring-offset-blue-400`}
              >
                <div className="container-steps-dashboard-customer">
                  {matter.steps.map((step, stepIndex) => (
                    <div
                      key={stepIndex}
                      className="flex flex-row items-center justify-between mb-[10px]"
                    >
                      <p className="w-full pl-[7px] pr-[7px] text-[14px] text-blue-txt">
                        {step.step_name} / {step.estimated_date}
                      </p>
                      <p
                        className={`w-[15px] h-[15px] font-medium leading-5 mx-[4px] rounded-full ${
                          step.status === "Pending"
                            ? "bg-red-rv text-white"
                            : step.status === "Completed"
                            ? "bg-green-rv text-white"
                            : ""
                        }`}
                      ></p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <CardDocumentsPending checklist={mattersData} />

          <CardChecklists checklist={mattersData} />
        </div>
        <button className="btn-message" onClick={toggleChatVisibility}>
          <i className="fa-regular fa-comments text-[18px]"></i>
        </button>

        <div className={`chat-container ${isChatVisible ? "visible" : ""}`}>
          <ChatCustomer />
        </div>
      </div>
    </>
  );
};

export default DashboardCustomer;
