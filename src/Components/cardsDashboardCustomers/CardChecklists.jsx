import React, { useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useMediaQuery, useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Toast } from "primereact/toast";
import { FileUpload } from "primereact/fileupload";
import "./cardsDashboardCustomers.css";

const CardChecklists = ({ checklist = [] }) => {
  const [openChecklist, setOpenChecklist] = useState(false);
  const handleOpenChecklist = () => setOpenChecklist(true);
  const handleCloseChecklist = () => setOpenChecklist(false);

  const [openChecklistSibling, setOpenChecklistSibling] = useState(false);
  const handleOpenChecklistSibling = () => setOpenChecklistSibling(true);
  const handleCloseChecklistSibling = () => setOpenChecklistSibling(false);

  const toast = useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const onUpload = () => {
    toast.current.show({
      severity: "info",
      summary: "Success",
      detail: "File Uploaded",
    });
  };

  const styleModal = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: isMobile ? "90%" : "50%",
    maxHeight: "85vh",
    bgcolor: "background.paper",
    border: "none",
    boxShadow: 24,
    borderRadius: "12px",
    p: 4,
  };

  const styledButton = {
    background: "#d1d5db",
    color: "black",
    borderRadius: "12px",
    paddingTop: "2px",
    paddingBottom: "2px",
    paddingLeft: "13px",
    paddingRight: "13px",
    fontSize: "15px",
    textTransform: "none",
    fontWeight: "400",
    fontFamily: "Manrope, sans-serif",
  };

  return (
    <>
         <div className="p-5 color-txt-rv text-base font-medium leading-5 bg-white flex flex-col items-start justify-start boxshadow-rv2 card-dashboard-customer3">
        {checklist.length > 0 ? (
          checklist.map((matter, index) => (
            <div key={index} className="w-full mb-4">
              {matter.steps.length > 0 ? (
                matter.steps
                  .filter((step) => step.checklist_items && step.checklist_items.length > 0) // Filtrar steps con checklist_items
                  .map((step, stepIndex) => (
                    <div key={stepIndex}>
                      <div className="w-full flex flex-row items-center justify-between pb-1 border-b-2 border-solid border-gray-300">
                        <div className="flex flex-row items-center">
                          <i className="fa-regular fa-folder-open text-gray-300 mr-1"></i>
                          <p className="text-blue-500 text-lg md:text-[17px] lg:text-[17px] font-bold">
                            {step.step_name}
                          </p>
                        </div>
                      </div>
                      <div className="w-full flex flex-col items-start py-3 px-3">
                        <ul className="list-decimal">
                          {step.checklist_items.map((item, itemIndex) => (
                            <li
                              key={itemIndex}
                              className="text-blue-txt text-[14px] "
                            >
                              {item.item_name} / {item.expiration_date} / {item.status}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))
              ) : (
                <div className="w-full flex flex-col items-center py-3 px-3">
                  <p className="text-gray-500">No steps available</p>
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="w-full flex flex-col items-center py-3 px-3">
            <p className="text-gray-500">No matters available</p>
          </div>
        )}
      </div>
  </>
  );
};

export default CardChecklists;
