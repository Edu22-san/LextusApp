import React, { useState, useEffect } from "react";
import { Tab } from "@headlessui/react";
import { CircularProgress } from "@mui/material";
import "./assets/detailCustomer.css";
import { Link, useParams, useNavigate } from "react-router-dom";
import Api from "../../services/api";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const DetailCustomer = () => {
  const [selectedMatterIndex, setSelectedMatterIndex] = useState(0);
  const { id_customer } = useParams();
  const [customerDetail, setCustomerDetail] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [loading, setLoading] = useState(true); // Estado de carga

  const getDetailCustomer = () => {
    setLoading(true); // Inicia carga
    Api.get(`customer-information/${id_customer}`)
      .then((response) => {
        console.log("data customer", response.data);
        setCustomerDetail(response.data);
        setLoading(false); // Finaliza carga
      })
      .catch((error) => {
        console.error("Error fetching customer details:", error);
        setLoading(false); // Finaliza carga
      });
  };

  const handleSaveNote = () => {
    if (!selectedItem || !selectedItem.notes) return;

    Api.postJson("add-note", {
      id_user_checklist_item: selectedItem.id_item,
      notes: selectedItem.notes,
    })
      .then((response) => {
        toast.success("Note saved successfully!");
        setCustomerDetail((prevDetail) => {
          const updatedDetail = { ...prevDetail };
          const steps =
            updatedDetail.data.steps_per_matter[selectedMatterIndex].steps;
          steps.forEach((step) => {
            step.items.forEach((item) => {
              if (item.id_item === selectedItem.id_item) {
                item.notes = selectedItem.notes;
              }
            });
          });
          return updatedDetail;
        });
      })
      .catch((error) => {
        toast.error("Failed to save the note.");
        console.error("Error saving note:", error);
      });
  };

  useEffect(() => {
    getDetailCustomer();
  }, [id_customer]);

  const updateStepStatus = (id_user_step, newStatus) => {
    Api.postJson("update-status-step", { id_user_step, status: newStatus })
      .then((response) => {
        const successMessage =
          response.data?.message || "Step status updated successfully!";
        toast.success(successMessage);

        setCustomerDetail((prevDetail) => {
          const updatedDetail = { ...prevDetail };
          const steps =
            updatedDetail.data.steps_per_matter[selectedMatterIndex].steps;
          const stepIndex = steps.findIndex(
            (step) => step.id_user_step === id_user_step
          );
          if (stepIndex !== -1) {
            steps[stepIndex].step_status = newStatus;
          }
          return updatedDetail;
        });
      })
      .catch((error) => {
        const errorMessage =
          error.response?.data?.message || "Failed to update step status.";
        toast.error(errorMessage);
        console.error("Error updating step status:", error);
      });
  };

  const updateItemStatus = (id_item, newStatus) => {
    Api.postJson("update-status-item", { id_item, status: newStatus })
      .then((response) => {
        const successMessage =
          response.data?.message || "Item status updated successfully!";
        toast.success(successMessage);

        setCustomerDetail((prevDetail) => {
          const updatedDetail = { ...prevDetail };
          const steps =
            updatedDetail.data.steps_per_matter[selectedMatterIndex].steps;

          steps.forEach((step) => {
            const itemIndex = step.items.findIndex(
              (item) => item.id_item === id_item
            );
            if (itemIndex !== -1) {
              step.items[itemIndex].status = newStatus;
            }
          });

          return updatedDetail;
        });
      })
      .catch((error) => {
        const errorMessage =
          error.response?.data?.message || "Failed to update item status.";
        toast.error(errorMessage);
        console.error("Error updating item status:", error);
      });
  };

  const getStatusClass = (status) => {
    switch (status) {
      case "Completed":
      case "Accepted":
        return "text-green-rv";
      case "Submitted":
        return "text-blue-500";
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

  const openModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  const tabs = ["Steps", "Checklist"];

  const currentMatter =
    customerDetail?.data?.steps_per_matter[selectedMatterIndex];

  return (
    <div className="min-w-full p-[2rem] md:p-[4rem] lg:p-[4rem]">
      <ToastContainer />
      <button
        onClick={handleBack}
        className="bg-white bg-opacity-70 mb-4 rounded-full w-[30px] h-[30px]"
      >
        <i className="fa-solid fa-chevron-left"></i>
      </button>

      {loading ? (
        <div className="flex justify-center items-center h-full">
          <CircularProgress color="primary" />
        </div>
      ) : (
        <>
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
                    {customerDetail
                      ? customerDetail.data.first_name
                      : "Loading..."}
                  </p>
                  <p className="text-[14px] md:text-lg lg:text-lg font-semibold text-gray-rv font-manrope">
                    Email:{" "}
                    {customerDetail ? customerDetail.data.email : "Loading..."}
                  </p>
                </div>
                <div>
                  <p className="text-[14px] md:text-lg lg:text-lg font-semibold text-gray-rv font-manrope md:mb-[1rem] lg:mb-[1rem]">
                    Last Name:{" "}
                    {customerDetail
                      ? customerDetail.data.last_name
                      : "Loading..."}
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
                  <Tab.List className="rounded-xl p-1 w-full h-auto md:h-auto lg:h-auto grid grid-cols-2 gap-2 md:gap-4 lg:gap-4 mb-[1rem]">
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

                  <Tab.Panels className="w-full mt-[2rem] md:mt-[0] lg:mt-[0] rounded-xl outline-none ring-2 p-[12px]">
                    <Tab.Panel
                      className={classNames(
                        "rounded-xl bg-white p-3",
                        "ring-white/60 ring-offset-2 ring-offset-blue-400 h-auto md:h-[30vh] lg:h-[30vh] overflow-y-auto"
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
                          <li
                            key={index}
                            className="flex justify-between mb-[10px] items-center"
                          >
                            <p className="text-[16px] text-blue-bg">
                              {step.step_name}
                            </p>
                            <select
                              value={step.step_status}
                              onChange={(e) =>
                                updateStepStatus(
                                  step.id_user_step,
                                  e.target.value
                                )
                              }
                              className={`text-[16px] border rounded p-1 ${getStatusClass(
                                step.step_status
                              )}`}
                            >
                              <option value="Pending">Pending</option>
                              <option value="Completed">Completed</option>
                            </select>
                          </li>
                        ))}
                      </ul>
                    </Tab.Panel>

                    <Tab.Panel
                      className={classNames(
                        "rounded-xl bg-white p-3",
                        "ring-white/60 ring-offset-2 ring-offset-blue-400 h-auto md:h-[30vh] lg:h-[30vh] overflow-y-auto"
                      )}
                    >
                      <div className="w-full border-b-2 border-gray-500 mb-3">
                        <table className="w-full text-left">
                          <thead>
                            <tr className="border-b-[2px] border-gray-500">
                              <th className="text-[18px] font-600 text-blue-bg font-manrope p-[0px] ">
                                Item
                              </th>
                              <th className="text-[18px] font-600 text-blue-bg font-manrope p-[0px] ">
                                Status
                              </th>
                              <th className="text-[18px] font-600 text-blue-bg font-manrope p-[0px] ">
                                Actions
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {currentMatter.steps.map((step) =>
                              step.items.map((item, index) => (
                                <tr key={index} className="mb-2">
                                  <td className="text-16 text-blue-bg p-[0px] pb-[10px]">
                                    {item.id_item} {item.item_name}
                                  </td>
                                  <td
                                    className={`text-16 p-[0px] ${getStatusClass(
                                      item.status
                                    )}`}
                                  >
                                    <select
                                      value={item.status}
                                      onChange={(e) =>
                                        updateItemStatus(
                                          item.id_item,
                                          e.target.value
                                        )
                                      }
                                      className="border rounded p-1"
                                    >
                                      <option value="Upload">Upload</option>
                                      <option value="Submitted">
                                        Submitted
                                      </option>
                                      <option value="Accepted">Accepted</option>
                                    </select>
                                  </td>
                                  <td className="p-[0px]">
                                    <button
                                      className="text-blue-500 hover:underline"
                                      onClick={() => openModal(item)}
                                    >
                                      View
                                    </button>
                                  </td>
                                </tr>
                              ))
                            )}
                          </tbody>
                        </table>
                      </div>
                    </Tab.Panel>
                  </Tab.Panels>
                </Tab.Group>
              </div>
            </div>
          ) : (
            <div className="text-center mt-4">
              <p>No data available for this customer.</p>
            </div>
          )}

          {/* Modal */}
          {isModalOpen && selectedItem && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
              <div className="bg-white p-6 rounded-lg shadow-lg max-w-[1299px] w-[90%] h-[80%]">
                <div className="flex flex-row justify-between items-center">
                  <h2 className="text-xl font-semibold text-blue-bg">
                    {selectedItem.item_name}
                  </h2>
                  <button
                    className="text-red-500 hover:underline"
                    onClick={closeModal}
                  >
                    <i className="fa-solid fa-x"></i>
                  </button>
                </div>
               {/* <p>{selectedItem.id_item}</p> */}

                <textarea
                  value={selectedItem.notes || ""}
                  onChange={(e) =>
                    setSelectedItem({ ...selectedItem, notes: e.target.value })
                  }
                  placeholder="Add Note"
                  className="w-full h-auto border rounded text-blue-bg placeholder-blue-bg pl-[12px]"
                />
                <button
                  onClick={handleSaveNote}
                  className="bg-blue-500 text-white rounded p-2 mt-4"
                >
                  Save note
                </button>

                {selectedItem.document_path ? (
                  <iframe
                    src={selectedItem.document_path}
                    className="w-full h-[70%] mt-4 border rounded"
                    title="Document Preview"
                  />
                ) : (
                  <p className="text-red-500">Document path not available.</p>
                )}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default DetailCustomer;
