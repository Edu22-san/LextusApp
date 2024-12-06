import React, { useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useMediaQuery, useTheme } from "@mui/material";
import Modal from "@mui/material/Modal";
import "./cardsDashboardCustomers.css";
import Api from "../../services/api";
import {
  Typography,
  Button,
  IconButton,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CardDocumentsPending = ({ checklist = [] }) => {
  const [openPendingDocuments, setOpenPendingDocuments] = useState({});
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [documents, setDocuments] = useState({});

  const uploadDocument = async (id_user_step, id_item, file) => {
    const formDatas = new FormData();
    formDatas.append("id_user_step", id_user_step);
    formDatas.append("id_item", id_item);
    formDatas.append("document", file);

    let datos = {
      id_user_step: id_user_step,
      id_item: id_item,
      file: file,
    };

    // console.log('ver datos a capturar:', datos);

    try {
      const response = await Api.postUpload("save-document", formDatas);

      if (response) {
        console.log("File uploaded successfully!");

        toast.success("File uploaded successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        setTimeout(() => {
          window.location.reload();
        }, 3000);
      } else {
        console.log("Upload failed");

        toast.error("Upload failed", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      console.log("Error occurred:", error);

      toast.error("Error occurred while uploading", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  // Funcion para cargar archivo
  const handleFileChange = async (event, item) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setDocuments((prev) => ({
        ...prev,
        [item.id_item]: file,
      }));

      await uploadDocument(item.id_user_step, item.id_item, file);
    }
  };

  // Funcion para manejar clic de archivo
  const handleFileInputClick = (itemId) => {
    const input = document.getElementById(`file-input-${itemId}`);
    if (input) input.click();
  };

  const styleModal = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: isMobile ? "90%" : "80%",
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
    fontSize: "13px",
    textTransform: "none",
    fontWeight: "400",
    fontFamily: "Manrope, sans-serif",
  };

  const handleOpenPendingDocuments = (stepIndex) => {
    setOpenPendingDocuments((prev) => ({ ...prev, [stepIndex]: true }));
  };

  const handleClosePendingDocuments = (stepIndex) => {
    setOpenPendingDocuments((prev) => ({ ...prev, [stepIndex]: false }));
  };

  return (
    <>
      <ToastContainer />
      <div className="p-5 color-txt-rv text-base font-medium leading-5 bg-white flex flex-col justify-start items-center boxshadow-rv2 overflow-y-auto card-dashboard-customer2">
        {checklist.map((matter, matterIndex) => (
          <div key={matterIndex} className="w-full flex flex-col">
            {matter.steps
              .filter(
                (step) =>
                  step.checklist_items && step.checklist_items.length > 0
              ) // Filter steps with checklist_items
              .map((step, stepIndex) => {
                // Filter checklist_items with status "Upload"
                const filteredItems = step.checklist_items.filter(
                  (item) => item.status === "Upload"
                );

                return (
                  <div key={stepIndex} className="w-full flex flex-col pb-4">
                    <div className="w-full flex flex-row items-center justify-between pb-1 border-b-2 border-solid border-gray-300">
                      <div className="flex flex-row items-center">
                        <i className="fa-regular fa-folder-open text-[#061056] mr-1"></i>
                        <p className="text-blue-500 text-lg md:text-[17px] lg:text-[17px]">
                          Pending Documents:{" "}
                          <span className="font-bold">{step.step_name}</span>
                        </p>
                      </div>
                      <Button
                        onClick={() => handleOpenPendingDocuments(stepIndex)}
                        style={styledButton}
                      >
                        Details
                      </Button>
                      <Modal
                        open={openPendingDocuments[stepIndex] || false}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                      >
                        <Box sx={styleModal}>
                          <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h2"
                            className="border-b-2 border-solid border-gray-300 flex flex-row items-center justify-between"
                          >
                            <p className="text-blue-500 text-lg md:text-[17px] lg:text-[17px] font-bold ">
                              Pending Documents {step.step_name}
                            </p>
                            <IconButton
                              onClick={() =>
                                handleClosePendingDocuments(stepIndex)
                              }
                              aria-label="close"
                            >
                              <CloseIcon />
                            </IconButton>
                          </Typography>
                          <div
                            style={{
                              marginTop: "1rem",
                              marginBottom: "1rem",
                              maxHeight: "60vh",
                              overflowY: "auto",
                            }}
                          >
                            {isMobile ? (
                              <ul className=" pl-0">
                                {filteredItems.length > 0 ? (
                                  filteredItems.map((item) => (
                                    <li key={item.id_item} className="mb-3">
                                      <div className="flex flex-col class-rv">
                                        <span className="text-[14px] text-blue-txt">
                                          <strong>Document:</strong>{" "}
                                          {item.item_name}
                                        </span>
                                        <span className="text-[14px] text-blue-txt">
                                          <strong>Expiration:</strong>{" "}
                                          {item.expiration_date}
                                        </span>
                                        <span className="text-[14px] text-blue-txt">
                                          <strong>Status:</strong> {item.status}
                                        </span>
                                        <span className="text-[14px] text-blue-txt">
                                          <strong>Notes:</strong> {item.notes}
                                        </span>
                                        <Button
                                          variant="outlined"
                                          startIcon={<SaveAltIcon />}
                                          onClick={() =>
                                            handleFileInputClick(item.id_item)
                                          }
                                          style={{ marginTop: "0.5rem" }}
                                        >
                                          Upload
                                        </Button>
                                        <input
                                          id={`file-input-${item.id_item}`}
                                          type="file"
                                          onChange={(e) =>
                                            handleFileChange(e, item)
                                          }
                                          style={{ display: "none" }}
                                        />
                                      </div>
                                    </li>
                                  ))
                                ) : (
                                  <li className="text-gray-500">
                                    No items to upload.
                                  </li>
                                )}
                              </ul>
                            ) : (
                              <TableContainer component={Paper}>
                                <Table>
                                  <TableHead>
                                    <TableRow>
                                      <TableCell>Document Name</TableCell>
                                      <TableCell>Expiration Date</TableCell>
                                      <TableCell>Status</TableCell>
                                      <TableCell>Notes</TableCell>
                                      <TableCell>Action</TableCell>
                                    </TableRow>
                                  </TableHead>
                                  <TableBody>
                                    {filteredItems.length > 0 ? (
                                      filteredItems.map((item) => (
                                        <TableRow key={item.id_item}>
                                          <TableCell>
                                            {item.item_name}
                                          </TableCell>
                                          <TableCell>
                                            {item.expiration_date}
                                          </TableCell>
                                          <TableCell>{item.status}</TableCell>
                                          <TableCell>{item.notes}</TableCell>
                                          <TableCell>
                                            <Button
                                              onClick={() =>
                                                handleFileInputClick(
                                                  item.id_item
                                                )
                                              }
                                              variant="contained"
                                              startIcon={<SaveAltIcon />}
                                            >
                                              Upload
                                            </Button>
                                            <input
                                              id={`file-input-${item.id_item}`}
                                              type="file"
                                              onChange={(e) =>
                                                handleFileChange(e, item)
                                              }
                                              style={{ display: "none" }}
                                            />
                                          </TableCell>
                                        </TableRow>
                                      ))
                                    ) : (
                                      <TableRow>
                                        <TableCell colSpan={5} align="center">
                                          No items to upload.
                                        </TableCell>
                                      </TableRow>
                                    )}
                                  </TableBody>
                                </Table>
                              </TableContainer>
                            )}
                          </div>
                        </Box>
                      </Modal>
                    </div>
                    <div className="w-full flex flex-col items-center py-4 h-full flex items-center justify-center">
                      <h2 className="text-5xl md:text-6xl lg:text-8xl text-purple-primary font-bold">
                        {filteredItems.length}
                      </h2>
                      <p className="text-gray-500 text-[14px]">documents</p>
                    </div>
                  </div>
                );
              })}
          </div>
        ))}
      </div>
    </>
  );
};

export default CardDocumentsPending;
