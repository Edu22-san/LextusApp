import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./assets/dashboard.css";
import TabsContenido from "../tabsContenido/tabsContenido";
import CardActualUsers from "../../Components/cardsDashboardAdmin/cardActualUsers";
import CardDaysDocuments from "../../Components/cardsDashboardAdmin/cardDaysDocuments";
import CardBillingInformation from "../../Components/cardsDashboardAdmin/cardBillingInformation";
import Api from "../../services/api";
const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("viewUsers");
  const [countUsersData, setCountUsersData] = useState([]);
  const [usersByMattersData, setUsersByMattersData] = useState([]);
  const [countDocumentsData, setCountDocumentsData] = useState([]);
  const [countDocumentsByMattersData, setCountDocumentsByMattersData] =
    useState([]);

  const countDocumentsByMatter = () => {
    Api.get("count-documents-by-matter")
      .then((response) => {
        if (response.data) {
          console.log("Data total documents:", response.data);
          setCountDocumentsByMattersData(response.data);
        }
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
      });
  };

  const countDocuments = () => {
    Api.get("count-documents-users")
      .then((response) => {
        if (response.data) {
          //console.log("Data total documents:", response.data);
          setCountDocumentsData(response.data);
        }
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
      });
  };

  const usersByMatters = () => {
    Api.get("count-customers-by-matter")
      .then((response) => {
        if (response.data) {
          console.log("Datos usuarios por matters:", response.data);
          setUsersByMattersData(response.data);
        }
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
      });
  };

  const countUsers_get = () => {
    Api.get("count-customers-users")
      .then((response) => {
        if (response.data) {
          console.log("Datos:", response.data);
          setCountUsersData(response.data);
        }
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
      });
  };

  useEffect(() => {
    countUsers_get();
    countDocuments();
  }, []);

  const handleTabClick = (key) => {
    setActiveTab(key);
    localStorage.setItem("activeTab", key); // Almacena la pestaña activa en localStorage
    navigate(`/user/tabscontenido/${key}`);
  };

  const linksData = [
    { label: "View Users", key: "viewUsers" },
    { label: "View Document Catalogs", key: "viewDocumentCatalogs" },
    //{ label: "View Payment Plans", key: "viewPaymentPlans" },
  ];

  return (
    <>
      <div className="min-w-full flex flex-col items-center justify-center min-h-[90vh]">
        <div className="md:w-[40%] lg:w-[40%] w-[90%] flex flex-col items-center justify-center mt-[4rem]">
          <h1 className="text-white text-5xl lg:text-8xl md:text-8xl font-bold text-center">
            Lorem ipsum
          </h1>
          <p className="text-center text-white text-xl md:text-2xl lg:text-2xl font-light pt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 text-center items-center justify-center rounded-xl p-1 w-[90%] lg:w-[70%] md:w-[70%] mt-[2rem] gap-4">
          {linksData.map((link) => (
            <Link
              key={link.key}
              to={`/user/tabscontenido/${link.key}`} // Actualizamos la URL para incluir la clave como parámetro
              className={`py-2.5 text-white text-[15px] md:text-[20px] lg:text-[20px] font-medium leading-5 bg-transparent flex flex-col justify-center items-center boxshadow-rv w-full ${
                activeTab === link.key ? "active-tab" : ""
              }`}
              onClick={() => handleTabClick(link.key)}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="max-w-[1600px] w-[85%] grid-card-dashboard-customer mt-[3rem]">
          <CardActualUsers
            countUsersData={countUsersData}
            usersByMattersData={usersByMattersData}
            usersByMatters={usersByMatters}
          />

          <CardDaysDocuments
            countDocumentsData={countDocumentsData}
            countDocumentsByMattersData={countDocumentsByMattersData}
            countDocumentsByMatter={countDocumentsByMatter}
          />

          <CardBillingInformation />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
