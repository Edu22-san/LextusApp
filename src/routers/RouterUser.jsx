import React from "react";
import Dashboard from "../pages/dashboard/dashboard";
import  DashboardCustomer from "../pages/dashboardCustomer/dashboardCustomer";
import TabsContenido from "../pages/tabsContenido/tabsContenido";
import Menu from "../Components/menu/menu";
import Footer from "../Components/footer/footer";
import FormNewCustomer from "../pages/formNewCustomer/formNewCustomer";
import { Routes, Route, Navigate } from "react-router-dom";

const RouterUser = () => {
  return (
    <>
    <Menu/>
      <Routes>
        <Route path="/dashboard" index element={<Dashboard/>} />
        <Route path="/dashboard-customer" index element={< DashboardCustomer/>} />
        
         <Route
          path="/tabscontenido/:key" // Utilizamos un parámetro de ruta ':key' para la clave
          element={<TabsContenido />}
        />
        <Route path="/tabscontenido/viewUsers/newcustomer" index element={<FormNewCustomer/>} />
        <Route path="/menu" index element={<Menu />} />
      </Routes>
    <Footer/> 
    </>
  );
};
export default RouterUser;
