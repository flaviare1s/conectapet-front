import axios from "../services/api.js";

export const createUser = async (userData) => {
  const response = await axios.post("/users", {
    ...userData,
    id: crypto.randomUUID(),
  });
  return response.data;
};

export const createGuardian = async (guardianData) => {
  const response = await axios.post("/users", {
    ...guardianData,
    id: crypto.randomUUID(),
    role: "guardian",
  });
  return response.data;
};
