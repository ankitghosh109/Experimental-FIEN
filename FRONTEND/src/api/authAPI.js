import axiosInstance from "./axiosInstance";

export const authAPI = {
  register: (data) => axiosInstance.post("/auth/register", data),
  login: (data) => axiosInstance.post("/auth/login", data),
//   logout: () => axiosInstance.post("/auth/logout"),
//   getProfile: () => axiosInstance.get("/auth/profile"),
};