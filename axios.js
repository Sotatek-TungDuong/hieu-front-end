import axios from "axios";
import { envApp } from "../env";
import { history } from "../Root";
import storageFC from "./storage";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/",
  timeout: 30000,
  // headers: {
  //   "X-Requested-With": "XMLHttpRequest",
  // },
});

axiosInstance.interceptors.request.use(
  (config) => {
    // eslint-disable-next-line no-param-reassign
    const { pathname } = window?.location;
    if (pathname?.includes("/cms")) {
      config.headers.Authorization = `Bearer ${storageFC.getCmsToken()}`;
    } else {
      config.headers.Authorization = `Bearer ${storageFC.getToken()}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // if (error.response.status !== 404) {
    //   history.push("/not-found");
    // }
    if (error?.response?.status === 401) {
      // logout();
    }
    return error.response;
  }
);

export default axiosInstance;

export const sendGet = (url = "", params) => axiosInstance.get(url, { params }).then((res) => res);
export const sendPost = (url = "", params, queryParams) => axiosInstance
  .post(url, params, { params: queryParams, timeout: queryParams?.timeout })
  .then((res) => res);
export const sendPut = (url = "", params) => axiosInstance.put(url, params).then((res) => res);
export const sendPatch = (url = "", params) => axiosInstance.patch(url, params).then((res) => res);
export const sendDelete = (url = "", params) => axiosInstance.delete(url, { data: params }).then((res) => res);
export const sendCustom = (params = {}) => axiosInstance(params).then((res) => res);
