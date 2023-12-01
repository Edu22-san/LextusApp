import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./usersTable.css";

const Userstable = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div className="w-full flex flex-row items-end justify-between mb-[2.5rem]">
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
        <div className="flex flex-row items-baseline">
          <p className="text-white text-sm font-thin mr-12"> All customers</p>
          <p className="text-white text-sm font-thin mr-12"> Last 30 days</p>
          <p className="text-white text-sm font-thin mr-12">Last 6 months</p>
          <select
            className="bg-transparent text-white outline-none"
            name=""
            id=""
          >
            <option value="">Last year</option>
            <option value="">Option 1</option>
            <option value="">Option 2</option>
          </select>
        </div>
        <div className="flex items-center">
        <div className="relative w-1/2  mt-2">
          <input type="search" className="h-12 w-[20rem] pl-4 rounded-full focus:outline-none boxshadow" placeholder="Search..."/>
             <span className="container-icon absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer ">
                <i className="fa-solid fa-magnifying-glass icon-style" style={{ color: "#b2b2b2", cursor: "pointer" }}></i>
            </span>
        </div>
        </div>
      </div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-white">
          <thead className=" text-white uppercase table-enc">
            <tr>
              <th scope="col" className="px-6 py-4 rounded-l-3xl">
                Name
              </th>
              <th scope="col" className="px-6 py-4">
                Matter
              </th>
              <th scope="col" className="px-6 py-4">
                last Update
              </th>
              <th scope="col" className="px-6 py-4">
                % Dac Provided
              </th>
              <th scope="col" className="px-6 py-4">
                CheckList
              </th>
              <th scope="col" className="px-6 py-4 rounded-r-3xl">
                Options
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="fila-espacio">
              <td colspan="100"></td>
            </tr>
            <tr className="bg-white text-blue-txt ">
              <th
                scope="row"
                className="px-6 py-3 font-medium whitespace-nowrap  rounded-l-3xl"
              >
                Name
              </th>
              <td className="px-6 py-3">Visa U</td>
              <td className="px-6 py-3">01/01/23</td>
              <td className="px-6 py-3">10%</td>
              <td className="px-6 py-3">View CheckList</td>
              <td className="px-6 py-3 rounded-r-3xl ">
                <div className="container-options">
                  <div className="dropdown mr-4">
                    <i
                      className="fa-solid fa-chevron-down icon-verde cursor-pointer"
                      onClick={toggleDropdown}
                    ></i>
                    {isDropdownOpen && (
                      <div className="dropdown-content">
                        <a href="#">Opción 1</a>
                        <a href="#">Opción 2</a>
                      </div>
                    )}
                  </div>
                  <i class="fa-solid fa-magnifying-glass icon-buscar cursor-pointer"></i>
                </div>
              </td>
            </tr>
            <tr className="fila-espacio">
              <td colspan="100"></td>
            </tr>
            <tr className="bg-white text-blue-txt ">
              <th
                scope="row"
                className="px-6 py-3 font-medium whitespace-nowrap  rounded-l-3xl"
              >
                Name
              </th>
              <td className="px-6 py-3">Visa U</td>
              <td className="px-6 py-3">01/01/23</td>
              <td className="px-6 py-3">10%</td>
              <td className="px-6 py-3">View CheckList</td>
              <td className="px-6 py-3 rounded-r-3xl">
                <i class="fa-solid fa-chevron-down icon-verde mr-4"></i>
                <i class="fa-solid fa-magnifying-glass icon-buscar"></i>
              </td>
            </tr>
            <tr className="fila-espacio">
              <td colspan="100"></td>
            </tr>
            <tr className="bg-white text-blue-txt ">
              <th
                scope="row"
                className="px-6 py-3 font-medium whitespace-nowrap  rounded-l-3xl"
              >
                Name
              </th>
              <td className="px-6 py-3">Visa U</td>
              <td className="px-6 py-3">01/01/23</td>
              <td className="px-6 py-3">10%</td>
              <td className="px-6 py-3">View CheckList</td>
              <td className="px-6 py-3 rounded-r-3xl">
                <i class="fa-solid fa-chevron-down icon-verde mr-4"></i>
                <i class="fa-solid fa-magnifying-glass icon-buscar"></i>
              </td>
            </tr>
            <tr className="fila-espacio">
              <td colspan="100"></td>
            </tr>
            <tr className="bg-white text-blue-txt ">
              <th
                scope="row"
                className="px-6 py-3 font-medium whitespace-nowrap  rounded-l-3xl"
              >
                Name
              </th>
              <td className="px-6 py-3">Visa U</td>
              <td className="px-6 py-3">01/01/23</td>
              <td className="px-6 py-3">10%</td>
              <td className="px-6 py-3">View CheckList</td>
              <td className="px-6 py-3 rounded-r-3xl">
                <i class="fa-solid fa-chevron-down icon-verde mr-4"></i>
                <i class="fa-solid fa-magnifying-glass icon-buscar"></i>
              </td>
            </tr>
            <tr className="fila-espacio">
              <td colspan="100"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Userstable;
