import { createContext } from "react";

export const setSession = (data) => {
  if (data) {
    localStorage.setItem("SAG_USER", JSON.stringify(data));
  } else {
    localStorage.removeItem("SAG_USER");
  }
};

export const getSession = () => {
  let userData =
    localStorage.getItem("SAG_USER") &&
    localStorage.getItem("SAG_USER") != "undefined"
      ? JSON.parse(localStorage.getItem("SAG_USER"))
      : null;
  if (userData && userData.token) {
    return userData;
  } else {
    return null;
  }
};

export const AuthContext = createContext(getSession);
