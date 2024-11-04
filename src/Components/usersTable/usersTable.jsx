import React, { Fragment, useState, useRef, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Link } from "react-router-dom";
import "./usersTable.css";
import Box from "@mui/material/Box";
import { useMediaQuery, useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Toast } from "primereact/toast";
import ChatCustomer from "../../Components/chatCustomer/chatCustomer";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Api from "../../services/api";
const Userstable = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [allUsersData, setAllUsersData] = useState(null);
  const [openChecklist, setOpenChecklist] = useState(false);

  const handleOpenChecklist = () => setOpenChecklist(true);
  const handleCloseChecklist = () => setOpenChecklist(false);
  const toast = useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5; // Número de filas por página
  const [searchResults, setSearchResults] = useState([]);

  //paginador
  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };


  // Función para transformar los datos
  const transformData = (usersData) => {
    return usersData.flatMap((user) => {
      const matters = user.matters || [];
      const stepsPerMatter = user.steps_per_matter || [];
  
      return matters.map((matter) => {
        const countMap = stepsPerMatter.reduce((acc, stepMatter) => {
          if (stepMatter.matter_name === matter.matter_name) {
            acc[stepMatter.matter_name] = matter.submitted_or_accepted_count;
          }
          return acc;
        }, {});
  
        const steps = stepsPerMatter
          .filter((stepMatter) => stepMatter.matter_name === matter.matter_name)
          .map((stepMatter) => {
            const stepNames = stepMatter.steps
              .map((step) => step.step_name || "N/A")
              .join(", ");
            return `${stepMatter.matter_name}: ${stepNames}`;
          })
          .join(", ");
  
        return {
          id_customer: user.id_customer || "N/A",
          customer: user.customer || "N/A",
          matter_name: matter.matter_name || "N/A",
          steps: steps || "No steps available",
          submitted_or_accepted_count: `${matter.matter_name}: ${countMap[matter.matter_name] || 0}`,
        };
      });
    });
  };
  


  // Función para obtener todos los usuarios
  const getAllUsers = () => {
    Api.get("getall-customers")
      .then((response) => {
        //console.log("Raw response data:", response.data);
        if (response.data) {
          const transformedData = transformData(response.data);
         // console.log("Data customers after transformation:", transformedData);
          setAllUsersData(transformedData);
        }
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
      });
  };
  

  useEffect(() => {
    getAllUsers();
  }, []);

  // Función para realizar la búsqueda
  const onSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchText(value);

    // Filtrar sobre la data obtenida desde getAllUsers
    const filteredItems = allUsersData.filter((item) => {
      return (
        item.customer.toLowerCase().includes(value) ||
        item.matter_name.toLowerCase().includes(value) ||
        item.steps.toLowerCase().includes(value) ||
        item.submitted_or_accepted_count.toString().includes(value)
      );
    });

    setFilteredData(filteredItems); // Actualiza los datos filtrados
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

  return (
    <>
      <div className="w-full flex flex-row items-end justify-between mb-[2.5rem] lg:mb-[2.5rem] md:mb-[2.5rem]">
        <div className="colum1">
          <h1 className="text-5xl font-semibold text-white">Customer</h1>
          <p className="text-white text-sm font-thin">
            444 registered customers
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
        </div>
      </div>

      <div className="relative overflow-x-auto">
        <Stack spacing={2}>
          <DataTable
            value={searchText ? filteredData : allUsersData}
            className="w-full text-sm text-left rtl:text-right text-white rv-table"
            rowClassName="row-spacing"
            paginator
            first={(currentPage - 1) * rowsPerPage}
            rows={rowsPerPage}
            onPage={(e) => setCurrentPage(e.page + 1)}
          >
            <Column
              field="id_customer"
              header="Id"
              className="b-rv"
              style={{
                borderTopLeftRadius: "22px",
                borderBottomLeftRadius: "22px",
                marginBottom: "10px",
              }}
            />
            <Column
              field="customer"
              header="Name Customer"
              className="row-spacing"
            />
            <Column
              field="matter_name"
              header="Matters"
              className="row-spacing"
            />
            <Column
              field="steps"
              header="Checklist Per Matter"
              className="row-spacing"
            />
            <Column
              field="submitted_or_accepted_count"
              header="Documents Sent"
              className="row-spacing"
            />
            <Column
              field="Options"
              header="Options"
              body={(rowData) => (
                <div className="container-options">
                  <div className="dropdown mr-[5px]">
                  <Link to={`/user/tabscontenido/viewUsers/detail-customer/${rowData.id_customer}`}>
                      <i className="fa-regular fa-eye icon-verde cursor-pointer"></i>
                    </Link>
                  </div>
                  <div className="dropdown mr-[5px]">
                    <i
                      className="fa-regular fa-comments icon-azul cursor-pointer"
                      onClick={handleOpenChecklist}
                    ></i>
                  </div>
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
              (searchText ? filteredData.length : allUsersData?.length || 0) /
                rowsPerPage // Ajusta el número total de páginas basado en los datos correctos
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
