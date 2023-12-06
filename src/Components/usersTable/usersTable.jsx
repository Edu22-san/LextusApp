import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Link } from "react-router-dom";
import "./usersTable.css";

const Userstable = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState([]);

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

    setFilteredData(filteredItems);
  };

  const emptyRow = {
    name: null,
    matter: null,
    lastUpdate: null,
    dacProvided: null,
    checklist: null,
    Options: null,
  };

  return (
    <>
      <div className="w-full flex flex-row items-end justify-between mb-[2.5rem] lg:mb-[2.5rem] md:mb-[2.5rem]">
        <div className="colum1">
          <h1 className="text-5xl font-semibold text-white">Customer</h1>
          <p className="text-white text-sm font-thin">
            565 registered customers
          </p>
        </div>
        <button className="border-2 border-solid border-white rounded-2xl text-white pt-2 pb-2 pl-15 pr-15 w-[9rem]">
          Add new
        </button>
      </div>
      <div className="w-full mb-[2rem]">
        <div className="flex flex-col sm:flex-row items-center md:items-baseline">
          <p className="text-white text-sm font-thin lg:mr-12 md:mr-12 mt-1"> All customers</p>
          <p className="text-white text-sm font-thin lg:mr-12 md:mr-12 mt-1"> Last 30 days</p>
          <p className="text-white text-sm font-thin lg:mr-12 md:mr-12 mt-1">Last 6 months</p>
          <select
            className="bg-transparent text-white outline-none mt-1"
            name=""
            id=""
          >
            <option value="">Last year</option>
            <option value="">Option 1</option>
            <option value="">Option 2</option>
          </select>
        </div>
        <div className="flex items-center">
          <div className="relative w-full lg:w-1/2 md:w-1/2  mt-2">
            <input
              type="search"
              className="h-12 w-full lg:w-[20rem] md:w-[20rem] pl-4 rounded-full focus:outline-none boxshadow"
              placeholder="Search..."
              value={searchText}
              onChange={onSearch}
            />
            <span className="container-icon absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer left-[325px] lg:left-[283px] md:left-[283px]">
              <i
                className="fa-solid fa-magnifying-glass icon-style"
                style={{ color: "#b2b2b2", cursor: "pointer" }}
              ></i>
            </span>
          </div>
        </div>
      </div>


      <div className="relative overflow-x-auto">
      <DataTable
          value={searchText ? filteredData : data}
          className="w-full text-sm text-left rtl:text-right text-white rv-table"
          rowClassName="row-spacing"
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
          <Column
            field="matter"
            header="Matter"
            className="row-spacing" 
          />
          <Column field="lastUpdate" header="Last Update" className="row-spacing" />
          <Column field="dacProvided" header="% Dac Provided" className="row-spacing" />
          <Column field="checklist" header="CheckList" className="row-spacing" />
          <Column
            field="Options"
            header="Options"
            body={(rowData) => (
              <div className="container-options">
                <div className="dropdown mr-4">
                  <i className="fa-solid fa-chevron-down icon-verde cursor-pointer"></i>
                </div>
                <i className="fa-solid fa-magnifying-glass icon-buscar cursor-pointer"></i>
              </div>
            )}
            className="b-rv2 row-spacing" // Agrega la clase row-spacing a esta columna
            style={{
              borderTopRightRadius: "22px",
              borderBottomRightRadius: "22px",
              marginBottom: "10px",
            }}
          />
        </DataTable>

      </div>
    </>
  );
};

export default Userstable;
