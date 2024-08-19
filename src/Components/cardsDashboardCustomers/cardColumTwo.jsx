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

const CardColumTwo = () => {
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
      <div className="p-5 color-txt-rv text-base font-medium leading-5 bg-white flex flex-col items-center justify-start boxshadow-rv2 w-full h-auto lg:h-h-[50vh] md:h-[50vh]">
        <div className="w-full">
          <div className="w-full flex flex-row items-center justify-between pb-1 border-b-2 border-solid border-gray-300">
            <div className="flex flex-row items-center">
              <i className="fa-regular fa-folder-open text-gray-300 mr-1"></i>
              <p className="text-blue-500 text-lg md:text-xl lg:text-xl  font-bold ">
                Visa-u Checklist1
              </p>
            </div>
            {/*<Button onClick={handleOpenChecklistSibling} style={styledButton}>
              Details
            </Button>
            <Modal
              open={openChecklistSibling}
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
                  <p className="text-blue-500 text-lg md:text-xl lg:text-xl font-bold ">
                    Visa-u Checklist Sibling
                  </p>
                  <i
                    onClick={handleCloseChecklistSibling}
                    className="fa-solid fa-circle-xmark cursor-pointer text-2xl text-bg-rojo"
                  ></i>
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  <div
                    style={{
                      maxHeight: "60vh",
                      overflowY: "auto",
                      marginBottom: "12px",
                    }}
                  >
                    <ul>
                      <li className="mb-[12px] ml-[17px] list-disc text-[15px] md:text-[18px] lg:text-[18px]">
                        Document/days/accepted
                      </li>
                      <li className="mb-[12px] ml-[17px] list-disc text-[15px] md:text-[18px] lg:text-[18px]">
                        Document/days/accepted
                      </li>
                    </ul>
                  </div>
                </Typography>
              </Box>
            </Modal>*/}
          </div>
          <div className="w-full flex flex-col items-center py-3 px-3">
            <ul className="list-decimal">
              <li className="text-blue-txt text-lg md:text-[16px] lg:text-[16px]">
                Certificado de nacimiento/days/accepted
              </li>
              <li className="text-blue-txt text-lg md:text-[16px] lg:text-[16px]">
                Pasaporte/days/accepted
              </li>
              <li className="text-blue-txt text-lg md:text-[16px] lg:text-[16px]">
                Certificado de matrimonio/days/upload
              </li>
              <li className="text-blue-txt text-lg md:text-[16px] lg:text-[16px]">
                Certificado de nacimiento de hijos/days/upload
              </li>
              <li className="text-blue-txt text-lg md:text-[16px] lg:text-[16px]">
                Acta de divorcio/days/upload
              </li>
              <li className="text-blue-txt text-lg md:text-[16px] lg:text-[16px]">
                4 fotografías tamaño pasaporte/days/upload
              </li>
            </ul>
          </div>
        </div>
        {/*<div className="w-full">
          <div className="w-full flex flex-row items-center justify-between pb-1 border-b-2 border-solid border-gray-300">
            <div className="flex flex-row items-center">
              <i className="fa-regular fa-folder-open text-gray-300 mr-1"></i>
              <p className="text-blue-500 text-lg md:text-xl lg:text-xl  font-bold ">
                Visa-u Checklist Sibling
              </p>
            </div>
            <Button onClick={handleOpenChecklist} style={styledButton}>
              Details
            </Button>
            <Modal
              open={openChecklist}
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
                  <p className="text-blue-500 text-lg md:text-xl lg:text-xl font-bold ">
                  Visa-u Checklist Sibling
                  </p>
                  <i
                    onClick={handleCloseChecklist}
                    className="fa-solid fa-circle-xmark cursor-pointer text-2xl text-bg-rojo"
                  ></i>
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  <div
                    style={{
                      maxHeight: "60vh",
                      overflowY: "auto",
                      marginBottom: "12px",
                    }}
                  >
                    <ul>
                      <li className="mb-[12px] ml-[17px] list-disc text-[15px] md:text-[18px] lg:text-[18px]">
                        Document/days/accepted
                      </li>
                      <li className="mb-[12px] ml-[17px] list-disc text-[15px] md:text-[18px] lg:text-[18px]">
                        Document/days/accepted
                      </li>
                    </ul>
                  </div>
                </Typography>
              </Box>
            </Modal>
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
        </div>*/}
      </div>
    </>
  );
};

export default CardColumTwo;
