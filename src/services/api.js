import axios from "axios";
import { getSession } from "./AuthContext.js";

// const baseUrl = import.meta.env.VITE_API_BASE_URL;

//const urlBase = baseUrl;
const urlBase = "https://demo.web-informatica.info/lextusservices/api";


const user = getSession();
//const urlBase = "http://localhost:8080/api"

/**
 * @param {string}  url url a la cual consultar
 * esta funcion detecta si es una nueva url base (comienza con http:// o https://).
 * en caso de ser asi, retorna la url. en caso contrario, se asume que es un fragmento
 * de path por lo que se concatena con la constante urlBase
 **/
const readUrl = (url = "") => url.startsWith("http://") || url.startsWith("https://") ? url : `${urlBase}${url}`;

const get = (url = "", params = {}, headers = {}) => {
  if (getSession()) {
    headers.Authorization = "Bearer " + getSession().token;
  }
  return axios.get(readUrl(url), {
    params: { ...params },
    headers: {
      ...headers,
    },
  });
};

const post = (url = "", body = {}, headers = {}) => {
  // Create a new FormData object
  const formData = new FormData();

  // Append all properties from the body object to the formData
  Object.keys(body).forEach(key => {
    formData.append(key, body[key]);
  });

  // Set the Authorization header if a session exists
  if (getSession()) {
    headers.Authorization = "Bearer " + getSession().token;
  }

  // Perform the POST request using axios
  return axios.post(readUrl(url), formData, {
    headers: {
      Accept: "application/json",
      "Content-Type": "multipart/form-data", // Use multipart/form-data
      // ...headers,
    },
  });
};


const postUpload = (url = "", body = {}, headers = {}) => {
  if (getSession()) {
    headers.Authorization = "Bearer " + getSession().token;
  }
  return axios.post(readUrl(url), body, {
    headers: {
      Accept: "application/json",
      "Content-Type": "multipart/form-data",

      ...headers,
    },
  });
};

const put = (url = "", body = {}, headers = {}) =>
  axios.put(readUrl(url), body, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "access-control-allow-credentials": "true",
      "access-control-allow-methods": "*",

      ...headers,
    },
  });

const del = (url = "", headers = {}) =>
  axios.delete(readUrl(url), {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "access-control-allow-credentials": "true",
      "access-control-allow-methods": "*",

      ...headers,
    },
  });



const Api = {
  get,
  post,
  put,
  postUpload,
  delete: del,
};

export default Api;
