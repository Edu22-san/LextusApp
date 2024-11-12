import React, { useState, useEffect } from "react";
import { Tab } from "@headlessui/react";
import "./assets/formNewCustomer.css";
import IconChecklist from "../../assets/img/icon-checklist.png";
import { RadioGroup } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";
import Api from "../../services/api";
import TextField from "@mui/material/TextField";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const FormNewCustomer = () => {
  const [selectedMatters, setSelectedMatters] = useState({});
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState([]);
  const [message, setMessage] = useState("");
  const [updatedSteps, setUpdatedSteps] = useState({});

  const tabs = ["Checklist", "Payment plan", "Create User"];

  // Función para obtener los datos
  const searchCustomer = async (query) => {
    try {
      const response = await Api.get(`search-customer?search=${query}`);
      setSearch(response.data.data || []);
      console.log(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSend = async (customerId) => {
    try {
      const response = await Api.post(`create-user-by-customer`, {
        id_customer: customerId,
      });
      console.log("User created:", response);

      toast.success("User created successfully!");

      setTimeout(() => {
        window.location.reload();
      }, 5000);
    } catch (error) {
      console.error("Error creating user:", error);

      toast.error("Failed to create user.");
    }
  };

  const handleDateChange = (idUserStep, newDate) => {
    setUpdatedSteps((prev) => ({
      ...prev,
      [idUserStep]: newDate,
    }));
  };

  const handleSave = async () => {
    const dataToSend = Object.entries(updatedSteps).map(
      ([id_user_step, estimated_date]) => ({
        id_user_step: parseInt(id_user_step),
        estimated_date,
      })
    );

    try {
      const response = await Api.postJson("update-date-step", dataToSend);
      toast.success("Dates updated successfully!");
    } catch (error) {
      console.error("Error updating dates:", error);
      toast.error("Failed to update dates.");
    }
  };

  //obtener los la informacionde matter seleccionado
  const handleMatterSelect = (customerId, matterName) => {
    setSelectedMatters((prev) => ({
      ...prev,
      [customerId]: matterName,
    }));
  };

  return (
    <div className="min-w-full p-[2rem] md:p-[4rem] lg:p-[4rem]">
      <ToastContainer />
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center rounded-xl p-1 w-full gap-8 md:gap-10 mb-[2rem]">
        <div>
          <h1 className="text-white text-3xl md:text-5xl lg:text-5xl font-semibold">
            Add new customer
          </h1>
          <p className="text-white">Register your customer</p>
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

              <TextField
                id="outlined-basic"
                label="Search customer"
                variant="outlined"
                className="w-full h-[40px]"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "40px", // Ajusta el border-radius
                  
                    "& fieldset": {
                      borderColor: "#264ff9", // Cambia el color del borde
                    },
                    "&:hover fieldset": {
                      borderColor: "darkblue", // Cambia el color del borde al hacer hover
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "darkblue", // Cambia el color del borde al estar enfocado
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "#264ff9", // Cambia el color del label (placeholder)
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "blue", // Cambia el color del label al estar enfocado
                  },
                }}
                InputProps={{
                  style: {
                    color: "#264ff9", // Cambia el color del texto dentro del input
                  },
                }}
              />
            

          </div>
          {message && <p className="text-red-500">{message}</p>}
          <div className="fila-2">
            <button
              className="btn-rv-search-customer"
              onClick={() => searchCustomer(query)}
            >
              Search
            </button>
          </div>
        </div>
      </div>

      {/* RESULTADO DE BÚSQUEDA */}
      {search.length > 0 ? (
        search.map((customer) => (
          <div
            key={customer.id_customer}
            className="container-fila2 mb-6 p-4 "
          >
            <div className="column1-datos-usuarios">
              <h1 className="text-blue-color-opacity text-2xl">Preview</h1>
              <div className="border-image">
                <i className="fa-solid fa-user icon-user-rv"></i>
              </div>
              <h3 className="text-blue-txt text-[16px] md:text-[18px] lg:text-[18px]">
                {customer.first_name} {customer.last_name}
              </h3>
              <p className="text-blue-txt text-[16px] md:text-[18px] lg:text-[18px]">
                {customer.email}
              </p>
              <div className="text-blue-txt">
                <ul className="list-disc list-inside text-blue-txt text-[16px] md:text-[18px] lg:text-[18px]">
                  {customer.matters.map((matter, index) => (
                    <li key={index}>{matter.matter_name}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="w-full md:w-full lg:w-[70%] flex flex-col items-center">
              <Tab.Group>
                <Tab.List className="rounded-xl p-1 w-full grid grid-cols-3 gap-2 mb-[4px]">
                  {tabs.map((tab, index) => (
                    <Tab
                      key={index}
                      className={({ selected }) =>
                        classNames(
                          "w-full py-2.5 text-[15px] md:text-[18px] lg:text-[18px] font-medium leading-5 border-2 border-solid border-white rounded-[12px]",
                          "focus:outline-none",
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

                <Tab.Panels className="w-full  h-[310px]">
                  <Tab.Panel
                    className={classNames("rounded-xl bg-white p-3 h-full")}
                  >
                    <div className="w-full flex flex-row items-center justify-between border-b-2 mb-4 h-[10%]">
                      <div className="flex flex-row items-center">
                        <img src={IconChecklist} className="mr-1 w-[20px]" />
                        <p className="text-[16px] md:text-[18px] lg:text-[18px] font-bold text-blue-txt">
                          Matter
                        </p>
                      </div>
                      <button
                        className="bg-gray-300 text-black rounded-md px-[12px] py-[1px] text-base font-normal text-[16px]"
                        onClick={handleSave}
                      >
                        Save
                      </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[85%]">
                      <div className="p-[10px] col-span-1 border-[2px] border-solid border-gray-300 rounded-[8px] overflow-y-auto">
                        <p className="text-blue-txt text-[18px] mb-[5px]">
                          Select Matter:
                        </p>
                        <RadioGroup
                          value={selectedMatters[customer.id_customer] || null}
                          onChange={(matterName) =>
                            handleMatterSelect(customer.id_customer, matterName)
                          }
                        >
                          <div className="space-y-2">
                            {customer.matters.map((matter, index) => (
                              <RadioGroup.Option
                                key={index}
                                value={matter.matter_name}
                                className={({ active, checked }) =>
                                  `${active ? "ring-2 ring-white/60" : ""} ${
                                    checked
                                      ? "bg-sky-900/75 text-white"
                                      : "bg-white w-full rounded-lg border border-blue-500"
                                  } relative flex cursor-pointer rounded-lg px-5 py-2`
                                }
                              >
                                {({ checked }) => (
                                  <div className="flex w-full items-center justify-between">
                                    <RadioGroup.Label
                                      as="p"
                                      className={`font-medium ${
                                        checked ? "text-white" : "text-gray-900"
                                      }`}
                                    >
                                      {matter.matter_name}
                                    </RadioGroup.Label>
                                    {checked && (
                                      <CheckIcon className="h-6 w-6 text-white" />
                                    )}
                                  </div>
                                )}
                              </RadioGroup.Option>
                            ))}
                          </div>
                        </RadioGroup>
                      </div>
                      <div className="p-[10px] col-span-2 border-[2px] border-solid border-gray-300 rounded-[8px] overflow-y-auto">
                        <p className="text-blue-txt text-[18px] mb-[5px]">
                          Steps:
                        </p>
                        <ul className="list-decimal w-full overflow-y-auto h-[85%]">
                          {customer.matters
                            .filter(
                              (matter) =>
                                matter.matter_name ===
                                selectedMatters[customer.id_customer]
                            )
                            .flatMap((matter) => matter.steps)
                            .map((step, index) => (
                              <li key={index} className="mb-[12px] ml-[17px]">
                                <div className="flex flex-row justify-start items-center">
                                  <label className="text-[15px] ">
                                    {step.step_name} /
                                  </label>
                                  <input
                                    type="date"
                                    className="inputselectcustoms"
                                    value={
                                      updatedSteps[step.id_user_step] ||
                                      step.estimated_date ||
                                      ""
                                    }
                                    onChange={(e) =>
                                      handleDateChange(
                                        step.id_user_step,
                                        e.target.value
                                      )
                                    }
                                  />
                                </div>
                              </li>
                            ))}
                        </ul>
                      </div>
                    </div>
                  </Tab.Panel>

                  {/* Other Tabs */}
                  <Tab.Panel
                    className={classNames("rounded-xl bg-white h-full")}
                  >
                    {/* Payment Plan Content */}
                  </Tab.Panel>
                  <Tab.Panel
                    className={classNames(
                      "rounded-xl bg-white p-3 flex flex-col items-center justify-center",
                      "ring-white/60 ring-offset-2 ring-offset-blue-400 h-full focus:outline-none focus:ring-2"
                    )}
                  >
                    <p className="text-[18px] md:text-xl lg:text-xl text-blue-txt font-bold text-center">
                      {customer.id_user
                        ? "The customer already has a user created"
                        : `You will send an email with the credentials to ${customer.email}`}
                    </p>
                    <button
                      className="buttom-rv-customers"
                      onClick={() => handleSend(customer.id_customer)}
                      disabled={!!customer.id_user} // Desactiva el botón si ya tiene usuario
                    >
                      {customer.id_user ? "Disabled" : "SEND"}
                      <i className="fa-solid fa-angle-right text-white pl-[8px]"></i>
                    </button>
                  </Tab.Panel>
                </Tab.Panels>
              </Tab.Group>
            </div>
          </div>
        ))
      ) : (
        <div className="card-no-result">
          <p className="text-blue-txt text-[18px] md:text-xl lg:text-xl">
            No hay resultados
          </p>
        </div>
      )}
    </div>
  );
};

export default FormNewCustomer;
