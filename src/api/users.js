import axios from "../services/api.js";

export const createUser = async (userData) => {
  const response = await axios.post("/users/request-verification", {
    ...userData,
  });
  return response.data;
};

export const createGuardian = async (guardianData) => {
  const response = await axios.post("/users/request-verification", {
    ...guardianData,
    role: "guardian",
  });
  return response.data;
};
