import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./assets/dashboardCustomer.css";
import Slider from "react-slick";
import { useMediaQuery } from "react-responsive";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./assets/dashboardCustomer.css";

const DashboardCustomer = () => {
  const [activeTab, setActiveTab] = useState(-1);
  const [showDefaultContent, setShowDefaultContent] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: 1,
    prevArrow: (
      <div className="custom-arrow">
        <i class="fa-solid fa-chevron-left"></i>
      </div>
    ),
    nextArrow: (
      <div className="custom-arrow">
        <i class="fa-solid fa-chevron-right"></i>
      </div>
    ),
  };

  const tabs = [
    "Evidence",
    "Application filled",
    "Notices of 1997",
    "Biometrics Appoinment notice",
    "Approved or denied",
    "Waitlist EAD application posible",
    "U-Visa granted",
  ];
  const handleTabClick = (index) => {
    setActiveTab(index);
  };

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

        <div className="w-[80%]">
          <Slider {...settings}>
            {tabs.map((tab, index) => (
              <div className="item-tab-slider ">
                <div
                  onClick={() => handleTabClick(index)}
                  className={`rv-box-shadow-tabs w-full cursor-pointer font-medium leading-5  text-[15px]  md:text-[20px] lg:text-[20px] ${
                    activeTab === index
                      ? "bg-white text-blue-700 shadow"
                      : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                  }`}
                >
                  {tab}
                </div>
              </div>
            ))}
          </Slider>

          <div className="mt-5 w-full">
            <div
              className={`rounded-xl p-3 ${
                activeTab === 0 ? "" : "hidden"
              } ring-white/60 ring-offset-2 ring-offset-blue-400`}
            >
              <p>Content for View Users</p>
            </div>
            <div
              className={`rounded-xl p-3 ${
                activeTab === 1 ? "" : "hidden"
              } ring-white/60 ring-offset-2 ring-offset-blue-400`}
            >
              <p>Content for View Document Catalogs</p>
            </div>
            <div
              className={`rounded-xl p-3 ${
                activeTab === 2 ? "" : "hidden"
              } ring-white/60 ring-offset-2 ring-offset-blue-400`}
            >
              <p>Content for View Plans</p>
            </div>
            <div
              className={`rounded-xl p-3 ${
                activeTab === 3 ? "" : "hidden"
              } ring-white/60 ring-offset-2 ring-offset-blue-400`}
            >
              <p>Content for Tab 4</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center rounded-xl p-1 w-[90%] lg:w-[75%] md:w-[75%] mt-[3rem] gap-8 md:gap-12 lg:gap-12">
          <div className=" w-full  flex flex-col justify-between h-auto md:h-[70vh] lg:h-[70vh]">
            <div className="p-5 color-txt-rv text-base font-medium leading-5 bg-white flex flex-col justify-start items-center boxshadow-rv2 w-full h-auto lg:h-[33vh] md:h-[33vh]">
              <div className="w-full flex flex-row items-center justify-between pb-1 border-b-2 border-solid border-gray-300">
                <div className="flex flex-row items-center">
                  <i class="fa-regular fa-folder-open text-gray-300 mr-1"></i>
                  <p className="text-blue-500 text-lg md:text-xl lg:text-xl  font-bold ">
                    Pending Documents
                  </p>
                </div>
                <Link className="bg-gray-300 py-1 px-4 rounded-lg text-gray-700">
                  {" "}
                  Details
                </Link>
              </div>
              <div className="w-full flex flex-col items-center py-4 h-full flex items-center justify-center">
                <h2 className="text-5xl md:text-6xl lg:text-8xl text-purple-primary font-bold">
                  5
                </h2>
                <p className="text-gray-500 text-lg md:text-xl lg:text-xl">
                  documents
                </p>
              </div>
            </div>

            <div className="p-5 color-txt-rv text-base font-medium leading-5 bg-white flex flex-col justify-start items-center boxshadow-rv2 w-full h-auto lg:h-[33vh] md:h-[33vh] mt-[2rem] md:mt-[0] lg:mt-[0]">
              <div className="w-full flex flex-row items-center justify-between pb-1 border-b-2 border-solid border-gray-300">
                <div className="flex flex-row items-center">
                  <i class="fa-solid fa-file-signature text-gray-300 mr-1"></i>
                  <p className="text-blue-500 text-lg md:text-xl lg:text-xl  font-bold ">
                    Contract information
                  </p>
                </div>
                <Link className="bg-gray-300 py-1 px-4 rounded-lg text-gray-700">
                  {" "}
                  Details
                </Link>
              </div>
              <div className="w-full flex flex-col items-center justify-center py-3 h-full">
                <p className="text-gray-500 text-lg md:text-xl lg:text-xl">
                  Contract Amount
                </p>
                <h2 className="text-5xl md:text-5xl lg:text-4xl text-purple-primary font-bold">
                  $5,000,00
                </h2>
                <p className="text-gray-500 text-lg md:text-xl lg:text-xl">
                  Actual due
                </p>
                <h2 className="text-5xl md:text-5xl lg:text-4xl text-purple-primary font-bold">
                  $1,235,00
                </h2>
              </div>
            </div>
          </div>

          <div className="p-5 color-txt-rv text-base font-medium leading-5 bg-white flex flex-col items-center justify-evenly boxshadow-rv2 w-full h-auto lg:h-h-[70vh] md:h-[70vh]">
            <div className="w-full">
              <div className="w-full flex flex-row items-center justify-between pb-1 border-b-2 border-solid border-gray-300">
                <div className="flex flex-row items-center">
                  <i class="fa-solid fa-check text-gray-300 mr-1"></i>
                  <p className="text-blue-500 text-lg md:text-xl lg:text-xl  font-bold ">
                    Visa-U Checklist
                  </p>
                </div>
                <Link className="bg-gray-300 py-1 px-4 rounded-lg text-gray-700">
                  {" "}
                  Details
                </Link>
              </div>
              <div className="w-full flex flex-col items-center py-3">
                <ul className="list-decimal">
                  <li className="text-blue-txt text-lg md:text-xl lg:text-xl">
                    Document/days/accepted
                  </li>
                  <li className="text-blue-txt text-lg md:text-xl lg:text-xl">
                    Document/days/accepted
                  </li>
                  <li className="text-blue-txt text-lg md:text-xl lg:text-xl">
                    Document/days/upload
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full">
              <div className="w-full flex flex-row items-center justify-between pb-1 border-b-2 border-solid border-gray-300">
                <div className="flex flex-row items-center">
                  <i class="fa-regular fa-folder-open text-gray-300 mr-1"></i>
                  <p className="text-blue-500 text-lg md:text-xl lg:text-xl  font-bold ">
                    Visa-u Checklist Sibling
                  </p>
                </div>
                <Link className="bg-gray-300 py-1 px-4 rounded-lg text-gray-700">
                  {" "}
                  Details
                </Link>
              </div>
              <div className="w-full flex flex-col items-center py-3">
                <ul className="list-decimal">
                  <li className="text-blue-txt text-lg md:text-xl lg:text-xl">
                    Document/days/accepted
                  </li>
                  <li className="text-blue-txt text-lg md:text-xl lg:text-xl">
                    Document/days/accepted
                  </li>
                  <li className="text-blue-txt text-lg md:text-xl lg:text-xl">
                    Document/days/upload
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardCustomer;
