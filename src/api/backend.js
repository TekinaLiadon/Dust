import axios from "axios";
import store from "@/store";

const backend = axios.create({
  baseURL: `http://192.168.1.222:3000`,
  timeout: 20000,
  headers: {
    Accept: "application/json",
  },
});

backend.interceptors.request.use(
  (config) => {
    config.headers.common = {
      ...config.headers.common,
      Authorization: `Bearer ${store.state.userToken}`,
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

backend.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) store.commit("killUser");
    throw error;
  }
);

export default backend;
