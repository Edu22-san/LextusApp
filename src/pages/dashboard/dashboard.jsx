import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./assets/dashboard.css";
import TabsContenido from "../tabsContenido/tabsContenido";
import CardActualUsers from "../../Components/cardsDashboardAdmin/cardActualUsers";
import CardDaysDocuments from "../../Components/cardsDashboardAdmin/cardDaysDocuments";
import CardBillingInformation from "../../Components/cardsDashboardAdmin/cardBillingInformation";

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("viewUsers");

  const handleTabClick = (key) => {
    setActiveTab(key);
    localStorage.setItem("activeTab", key); // Almacena la pestaña activa en localStorage
    console.log("Clicked tab with key:", key);
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
          <h1 className="text-white text-5xl lg:text-8xl md:text-8xl font-bold">
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

        <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center rounded-xl p-1 w-[90%] lg:w-[85%] md:w-[85%] mt-[3rem] gap-4">
          <CardActualUsers/>

          <CardDaysDocuments/>

          <CardBillingInformation/>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
