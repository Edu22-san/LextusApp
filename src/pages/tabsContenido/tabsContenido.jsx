import React, { useState, useEffect, useRef } from "react";
import { Tab } from "@headlessui/react";
import "./assets/tabsStyle.css";
import Userstable from "../../Components/usersTable/usersTable";
import CardsDocumentsCatalogs from "../../Components/cardsDocumentsCatalogs/cardsDocumentsCatalogs";
import { useParams } from "react-router-dom";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const tabs = [
  { key: "viewUsers", label: "View Users" },
  { key: "viewDocumentCatalogs", label: "View Document Catalogs" },
  //{ key: "viewPaymentPlans", label: "View Payment Plans" },
];

const TabsContenido = () => {
  const { key } = useParams();
  const activeTabRef = useRef();
  const activeTab = localStorage.getItem("activeTab") || key || "viewUsers";

  useEffect(() => {
    localStorage.setItem("activeTab", key || "viewUsers");
    if (activeTabRef.current) {
      activeTabRef.current.click();
    }
  }, [key]);

  const handleTabClick = (tabKey) => {
    localStorage.setItem("activeTab", tabKey);
  };

  return (
    <>
      <div className="min-w-full flex flex-col justify-start items-center min-h-[90vh]">
        <div className="w-full lg:w-[80%] md:w-[80%] flex flex-col items-center justify-center">
          <Tab.Group>
            <Tab.List className="grid grid-cols-2 md:grid-cols-2 items-center justify-center rounded-xl p-1 w-[90%] lg:w-[80%] md:w-[80%] mt-[2rem] md:mt-[10rem] lg:mt-[10rem] gap-4">
              {tabs.map((tab) => (
                <Tab
                  key={tab.key}
                  ref={activeTab === tab.key ? activeTabRef : null}
                  className={({ selected }) =>
                    classNames(
                      "w-full py-2.5 text-[15px]  md:text-[20px] lg:text-[20px] font-medium leading-5 boxshadow-rv",
                      "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                      selected
                        ? "bg-white text-blue-700 shadow active-tab"
                        : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                    )
                  }
                  selected={activeTab === tab.key}
                  onClick={() => handleTabClick(tab.key)}
                >
                  {tab.label}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="mt-5 w-full">
              <Tab.Panel
                className={classNames(
                  "rounded-xl p-3",
                  "ring-white/60 ring-offset-2 ring-offset-blue-400"
                )}
              >
                <Userstable />
              </Tab.Panel>
              <Tab.Panel
                className={classNames(
                  "rounded-xl  p-3",
                  "ring-white/60 ring-offset-2 ring-offset-blue-400 w-full "
                )}
              >
                <CardsDocumentsCatalogs />
              </Tab.Panel>
              
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </>
  );
};

export default TabsContenido;
