import api from "../api/axios";

export const sendMessage = (message: string) => {
  return api.post("/chat", { message });
};

export const getChatHistory = () => {
  return api.get("/chat/history");
};