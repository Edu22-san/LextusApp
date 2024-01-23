import React, { useState, useRef } from "react";
import { Tab } from "@headlessui/react";
import "./assets/formNewCustomer.css";
import { Dropdown } from "primereact/dropdown";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const FormNewCustomer = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedMatter, setSelectedMatter] = useState(null);
  const matters = [
    { name: "Visa U" },
    { name: "Inmigrant Visa" },
    { name: "parole" },
  ];
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef();
  const [selectedImage, setSelectedImage] = useState(null);
  const imageInputRef = useRef();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    setSelectedImage(imageFile);
  };

  const handleImageClick = () => {
    imageInputRef.current.click();
  };
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
              className="flex flex-col justify-center items-center border-4 border-blue-500 w-44 h-44 rounded-full cursor-pointer"
            >
              {selectedImage ? (
                <img
                  src={URL.createObjectURL(selectedImage)}
                  alt="Selected Preview"
                  className="w-full h-full object-cover rounded-full"
                />
              ) : (
                <>
                  <i className="fa-solid fa-user icon-user-rv"></i>
                </>
              )}
            </label>
            <input
              type="file"
              id="imageInput"
              ref={imageInputRef}
              onChange={handleImageChange}
              className="hidden"
              accept="image/*"
            />
          </div>
          <div className="colum2-inputs">
            <div className="fila-1">
              <div className="relative w-full md:w-[48%] lg:w-[48%] mb-[12px] md:mb-[0] lg:mb-[0]">
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="h-12 md:h-14 lg:h-14 w-full lg:w-full md:w-full pl-4 rounded-full focus:outline-none border-2 border-blue-txt text-blue-txt"
                />
                <span className="container-input-texto absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer lg:left-[28px] md:left-[28px]">
                  <p className="bg-white inline-block pl-[5px] pr-[5px] text-blue-txt">
                    First Name
                  </p>
                </span>
              </div>
              <div className="relative w-full md:w-[48%] lg:w-[48%] mb-[12px] md:mb-[0] lg:mb-[0]">
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="h-12 md:h-14 lg:h-14 w-full lg:w-full md:w-full pl-4 rounded-full focus:outline-none border-2 border-blue-txt text-blue-txt"
                />
                <span className="container-input-texto absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer lg:left-[28px] md:left-[28px]">
                  <p className="bg-white inline-block pl-[5px] pr-[5px] text-blue-txt">
                    Last Name
                  </p>
                </span>
              </div>
            </div>

            <div className="fila-2">
              <div className="relative w-full md:w-[48%] lg:w-[48%] mb-[12px] md:mb-[0] lg:mb-[0]">
                <Dropdown
                  value={selectedMatter}
                  onChange={(e) => setSelectedMatter(e.value)}
                  options={matters}
                  optionLabel="name"
                  showClear
                  className="h-12 md:h-14 lg:h-14 w-full lg:w-full md:w-full pl-4 rounded-full focus:outline-none border-2 border-blue-txt text-blue-txt dropdown-custom-rv"
                />
                <span className="container-input-texto absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer lg:left-[28px] md:left-[28px]">
                  <p className="bg-white inline-block pl-[5px] pr-[5px] text-blue-txt">
                    Matter
                  </p>
                </span>
              </div>

              <div className="relative w-full md:w-[48%] lg:w-[48%]">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 md:h-14 lg:h-14 w-full lg:w-full md:w-full pl-4 rounded-full focus:outline-none border-2 border-blue-txt text-blue-txt"
                />
                <span className="container-input-texto absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer lg:left-[28px] md:left-[28px]">
                  <p className="bg-white inline-block pl-[5px] pr-[5px] text-blue-txt">
                    Email address
                  </p>
                </span>
              </div>
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
            <h3 className="text-blue-txt">
              {firstName} {lastName}
            </h3>
            <p className="text-gray">{email}</p>
            <p className="text-blue-txt">{selectedMatter?.name}</p>
          </div>

          <div className="column2-document">
            <div className="w-full flex flex-row items-center justify-between border-b-2 border-solid border-gray-400 mb-4">
              <div className="flex flex-row items-center justify-start ">
                <i class="fa-regular fa-folder-open pr-[5px] text-gray-400 text-3xl"></i>
                <p className="text-xl font-bold text-blue-txt">Document List</p>
              </div>
            </div>
            <div className="relative w-full h-full flex justify-center items-center border-2 border-solid border-dashed rounded-12 pt-[12px] pb-[12px]">
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="w-full h-full opacity-0 absolute inset-0 cursor-pointer"
              />
              <span
                className="container-input-file cursor-pointer"
                onClick={handleIconClick}
              >
                <i className="fa-regular fa-file-circle-plus icon-file "></i>
                <h2 className="text-xl md:text-3xl lg:text-3xl font-normal">
                  Drop you document here
                </h2>
                <p>Suppots: PDF, Word, JPG</p>
              </span>
            </div>
            <div className="conten-name-file-select">
              {selectedFile && <p>Selected File: {selectedFile.name}</p>}
            </div>
          </div>
        </div>

        <div className="container-fila2">
          <div className="w-full flex flex-col md:flex-row md:justify-between lg:flex-row lg:justify-between">
            <Tab.Group>
              <Tab.List className="rounded-xl p-1 w-full h-[30vh] md:h-auto lg:h-auto lg:w-[25%] md:w-[25%] flex flex-col justify-between">
                <Tab
                  className={({ selected }) =>
                    classNames(
                      "w-full  py-2.5 text-base font-medium leading-5 border-2 border-solid border-white rounded-[12px] h-auto md:h-[7vh] lg:h-[7vh]",
                      "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                      selected
                        ? "bg-white text-blue-700 shadow"
                        : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                    )
                  }
                >
                  Asign CheckList
                </Tab>
                <Tab
                  className={({ selected }) =>
                    classNames(
                      "w-full py-2.5 text-base font-medium leading-5 border-2 border-solid border-white rounded-[12px] h-auto md:h-[7vh] lg:h-[7vh]",
                      "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                      selected
                        ? "bg-white text-blue-700 shadow"
                        : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                    )
                  }
                >
                  Asigh Payment Plans
                </Tab>
                <Tab
                  className={({ selected }) =>
                    classNames(
                      "w-full py-2.5 text-base font-medium leading-5 border-2 border-solid border-white rounded-[12px] h-auto md:h-[7vh] lg:h-[7vh]",
                      "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                      selected
                        ? "bg-white text-blue-700 shadow"
                        : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                    )
                  }
                >
                  View Payment
                </Tab>
                <Tab
                  className={({ selected }) =>
                    classNames(
                      "w-full py-2.5 text-base font-medium leading-5 border-2 border-solid border-white rounded-[12px] h-auto md:h-[7vh] lg:h-[7vh]",
                      "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                      selected
                        ? "bg-white text-blue-700 shadow"
                        : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                    )
                  }
                >
                  Send Password
                </Tab>
              </Tab.List>
              <Tab.Panels className="w-full mt-[2rem] md:mt-[0] lg:mt-[0] md:w-[70%] lg:w-[70%]">
                <Tab.Panel
                  className={classNames(
                    "rounded-xl bg-white p-3",
                    "ring-white/60 ring-offset-2 ring-offset-blue-400 h-[40vh] focus:outline-none focus:ring-2"
                  )}
                >
                  <p>Asign CheckList</p>
                </Tab.Panel>
                <Tab.Panel
                  className={classNames(
                    "rounded-xl bg-white p-3",
                    "ring-white/60 ring-offset-2 ring-offset-blue-400 h-[40vh] focus:outline-none focus:ring-2"
                  )}
                >
                  <p>Asigh Payment Plans</p>
                </Tab.Panel>
                <Tab.Panel
                  className={classNames(
                    "rounded-xl bg-white p-3",
                    "ring-white/60 ring-offset-2 ring-offset-blue-400 h-[40vh] focus:outline-none focus:ring-2"
                  )}
                >
                  <p>View Payment</p>
                </Tab.Panel>
                <Tab.Panel
                  className={classNames(
                    "rounded-xl bg-white p-3",
                    "ring-white/60 ring-offset-2 ring-offset-blue-400 h-[40vh] focus:outline-none focus:ring-2"
                  )}
                >
                  <p>Send Password</p>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormNewCustomer;
