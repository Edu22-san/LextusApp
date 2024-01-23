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

const CardsDColumOne = () => {
  const [openPendingDocuments, setOpenPendingDocuments] = useState(false);
  const handleOpenPendingDocuments = () => setOpenPendingDocuments(true);
  const handleClosePendingDocuments = () => setOpenPendingDocuments(false);

  const [openContractInformation, setOpenContractInformation] = useState(false);
  const handleOpenContractInformation = () => setOpenContractInformation(true);
  const handleCloseContractInformation = () =>
    setOpenContractInformation(false);

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
  const documentsData = [
    { label: "Visa U", id: 1 },
    { label: "Visa U", id: 2 },
    { label: "Visa U", id: 3 },
    { label: "Visa U", id: 1 },
    { label: "Visa U", id: 2 },
    { label: "Visa U", id: 3 },
  ];

  return (
    <>
      <div className="w-full flex flex-col justify-between h-auto md:h-[70vh] lg:h-[70vh]">
        {/* Pending Documents Card */}
        <div className="p-5 color-txt-rv text-base font-medium leading-5 bg-white flex flex-col justify-start items-center boxshadow-rv2 w-full h-auto lg:h-[33vh] md:h-[33vh]">
          <div className="w-full flex flex-row items-center justify-between pb-1 border-b-2 border-solid border-gray-300">
            <div className="flex flex-row items-center">
              <i className="fa-regular fa-folder-open text-gray-300 mr-1"></i>
              <p className="text-blue-500 text-lg md:text-xl lg:text-xl  font-bold ">
                Pending Documents
              </p>
            </div>

            <Button onClick={handleOpenPendingDocuments} style={styledButton}>
              Details
            </Button>
            <Modal
              open={openPendingDocuments}
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
                    Pending Documents
                  </p>
                  <i
                    onClick={handleClosePendingDocuments}
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
                    <ul className="list-decimal">
                      {documentsData.map((document) => (
                        <li key={document.id} className="mb-[12px] ml-[17px]">
                          <div className="flex flex-row justify-between items-center">
                            <label className="text-[15px]  md:text-[18px] lg:text-[18px]">
                              {document.label}
                            </label>
                            <FileUpload
                              chooseLabel="Upload document"
                              mode="basic"
                              name={`demo_${document.id}`}
                              url="/api/upload"
                              accept=".pdf,.doc,.docx,.txt"
                              maxFileSize={1000000}
                              onUpload={onUpload}
                              className="bg-blue-bg rounded-lg p-[6px] text-[15px] text-white max-w-[60%]"
                            />
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-row justify-end border-t-2 border-solid border-gray-300 pt-[12px]">
                    <Link className="bg-bg-verde px-[30px] py-[10px] rounded-xl text-white text-[15px]  md:text-[18px] lg:text-[18px] box-shadow-btn-send">
                      SEND
                    </Link>
                  </div>
                </Typography>
              </Box>
            </Modal>
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
              <i className="fa-solid fa-file-signature text-gray-300 mr-1"></i>
              <p className="text-blue-500 text-lg md:text-xl lg:text-xl  font-bold ">
                Contract information
              </p>
            </div>
            <Button
              onClick={handleOpenContractInformation}
              style={styledButton}
            >
              Details
            </Button>
            <Modal
              open={openContractInformation}
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
                    Contract information
                  </p>
                  <i
                    onClick={handleCloseContractInformation}
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
                      <li className="mb-[12px] ml-[17px] list-disc">
                        <div className="flex flex-row justify-between items-center">
                          <label className="text-[15px] md:text-[18px] lg:text-[18px]">
                            Contract Amount
                          </label>
                          <p>$5000</p>
                        </div>
                      </li>
                      <li className="mb-[12px] ml-[17px] list-disc">
                        <div className="flex flex-row justify-between items-center">
                          <label className="text-[15px] md:text-[18px] lg:text-[18px]">
                            Actual due
                          </label>
                          <p>$5000</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Typography>
              </Box>
            </Modal>
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
    </>
  );
};

export default CardsDColumOne;
