import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import "./assets/tabsStyle.css"; 
import Userstable from "../../Components/usersTable/usersTable";
function classNames(...classes) {

  return classes.filter(Boolean).join(" ");
}

const TabsContenido = () => {
  
  return (
    <>
      <div className="min-w-full flex flex-col items-center justify-center mt-[2rem] lg:mt-[4rem] md:mt-[4rem]">
        <div className="w-full lg:w-[80%] md:w-[80%] flex flex-col items-center justify-center">
          <Tab.Group>
            <Tab.List className="grid grid-cols-1 md:grid-cols-3 items-center justify-center rounded-xl p-1 w-[90%] lg:w-[80%] md:w-[80%] mt-[2rem] gap-4">
              <Tab
                className={({ selected }) =>
                  classNames(
                    "w-full  py-2.5 text-base font-medium leading-5 boxshadow-rv",
                    "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                    selected
                      ? "bg-white text-blue-700 shadow"
                      : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                  )
                }
              >
                View Users
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames(
                    "w-full py-2.5 text-base font-medium leading-5 boxshadow-rv",
                    "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                    selected
                      ? "bg-white text-blue-700 shadow"
                      : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                  )
                }
              >
                View Document Catalogs
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames(
                    "w-full py-2.5 text-base font-medium leading-5 boxshadow-rv",
                    "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                    selected
                      ? "bg-white text-blue-700 shadow"
                      : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                  )
                }
              >
                View Payment Plans
              </Tab>
            </Tab.List>
            <Tab.Panels className="mt-5 w-full">
              <Tab.Panel
                className={classNames(
                  "rounded-xl p-3",
                  "ring-white/60 ring-offset-2 ring-offset-blue-400"
                )}
              >
                    <Userstable/>
              </Tab.Panel>
              <Tab.Panel
                className={classNames(
                  "rounded-xl bg-white p-3",
                  "ring-white/60 ring-offset-2 ring-offset-blue-400 h-[40vh] focus:outline-none focus:ring-2"
                )}
              >
                <p>Documents</p>
              </Tab.Panel>
              <Tab.Panel
                className={classNames(
                  "rounded-xl bg-white p-3",
                  "ring-white/60 ring-offset-2 ring-offset-blue-400 h-[40vh] focus:outline-none focus:ring-2"
                )}
              >
                <p>Plans</p>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
      
    </>
  );
};

export default TabsContenido;
