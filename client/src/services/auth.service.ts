import api from "../api/axios";

export const loginUser = (data: any) => {
  return api.post("/auth/login", data);
};

export const registerUser = (data: any) => {
  return api.post("/auth/register", data);
};