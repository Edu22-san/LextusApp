import React, { useState, useEffect, useRef  } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo-lextus.png";
import User from "./user.png";
import "./menuStyle.css";

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutUsDropdownOpen, setIsAboutUsDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        // Cerrar todos los dropdowns al hacer clic fuera de ellos
        setIsAboutUsDropdownOpen(false);
        setIsServicesDropdownOpen(false);
        setIsUserDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleAboutUsDropdownToggle = () => {
    setIsAboutUsDropdownOpen(!isAboutUsDropdownOpen);
    if (isServicesDropdownOpen) {
      setIsServicesDropdownOpen(false);
    }
    if (isUserDropdownOpen) {
      setIsUserDropdownOpen(false);
    }
  };
  
  const handleServicesDropdownToggle = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
    if (isAboutUsDropdownOpen) {
      setIsAboutUsDropdownOpen(false);
    }
    if (isUserDropdownOpen) {
      setIsUserDropdownOpen(false);
    }
  };
  
  const handleUserDropdownToggle = () => {
    setIsUserDropdownOpen(!isUserDropdownOpen);
    if (isAboutUsDropdownOpen) {
      setIsAboutUsDropdownOpen(false);
    }
    if (isServicesDropdownOpen) {
      setIsServicesDropdownOpen(false);
    }
  };
  
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
            <img src={Logo} alt="" className="logo-menu" />
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
              <img src={User} alt="" className="logo-user" />
              <i class="fa-solid fa-chevron-down text-white ml-1"></i>
            </div>
            <ul className="submenu-user">
              <li className="submenu-item ">
                <Link to="" className="text-end">
                  Help Me
                </Link>
              </li>
              <li className="submenu-item">
                <Link to="/">Logout</Link>
              </li>
            </ul>
          </li>
        </div>
      </div>

      <nav class="bg-white container-menu2">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a href="" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={Logo} class="h-8" alt="Flowbite Logo" />
          </a>
          <div class="flex items-center space-x-6 rtl:space-x-reverse">
            <li className="menu-item user">
              <p className="text-gray-900 dark:text-white text-16">ES</p>
              <div className="menu-item"  onClick={handleUserDropdownToggle }>
                <img src={User} alt="" className="logo-user" />
                <i className={`fa-solid fa-chevron-down text-white ml-1 ${isUserDropdownOpen && 'rotate-180'}`}></i>
              </div>
               {isUserDropdownOpen && (
                 <div className="absolute top-full left-0 bg-blue-bg shadow-lg mt-1 p-2 w-[7rem] rounded-[10px]">
                   <a href="#" className="text-gray-900 dark:text-white font-semibold hover:underline block">
                     Perfil
                   </a>
                   <Link to="/" className="text-gray-900 dark:text-white font-semibold hover:underline block">
                     Logout
                     </Link>
                 </div>
               )}
            </li>
          </div>
        </div>
      </nav>
      <nav class="bg-gray-50 dark:bg-gray-700 container-menu2-sub">
        <div class="max-w-screen-xl px-4 py-3 mx-auto">
          <div class="flex items-center justify-center">
            <ul class="w-full flex items-center justify-around rtl:space-x-reverse text-sm">
              <li className="relative">
                <a href="#"
                  className={`text-gray-800 font-bold text-decoration-none  ${isAboutUsDropdownOpen && 'text-blue-500'}`}
                  aria-current="page"
                  onClick={handleAboutUsDropdownToggle}
                >
                  About us
                  <i class="fa-solid fa-chevron-down text-gray-800 ml-1"></i>
                </a>
                
                {isAboutUsDropdownOpen && (
                  <div className="absolute top-full left-0 bg-white  shadow-lg mt-1 p-2 rounded-[10px]" style={{ width: '9rem' }}>
                    <a href="#" className="text-blue-txt font-semibold mb-[5px] hover:underline block">
                      Direccion
                    </a>
                    <a href="#" className="text-blue-txt font-semibold hover:underline block">
                      Contactos
                    </a>
                  </div>
                )}
              </li>
              <li className="relative">
                <a
                  href="#"
                  className={`text-gray-800 font-bold text-decoration-none ${isServicesDropdownOpen && 'text-blue-500'}`}
                  onClick={handleServicesDropdownToggle}
                >
                  Services
                  <i class="fa-solid fa-chevron-down text-gray-800 ml-1"></i>
                </a>
                {isServicesDropdownOpen && (
                  <div className="absolute top-full left-0 bg-white  shadow-lg mt-1 p-2 rounded-[10px]" style={{ width: '9rem' }}>
                    <a href="#" className="text-blue-txt font-semibold mb-[5px] hover:underline block">
                      Servicio 1
                    </a>
                    <a href="#" className="text-blue-txt font-semibold hover:underline block">
                      Servicio 2
                    </a>
                  </div>
                )}
              </li>
              <li>
                <a href="#" class="text-gray-800 font-bold hover:underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-800 font-bold hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Menu;
