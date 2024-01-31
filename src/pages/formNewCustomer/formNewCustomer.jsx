import React, { useState, useRef } from "react";
import { Tab } from "@headlessui/react";
import "./assets/formNewCustomer.css";
import { Dropdown } from "primereact/dropdown"; // por si acaso
import IconChecklist from "../../assets/img/icon-checklist.png";
import { Checkbox } from "primereact/checkbox";
import { FileUpload } from "primereact/fileupload";
import { RadioGroup } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const checklistPlan = [
  { name: "Visa U" },
  { name: "Visa U sons" },
  { name: "Visa U wife" },
  { name: "Parole" },
];

const FormNewCustomer = () => {
  const [firstName, setFirstName] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [selected, setSelected] = useState(checklistPlan[-1]);
  const tabs = ["Asign Checklist", "Asign Payment plan", "Send Password"];

  const onUpload = (documentId) => {
    toast.current.show({
      severity: "info",
      summary: "Success",
      detail: `File Uploaded for documentId: ${documentId}`,
    });
  };
  const handleViewButtonClick = (documentId) => {
    // Lógica para manejar el clic en el botón de vista
    // Implementar una modal, abrir una nueva página.
    console.log(`View button clicked for documentId: ${documentId}`);
  };
  const documentsListData = [
    { label: "Document name | pending | 01/01/2024", id: 1 },
    { label: "Document name | Complete | 01/01/2024", id: 2 },
    { label: "Document name | pending | 01/01/2024", id: 3 },
    { label: "Document name | pending | 01/01/2024", id: 4 },
    { label: "Document name | pending | 01/01/2024", id: 5 },
    { label: "Document name | pending | 01/01/2024", id: 6 },
  ];

  return (
    <>
      <div className="min-w-full p-[2rem] md:p-[4rem] lg:p-[4rem]">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center rounded-xl p-1 w-full  gap-8 md:gap-10 mb-[2rem]">
          <div>
            <h1 className="text-white text-3xl md:text-5xl lg:text-5xl font-semibold">
              Add new customer
            </h1>
            <p className="text-white ">Register your customer</p>
          </div>
          <div className="flex flex-row justify-center  md:justify-end lg:justify-end">
            <button className="w-[12rem] h-[7vh] border-[3px] border-white rounded-2xl text-white text-lg font-bold transition-colors hover:bg-white hover:text-blue-txt">
              Register
            </button>
          </div>
        </div>
        <div className="card-completess">
          <div className="column1-image">
            <label
              htmlFor="imageInput"
              className="flex flex-col justify-center items-center border-4 border-blue-500 w-44 h-44 rounded-full"
            >
              <i className="fa-solid fa-user icon-user-rv"></i>
            </label>
          </div>
          <div className="colum2-inputs">
            <div className="fila-1">
              <div className="relative w-full md:w-full lg:w-full mb-[12px] md:mb-[0] lg:mb-[0]">
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="h-12 md:h-14 lg:h-14 w-full lg:w-full md:w-full pl-4 rounded-full focus:outline-none border-2 border-blue-txt text-blue-txt"
                />
                <span className="container-input-texto absolute right-4 top-1/2 transform -translate-y-1/2 lg:left-[28px] md:left-[28px]">
                  <p className="bg-white inline-block pl-[5px] pr-[5px] text-blue-txt">
                    Name customer
                  </p>
                </span>
              </div>
            </div>
            <div className="fila-2">
              <button className="w-[12rem] h-[5vh] md:h-[6vh] lg:h-[7vh] rounded-full bg-blue-bg text-white text-lg font-bold">
                Search
              </button>
            </div>
          </div>
        </div>

        <div className="container-fila2">
          <div className="column1-datos-usuarios">
            <h1 className="text-blue-color-opacity text-2xl">Preview</h1>
            <div className="border-image">
              {selectedImage ? (
                <img
                  src={URL.createObjectURL(selectedImage)}
                  alt="Selected Preview"
                  className="w-full h-full object-cover rounded-full"
                />
              ) : (
                <i className="fa-solid fa-user icon-user-rv"></i>
              )}
            </div>
            <h3 className="text-blue-txt">Name</h3>
            <p className="text-blue-txt">customer@gmail.com</p>
            <p className="text-blue-txt">Visa U</p>
          </div>
          <div className="w-full md:w-full lg:w-[70%] flex flex-col items-center">
            <Tab.Group>
              <Tab.List className="rounded-xl p-1 w-full h-auto md:h-auto lg:h-auto  grid grid-cols-3 gap-2 md:gap-4 lg:gap-4 mb-[1rem]">
                {tabs.map((tab, index) => (
                  <Tab
                    className={({ selected }) =>
                      classNames(
                        "w-full  py-2.5 text-[18px]  md:text-xl lg:text-xl font-medium leading-5 border-2 border-solid border-white rounded-[12px] h-auto md:h-[7vh] lg:h-[7vh]",
                        "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                        selected
                          ? "bg-white text-blue-700 shadow"
                          : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                      )
                    }
                  >
                    {tab}
                  </Tab>
                ))}
              </Tab.List>

              <Tab.Panels className="w-full mt-[2rem] md:mt-[0] lg:mt-[0]  h-[70vh] md:h-[50vh] lg:h-[50vh]">
                <Tab.Panel
                  className={classNames(
                    "rounded-xl bg-white p-3",
                    "ring-white/60 ring-offset-2 ring-offset-blue-400 h-full"
                  )}
                >
                  <div className="w-full flex flex-row items-center justify-between border-b-2 border-solid border-gray-400 mb-4 h-[15%]">
                    <div className="flex flex-row items-center justify-start ">
                      <img
                        src={IconChecklist}
                        alt=""
                        className="mr-1 w-[20px]"
                      />
                      <p className="text-xl font-bold text-blue-txt">
                        New Relative
                      </p>
                    </div>
                    <button className="bg-gray-300 text-black rounded-md px-5 py-1 text-base md:text-[15px] font-normal font-manrope">
                      Save
                    </button>
                  </div>
                  <div className="flex flex-col h-[80%]">
                    <div className="w-full md:w-[60%]  lg:w-[60%] h-[40%] border-[2px] border-solid border-gray-300 rounded-[14px] p-[7px]">
                      <div className="w-full h-full overflow-y-auto">
                        <RadioGroup
                          value={selected}
                          onChange={setSelected}
                          className="pr-[1rem]"
                        >
                          <div className="space-y-2">
                            {checklistPlan.map((plan) => (
                              <RadioGroup.Option
                                key={plan.name}
                                value={plan}
                                className={({ active, checked }) =>
                                  `${
                                    active
                                      ? "ring-2 ring-white/60 ring-offset-2 ring-offset-sky-300"
                                      : ""
                                  }
                                  ${
                                    checked
                                      ? "bg-sky-900/75 text-white"
                                      : "bg-white border-[2px] border-solid border-gray-300"
                                  }
                                    relative flex cursor-pointer rounded-lg px-5 py-2 shadow-md focus:outline-none`
                                }
                              >
                                {({ active, checked }) => (
                                  <>
                                    <div className="flex w-full items-center justify-between">
                                      <div className="flex items-center">
                                        <div className="text-sm">
                                          <RadioGroup.Label
                                            as="p"
                                            className={`font-medium  ${
                                              checked
                                                ? "text-white"
                                                : "text-gray-900"
                                            }`}
                                          >
                                            {plan.name}
                                          </RadioGroup.Label>
                                        </div>
                                      </div>
                                      {checked && (
                                        <div className="shrink-0 text-white">
                                          <CheckIcon className="h-6 w-6" />
                                          {console.log(
                                            "Radio button seleccionado:",
                                            plan.name
                                          )}
                                        </div>
                                      )}
                                    </div>
                                  </>
                                )}
                              </RadioGroup.Option>
                            ))}
                          </div>
                        </RadioGroup>
                      </div>
                    </div>
                    <div className=" h-[60%] p-[5px] ">
                      Or Ad hoc Checklist
                      <div className="container-casc">
                        <input
                          type="text"
                          id="document_name"
                          class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-blue-txt "
                          placeholder="Document name"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </Tab.Panel>
                <Tab.Panel
                  className={classNames(
                    "rounded-xl bg-white p-3",
                    "ring-white/60 ring-offset-2 ring-offset-blue-400 h-full focus:outline-none focus:ring-2"
                  )}
                >
                  <p>View Payment</p>
                </Tab.Panel>
                <Tab.Panel
                  className={classNames(
                    "rounded-xl bg-white p-3",
                    "ring-white/60 ring-offset-2 ring-offset-blue-400 h-full focus:outline-none focus:ring-2"
                  )}
                >
                  <p>Send Password</p>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>

        <div className="container-fila2">
          <div className="column2-document">
            <div className="w-full flex flex-row items-center justify-between border-b-2 border-solid border-gray-400 mb-[1px]">
              <div className="flex flex-row items-center justify-start ">
                <img src={IconChecklist} alt="" className="mr-1 w-[20px]" />
                <p className="text-xl font-bold text-blue-txt">
                  View CheckList
                </p>
              </div>
            </div>
            <div className="w-full h-full flex flex-col items-start rounded-12 pt-[12px] pb-[12px]">
              <div className="flex flex-row items-center justify-start ">
                <i class="fa-regular fa-folder-open pr-[5px] text-gray-400 text-3xl"></i>
                <p className="text-xl font-bold text-white">Document List</p>
              </div>
              <div className="w-full grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-bg-celeste p-[12px] rounded-2xl h-[40vh] shadow-lg ">
                  <p className="text-xl font-bold text-white text-center border-b-2 border-solid border-white mb-[1rem]">
                    Checklist: Visa U
                    <span className="text-[13px]  md:text-[15px] lg:text-[15px]">
                      (Principal)
                    </span>
                  </p>
                  <ul className="list-decimal w-full pr-[5px] h-[30vh] overflow-y-auto">
                    {documentsListData.map((document) => (
                      <li
                        key={document.id}
                        className="mb-[12px] ml-[17px] text-white"
                      >
                        <div className="flex flex-row justify-between items-center">
                          <label className="text-white text-[15px]  md:text-[17px] lg:text-[17px]">
                            {document.label}
                          </label>
                          {document.label.includes("Complete") ? (
                            <button
                              onClick={() => handleViewButtonClick(document.id)}
                              className="bg-blue-bg rounded-lg p-[6px] text-[14px] text-white max-w-[60%]"
                            >
                              View
                            </button>
                          ) : (
                            <FileUpload
                              chooseLabel="Upload"
                              mode="basic"
                              name={`demo_${document.id}`}
                              url="/api/upload"
                              accept=".pdf,.doc,.docx,.txt"
                              maxFileSize={1000000}
                              onUpload={() => onUpload(document.id)}
                              className="bg-blue-bg rounded-lg p-[6px] text-[14px] text-white max-w-[60%]"
                            />
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-bg-celeste p-[12px] rounded-2xl h-[40vh] shadow-lg ">
                  <p className="text-xl font-bold text-white text-center border-b-2 border-solid border-white mb-[1rem]">
                    Checklist: Visa U
                    <span className="text-[13px]  md:text-[15px] lg:text-[15px]">
                      (Principal)
                    </span>
                  </p>
                  <ul className="list-decimal w-full pr-[5px] h-[30vh] overflow-y-auto">
                    {documentsListData.map((document) => (
                      <li
                        key={document.id}
                        className="mb-[12px] ml-[17px] text-white"
                      >
                        <div className="flex flex-row justify-between items-center">
                          <label className="text-white text-[15px]  md:text-[17px] lg:text-[17px]">
                            {document.label}
                          </label>
                          {document.label.includes("Complete") ? (
                            <button
                              onClick={() => handleViewButtonClick(document.id)}
                              className="bg-blue-bg rounded-lg p-[6px] text-[14px] text-white max-w-[60%]"
                            >
                              View
                            </button>
                          ) : (
                            <FileUpload
                              chooseLabel="Upload"
                              mode="basic"
                              name={`demo_${document.id}`}
                              url="/api/upload"
                              accept=".pdf,.doc,.docx,.txt"
                              maxFileSize={1000000}
                              onUpload={() => onUpload(document.id)}
                              className="bg-blue-bg rounded-lg p-[6px] text-[14px] text-white max-w-[60%]"
                            />
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-bg-celeste p-[12px] rounded-2xl h-[40vh] shadow-lg ">
                  <p className="text-xl font-bold text-white text-center border-b-2 border-solid border-white mb-[1rem]">
                    Checklist: Visa U
                    <span className="text-[13px]  md:text-[15px] lg:text-[15px]">
                      (Principal)
                    </span>
                  </p>
                  <ul className="list-decimal w-full pr-[5px] h-[30vh] overflow-y-auto">
                    {documentsListData.map((document) => (
                      <li
                        key={document.id}
                        className="mb-[12px] ml-[17px] text-white"
                      >
                        <div className="flex flex-row justify-between items-center">
                          <label className="text-white text-[15px]  md:text-[17px] lg:text-[17px]">
                            {document.label}
                          </label>
                          {document.label.includes("Complete") ? (
                            <button
                              onClick={() => handleViewButtonClick(document.id)}
                              className="bg-blue-bg rounded-lg p-[6px] text-[14px] text-white max-w-[60%]"
                            >
                              View
                            </button>
                          ) : (
                            <FileUpload
                              chooseLabel="Upload"
                              mode="basic"
                              name={`demo_${document.id}`}
                              url="/api/upload"
                              accept=".pdf,.doc,.docx,.txt"
                              maxFileSize={1000000}
                              onUpload={() => onUpload(document.id)}
                              className="bg-blue-bg rounded-lg p-[6px] text-[14px] text-white max-w-[60%]"
                            />
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormNewCustomer;
