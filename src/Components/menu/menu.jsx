import React, { useState, useEffect, useRef  } from "react";
import { Link, useNavigate }  from "react-router-dom";
import Logo from "./Logo-lextus.png";
import User from "./user.png";
import "./menuStyle.css";
import { getSession, logout } from "../../services/AuthContext"; 
const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutUsDropdownOpen, setIsAboutUsDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const menuRef = useRef(null);
  const [userName, setUserName] = useState("");
  const [userRole, setUserRole] = useState("");

  const navigate = useNavigate();

  useEffect(() => {

    const userSession = getSession(); // Obteniendo la sesion 
   // console.log(userSession);
    if (userSession) {
      setUserName(userSession.name_user); // Asigndo el estado al usuario
      setUserRole(userSession.id_rol);
    }
    
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

  const handleLogout = () => {
    logout(); 
    navigate("/"); 
  };
  
  return (
    <>
      <div className="container-menu">
        <div className="container-menu-items">

        </div>
        <div className="container-logo">
          <Link to={userRole === "1" ? "/user/dashboard" : "/user/dashboard-customer"}>
            <img src={Logo} alt="" className="logo-menu" />
          </Link>
        </div>

        <div className="container-user">
          <select id="mySelect">
            <option value="option1">EN</option>
            <option value="option2">ES</option>
          </select>
          <p className="txt-menu rv">Welcome {userName}</p>
          <li className="menu-item user">
            <div className="menu-item">
              <img src={User} alt="" className="logo-user" />
              <i className="fa-solid fa-chevron-down text-white ml-1"></i>
            </div>
            <ul className="submenu-user">
              <li className="submenu-item ">
                <Link to="" className="text-end">
                  Help Me
                </Link>
              </li>
              <li className="submenu-item">
              <button onClick={handleLogout} className="text-end">
                  Logout
                </button>
              </li>
            </ul>
          </li>
        </div>
      </div>

      <nav className="bg-white container-menu2">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <Link to={userRole === "1" ? "/user/dashboard" : "/user/dashboard-customer"} className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src={Logo} className="h-8" alt="Flowbite Logo" />
        </Link>
          
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
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
                
                     <button onClick={handleLogout} className="text-gray-900 dark:text-white font-semibold hover:underline block">
                  Logout
                </button>
                 </div>
               )}
            </li>
          </div>
        </div>
      </nav>
  
    </>
  );
};

export default Menu;
