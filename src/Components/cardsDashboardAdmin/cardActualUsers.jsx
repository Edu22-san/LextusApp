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

const CardActualUsers = ({countUsersData,usersByMattersData,usersByMatters,}) => {
  const [openActualUsers, setOpenActualUsers] = useState(false);
  const handleOpenActualUsers = () => setOpenActualUsers(true);
  const handleCloseActualUsers = () => setOpenActualUsers(false);

  console.log("userBymatters", usersByMattersData);
  //console.log("si vino", countUsersData);

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
            <i className="fa-solid fa-users text-gray-300 mr-1"></i>
            <div className="text-blue-500 text-lg md:text-xl lg:text-xl  font-bold ">
              Actual users
            </div>
          </div>
          <Button onClick={() => {
              handleOpenActualUsers();
              usersByMatters();
            }}
            style={styledButton}>
            Details
          </Button>
          <Modal open={openActualUsers} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
            <Box sx={styleModal}>
              <Typography id="modal-modal-title" variant="h6" component="h2" className="border-b-2 border-solid border-gray-300 flex flex-row items-center justify-between">
                <div className="text-blue-500 text-lg md:text-xl lg:text-xl font-bold ">
                  Actual Users By Matter
                </div>
                <i onClick={handleCloseActualUsers}className="fa-solid fa-circle-xmark cursor-pointer text-2xl text-bg-rojo"></i>
              </Typography>
              <Box id="modal-modal-description" sx={{ mt: 2 }}>
                <div style={{
                     maxHeight: "60vh",
                     overflowY: "auto",
                     marginBottom: "12px",
                  }}>
                  <ul>
                    {usersByMattersData.data && usersByMattersData.data.length > 0 ? (
                      usersByMattersData.data.map((matter, index) => (
                        <li key={index} className="mb-[12px] ml-[17px] list-disc text-[15px] md:text-[18px] lg:text-[18px] flex flex-row justify-between items-center">
                          <span>{matter.matter_name}</span>
                          <span className="text-blue-txt text-[25px] font-bold">
                            {matter.total_customers}{" "}
                            <span className="text-gray-500 text-[12px] font-[200]">
                              users
                            </span>
                          </span>
                        </li>
                      ))
                    ) : (
                      <li>No data available</li>
                    )}
                  </ul>
                </div>
              </Box>
            </Box>
          </Modal>
        </div>
        <div className="w-full flex flex-col items-center py-4">
          <h2 className="text-5xl md:text-6xl lg:text-8xl text-purple-primary font-bold">
            {countUsersData.users}
          </h2>
          <p className="text-gray-500 text-lg md:text-xl lg:text-xl">Users</p>
        </div>
      </div>
    </>
  );
};

export default CardActualUsers;
