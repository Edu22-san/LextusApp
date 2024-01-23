import React, { useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useMediaQuery, useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Toast } from "primereact/toast";
import { FileUpload } from "primereact/fileupload";
import "./cardsDashboardAdmin.css";

const CardBillingInformation = () => {
  const [openBillingInformation, setOpenBillingInformation] = useState(false);
  const handleOpenBillingInformation = () => setOpenBillingInformation(true);
  const handleCloseBillingInformation = () => setOpenBillingInformation(false);

  const toast = useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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
      <div className="p-5 color-txt-rv text-base font-medium leading-5 bg-white flex flex-col justify-start items-center boxshadow-rv2 w-full h-auto lg:h-[33vh] md:h-[33vh]">
        <div className="w-full flex flex-row items-center justify-between pb-1 border-b-2 border-solid border-gray-300">
          <div className="flex flex-row items-center">
            <i class="fa-regular fa-folder-open text-gray-300 mr-1"></i>
            <p className="text-blue-500 text-lg md:text-xl lg:text-xl  font-bold ">
              Billing information
            </p>
          </div>
          <Button onClick={handleOpenBillingInformation} style={styledButton}>
            Details
          </Button>
          <Modal
            open={openBillingInformation}
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
                Billing information
                </p>
                <i
                  onClick={handleCloseBillingInformation}
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
                  
                </div>
              </Typography>
            </Box>
          </Modal>
        </div>
        <div className="w-full flex flex-col items-center py-3">
          <p className="text-gray-500 text-lg md:text-xl lg:text-xl">
            Monthly Billing
          </p>
          <h2 className="text-5xl md:text-5xl lg:text-4xl text-purple-primary font-bold">
            $6,658.00
          </h2>
          <p className="text-gray-500 text-lg md:text-xl lg:text-xl">
            Actual due
          </p>
          <h2 className="text-5xl md:text-5xl lg:text-4xl text-purple-primary font-bold">
            $10,895.00
          </h2>
        </div>
      </div>
    </>
  );
};

export default CardBillingInformation;
