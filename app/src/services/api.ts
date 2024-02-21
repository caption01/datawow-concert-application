import axios from "axios";
import { map } from "lodash";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3010";

console.log({ API_URL });

const customAxios = axios.create({
  baseURL: `${API_URL}/api`,
  timeout: 5000,
});

const getUsefulErrorMessage = (errorResponseData: any) => {
  const title = errorResponseData?.error || "Bad Request";
  const messages = map(errorResponseData?.message, (_message) => {
    const { property, message } = _message;
    return `error [${property}- ${message}]`;
  });

  const usefulMsg = [title, ...messages].join(",\n");

  return usefulMsg;
};

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
    const errorResponseData = error?.response?.data;
    const usefulError = getUsefulErrorMessage(errorResponseData);

    return Promise.reject({ ...error, errorMsg: usefulError });
  }
);

const api = customAxios;

export { api };
