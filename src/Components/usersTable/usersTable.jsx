import React, { Fragment, useState, useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Link } from "react-router-dom";
import "./usersTable.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useMediaQuery, useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Toast } from "primereact/toast";
import ChatCustomer from "../../Components/chatCustomer/chatCustomer";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Menu, Transition } from "@headlessui/react";
const Userstable = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const [openChecklist, setOpenChecklist] = useState(false);
  const handleOpenChecklist = () => setOpenChecklist(true);
  const handleCloseChecklist = () => setOpenChecklist(false);
  const toast = useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 3; // Número de filas por página
  const [searchResults, setSearchResults] = useState([]);

  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const data = [
    {
      name: "Name 1",
      matter: "Visa U",
      lastUpdate: "01/01/23",
      dacProvided: "10%",
      checklist: "View CheckList",
    },
    {
      name: "Name 2",
      matter: "Visa U",
      lastUpdate: "01/01/23",
      dacProvided: "10%",
      checklist: "View CheckList",
    },
    {
      name: "Name 3",
      matter: "Visa U",
      lastUpdate: "01/01/23",
      dacProvided: "10%",
      checklist: "View CheckList",
    },
    {
      name: "Name 4",
      matter: "Visa U",
      lastUpdate: "01/01/23",
      dacProvided: "10%",
      checklist: "View CheckList",
    },
  ];

  const onSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchText(value);

    const filteredItems = data.filter((item) => {
      return (
        item.name.toLowerCase().includes(value) ||
        item.matter.toLowerCase().includes(value) ||
        item.lastUpdate.toLowerCase().includes(value) ||
        item.dacProvided.toLowerCase().includes(value) ||
        item.checklist.toLowerCase().includes(value)
      );
    });

    setFilteredData(filteredItems.length > 0 ? filteredItems : data);
    setSearchResults(filteredItems);
  };

  const styleModalAdmin = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: isMobile ? "90%" : "50%",
    maxHeight: "70vh",

    border: "none",
    boxShadow: 24,
    borderRadius: "12px",
  };
  console.log("filteredData length:", filteredData.length);
  console.log("data length:", data.length);
  console.log(
    "Total pages:",
    Math.ceil((searchText ? filteredData.length : data.length) / rowsPerPage)
  );

  return (
    <>
      <div className="w-full flex flex-row items-end justify-between mb-[2.5rem] lg:mb-[2.5rem] md:mb-[2.5rem]">
        <div className="colum1">
          <h1 className="text-5xl font-semibold text-white">Customer</h1>
          <p className="text-white text-sm font-thin">
            565 registered customers
          </p>
        </div>
        <Link
          to="newcustomer"
          className="border-2 border-solid border-white rounded-2xl text-white text-center pt-2 pb-2 pl-15 pr-15 w-[7rem] md:w-[9rem] lg:w-[9rem]"
        >
          Add new
        </Link>
      </div>
      <div className="w-full mb-[2rem]">
        <div className="flex items-center flex-col md:flex-row lg:flex-row md:justify-start lg:justify-start ">
          <div className="relative w-full lg:w-1/2 md:w-1/2  mt-2">
            <input
              type="search"
              className="h-12 w-full lg:w-[20rem] md:w-[20rem] pl-4 rounded-full focus:outline-none boxshadow"
              placeholder="Search..."
              value={searchText}
              onChange={onSearch}
            />
            <span className="container-icon absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer lg:left-[283px] md:left-[283px]">
              <i
                className="fa-solid fa-magnifying-glass icon-style"
                style={{ color: "#b2b2b2", cursor: "pointer" }}
              ></i>
            </span>
          </div>
          <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="mt-[2rem] md:mt-0 lg:mt-0 inline-flex w-[10rem] justify-center rounded-2xl bg-white px-4 py-3 text-sm font-medium text-blue-txt hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
              Last Year
              <ChevronDownIcon
                className="-mr-1 ml-2 h-5 w-5 text-blue-bg"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute aaaa right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
              <div className="px-1 py-1 ">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-blue-bg text-white" : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      2023
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-blue-bg text-white" : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      2022
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
        </div>
      </div>

      <div className="relative overflow-x-auto">
        <Stack spacing={2}>
          <DataTable
            value={searchText ? filteredData : data}
            className="w-full text-sm text-left rtl:text-right text-white rv-table"
            rowClassName="row-spacing"
            paginator
            first={(currentPage - 1) * rowsPerPage}
            rows={rowsPerPage}
            totalRecords={searchText ? filteredData.length : data.length}
            onPage={(e) => setCurrentPage(e.page + 1)}
          >
            <Column
              field="name"
              header="Name"
              className="b-rv"
              style={{
                borderTopLeftRadius: "22px",
                borderBottomLeftRadius: "22px",
                marginBottom: "10px",
              }}
            />
            <Column field="matter" header="Matter" className="row-spacing" />
            <Column
              field="lastUpdate"
              header="Last Update"
              className="row-spacing"
            />
            <Column
              field="dacProvided"
              header="% Dac Provided"
              className="row-spacing"
            />
            <Column
              field="checklist"
              header="CheckList"
              className="row-spacing"
            />
            <Column
              field="Options"
              header="Options"
              body={(rowData) => (
                <div className="container-options">
                  <div className="dropdown mr-[5px]">
                    <i className="fa-solid fa-chevron-down icon-verde cursor-pointer"></i>
                  </div>
                  <div className="dropdown mr-[5px]">
                    <i
                      className="fa-regular fa-comments icon-azul cursor-pointer"
                      onClick={handleOpenChecklist}
                    ></i>
                    <span className="noticacion-red"></span>
                  </div>
                  <i className="fa-solid fa-magnifying-glass icon-buscar cursor-pointer"></i>
                </div>
              )}
              className="b-rv2 row-spacing"
              style={{
                borderTopRightRadius: "22px",
                borderBottomRightRadius: "22px",
                marginBottom: "10px",
              }}
            />
          </DataTable>
          <Pagination
            count={Math.ceil(
              (searchText ? filteredData.length : data.length) / rowsPerPage
            )}
            color="secondary"
            page={currentPage}
            onChange={handleChangePage}
          />
        </Stack>

        <Modal open={openChecklist} aria-labelledby="modal-modal-title">
          <Box sx={styleModalAdmin}>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <ChatCustomer />
              <i
                onClick={handleCloseChecklist}
                className="fa-solid fa-circle-xmark cursor-pointer text-2xl text-bg-rojo close-modal-admin-chat"
              ></i>
            </Typography>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default Userstable;
