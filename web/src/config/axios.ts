import { AxiosRequestConfig } from "axios";

// Full config:  https://github.com/axios/axios#request-config

export const AxiosConfig: AxiosRequestConfig = {
  baseURL: process.env.NODE_ENV === "production" ? "/" : "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
  },
};
