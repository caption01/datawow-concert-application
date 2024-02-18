import axios from "axios";

const customAxios = axios.create({
  baseURL: "http://localhost",
  timeout: 5000,
});

// request interceptors
customAxios.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// response interceptors
customAxios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

const api = customAxios;

export { api };
