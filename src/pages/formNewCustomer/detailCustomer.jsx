import React, { useState, useRef, useEffect } from "react";
import { Tab } from "@headlessui/react";
import "./assets/detailCustomer.css";
import { Link, useParams, useNavigate } from "react-router-dom";
import Api from "../../services/api";


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const DetailCustomer = () => {
  const [selectedMatterIndex, setSelectedMatterIndex] = useState(0);
  const { id_customer } = useParams();
  const [customerDetail, setCustomerDetail] = useState(null);

  const getDetailCustomer = () => {
    Api.get(`customer-information/${id_customer}`)
      .then((response) => {
        console.log("datass", response.data);
        setCustomerDetail(response.data);
      })
      .catch((error) => {
        console.error("Error fetching customer details:", error);
      });
  };

  useEffect(() => {
    getDetailCustomer();
  }, [id_customer]);

  const getStatusClass = (status) => {
    switch (status) {
      case "Completed":
      case "Submitted":
      case "Accepted":
        return "text-green-rv";
      case "Pending":
      case "Upload":
        return "text-red-500";
      default:
        return "text-gray-500";
    }
  };

  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1); 
  };

  const tabs = ["Steps", "Checklist"];

  const currentMatter = customerDetail?.data?.steps_per_matter[selectedMatterIndex];

  return (
    <div className="min-w-full p-[2rem] md:p-[4rem] lg:p-[4rem]">
      <button
        onClick={handleBack}
        className="bg-white bg-opacity-70 mb-4 rounded-full w-[30px] h-[30px]"
      >
        <i className="fa-solid fa-chevron-left"></i>
      </button>

      <div className="w-[full] bg-[white] rounded-[20px] p-[20px] mb-[20px] md:mb-[36px] lg:mb-[36px] grid3">
        <div className="w-[full] border-b-[2px] border-gray-500 mb-4">
          <p className="text-[22px] font-semibold text-blue-bg font-manrope">
            User Information
          </p>
        </div>
        <div className="flex flex-row items-center justify-between ">
          <i className="fa-solid fa-user text-[70px] text-blue-bg w-[20%] flex items-center justify-center"></i>
          <div className="flex flex-col md:flex-row lg:flex-row items-center justify-around w-[80%]">
            <div>
              <p className="text-[14px] md:text-lg lg:text-lg font-semibold text-gray-rv font-manrope md:mb-[1rem] lg:mb-[1rem]">
                First Name:{" "}
                {customerDetail ? customerDetail.data.first_name : "Loading..."}
              </p>
              <p className="text-[14px] md:text-lg lg:text-lg font-semibold text-gray-rv font-manrope">
                Email:{" "}
                {customerDetail ? customerDetail.data.email : "Loading..."}
              </p>
            </div>
            <div>
              <p className="text-[14px] md:text-lg lg:text-lg font-semibold text-gray-rv font-manrope md:mb-[1rem] lg:mb-[1rem]">
                Last Name:{" "}
                {customerDetail ? customerDetail.data.last_name : "Loading..."}
              </p>
              <p className="text-[14px] md:text-lg lg:text-lg font-semibold text-gray-rv font-manrope">
                Matters:{" "}
                {customerDetail && customerDetail.data.matters
                  ? customerDetail.data.matters.join(", ")
                  : "Loading..."}
              </p>
            </div>
          </div>
        </div>
      </div>

      {customerDetail && currentMatter ? (
        <div className="grid-customer-detail">
          <div className="w-[full] bg-[white] rounded-[20px] p-[20px] grid1">
            <div className="w-[full] border-b-[2px] border-gray-500 mb-4">
              <p className="text-[22px] font-semibold text-blue-bg font-manrope">
                Documents delivered by matter
              </p>
            </div>
            <div>
              <p className="text-[70px] text-center font-semibold text-blue-bg font-manrope">
                {currentMatter.submitted_or_accepted_count}
              </p>
            </div>
          </div>

          <div className="w-[full] bg-[white] rounded-[20px] p-[20px] grid2">
            <div className="w-[full] border-b-[2px] border-gray-500 mb-4">
              <p className="text-[22px] font-semibold text-blue-bg font-manrope">
                {currentMatter.matter_name}
              </p>
            </div>
            <Tab.Group>
              <Tab.List className="rounded-xl p-1 w-full h-auto md:h-auto lg:h-auto  grid grid-cols-2 gap-2 md:gap-4 lg:gap-4 mb-[1rem]">
                {tabs.map((tab, index) => (
                  <Tab
                    key={index}
                    className={({ selected }) =>
                      classNames(
                        "w-full py-2.5 text-[15px] md:text-xl lg:text-xl font-medium leading-5 border-2 border-solid border-white rounded-[12px] h-auto md:h-[7vh] lg:h-[7vh]",
                        "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                        selected
                          ? "bg-blue-bg text-white shadow"
                          : "bg-gray-200 text-black"
                      )
                    }
                  >
                    {tab}
                  </Tab>
                ))}
              </Tab.List>

              <Tab.Panels className="w-full mt-[2rem] md:mt-[0] lg:mt-[0]  h-auto md:h-[30vh] lg:h-[30vh] rounded-xl outline-none ring-2 overflow-y-auto">
                <Tab.Panel
                  className={classNames(
                    "rounded-xl bg-white p-3",
                    "ring-white/60 ring-offset-2 ring-offset-blue-400 h-full"
                  )}
                >
                  <div className="w-[full] border-b-[2px] border-gray-500 mb-[12px] flex flex-row justify-between">
                    <p className="text-[18px] font-[600] text-blue-bg font-manrope">
                      Step
                    </p>
                    <p className="text-[18px] font-[600] text-blue-bg font-manrope">
                      Status
                    </p>
                  </div>
                  <ul className="w-[full]">
                    {currentMatter.steps.map((step, index) => (
                      <li key={index} className="flex justify-between mb-[10px]">
                        <p className="text-[16px] text-blue-bg">
                          {step.step_name}
                        </p>
                        <p className={`text-[16px] ${getStatusClass(step.step_status)}`}>
                          {step.step_status}
                        </p>
                      </li>
                    ))}
                  </ul>
                </Tab.Panel>

                <Tab.Panel
                  className={classNames(
                    "rounded-xl bg-white p-3",
                    "ring-white/60 ring-offset-2 ring-offset-blue-400 h-full"
                  )}
                >
                  <div className="w-[full] border-b-[2px] border-gray-500 mb-[12px] flex flex-row justify-between">
                    <p className="text-[18px] font-[600] text-blue-bg font-manrope">
                      Item
                    </p>
                    <p className="text-[18px] font-[600] text-blue-bg font-manrope">
                      Status
                    </p>
                  </div>
                  <ul className="w-[full]">
                    {currentMatter.steps.map((step) =>
                      step.items.map((item, index) => (
                        <li key={index} className="flex justify-between mb-[10px]">
                          <p className="text-[16px] text-blue-bg">{item.item_name}</p>
                          <p className={`text-[16px] ${getStatusClass(item.status)}`}>
                            {item.status}
                          </p>
                        </li>
                      ))
                    )}
                  </ul>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      ) : (
        <div className="text-center mt-4">
          <p>Loading customer details...</p>
        </div>
      )}
    </div>
  );
};

export default DetailCustomer;

