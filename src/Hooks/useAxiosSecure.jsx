import axios from "axios";
import React from "react";
import UseAuth from "./UseAuth";

const axiosInstance = axios.create({
  baseURL: "https://career-code-server-lilac.vercel.app",
});

const useAxiosSecure = () => {
  const { user, logOut } = UseAuth();

  axiosInstance.interceptors.request.use((config) => {
    config.headers.authorization = `Bearer ${user.accessToken}`;
    return config;
  });

  // response Interceptors
  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.status === 500 || error.status === 403) {
        logOut().then(() => console.log("Status Code error 500"));
      }
      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

export default useAxiosSecure;
