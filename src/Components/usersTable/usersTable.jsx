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
                className="px-6 py-4 font-medium whitespace-nowrap  rounded-l-3xl"
              >
                Name
              </th>
              <td className="px-6 py-4">Visa U</td>
              <td className="px-6 py-4">01/01/23</td>
              <td className="px-6 py-4">10%</td>
              <td className="px-6 py-4">View CheckList</td>
              <td className="px-6 py-4 rounded-r-3xl ">
                <div className="container-options">
                   <div className="dropdown mr-4">
                     <i className="fa-solid fa-chevron-down icon-verde cursor-pointer" onClick={toggleDropdown}></i>
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
                className="px-6 py-4 font-medium whitespace-nowrap  rounded-l-3xl"
              >
                Name
              </th>
              <td className="px-6 py-4">Visa U</td>
              <td className="px-6 py-4">01/01/23</td>
              <td className="px-6 py-4">10%</td>
              <td className="px-6 py-4">View CheckList</td>
              <td className="px-6 py-4 rounded-r-3xl">
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
                className="px-6 py-4 font-medium whitespace-nowrap  rounded-l-3xl"
              >
                Name
              </th>
              <td className="px-6 py-4">Visa U</td>
              <td className="px-6 py-4">01/01/23</td>
              <td className="px-6 py-4">10%</td>
              <td className="px-6 py-4">View CheckList</td>
              <td className="px-6 py-4 rounded-r-3xl">
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
                className="px-6 py-4 font-medium whitespace-nowrap  rounded-l-3xl"
              >
                Name
              </th>
              <td className="px-6 py-4">Visa U</td>
              <td className="px-6 py-4">01/01/23</td>
              <td className="px-6 py-4">10%</td>
              <td className="px-6 py-4">View CheckList</td>
              <td className="px-6 py-4 rounded-r-3xl">
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