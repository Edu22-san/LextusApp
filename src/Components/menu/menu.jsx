import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo-lextus.png";
import User from "../../assets/img/user.png";
import "./menuStyle.css"; 

const Menu = () => {
  return (
    <>
      <div className="container-menu">

        <div className="container-menu-items">
          <ul className="menu-items">
            <li className="menu-item">
              <div className="menu-item">
                <p className="txt-menu">About Us</p>
                <i class="fa-solid fa-chevron-down text-white ml-1"></i>
              </div>
              <ul className="submenu-2">
                <li className="submenu-item">
                  <Link to="">History</Link>
                </li>
                <li className="submenu-item">
                  <Link to="">History2</Link>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <div className="menu-item">
                <p className="txt-menu">Services</p>
                <i class="fa-solid fa-chevron-down text-white ml-1"></i>
              </div>
              <ul className="submenu">
                <li className="submenu-item">
                  <Link to="">Service 1</Link>
                </li>
                <li className="submenu-item">
                  <Link to="">Service 2</Link>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <Link to="">
                <p className="txt-menu">Blog</p>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="">
                <p className="txt-menu">Contact Us</p>
              </Link>
            </li>
          </ul>
        </div>
        <div className="container-logo">
          <Link to="/user/dashboard">
            <img src={Logo}  alt="" className="logo-menu" />
          </Link>
        </div>

        <div className="container-user">
           <select id="mySelect">
               <option value="option1">EN</option>
               <option value="option2">ES</option>
           </select>
           <p className="txt-menu rv">Welcome User</p>
           <li className="menu-item user">
              <div className="menu-item">
                <img src={User}  alt="" className="logo-user" />
                <i class="fa-solid fa-chevron-down text-white ml-1"></i>
              </div>
              <ul className="submenu-user">
                <li className="submenu-item ">
                  <Link to="" className="text-end">Help Me</Link>
                </li>
                <li className="submenu-item">
                  <Link to="/">Logout</Link>
                </li>
              </ul>
            </li>
        </div>
      </div>

    </>
  );
};

export default Menu;
