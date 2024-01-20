import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./cardsDashboardCustomers.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {useMediaQuery, useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";




const CardsDColumOne = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const styleModal = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
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
    paddingTop: "3px",
    paddingBottom: "3px",
    paddingLeft: "13px",
    paddingRight: "13px",
    fontSize: "15px",
    textTransform: "none",
    fontWeight: "400",
    fontFamily: "Manrope, sans-serif",
  };

  return (
    <>
      <div className=" w-full  flex flex-col justify-between h-auto md:h-[70vh] lg:h-[70vh]">
        <div className="p-5 color-txt-rv text-base font-medium leading-5 bg-white flex flex-col justify-start items-center boxshadow-rv2 w-full h-auto lg:h-[33vh] md:h-[33vh]">
          <div className="w-full flex flex-row items-center justify-between pb-1 border-b-2 border-solid border-gray-300">
            <div className="flex flex-row items-center">
              <i class="fa-regular fa-folder-open text-gray-300 mr-1"></i>
              <p className="text-blue-500 text-lg md:text-xl lg:text-xl  font-bold ">
                Pending Documents
              </p>
            </div>

            <Button onClick={handleOpen} style={styledButton} >Details</Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              
            >
              <Box sx={styleModal} >
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Text in a modal
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Duis mollis, est non commodo luctus, nisi erat porttitor
                  ligula.
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
              <i class="fa-solid fa-file-signature text-gray-300 mr-1"></i>
              <p className="text-blue-500 text-lg md:text-xl lg:text-xl  font-bold ">
                Contract information
              </p>
            </div>
            <Button onClick={handleOpen} style={styledButton} >Details</Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              
            >
              <Box sx={styleModal} >
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Text in a modal
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Duis mollis, est non commodo luctus, nisi erat porttitor
                  ligula.
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
