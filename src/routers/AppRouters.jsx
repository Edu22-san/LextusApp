import React from "react";
import Login from "../pages/login/login";
import { Routes, Route, Navigate } from "react-router-dom";
import RouterUser from "./RouterUser";


const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" index element={<Login />} />
        <Route path="/user/*" index element={<RouterUser />} />
      </Routes>
    </>
  );
};
export default AppRouter;
